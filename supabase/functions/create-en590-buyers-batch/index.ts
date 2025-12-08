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

    const buyers = [
      {
        name: "John Peterson",
        company: "BlueWave Energy Ltd",
        country: "UAE",
        city: "Dubai",
        category: "EN590",
        phone: "+971500001001",
        email: "john.p@bluewave.com",
        requirement: "Monthly 50,000 MT EN590"
      },
      {
        name: "Ahmed Khan",
        company: "Gulf Petro Trading",
        country: "Saudi Arabia",
        city: "Riyadh",
        category: "EN590",
        phone: "+966500001002",
        email: "ahmed@gulfpetro.com",
        requirement: "100,000 MT EN590 contract"
      },
      {
        name: "Michael Rodrigues",
        company: "TransFuel Corp",
        country: "Singapore",
        city: "Singapore",
        category: "EN590",
        phone: "+65670001003",
        email: "mike@transfuel.sg",
        requirement: "Trial 10,000 MT EN590"
      },
      {
        name: "Omar Hassan",
        company: "Desert Oil Imports",
        country: "UAE",
        city: "Abu Dhabi",
        category: "EN590",
        phone: "+971500001004",
        email: "omar@desertoil.ae",
        requirement: "12-month EN590 deal"
      },
      {
        name: "Victor Silva",
        company: "SouthTrade Commodities",
        country: "Brazil",
        city: "Rio de Janeiro",
        category: "EN590",
        phone: "+552100001005",
        email: "victor@southtrade.br",
        requirement: "20,000 MT EN590 monthly"
      },
      {
        name: "Raj Patel",
        company: "PetroMax Global",
        country: "India",
        city: "Mumbai",
        category: "EN590",
        phone: "+91990001006",
        email: "raj@petromax.in",
        requirement: "25,000 MT regular EN590"
      },
      {
        name: "Daniel Foster",
        company: "Global Oil Hub",
        country: "USA",
        city: "Houston",
        category: "EN590",
        phone: "+1713001007",
        email: "daniel@globaloilhub.us",
        requirement: "Spot + long-term EN590"
      },
      {
        name: "Ali Reza",
        company: "MiddleEast Fuels",
        country: "Qatar",
        city: "Doha",
        category: "EN590",
        phone: "+97450001008",
        email: "reza@mefuels.qa",
        requirement: "35,000 MT EN590"
      },
      {
        name: "Chen Wei",
        company: "AsiaFuel Imports",
        country: "China",
        city: "Shanghai",
        category: "EN590",
        phone: "+861300010009",
        email: "chenwei@asiafuel.cn",
        requirement: "Long term EN590 supply"
      },
      {
        name: "Mark Anderson",
        company: "Nordic Petroleum",
        country: "Sweden",
        city: "Stockholm",
        category: "EN590",
        phone: "+46100010010",
        email: "mark@nordicpet.se",
        requirement: "40,000 MT EN590"
      },
      {
        name: "David Brooks",
        company: "Oceanic Oil Traders",
        country: "USA",
        city: "Los Angeles",
        category: "EN590",
        phone: "+13230001011",
        email: "david@oceanicoil.us",
        requirement: "Spot EN590 orders"
      },
      {
        name: "Imran Shaikh",
        company: "FuelConnect India",
        country: "India",
        city: "Delhi",
        category: "EN590",
        phone: "+91981001012",
        email: "imran@fuelconnect.in",
        requirement: "Trial 5,000 MT EN590"
      },
      {
        name: "Samir Al-Farsi",
        company: "Oman Petro Services",
        country: "Oman",
        city: "Muscat",
        category: "EN590",
        phone: "+96870001013",
        email: "samir@omanpetro.om",
        requirement: "Bulk EN590 supply"
      },
      {
        name: "George Miller",
        company: "EuroTrade Petroleum",
        country: "Germany",
        city: "Berlin",
        category: "EN590",
        phone: "+49300010014",
        email: "george@eurotrade.de",
        requirement: "Annual EN590 contract"
      },
      {
        name: "Luis Ortega",
        company: "Latam Oil Partners",
        country: "Mexico",
        city: "Mexico City",
        category: "EN590",
        phone: "+52550001015",
        email: "luis@latamoil.mx",
        requirement: "Monthly recurring EN590"
      },
      {
        name: "Hassan Noor",
        company: "Arabian Energy",
        country: "UAE",
        city: "Sharjah",
        category: "EN590",
        phone: "+97150001016",
        email: "hassan@arabenergy.ae",
        requirement: "Spot EN590 cargo"
      },
      {
        name: "Kim Young",
        company: "Seoul Fuel Importers",
        country: "South Korea",
        city: "Seoul",
        category: "EN590",
        phone: "+82100001017",
        email: "kimy@seoulfuel.kr",
        requirement: "EN590 yearly"
      },
      {
        name: "Ibrahim Musa",
        company: "Nigeria Trade Oil",
        country: "Nigeria",
        city: "Lagos",
        category: "EN590",
        phone: "+23480001018",
        email: "ibrahim@ntoil.ng",
        requirement: "Bulk EN590 requirement"
      },
      {
        name: "Carlos Gomez",
        company: "Spain Petro Imports",
        country: "Spain",
        city: "Madrid",
        category: "EN590",
        phone: "+34910001019",
        email: "carlos@spainpetro.es",
        requirement: "30,000 MT EN590"
      }
    ];

    const results = [];

    for (const buyer of buyers) {
      // Create auth user
      const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email: buyer.email,
        password: 'Buyer@12345',
        email_confirm: true,
      });

      if (authError) {
        results.push({ buyer: buyer.name, status: 'failed', error: authError.message });
        continue;
      }

      // Create profile
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: authData.user.id,
          name: buyer.name,
          email: buyer.email,
          phone: buyer.phone,
          user_type: 'buyer',
          is_master_admin: false,
        });

      if (profileError) {
        results.push({ buyer: buyer.name, status: 'profile_failed', error: profileError.message });
        continue;
      }

      // Create company
      const { error: companyError } = await supabase
        .from('companies')
        .insert({
          user_id: authData.user.id,
          name: buyer.company,
          country: buyer.country,
          city: buyer.city,
          business_type: buyer.category,
          description: buyer.requirement,
          verified: true,
        });

      if (companyError) {
        results.push({ buyer: buyer.name, status: 'company_failed', error: companyError.message });
        continue;
      }

      results.push({ buyer: buyer.name, status: 'success', email: buyer.email });
    }

    return new Response(
      JSON.stringify({ 
        message: 'EN590 buyers creation completed',
        results,
        total: buyers.length,
        successful: results.filter(r => r.status === 'success').length
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});