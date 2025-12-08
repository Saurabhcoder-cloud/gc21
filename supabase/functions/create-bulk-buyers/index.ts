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

    const results = {
      admin: null,
      en590_buyers: [],
      sugar_buyers: [],
      other_buyers: [],
      timestamp: new Date().toISOString()
    };

    // 1. CREATE ADMIN
    const adminEmail = 'admin@globalconnection21.com';
    const adminPassword = 'Admin@GC21#2024$SecurePass!';
    
    const { data: adminAuth, error: adminError } = await supabaseAdmin.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true,
      user_metadata: { full_name: 'System Administrator', user_type: 'admin' }
    });

    if (adminError) throw adminError;

    await supabaseAdmin.from('profiles').upsert({
      id: adminAuth.user.id,
      email: adminEmail,
      name: 'System Administrator',
      full_name: 'System Administrator',
      phone: '+1-555-0100',
      role: 'admin',
      user_type: 'admin',
      status: 'active',
      country: 'United States'
    });

    results.admin = {
      id: adminAuth.user.id,
      email: adminEmail,
      password: adminPassword
    };

    // 2. CREATE EN590 BUYERS (30)
    const en590Countries = ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Turkey', 'Egypt', 'Jordan', 'Lebanon'];
    const en590Companies = ['Petro Trading', 'Energy Solutions', 'Fuel Imports', 'Oil & Gas Trading', 'Energy Resources', 'Petroleum Distributors', 'Fuel Supply Co', 'Energy Partners', 'Oil Trading Corp', 'Diesel Imports'];
    
    for (let i = 1; i <= 30; i++) {
      const country = en590Countries[i % en590Countries.length];
      const companyBase = en590Companies[i % en590Companies.length];
      const email = `en590buyer${i}@${companyBase.toLowerCase().replace(/\s+/g, '')}.com`;
      const password = `EN590Buyer${i}#2024!`;
      const fullName = `EN590 Buyer ${i}`;
      
      const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
        email: email,
        password: password,
        email_confirm: true,
        user_metadata: { user_type: 'buyer' }
      });

      if (authError) continue;

      await supabaseAdmin.from('profiles').insert({
        id: authData.user.id,
        email: email,
        name: fullName,
        full_name: fullName,
        phone: `+971-50-${1000000 + i}`,
        role: 'buyer',
        user_type: 'buyer',
        status: 'active',
        country: country
      });

      await supabaseAdmin.from('companies').insert({
        user_id: authData.user.id,
        company_name: `${companyBase} ${country}`,
        contact_person_name: fullName,
        business_type: 'Importer',
        country: country,
        city: country === 'United Arab Emirates' ? 'Dubai' : 'Capital City',
        main_markets: 'Middle East, Asia',
        preferred_categories: 'EN590 Diesel Fuel',
        annual_purchase_volume: `${(i % 5 + 1) * 1000000} MT/year`,
        verification_status: 'verified'
      });

      results.en590_buyers.push(authData.user.id);
    }

    // 3. CREATE SUGAR BUYERS (30)
    const sugarCountries = ['India', 'China', 'Indonesia', 'Bangladesh', 'Pakistan', 'Malaysia', 'Philippines', 'Vietnam', 'Thailand', 'Sri Lanka'];
    const sugarCompanies = ['Sweet Trading', 'Sugar Imports', 'Food Distributors', 'Commodity Trading', 'Sugar Solutions', 'Global Sweeteners', 'Food Supply Co', 'Sugar Partners', 'Commodity Imports', 'Sweet Resources'];
    
    for (let i = 1; i <= 30; i++) {
      const country = sugarCountries[i % sugarCountries.length];
      const companyBase = sugarCompanies[i % sugarCompanies.length];
      const email = `sugarbuyer${i}@${companyBase.toLowerCase().replace(/\s+/g, '')}.com`;
      const password = `SugarBuyer${i}#2024!`;
      const fullName = `Sugar Buyer ${i}`;
      
      const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
        email: email,
        password: password,
        email_confirm: true,
        user_metadata: { user_type: 'buyer' }
      });

      if (authError) continue;

      await supabaseAdmin.from('profiles').insert({
        id: authData.user.id,
        email: email,
        name: fullName,
        full_name: fullName,
        phone: `+91-98-${10000000 + i}`,
        role: 'buyer',
        user_type: 'buyer',
        status: 'active',
        country: country
      });

      await supabaseAdmin.from('companies').insert({
        user_id: authData.user.id,
        company_name: `${companyBase} ${country}`,
        contact_person_name: fullName,
        business_type: 'Wholesaler',
        country: country,
        city: country === 'India' ? 'Mumbai' : 'Capital City',
        main_markets: 'Asia, Middle East',
        preferred_categories: 'ICUMSA 45 Sugar, Raw Sugar',
        annual_purchase_volume: `${(i % 10 + 1) * 5000} MT/year`,
        verification_status: 'verified'
      });

      results.sugar_buyers.push(authData.user.id);
    }

    // 4. CREATE OTHER PRODUCT BUYERS (30)
    const otherCountries = ['United States', 'Germany', 'United Kingdom', 'France', 'Italy', 'Spain', 'Canada', 'Australia', 'Japan', 'South Korea'];
    const otherCompanies = ['Global Imports', 'Trade Solutions', 'International Trading', 'Import Partners', 'Global Commerce', 'Trade Connect', 'Import Experts', 'Global Trade Co', 'Commerce Partners', 'Trade Specialists'];
    const otherCategories = ['Electronics', 'Machinery', 'Textiles', 'Chemicals', 'Automotive Parts', 'Construction Materials', 'Medical Equipment', 'Consumer Goods', 'Industrial Equipment', 'Agricultural Products'];
    
    for (let i = 1; i <= 30; i++) {
      const country = otherCountries[i % otherCountries.length];
      const companyBase = otherCompanies[i % otherCompanies.length];
      const category = otherCategories[i % otherCategories.length];
      const email = `buyer${i}@${companyBase.toLowerCase().replace(/\s+/g, '')}.com`;
      const password = `Buyer${i}#2024!`;
      const fullName = `Buyer ${i}`;
      
      const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
        email: email,
        password: password,
        email_confirm: true,
        user_metadata: { user_type: 'buyer' }
      });

      if (authError) continue;

      await supabaseAdmin.from('profiles').insert({
        id: authData.user.id,
        email: email,
        name: fullName,
        full_name: fullName,
        phone: `+1-555-${200000 + i}`,
        role: 'buyer',
        user_type: 'buyer',
        status: 'active',
        country: country
      });

      await supabaseAdmin.from('companies').insert({
        user_id: authData.user.id,
        company_name: `${companyBase} ${country}`,
        contact_person_name: fullName,
        business_type: 'Importer',
        country: country,
        city: country === 'United States' ? 'New York' : 'Capital City',
        main_markets: 'Global',
        preferred_categories: category,
        annual_purchase_volume: `$${(i % 10 + 1) * 500000}`,
        verification_status: 'verified'
      });

      results.other_buyers.push(authData.user.id);
    }

    return new Response(
      JSON.stringify(results),
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