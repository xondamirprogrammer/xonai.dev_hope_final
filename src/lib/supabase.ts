import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Form submission functions
export async function submitMainContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
}) {
  const { error } = await supabase
    .from('main_contact_submissions')
    .insert([data]);

  if (error) {
    throw error;
  }
}

export async function submitSmartWebsitesForm(data: {
  full_name: string;
  email_address: string;
  project_type: string;
  project_description: string;
}) {
  const { error } = await supabase
    .from('smart_websites_submissions')
    .insert([data]);

  if (error) {
    throw error;
  }
}

export async function submitAIAgentsForm(data: {
  full_name: string;
  email_address: string;
  project_type: string;
  project_description: string;
}) {
  const { error } = await supabase
    .from('ai_agents_submissions')
    .insert([data]);

  if (error) {
    throw error;
  }
}