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
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get the authenticated user
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(token);

    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if user is admin
    const { data: profile } = await supabaseClient
      .from("profiles")
      .select("role, is_master_admin")
      .eq("id", user.id)
      .single();

    if (!profile || (profile.role !== "admin" && !profile.is_master_admin)) {
      return new Response(
        JSON.stringify({ error: "Only admins can add buyers" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const buyerData = await req.json();
    const { name, email, phone, company, country, city, category, requirement, password } = buyerData;

    // Validate required fields
    if (!name || !email || !category) {
      return new Response(
        JSON.stringify({ error: "Name, email, and category are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Step 1: Check if category exists, if not create it
    let categoryId = null;
    
    // Search for existing category
    const { data: existingCategory } = await supabaseClient
      .from("categories")
      .select("id, name")
      .ilike("name", category)
      .single();

    if (existingCategory) {
      categoryId = existingCategory.id;
    } else {
      // Create new category
      const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      const { data: newCategory, error: categoryError } = await supabaseClient
        .from("categories")
        .insert({
          name: category,
          slug: slug,
          is_active: true,
          display_order: 999
        })
        .select()
        .single();

      if (categoryError) {
        console.error("Category creation error:", categoryError);
        return new Response(
          JSON.stringify({ error: "Failed to create category", details: categoryError.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      categoryId = newCategory.id;
    }

    // Step 2: Create Supabase Auth user
    const generatedPassword = password || `Buyer${Math.random().toString(36).slice(-8)}@123`;
    
    const { data: authData, error: authError } = await supabaseClient.auth.admin.createUser({
      email: email,
      password: generatedPassword,
      email_confirm: true,
    });

    if (authError) {
      // If user already exists, try to get the user
      const { data: existingUser } = await supabaseClient.auth.admin.listUsers();
      const foundUser = existingUser?.users?.find(u => u.email === email);
      
      if (!foundUser) {
        return new Response(
          JSON.stringify({ error: "Failed to create auth user", details: authError.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      // Use existing user
      const userId = foundUser.id;
      
      // Update profile with ALL required fields
      const { error: profileError } = await supabaseClient
        .from("profiles")
        .upsert({
          id: userId,
          email: email,
          name: name,
          full_name: name,
          phone: phone || '',
          role: "buyer",
          user_type: "buyer",
          country: country || '',
          city: city || '',
          category: category,
          company: company || '',
          requirement: requirement || '',
          status: "active",
        });

      if (profileError) {
        return new Response(
          JSON.stringify({ error: "Failed to update profile", details: profileError.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Update or create company
      if (company) {
        await supabaseClient
          .from("companies")
          .upsert({
            user_id: userId,
            company_name: company,
            contact_person_name: name,
            business_type: "buyer",
            preferred_categories: category,
            country: country || '',
            city: city || '',
            requirement: requirement || '',
          });
      }

      return new Response(
        JSON.stringify({
          status: "success",
          message: "Buyer updated successfully (user already existed)",
          buyer_id: userId,
          category_id: categoryId,
          category_created: !existingCategory,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const userId = authData.user.id;

    // Step 3: Create profile with ALL required fields
    const { error: profileError } = await supabaseClient
      .from("profiles")
      .insert({
        id: userId,
        email: email,
        name: name,
        full_name: name,
        phone: phone || '',
        role: "buyer",
        user_type: "buyer",
        country: country || '',
        city: city || '',
        category: category,
        company: company || '',
        requirement: requirement || '',
        status: "active",
      });

    if (profileError) {
      return new Response(
        JSON.stringify({ error: "Failed to create profile", details: profileError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Step 4: Create company record
    if (company) {
      const { error: companyError } = await supabaseClient
        .from("companies")
        .insert({
          user_id: userId,
          company_name: company,
          contact_person_name: name,
          business_type: "buyer",
          preferred_categories: category,
          country: country || '',
          city: city || '',
          requirement: requirement || '',
        });

      if (companyError) {
        console.error("Company creation error:", companyError);
      }
    }

    return new Response(
      JSON.stringify({
        status: "success",
        message: "Buyer added successfully with all required fields",
        buyer_id: userId,
        category_id: categoryId,
        category_created: !existingCategory,
        password: generatedPassword,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});