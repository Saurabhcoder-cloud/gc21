import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Profile {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  user_type: 'buyer' | 'supplier' | 'admin';
  status: 'active' | 'pending' | 'inactive' | 'suspended';
  country: string;
  created_at: string;
  updated_at: string;
}

export interface Company {
  id: string;
  user_id: string;
  company_name: string;
  contact_person_name?: string;
  business_type?: string;
  year_established?: number;
  country: string;
  city?: string;
  address?: string;
  postal_code?: string;
  gst_vat_number?: string;
  registration_number?: string;
  website?: string;
  logo_url?: string;
  short_description?: string;
  detailed_introduction?: string;
  number_of_employees?: string;
  production_capacity?: string;
  export_percentage?: string;
  main_markets?: string[];
  preferred_categories?: string[];
  annual_purchase_volume?: string;
  industry?: string;
  business_license_url?: string;
  certifications_urls?: string[];
  verification_status: 'pending' | 'verified' | 'rejected' | 'unverified';
  verified_at?: string;
  verified_by?: string;
  admin_notes?: string;
  rejected_reason?: string;
  created_at: string;
  updated_at: string;
}

// Auth helpers
export const authHelpers = {
  async signUp(email: string, password: string, userData: any) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    });
    return { data, error };
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  async resetPassword(email: string) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    return { data, error };
  },
};

// Database helpers
export const dbHelpers = {
  async createProfile(profileData: Partial<Profile>) {
    const { data, error } = await supabase
      .from('profiles')
      .insert([profileData])
      .select()
      .single();
    return { data, error };
  },

  async createCompany(companyData: Partial<Company>) {
    const { data, error } = await supabase
      .from('companies')
      .insert([companyData])
      .select()
      .single();
    return { data, error };
  },

  async getProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    return { data, error };
  },

  async getCompany(userId: string) {
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .eq('user_id', userId)
      .single();
    return { data, error };
  },

  async updateProfile(userId: string, updates: Partial<Profile>) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();
    return { data, error };
  },

  async updateCompany(userId: string, updates: Partial<Company>) {
    const { data, error } = await supabase
      .from('companies')
      .update(updates)
      .eq('user_id', userId)
      .select()
      .single();
    return { data, error };
  },
};
