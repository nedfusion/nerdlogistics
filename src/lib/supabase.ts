import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Shipment = {
  id: string;
  tracking_number: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  origin: string;
  destination: string;
  status: string;
  shipment_value: number;
  weight: number | null;
  description: string | null;
  estimated_delivery: string | null;
  actual_delivery: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type TrackingHistory = {
  id: string;
  shipment_id: string;
  status: string;
  location: string | null;
  notes: string | null;
  created_at: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  author_id: string | null;
  category: string | null;
  tags: string[];
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type Testimonial = {
  id: string;
  customer_name: string;
  company: string | null;
  position: string | null;
  content: string;
  rating: number;
  avatar_url: string | null;
  is_featured: boolean;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
};

export type ContactInquiry = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  subject: string | null;
  message: string;
  status: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type QuoteRequest = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service_type: string;
  origin: string;
  destination: string;
  weight: number | null;
  dimensions: string | null;
  description: string | null;
  status: string;
  quoted_amount: number | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type AdminUser = {
  id: string;
  email: string;
  full_name: string;
  role: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};
