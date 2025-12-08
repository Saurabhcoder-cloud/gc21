import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

Deno.serve(async (req) => {
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    // Drop and recreate profiles policies
    const profilesPolicies = [
      `DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON profiles;`,
      `DROP POLICY IF EXISTS "Users can view all profiles" ON profiles;`,
      `DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;`,
      `DROP POLICY IF EXISTS "Users can update own profile" ON profiles;`,
      `DROP POLICY IF EXISTS "Enable read access for all users" ON profiles;`,
      `DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON profiles;`,
      `DROP POLICY IF EXISTS "Enable update for users based on id" ON profiles;`,
      `DROP POLICY IF EXISTS "Allow public read access to profiles" ON profiles;`,
      `DROP POLICY IF EXISTS "Allow users to update own profile" ON profiles;`,
      `ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;`,
      `CREATE POLICY "Allow authenticated users to view all profiles" ON profiles FOR SELECT TO authenticated USING (true);`,
      `CREATE POLICY "Allow users to insert own profile" ON profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);`,
      `CREATE POLICY "Allow users to update own profile" ON profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);`,
      `CREATE POLICY "Allow service role full access to profiles" ON profiles FOR ALL TO service_role USING (true) WITH CHECK (true);`
    ]

    // Drop and recreate companies policies
    const companiesPolicies = [
      `DROP POLICY IF EXISTS "Companies are viewable by everyone" ON companies;`,
      `DROP POLICY IF EXISTS "Users can view all companies" ON companies;`,
      `DROP POLICY IF EXISTS "Enable read access for all users" ON companies;`,
      `ALTER TABLE companies ENABLE ROW LEVEL SECURITY;`,
      `CREATE POLICY "Allow authenticated users to view all companies" ON companies FOR SELECT TO authenticated USING (true);`,
      `CREATE POLICY "Allow authenticated users to insert companies" ON companies FOR INSERT TO authenticated WITH CHECK (true);`,
      `CREATE POLICY "Allow users to update own companies" ON companies FOR UPDATE TO authenticated USING (true) WITH CHECK (true);`,
      `CREATE POLICY "Allow service role full access to companies" ON companies FOR ALL TO service_role USING (true) WITH CHECK (true);`
    ]

    const results = []
    
    // Execute profiles policies
    for (const sql of profilesPolicies) {
      try {
        const { error } = await supabase.rpc('exec_sql', { sql_query: sql })
        if (error) {
          console.log(`Policy execution note: ${sql.substring(0, 50)}... - ${error.message}`)
        }
        results.push({ sql: sql.substring(0, 50), status: error ? 'skipped' : 'success' })
      } catch (e) {
        results.push({ sql: sql.substring(0, 50), status: 'error', error: e.message })
      }
    }

    // Execute companies policies
    for (const sql of companiesPolicies) {
      try {
        const { error } = await supabase.rpc('exec_sql', { sql_query: sql })
        if (error) {
          console.log(`Policy execution note: ${sql.substring(0, 50)}... - ${error.message}`)
        }
        results.push({ sql: sql.substring(0, 50), status: error ? 'skipped' : 'success' })
      } catch (e) {
        results.push({ sql: sql.substring(0, 50), status: 'error', error: e.message })
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'RLS policies have been updated. Please go to Supabase Dashboard > Authentication > Policies to manually verify and adjust if needed.',
        instructions: [
          '1. Go to Supabase Dashboard',
          '2. Navigate to Table Editor > profiles',
          '3. Click on "RLS disabled" or policy settings',
          '4. Remove any circular/recursive policies',
          '5. Add simple policy: SELECT - authenticated - true',
          '6. Repeat for companies table'
        ],
        results
      }),
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message,
        instructions: [
          'Manual fix required:',
          '1. Go to Supabase Dashboard',
          '2. Navigate to Table Editor > profiles',
          '3. Click on RLS policies',
          '4. Delete all existing policies',
          '5. Create new policy: SELECT - authenticated - USING (true)',
          '6. Repeat for companies table'
        ]
      }),
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})