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
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    const { data: { user } } = await supabaseClient.auth.getUser();
    
    const url = new URL(req.url);
    const userType = url.searchParams.get('type');
    const userId = url.searchParams.get('id');
    const category = url.searchParams.get('category');

    // Check if current user is admin
    let isAdmin = false;
    if (user) {
      const { data: profile } = await supabaseClient
        .from('profiles')
        .select('user_type')
        .eq('id', user.id)
        .single();
      
      isAdmin = profile?.user_type === 'admin';
    }

    // Fetch users based on filters
    let query = supabaseClient
      .from('profiles')
      .select(`
        *,
        companies (*)
      `);

    if (userType) {
      query = query.eq('user_type', userType);
    }

    if (userId) {
      query = query.eq('id', userId);
    }

    const { data: users, error } = await query;

    if (error) throw error;

    // Filter by category if specified
    let filteredUsers = users;
    if (category) {
      filteredUsers = users.filter(user => {
        if (user.companies && user.companies.length > 0) {
          const preferredCategories = user.companies[0].preferred_categories || '';
          return preferredCategories.toLowerCase().includes(category.toLowerCase());
        }
        return false;
      });
    }

    // Apply privacy rules: hide buyer phone/email for non-admin users
    const processedUsers = filteredUsers.map(user => {
      if (user.user_type === 'buyer' && !isAdmin) {
        return {
          ...user,
          phone: 'Hidden',
          email: 'Hidden',
          phone_protected: true,
          email_protected: true
        };
      }
      return {
        ...user,
        phone_protected: false,
        email_protected: false
      };
    });

    return new Response(
      JSON.stringify({
        users: processedUsers,
        is_admin: isAdmin,
        total: processedUsers.length
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