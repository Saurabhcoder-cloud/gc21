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
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    const en590Buyers = [
      {
        name: "John Peterson",
        company: "BlueWave Energy Ltd",
        country: "UAE",
        city: "Dubai",
        phone: "+971500001001",
        email: "john.p@bluewave.com",
        requirement: "Monthly 50,000 MT EN590"
      },
      {
        name: "Ahmed Khan",
        company: "Gulf Petro Trading",
        country: "Saudi Arabia",
        city: "Riyadh",
        phone: "+966500001002",
        email: "ahmed@gulfpetro.com",
        requirement: "100,000 MT EN590 contract"
      },
      {
        name: "Michael Rodrigues",
        company: "TransFuel Corp",
        country: "Singapore",
        city: "Singapore",
        phone: "+65670001003",
        email: "mike@transfuel.sg",
        requirement: "Trial 10,000 MT EN590"
      },
      {
        name: "Omar Hassan",
        company: "Desert Oil Imports",
        country: "UAE",
        city: "Abu Dhabi",
        phone: "+971500001004",
        email: "omar@desertoil.ae",
        requirement: "12-month EN590 deal"
      },
      {
        name: "Victor Silva",
        company: "SouthTrade Commodities",
        country: "Brazil",
        city: "Rio de Janeiro",
        phone: "+552100001005",
        email: "victor@southtrade.br",
        requirement: "20,000 MT EN590 monthly"
      },
      {
        name: "Raj Patel",
        company: "PetroMax Global",
        country: "India",
        city: "Mumbai",
        phone: "+91990001006",
        email: "raj@petromax.in",
        requirement: "25,000 MT regular EN590"
      },
      {
        name: "Daniel Foster",
        company: "Global Oil Hub",
        country: "USA",
        city: "Houston",
        phone: "+1713001007",
        email: "daniel@globaloilhub.us",
        requirement: "Spot + long-term EN590"
      },
      {
        name: "Ali Reza",
        company: "MiddleEast Fuels",
        country: "Qatar",
        city: "Doha",
        phone: "+97450001008",
        email: "reza@mefuels.qa",
        requirement: "35,000 MT EN590"
      },
      {
        name: "Chen Wei",
        company: "AsiaFuel Imports",
        country: "China",
        city: "Shanghai",
        phone: "+861300010009",
        email: "chenwei@asiafuel.cn",
        requirement: "Long term EN590 supply"
      },
      {
        name: "Mark Anderson",
        company: "Nordic Petroleum",
        country: "Sweden",
        city: "Stockholm",
        phone: "+46100010010",
        email: "mark@nordicpet.se",
        requirement: "40,000 MT EN590"
      },
      {
        name: "David Brooks",
        company: "Oceanic Oil Traders",
        country: "USA",
        city: "Los Angeles",
        phone: "+13230001011",
        email: "david@oceanicoil.us",
        requirement: "Spot EN590 orders"
      },
      {
        name: "Imran Shaikh",
        company: "FuelConnect India",
        country: "India",
        city: "Delhi",
        phone: "+91981001012",
        email: "imran@fuelconnect.in",
        requirement: "Trial 5,000 MT EN590"
      },
      {
        name: "Samir Al-Farsi",
        company: "Oman Petro Services",
        country: "Oman",
        city: "Muscat",
        phone: "+96870001013",
        email: "samir@omanpetro.om",
        requirement: "Bulk EN590 supply"
      },
      {
        name: "George Miller",
        company: "EuroTrade Petroleum",
        country: "Germany",
        city: "Berlin",
        phone: "+49300010014",
        email: "george@eurotrade.de",
        requirement: "Annual EN590 contract"
      },
      {
        name: "Luis Ortega",
        company: "Latam Oil Partners",
        country: "Mexico",
        city: "Mexico City",
        phone: "+52550001015",
        email: "luis@latamoil.mx",
        requirement: "Monthly recurring EN590"
      },
      {
        name: "Hassan Noor",
        company: "Arabian Energy",
        country: "UAE",
        city: "Sharjah",
        phone: "+97150001016",
        email: "hassan@arabenergy.ae",
        requirement: "Spot EN590 cargo"
      },
      {
        name: "Kim Young",
        company: "Seoul Fuel Importers",
        country: "South Korea",
        city: "Seoul",
        phone: "+82100001017",
        email: "kimy@seoulfuel.kr",
        requirement: "EN590 yearly"
      },
      {
        name: "Ibrahim Musa",
        company: "Nigeria Trade Oil",
        country: "Nigeria",
        city: "Lagos",
        phone: "+23480001018",
        email: "ibrahim@ntoil.ng",
        requirement: "Bulk EN590 requirement"
      },
      {
        name: "Carlos Gomez",
        company: "Spain Petro Imports",
        country: "Spain",
        city: "Madrid",
        phone: "+34910001019",
        email: "carlos@spainpetro.es",
        requirement: "30,000 MT EN590"
      },
      {
        name: "Robert Chen",
        company: "Hong Kong Fuel Trading",
        country: "Hong Kong",
        city: "Hong Kong",
        phone: "+85290001020",
        email: "robert@hkfuel.hk",
        requirement: "45,000 MT EN590 quarterly"
      },
      {
        name: "Mohammed Al-Rashid",
        company: "Kuwait Petroleum Imports",
        country: "Kuwait",
        city: "Kuwait City",
        phone: "+96550001021",
        email: "mohammed@kuwaitpetro.kw",
        requirement: "60,000 MT EN590 annual"
      },
      {
        name: "Pierre Dubois",
        company: "France Fuel Distribution",
        country: "France",
        city: "Paris",
        phone: "+33140001022",
        email: "pierre@francefuel.fr",
        requirement: "35,000 MT EN590 monthly"
      },
      {
        name: "Antonio Rossi",
        company: "Italy Petroleum Group",
        country: "Italy",
        city: "Rome",
        phone: "+39060001023",
        email: "antonio@italypetro.it",
        requirement: "28,000 MT EN590"
      },
      {
        name: "Yuki Tanaka",
        company: "Tokyo Fuel Imports",
        country: "Japan",
        city: "Tokyo",
        phone: "+81330001024",
        email: "yuki@tokyofuel.jp",
        requirement: "50,000 MT EN590 bi-annual"
      },
      {
        name: "James Wilson",
        company: "UK Petroleum Trading",
        country: "UK",
        city: "London",
        phone: "+442070001025",
        email: "james@ukpetro.co.uk",
        requirement: "70,000 MT EN590 contract"
      },
      {
        name: "Andrei Volkov",
        company: "Russia Energy Imports",
        country: "Russia",
        city: "Moscow",
        phone: "+74950001026",
        email: "andrei@russiafuel.ru",
        requirement: "80,000 MT EN590 yearly"
      },
      {
        name: "Fatima Al-Mansoori",
        company: "Bahrain Fuel Trading",
        country: "Bahrain",
        city: "Manama",
        phone: "+97350001027",
        email: "fatima@bahrainfuel.bh",
        requirement: "22,000 MT EN590 quarterly"
      },
      {
        name: "Thomas Schmidt",
        company: "Austria Petroleum Group",
        country: "Austria",
        city: "Vienna",
        phone: "+43170001028",
        email: "thomas@austriapetro.at",
        requirement: "18,000 MT EN590 monthly"
      },
      {
        name: "Nguyen Van Minh",
        company: "Vietnam Fuel Imports",
        country: "Vietnam",
        city: "Ho Chi Minh City",
        phone: "+84280001029",
        email: "minh@vietnamfuel.vn",
        requirement: "32,000 MT EN590"
      },
      {
        name: "Khalid Abdullah",
        company: "Jordan Petroleum Trading",
        country: "Jordan",
        city: "Amman",
        phone: "+96620001030",
        email: "khalid@jordanpetro.jo",
        requirement: "26,000 MT EN590 bi-monthly"
      }
    ];

    const createdBuyers = [];
    const errors = [];

    for (const buyer of en590Buyers) {
      try {
        // Create auth user
        const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
          email: buyer.email,
          password: `EN590buyer${Math.random().toString(36).slice(-8)}!`,
          email_confirm: true,
          user_metadata: {
            full_name: buyer.name,
            user_type: 'buyer'
          }
        });

        if (authError) {
          errors.push({ buyer: buyer.name, error: authError.message });
          continue;
        }

        // Insert profile
        const { error: profileError } = await supabaseAdmin
          .from('profiles')
          .insert({
            id: authData.user.id,
            full_name: buyer.name,
            phone: buyer.phone,
            email: buyer.email,
            country: buyer.country,
            city: buyer.city,
            user_type: 'buyer',
            status: 'active'
          });

        if (profileError) {
          errors.push({ buyer: buyer.name, error: profileError.message });
          continue;
        }

        // Insert company
        const { error: companyError } = await supabaseAdmin
          .from('companies')
          .insert({
            user_id: authData.user.id,
            company_name: buyer.company,
            preferred_categories: 'EN590',
            annual_purchase_volume: buyer.requirement,
            contact_person_name: buyer.name,
            business_type: 'buyer',
            verification_status: 'verified'
          });

        if (companyError) {
          errors.push({ buyer: buyer.name, error: companyError.message });
          continue;
        }

        createdBuyers.push({
          id: authData.user.id,
          name: buyer.name,
          email: buyer.email,
          company: buyer.company
        });

      } catch (error) {
        errors.push({ buyer: buyer.name, error: error.message });
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        created_count: createdBuyers.length,
        created_buyers: createdBuyers,
        errors: errors,
        message: `Successfully created ${createdBuyers.length} out of 30 EN590 buyers`
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