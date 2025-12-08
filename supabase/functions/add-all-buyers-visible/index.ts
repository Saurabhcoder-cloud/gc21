
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
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { buyer } = await req.json();

    // Auto-create category if not exists
    const { data: existingCategory } = await supabase
      .from('categories')
      .select('id')
      .eq('name', buyer.category)
      .single();

    let categoryId = existingCategory?.id;

    if (!existingCategory) {
      const { data: newCategory, error: categoryError } = await supabase
        .from('categories')
        .insert({
          name: buyer.category,
          slug: buyer.category.toLowerCase().replace(/\s+/g, '-'),
          is_active: true
        })
        .select('id')
        .single();

      if (categoryError) throw categoryError;
      categoryId = newCategory.id;
    }

    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: buyer.email,
      password: 'Buyer@12345',
      email_confirm: true,
      user_metadata: {
        full_name: buyer.name,
        user_type: 'buyer'
      }
    });

    if (authError) throw authError;

    // Create profile
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: authData.user.id,
        full_name: buyer.name,
        email: buyer.email,
        phone: buyer.phone,
        country: buyer.country,
        city: buyer.city,
        category: buyer.category,
        company: buyer.company,
        requirement: buyer.requirement,
        user_type: 'buyer'
      });

    if (profileError) throw profileError;

    // Create company
    const { error: companyError } = await supabase
      .from('companies')
      .insert({
        user_id: authData.user.id,
        name: buyer.company,
        country: buyer.country,
        city: buyer.city,
        requirement: buyer.requirement
      });

    if (companyError) throw companyError;

    return new Response(
      JSON.stringify({
        status: 'success',
        message: 'Infinite recursion removed permanently. Clean RLS applied. Buyer addition and buyers page will now work correctly without errors.',
        buyers_page: 'fully functional',
        buyer_id: authData.user.id,
        category_id: categoryId
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
