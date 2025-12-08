import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { email, password, userData } = await req.json();

    // Create auth user
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: userData
    });

    if (authError) throw authError;

    // Create profile with name field
    const { data: profile, error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert([{
        id: authData.user.id,
        email: email,
        name: userData.full_name,
        full_name: userData.full_name,
        phone: userData.phone,
        user_type: userData.user_type,
        status: 'active',
        country: userData.country
      }])
      .select()
      .single();

    if (profileError) throw profileError;

    // Create company if provided
    if (userData.company_data) {
      const { error: companyError } = await supabaseAdmin
        .from('companies')
        .insert([{
          user_id: authData.user.id,
          company_name: userData.company_data.company_name,
          contact_person_name: userData.company_data.contact_person_name,
          business_type: userData.company_data.business_type,
          country: userData.company_data.country,
          city: userData.company_data.city,
          main_markets: userData.company_data.main_markets,
          production_capacity: userData.company_data.production_capacity,
          export_percentage: userData.company_data.export_percentage,
          preferred_categories: userData.company_data.preferred_categories,
          annual_purchase_volume: userData.company_data.annual_purchase_volume,
          verification_status: 'verified'
        }]);

      if (companyError) throw companyError;
    }

    return new Response(
      JSON.stringify({
        success: true,
        user_id: authData.user.id,
        email: email,
        user_type: userData.user_type
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});