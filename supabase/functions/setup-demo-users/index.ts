import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const FUNCTION_URL = `${SUPABASE_URL}/functions/v1/create-admin-user`;

    const results = {
      admin: null,
      buyers: [],
      suppliers: [],
      timestamp: new Date().toISOString()
    };

    // 1. Create Admin
    const adminEmail = 'admin@globalconnection21.com';
    const adminPassword = 'Admin@GC21#2024$Secure';
    
    const adminResponse = await fetch(FUNCTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: adminEmail,
        password: adminPassword,
        userData: {
          full_name: 'System Administrator',
          phone: '+1-555-0100',
          user_type: 'admin',
          country: 'United States'
        }
      })
    });

    const adminData = await adminResponse.json();
    results.admin = {
      id: adminData.user_id,
      email: adminEmail,
      password: adminPassword,
      role: 'admin'
    };

    // 2. Create Buyers
    const buyers = [
      {
        email: 'buyer1@techimports.com',
        password: 'Buyer1@Tech#2024',
        full_name: 'Michael Chen',
        phone: '+1-555-0201',
        country: 'United States',
        company_data: {
          company_name: 'Tech Imports LLC',
          contact_person_name: 'Michael Chen',
          business_type: 'Importer',
          country: 'United States',
          city: 'San Francisco',
          main_markets: 'North America, Europe',
          preferred_categories: 'Electronics, Consumer Goods',
          annual_purchase_volume: '$500,000 - $1,000,000'
        }
      },
      {
        email: 'buyer2@eurotrading.de',
        password: 'Buyer2@Euro#2024',
        full_name: 'Anna Schmidt',
        phone: '+49-30-12345678',
        country: 'Germany',
        company_data: {
          company_name: 'Euro Trading GmbH',
          contact_person_name: 'Anna Schmidt',
          business_type: 'Wholesaler',
          country: 'Germany',
          city: 'Berlin',
          main_markets: 'European Union',
          preferred_categories: 'Machinery, Industrial Equipment',
          annual_purchase_volume: '$1,000,000 - $5,000,000'
        }
      }
    ];

    for (const buyer of buyers) {
      const response = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: buyer.email,
          password: buyer.password,
          userData: {
            full_name: buyer.full_name,
            phone: buyer.phone,
            user_type: 'buyer',
            country: buyer.country,
            company_data: buyer.company_data
          }
        })
      });

      const data = await response.json();
      results.buyers.push({
        id: data.user_id,
        email: buyer.email,
        password: buyer.password,
        name: buyer.full_name,
        company: buyer.company_data.company_name,
        city: buyer.company_data.city,
        phone: buyer.phone,
        phone_protected: true,
        email_protected: true,
        masked_phone: 'Hidden',
        masked_email: 'Hidden'
      });
    }

    // 3. Create Suppliers
    const suppliers = [
      {
        email: 'supplier1@shenzhentech.cn',
        password: 'Supplier1@Tech#2024',
        full_name: 'Li Wei',
        phone: '+86-755-88888888',
        country: 'China',
        company_data: {
          company_name: 'Shenzhen Tech Manufacturing Co., Ltd.',
          contact_person_name: 'Li Wei',
          business_type: 'Manufacturer',
          country: 'China',
          city: 'Shenzhen',
          main_markets: 'Global',
          production_capacity: '100,000 units/month',
          export_percentage: '85%',
          preferred_categories: 'Electronics, LED Products'
        }
      },
      {
        email: 'supplier2@vietnamtextile.vn',
        password: 'Supplier2@Textile#2024',
        full_name: 'Nguyen Thi Mai',
        phone: '+84-28-77777777',
        country: 'Vietnam',
        company_data: {
          company_name: 'Vietnam Textile Export JSC',
          contact_person_name: 'Nguyen Thi Mai',
          business_type: 'Manufacturer & Exporter',
          country: 'Vietnam',
          city: 'Ho Chi Minh City',
          main_markets: 'USA, Europe, Japan',
          production_capacity: '500,000 pieces/month',
          export_percentage: '95%',
          preferred_categories: 'Textiles, Apparel'
        }
      }
    ];

    for (const supplier of suppliers) {
      const response = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: supplier.email,
          password: supplier.password,
          userData: {
            full_name: supplier.full_name,
            phone: supplier.phone,
            user_type: 'supplier',
            country: supplier.country,
            company_data: supplier.company_data
          }
        })
      });

      const data = await response.json();
      results.suppliers.push({
        id: data.user_id,
        email: supplier.email,
        password: supplier.password,
        name: supplier.full_name,
        company: supplier.company_data.company_name,
        city: supplier.company_data.city,
        phone: supplier.phone,
        phone_protected: false,
        email_protected: false
      });
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