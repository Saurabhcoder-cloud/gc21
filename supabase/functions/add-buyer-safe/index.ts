import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    const { buyer } = await req.json();

    if (!buyer || !buyer.email || !buyer.category) {
      return new Response(
        JSON.stringify({ error: 'Missing required buyer fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Step 1: Check if category exists, if not create it
    const { data: existingCategory } = await supabaseClient
      .from('categories')
      .select('id, name')
      .eq('name', buyer.category)
      .single();

    let categoryId = existingCategory?.id;

    if (!existingCategory) {
      // Create new category
      const { data: newCategory, error: categoryError } = await supabaseClient
        .from('categories')
        .insert({
          name: buyer.category,
          slug: buyer.category.toLowerCase().replace(/\s+/g, '-'),
          description: `${buyer.category} products and suppliers`,
          is_active: true
        })
        .select()
        .single();

      if (categoryError) {
        console.error('Category creation error:', categoryError);
        return new Response(
          JSON.stringify({ error: 'Failed to create category', details: categoryError }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      categoryId = newCategory.id;
    }

    // Step 2: Create auth user
    const { data: authData, error: authError } = await supabaseClient.auth.admin.createUser({
      email: buyer.email,
      password: buyer.password || 'TempPassword123!',
      email_confirm: true,
      user_metadata: {
        full_name: buyer.full_name,
        role: 'buyer'
      }
    });

    if (authError) {
      console.error('Auth creation error:', authError);
      return new Response(
        JSON.stringify({ error: 'Failed to create user', details: authError }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Step 3: Create profile with ALL required fields
    const { error: profileError } = await supabaseClient
      .from('profiles')
      .insert({
        id: authData.user.id,
        email: buyer.email,
        name: buyer.full_name || buyer.name || 'Buyer',
        full_name: buyer.full_name || buyer.name || 'Buyer',
        role: 'buyer',
        user_type: 'buyer',
        phone: buyer.phone || '',
        country: buyer.country || '',
        city: buyer.city || '',
        category: buyer.category,
        company: buyer.company || '',
        requirement: buyer.requirement || '',
        is_verified: true,
        status: 'active',
        created_at: new Date().toISOString()
      });

    if (profileError) {
      console.error('Profile creation error:', profileError);
      // Cleanup: delete auth user if profile creation fails
      await supabaseClient.auth.admin.deleteUser(authData.user.id);
      return new Response(
        JSON.stringify({ error: 'Failed to create profile', details: profileError }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Step 4: Create company record if company name provided
    if (buyer.company) {
      await supabaseClient
        .from('companies')
        .insert({
          user_id: authData.user.id,
          name: buyer.company,
          country: buyer.country || '',
          city: buyer.city || '',
          description: buyer.requirement || '',
          is_verified: true
        });
    }

    return new Response(
      JSON.stringify({
        status: 'success',
        message: 'Buyer added successfully with all required fields',
        buyer_id: authData.user.id,
        category_created: !existingCategory,
        category_id: categoryId
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});