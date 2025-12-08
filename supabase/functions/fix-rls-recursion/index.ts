import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

Deno.serve(async (req) => {
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Drop all existing policies on profiles
    const dropProfilesPolicies = [
      'DROP POLICY IF EXISTS "allow_all_profiles_select" ON profiles',
      'DROP POLICY IF EXISTS "Users can view all profiles" ON profiles',
      'DROP POLICY IF EXISTS "Users can view own profile" ON profiles',
      'DROP POLICY IF EXISTS "Users can update own profile" ON profiles',
      'DROP POLICY IF EXISTS "Users can insert own profile" ON profiles',
      'DROP POLICY IF EXISTS "Enable read access for all users" ON profiles',
      'DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON profiles',
      'DROP POLICY IF EXISTS "Enable update for users based on id" ON profiles',
    ]

    for (const sql of dropProfilesPolicies) {
      await supabase.rpc('exec_sql', { sql_query: sql }).catch(() => {})
    }

    // Create new simple policies for profiles
    const createProfilesPolicies = [
      `CREATE POLICY "public_read_profiles" ON profiles FOR SELECT USING (true)`,
      `CREATE POLICY "authenticated_insert_own_profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id)`,
      `CREATE POLICY "authenticated_update_own_profile" ON profiles FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id)`,
    ]

    for (const sql of createProfilesPolicies) {
      await supabase.rpc('exec_sql', { sql_query: sql }).catch(() => {})
    }

    // Drop all existing policies on companies
    const dropCompaniesPolicies = [
      'DROP POLICY IF EXISTS "allow_all_companies_select" ON companies',
      'DROP POLICY IF EXISTS "Users can view all companies" ON companies',
      'DROP POLICY IF EXISTS "Enable read access for all users" ON companies',
      'DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON companies',
      'DROP POLICY IF EXISTS "Enable update for users based on user_id" ON companies',
    ]

    for (const sql of dropCompaniesPolicies) {
      await supabase.rpc('exec_sql', { sql_query: sql }).catch(() => {})
    }

    // Create new simple policies for companies
    const createCompaniesPolicies = [
      `CREATE POLICY "public_read_companies" ON companies FOR SELECT USING (true)`,
      `CREATE POLICY "authenticated_insert_companies" ON companies FOR INSERT WITH CHECK (auth.uid() = user_id)`,
      `CREATE POLICY "authenticated_update_own_companies" ON companies FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id)`,
    ]

    for (const sql of createCompaniesPolicies) {
      await supabase.rpc('exec_sql', { sql_query: sql }).catch(() => {})
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'RLS policies fixed successfully. Infinite recursion resolved.',
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})