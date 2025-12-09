import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { sanitizeBuyerForViewer, supplierHasActivePaidPlan } from "../_shared/privacy.ts";
import {
  buildCompanyInsert,
  buildPassword,
  buildProfileInsert,
  normalizeBuyerInput,
  normalizeSupplierInput,
} from "./helpers.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

/**
 * Example requests:
 * POST /functions/v1/admin-user-management/admin/buyers/create
 *   {"name":"John","email":"john@example.com","phone":"+123456","company":"Acme","country":"US","city":"NYC","category":"EN590","requirement":"Monthly volume","password":"Temp123!"}
 *
 * POST /functions/v1/admin-user-management/admin/suppliers/create
 *   {"name":"Supplier","email":"sup@example.com","phone":"+123","company":"Supply Co","country":"AE","city":"Dubai","category":"Diesel","requirement":"Export","has_paid_plan":true}
 *
 * POST /functions/v1/admin-user-management/admin/suppliers/<SUPPLIER_ID>/activate-plan
 */
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

  const adminClient = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const requestPath = new URL(req.url).pathname.split("/functions/v1/").pop() ?? "";
  const actionPath = requestPath.replace("admin-user-management", "");

  try {
    const supabase = createClient(supabaseUrl, anonKey, {
      global: {
        headers: { Authorization: req.headers.get("Authorization") ?? "" },
      },
    });

    const { data: authUser } = await supabase.auth.getUser();

    if (!authUser.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: requester } = await adminClient
      .from("profiles")
      .select("user_type")
      .eq("id", authUser.user.id)
      .single();

    if (requester?.user_type !== "admin") {
      return new Response(JSON.stringify({ error: "Admin access required" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (req.method === "POST" && actionPath.endsWith("/admin/buyers/create")) {
      const payload = await req.json();
      const buyerInput = normalizeBuyerInput(payload);

      const { data: authData, error: authError } = await adminClient.auth.admin.createUser({
        email: buyerInput.email,
        password: buyerInput.password || buildPassword("Buyer"),
        email_confirm: true,
      });

      if (authError) throw authError;

      const userId = authData.user?.id;
      if (!userId) throw new Error("Failed to create buyer user");

      const profileInsert = buildProfileInsert(userId, buyerInput, "buyer");
      const { error: profileError } = await adminClient.from("profiles").insert(profileInsert);
      if (profileError) {
        await adminClient.auth.admin.deleteUser(userId);
        throw profileError;
      }

      const companyInsert = buildCompanyInsert(userId, buyerInput, "buyer");
      const { error: companyError } = await adminClient.from("companies").insert(companyInsert);
      if (companyError) throw companyError;

      return new Response(
        JSON.stringify({
          success: true,
          buyer_id: userId,
          buyer: profileInsert,
          company: companyInsert,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (req.method === "POST" && actionPath.endsWith("/admin/suppliers/create")) {
      const payload = await req.json();
      const supplierInput = normalizeSupplierInput(payload);

      const { data: authData, error: authError } = await adminClient.auth.admin.createUser({
        email: supplierInput.email,
        password: supplierInput.password || buildPassword("Supplier"),
        email_confirm: true,
      });

      if (authError) throw authError;

      const userId = authData.user?.id;
      if (!userId) throw new Error("Failed to create supplier user");

      const profileInsert = buildProfileInsert(userId, supplierInput, "supplier");
      const { error: profileError } = await adminClient.from("profiles").insert(profileInsert);
      if (profileError) {
        await adminClient.auth.admin.deleteUser(userId);
        throw profileError;
      }

      const companyInsert = buildCompanyInsert(userId, supplierInput, "supplier");
      const { error: companyError } = await adminClient.from("companies").insert(companyInsert);
      if (companyError) throw companyError;

      return new Response(
        JSON.stringify({
          success: true,
          supplier_id: userId,
          supplier: profileInsert,
          company: companyInsert,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (req.method === "POST" && actionPath.includes("/admin/suppliers/") && actionPath.endsWith("/activate-plan")) {
      const supplierId = actionPath.split("/admin/suppliers/")[1]?.replace("/activate-plan", "");
      if (!supplierId) throw new Error("Supplier ID is required");

      const { error } = await adminClient
        .from("profiles")
        .update({ has_paid_plan: true, subscription_status: "active" })
        .eq("id", supplierId)
        .eq("user_type", "supplier");

      if (error) throw error;

      return new Response(JSON.stringify({ success: true, supplier_id: supplierId, has_paid_plan: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (req.method === "POST" && actionPath.includes("/admin/suppliers/") && actionPath.endsWith("/deactivate-plan")) {
      const supplierId = actionPath.split("/admin/suppliers/")[1]?.replace("/deactivate-plan", "");
      if (!supplierId) throw new Error("Supplier ID is required");

      const { error } = await adminClient
        .from("profiles")
        .update({ has_paid_plan: false, subscription_status: "inactive" })
        .eq("id", supplierId)
        .eq("user_type", "supplier");

      if (error) throw error;

      return new Response(JSON.stringify({ success: true, supplier_id: supplierId, has_paid_plan: false }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (req.method === "GET" && actionPath.endsWith("/admin/buyers")) {
      const { data, error } = await adminClient
        .from("profiles")
        .select("*, companies(*)")
        .eq("user_type", "buyer")
        .order("created_at", { ascending: false });

      if (error) throw error;

      return new Response(JSON.stringify({ buyers: data ?? [] }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (req.method === "GET" && actionPath.endsWith("/admin/suppliers")) {
      const { data, error } = await adminClient
        .from("profiles")
        .select("*, companies(*)")
        .eq("user_type", "supplier")
        .order("created_at", { ascending: false });

      if (error) throw error;

      return new Response(JSON.stringify({ suppliers: data ?? [] }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (req.method === "GET" && actionPath.endsWith("/supplier/buyers")) {
      const { data: requesterProfile } = await adminClient
        .from("profiles")
        .select("id, user_type, has_paid_plan, subscription_status")
        .eq("id", authUser.user.id)
        .single();

      const { data: buyers, error } = await adminClient
        .from("profiles")
        .select("*, companies(*)")
        .eq("user_type", "buyer")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const sanitized = (buyers ?? []).map((buyer) =>
        sanitizeBuyerForViewer(buyer, {
          role: requesterProfile?.user_type,
          hasPaidPlan: supplierHasActivePaidPlan(requesterProfile),
          userId: authUser.user.id,
        }),
      );

      return new Response(JSON.stringify({ buyers: sanitized }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Admin user management error", error);
    return new Response(JSON.stringify({ error: error.message ?? "Unexpected error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
