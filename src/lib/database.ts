import { supabase } from './supabase'

// Generic function to fetch data from any table
export async function fetchData<T>(table: string, select = '*'): Promise<T[] | null> {
  try {
    const { data, error } = await supabase
      .from(table)
      .select(select)
    
    if (error) {
      console.error(`Error fetching data from ${table}:`, error)
      return null
    }
    
    return data as T[]
  } catch (error) {
    console.error(`Unexpected error fetching data from ${table}:`, error)
    return null
  }
}

// Generic function to insert data into any table
export async function insertData<T>(table: string, data: Partial<T>): Promise<T | null> {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .insert([data])
      .select()
      .single()
    
    if (error) {
      console.error(`Error inserting data into ${table}:`, error)
      return null
    }
    
    return result as T
  } catch (error) {
    console.error(`Unexpected error inserting data into ${table}:`, error)
    return null
  }
}

// Example: Contact form specific functions
export interface ContactForm {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  created_at?: string
}

export async function submitContactForm(formData: Omit<ContactForm, 'id' | 'created_at'>) {
  return insertData<ContactForm>('contact_forms', formData)
}

export async function getContactForms() {
  return fetchData<ContactForm>('contact_forms')
}

// Example: Quote request specific functions
export interface QuoteRequest {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  event_name?: string
  event_date?: string
  stand_size?: string
  budget_range?: string
  requirements?: string
  created_at?: string
}

export async function submitQuoteRequest(formData: Omit<QuoteRequest, 'id' | 'created_at'>) {
  return insertData<QuoteRequest>('quote_requests', formData)
}

export async function getQuoteRequests() {
  return fetchData<QuoteRequest>('quote_requests')
}

// Trade Shows interfaces
export interface TradeShow {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  start_date: string;
  end_date: string;
  location: string;
  country: string;
  city: string;
  category: string;
  logo: string;
  logo_alt: string;
  organizer?: string;
  website?: string;
  venue?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  sort_order?: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface TradeShowPage {
  id: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  hero_title: string;
  hero_subtitle: string;
  hero_background_image: string;
  hero_background_image_alt: string;
  description: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

// Trade Shows functions
export async function getTradeShowsPageData(): Promise<TradeShowPage | null> {
  try {
    const { data, error } = await supabase
      .from('trade_shows_page')
      .select('*')
      .eq('is_active', true)
      .single();
    
    if (error) {
      console.error('Error fetching trade shows page data:', error);
      return null;
    }
    
    return data as TradeShowPage;
  } catch (error) {
    console.error('Unexpected error fetching trade shows page data:', error);
    return null;
  }
}

export async function getAllActiveTradeShows(): Promise<TradeShow[] | null> {
  try {
    const { data, error } = await supabase
      .from('trade_shows')
      .select('*')
      .eq('is_active', true)
      .order('sort_order');
    
    if (error) {
      console.error('Error fetching trade shows:', error);
      return null;
    }
    
    return data as TradeShow[];
  } catch (error) {
    console.error('Unexpected error fetching trade shows:', error);
    return null;
  }
}

export async function getTradeShowBySlug(slug: string): Promise<TradeShow | null> {
  try {
    const { data, error } = await supabase
      .from('trade_shows')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();
    
    if (error) {
      console.error(`Error fetching trade show with slug ${slug}:`, error);
      return null;
    }
    
    return data as TradeShow;
  } catch (error) {
    console.error(`Unexpected error fetching trade show with slug ${slug}:`, error);
    return null;
  }
}

export async function getRelatedTradeShows(currentSlug: string, limit: number = 2): Promise<TradeShow[] | null> {
  try {
    const { data, error } = await supabase
      .from('trade_shows')
      .select('*')
      .neq('slug', currentSlug)
      .eq('is_active', true)
      .order('sort_order')
      .limit(limit);
    
    if (error) {
      console.error('Error fetching related trade shows:', error);
      return null;
    }
    
    return data as TradeShow[];
  } catch (error) {
    console.error('Unexpected error fetching related trade shows:', error);
    return null;
  }
}

export async function getTradeShowsByCategory(category: string): Promise<TradeShow[] | null> {
  try {
    const { data, error } = await supabase
      .from('trade_shows')
      .select('*')
      .eq('category', category)
      .eq('is_active', true)
      .order('sort_order');
    
    if (error) {
      console.error(`Error fetching trade shows by category ${category}:`, error);
      return null;
    }
    
    return data as TradeShow[];
  } catch (error) {
    console.error(`Unexpected error fetching trade shows by category ${category}:`, error);
    return null;
  }
}

export async function getUpcomingTradeShows(limit?: number): Promise<TradeShow[] | null> {
  try {
    let query = supabase
      .from('trade_shows')
      .select('*')
      .eq('is_active', true)
      .gt('start_date', new Date().toISOString().split('T')[0])
      .order('start_date');
    
    if (limit) {
      query = query.limit(limit);
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error('Error fetching upcoming trade shows:', error);
      return null;
    }
    
    return data as TradeShow[];
  } catch (error) {
    console.error('Unexpected error fetching upcoming trade shows:', error);
    return null;
  }
}
