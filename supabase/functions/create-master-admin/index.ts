import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

Deno.serve(async (req) => {
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: 'admin@mpsbbusinesscare.com',
      password: 'Admin@12345',
      email_confirm: true,
    });

    if (authError && !authError.message.includes('already registered')) {
      throw authError;
    }

    const userId = authData?.user?.id || (await supabase.auth.admin.listUsers()).data.users.find(u => u.email === 'admin@mpsbbusinesscare.com')?.id;

    if (!userId) {
      throw new Error('Failed to get user ID');
    }

    // Insert/update profile
    const { error: profileError } = await supabase
      .from('profiles')
      .upsert({
        id: userId,
        name: 'Master Admin',
        email: 'admin@mpsbbusinesscare.com',
        phone: '0000000000',
        user_type: 'admin',
        is_master_admin: true,
      }, { onConflict: 'id' });

    if (profileError) throw profileError;

    return new Response(
      JSON.stringify({
        status: 'success',
        message: 'Master admin created successfully',
        admin_id: userId,
      }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});