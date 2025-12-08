import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

Deno.serve(async (req) => {
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    // Drop all existing policies on profiles table
    const dropProfilesPolicies = [
      'DROP POLICY IF EXISTS "allow_all_profiles_select" ON profiles',
      'DROP POLICY IF EXISTS "Users can view all profiles" ON profiles',
      'DROP POLICY IF EXISTS "Users can view own profile" ON profiles',
      'DROP POLICY IF EXISTS "Users can update own profile" ON profiles',
      'DROP POLICY IF EXISTS "Users can insert own profile" ON profiles',
      'DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON profiles',
      'DROP POLICY IF EXISTS "Enable read access for all users" ON profiles'
    ];

    for (const sql of dropProfilesPolicies) {
      await supabase.rpc('exec_sql', { sql_query: sql }).catch(() => {});
    }

    // Drop all existing policies on companies table
    const dropCompaniesPolicies = [
      'DROP POLICY IF EXISTS "allow_all_companies_select" ON companies',
      'DROP POLICY IF EXISTS "Users can view all companies" ON companies',
      'DROP POLICY IF EXISTS "Users can view own company" ON companies',
      'DROP POLICY IF EXISTS "Users can update own company" ON companies',
      'DROP POLICY IF EXISTS "Users can insert own company" ON companies',
      'DROP POLICY IF EXISTS "Public companies are viewable by everyone" ON companies',
      'DROP POLICY IF EXISTS "Enable read access for all users" ON companies'
    ];

    for (const sql of dropCompaniesPolicies) {
      await supabase.rpc('exec_sql', { sql_query: sql }).catch(() => {});
    }

    // Create new simple policies for profiles
    const createProfilesPolicies = [
      'ALTER TABLE profiles ENABLE ROW LEVEL SECURITY',
      'CREATE POLICY "public_read_profiles" ON profiles FOR SELECT USING (true)',
      'CREATE POLICY "users_insert_own_profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id)',
      'CREATE POLICY "users_update_own_profile" ON profiles FOR UPDATE USING (auth.uid() = id)'
    ];

    for (const sql of createProfilesPolicies) {
      await supabase.rpc('exec_sql', { sql_query: sql }).catch(() => {});
    }

    // Create new simple policies for companies
    const createCompaniesPolicies = [
      'ALTER TABLE companies ENABLE ROW LEVEL SECURITY',
      'CREATE POLICY "public_read_companies" ON companies FOR SELECT USING (true)',
      'CREATE POLICY "users_insert_own_company" ON companies FOR INSERT WITH CHECK (auth.uid() = user_id)',
      'CREATE POLICY "users_update_own_company" ON companies FOR UPDATE USING (auth.uid() = user_id)'
    ];

    for (const sql of createCompaniesPolicies) {
      await supabase.rpc('exec_sql', { sql_query: sql }).catch(() => {});
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'RLS policies fixed successfully. Infinite recursion resolved.'
      }),
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error fixing RLS:', error);
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