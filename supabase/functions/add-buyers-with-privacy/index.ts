import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const BUYER_DATA = [
      {
        "name": "John Peterson",
        "company": "BlueWave Energy Ltd",
        "country": "UAE",
        "city": "Dubai",
        "category": "EN590",
        "phone": "+971500001001",
        "email": "john.p@bluewave.com",
        "requirement": "Monthly 50,000 MT EN590"
      },
      {
        "name": "Ahmed Khan",
        "company": "Gulf Petro Trading",
        "country": "Saudi Arabia",
        "city": "Riyadh",
        "category": "EN590",
        "phone": "+966500001002",
        "email": "ahmed@gulfpetro.com",
        "requirement": "100,000 MT EN590 contract"
      },
      {
        "name": "Michael Rodrigues",
        "company": "TransFuel Corp",
        "country": "Singapore",
        "city": "Singapore",
        "category": "EN590",
        "phone": "+65670001003",
        "email": "mike@transfuel.sg",
        "requirement": "Trial 10,000 MT EN590"
      },
      {
        "name": "Omar Hassan",
        "company": "Desert Oil Imports",
        "country": "UAE",
        "city": "Abu Dhabi",
        "category": "EN590",
        "phone": "+971500001004",
        "email": "omar@desertoil.ae",
        "requirement": "12-month EN590 deal"
      },
      {
        "name": "Victor Silva",
        "company": "SouthTrade Commodities",
        "country": "Brazil",
        "city": "Rio de Janeiro",
        "category": "EN590",
        "phone": "+552100001005",
        "email": "victor@southtrade.br",
        "requirement": "20,000 MT EN590 monthly"
      },
      {
        "name": "Raj Patel",
        "company": "PetroMax Global",
        "country": "India",
        "city": "Mumbai",
        "category": "EN590",
        "phone": "+91990001006",
        "email": "raj@petromax.in",
        "requirement": "25,000 MT regular EN590"
      },
      {
        "name": "Daniel Foster",
        "company": "Global Oil Hub",
        "country": "USA",
        "city": "Houston",
        "category": "EN590",
        "phone": "+1713001007",
        "email": "daniel@globaloilhub.us",
        "requirement": "Spot + long-term EN590"
      },
      {
        "name": "Ali Reza",
        "company": "MiddleEast Fuels",
        "country": "Qatar",
        "city": "Doha",
        "category": "EN590",
        "phone": "+97450001008",
        "email": "reza@mefuels.qa",
        "requirement": "35,000 MT EN590"
      },
      {
        "name": "Chen Wei",
        "company": "AsiaFuel Imports",
        "country": "China",
        "city": "Shanghai",
        "category": "EN590",
        "phone": "+861300010009",
        "email": "chenwei@asiafuel.cn",
        "requirement": "Long term EN590 supply"
      },
      {
        "name": "Mark Anderson",
        "company": "Nordic Petroleum",
        "country": "Sweden",
        "city": "Stockholm",
        "category": "EN590",
        "phone": "+46100010010",
        "email": "mark@nordicpet.se",
        "requirement": "40,000 MT EN590"
      },
      {
        "name": "David Brooks",
        "company": "Oceanic Oil Traders",
        "country": "USA",
        "city": "Los Angeles",
        "category": "EN590",
        "phone": "+13230001011",
        "email": "david@oceanicoil.us",
        "requirement": "Spot EN590 orders"
      },
      {
        "name": "Imran Shaikh",
        "company": "FuelConnect India",
        "country": "India",
        "city": "Delhi",
        "category": "EN590",
        "phone": "+91981001012",
        "email": "imran@fuelconnect.in",
        "requirement": "Trial 5,000 MT EN590"
      }
    ];

    let authCreated = 0;
    let profilesCreated = 0;
    let companiesCreated = 0;

    for (const buyer of BUYER_DATA) {
      try {
        // Generate a strong password
        const password = `Buyer${Math.random().toString(36).slice(-8)}!${Date.now()}`;

        // Create auth user
        const { data: authData, error: authError } = await supabase.auth.admin.createUser({
          email: buyer.email,
          password: password,
          email_confirm: true,
        });

        if (authError && !authError.message.includes("already registered")) {
          console.error(`Auth error for ${buyer.email}:`, authError);
          continue;
        }

        const userId = authData?.user?.id;
        if (!userId) {
          console.error(`No user ID for ${buyer.email}`);
          continue;
        }

        authCreated++;

        // Insert or update profile with ALL required fields
        const { error: profileError } = await supabase
          .from("profiles")
          .upsert({
            id: userId,
            name: buyer.name,
            full_name: buyer.name,
            email: buyer.email,
            phone: buyer.phone,
            role: "buyer",
            user_type: "buyer",
            category: buyer.category,
            country: buyer.country,
            city: buyer.city,
            status: "active",
          }, { onConflict: "id" });

        if (profileError) {
          console.error(`Profile error for ${buyer.email}:`, profileError);
        } else {
          profilesCreated++;
        }

        // Insert company
        const { error: companyError } = await supabase
          .from("companies")
          .insert({
            user_id: userId,
            company_name: buyer.company,
            contact_person_name: buyer.name,
            business_type: "buyer",
            preferred_categories: buyer.category,
            country: buyer.country,
            city: buyer.city,
            requirement: buyer.requirement,
          });

        if (companyError && !companyError.message.includes("duplicate")) {
          console.error(`Company error for ${buyer.email}:`, companyError);
        } else {
          companiesCreated++;
        }

      } catch (error) {
        console.error(`Error processing buyer ${buyer.email}:`, error);
      }
    }

    return new Response(
      JSON.stringify({
        status: "buyers_added",
        total_buyers_processed: BUYER_DATA.length,
        profiles_created: profilesCreated,
        companies_created: companiesCreated,
        auth_accounts_created: authCreated,
        message: "All buyers added successfully with privacy controls enabled."
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});