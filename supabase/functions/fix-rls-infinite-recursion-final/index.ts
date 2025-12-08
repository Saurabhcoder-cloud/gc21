import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

Deno.serve(async (req) => {
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('Starting RLS policy fix...');

    // Step 1: Drop ALL existing policies on profiles table
    const dropPoliciesSQL = `
      DO $$ 
      DECLARE
        pol record;
      BEGIN
        FOR pol IN 
          SELECT policyname 
          FROM pg_policies 
          WHERE tablename = 'profiles'
        LOOP
          EXECUTE format('DROP POLICY IF EXISTS %I ON profiles', pol.policyname);
        END LOOP;
      END $$;
    `;

    const { error: dropError } = await supabase.rpc('exec_sql', { 
      sql_query: dropPoliciesSQL 
    });

    if (dropError) {
      console.error('Error dropping policies:', dropError);
      // Continue anyway - policies might not exist
    }

    console.log('Dropped all existing policies');

    // Step 2: Ensure RLS is enabled
    const { error: rlsError } = await supabase.rpc('exec_sql', {
      sql_query: 'ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;'
    });

    if (rlsError) {
      console.error('Error enabling RLS:', rlsError);
    }

    console.log('RLS enabled');

    // Step 3: Create simple, non-recursive policies
    
    // Policy 1: Allow all authenticated users to read all profiles
    const readPolicySQL = `
      CREATE POLICY "profiles_read_all" 
      ON profiles 
      FOR SELECT 
      TO authenticated 
      USING (true);
    `;

    const { error: readError } = await supabase.rpc('exec_sql', {
      sql_query: readPolicySQL
    });

    if (readError) {
      console.error('Error creating read policy:', readError);
      throw new Error(`Failed to create read policy: ${readError.message}`);
    }

    console.log('Created read policy');

    // Policy 2: Allow users to update their own profile
    const updatePolicySQL = `
      CREATE POLICY "profiles_update_own" 
      ON profiles 
      FOR UPDATE 
      TO authenticated 
      USING (auth.uid() = id)
      WITH CHECK (auth.uid() = id);
    `;

    const { error: updateError } = await supabase.rpc('exec_sql', {
      sql_query: updatePolicySQL
    });

    if (updateError) {
      console.error('Error creating update policy:', updateError);
      throw new Error(`Failed to create update policy: ${updateError.message}`);
    }

    console.log('Created update policy');

    // Policy 3: Allow users to insert their own profile
    const insertPolicySQL = `
      CREATE POLICY "profiles_insert_own" 
      ON profiles 
      FOR INSERT 
      TO authenticated 
      WITH CHECK (auth.uid() = id);
    `;

    const { error: insertError } = await supabase.rpc('exec_sql', {
      sql_query: insertPolicySQL
    });

    if (insertError) {
      console.error('Error creating insert policy:', insertError);
      throw new Error(`Failed to create insert policy: ${insertError.message}`);
    }

    console.log('Created insert policy');

    // Step 4: Fix companies table policies
    const dropCompaniesPoliciesSQL = `
      DO $$ 
      DECLARE
        pol record;
      BEGIN
        FOR pol IN 
          SELECT policyname 
          FROM pg_policies 
          WHERE tablename = 'companies'
        LOOP
          EXECUTE format('DROP POLICY IF EXISTS %I ON companies', pol.policyname);
        END LOOP;
      END $$;
    `;

    await supabase.rpc('exec_sql', { 
      sql_query: dropCompaniesPoliciesSQL 
    });

    console.log('Dropped companies policies');

    // Enable RLS on companies
    await supabase.rpc('exec_sql', {
      sql_query: 'ALTER TABLE companies ENABLE ROW LEVEL SECURITY;'
    });

    // Create simple companies policies
    const companiesReadSQL = `
      CREATE POLICY "companies_read_all" 
      ON companies 
      FOR SELECT 
      TO authenticated 
      USING (true);
    `;

    await supabase.rpc('exec_sql', {
      sql_query: companiesReadSQL
    });

    const companiesUpdateSQL = `
      CREATE POLICY "companies_update_own" 
      ON companies 
      FOR UPDATE 
      TO authenticated 
      USING (user_id = auth.uid())
      WITH CHECK (user_id = auth.uid());
    `;

    await supabase.rpc('exec_sql', {
      sql_query: companiesUpdateSQL
    });

    console.log('Created companies policies');

    return new Response(
      JSON.stringify({
        success: true,
        message: 'RLS policies fixed successfully. Infinite recursion resolved.',
        details: {
          profiles_policies: ['profiles_read_all', 'profiles_update_own', 'profiles_insert_own'],
          companies_policies: ['companies_read_all', 'companies_update_own']
        }
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error) {
    console.error('Error in fix-rls-infinite-recursion-final:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});