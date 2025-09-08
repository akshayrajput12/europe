import { supabase } from './supabase'
import { createServerClient } from './supabase-server'

// Generic function to fetch data from any table
export async function fetchData<T>(table: string, select = '*'): Promise<T[] | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
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
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data: result, error } = await client
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
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
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
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
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
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
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
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
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
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
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
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    let query = client
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

// Blog interfaces
export interface BlogPage {
  id: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  hero_title: string;
  hero_subtitle: string;
  hero_background_image: string;
  hero_background_image_alt: string;
  hero_image: string;
  description: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface BlogPostDB {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  published_date: string;
  featured_image: string;
  featured_image_alt: string;
  category: string;
  author: string;
  read_time: string;
  tags: string[];
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  sort_order: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

// Blog functions
export async function getBlogPageData(): Promise<BlogPage | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('blog_page')
      .select('*')
      .eq('is_active', true)
      .single();
    
    if (error) {
      console.error('Error fetching blog page data:', error);
      return null;
    }
    
    return data as BlogPage;
  } catch (error) {
    console.error('Unexpected error fetching blog page data:', error);
    return null;
  }
}

export async function getAllActiveBlogPosts(): Promise<BlogPostDB[] | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('blog_posts')
      .select('*')
      .eq('is_active', true)
      .order('sort_order');
    
    if (error) {
      console.error('Error fetching blog posts:', error);
      return null;
    }
    
    return data as BlogPostDB[];
  } catch (error) {
    console.error('Unexpected error fetching blog posts:', error);
    return null;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostDB | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();
    
    if (error) {
      console.error(`Error fetching blog post with slug ${slug}:`, error);
      return null;
    }
    
    return data as BlogPostDB;
  } catch (error) {
    console.error(`Unexpected error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}

export async function getRelatedBlogPosts(currentSlug: string, limit: number = 3): Promise<BlogPostDB[] | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('blog_posts')
      .select('*')
      .neq('slug', currentSlug)
      .eq('is_active', true)
      .order('sort_order')
      .limit(limit);
    
    if (error) {
      console.error('Error fetching related blog posts:', error);
      return null;
    }
    
    return data as BlogPostDB[];
  } catch (error) {
    console.error('Unexpected error fetching related blog posts:', error);
    return null;
  }
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPostDB[] | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('blog_posts')
      .select('*')
      .eq('category', category)
      .eq('is_active', true)
      .order('sort_order');
    
    if (error) {
      console.error(`Error fetching blog posts by category ${category}:`, error);
      return null;
    }
    
    return data as BlogPostDB[];
  } catch (error) {
    console.error(`Unexpected error fetching blog posts by category ${category}:`, error);
    return null;
  }
}

// Testimonials interfaces
export interface TestimonialsPage {
  id: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  hero_title: string;
  hero_background_image: string;
  intro_title: string;
  intro_subtitle: string;
  intro_description: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface TestimonialDB {
  id: string;
  page_id: string;
  client_name: string;
  company_name: string;
  company_logo_url: string;
  rating: number;
  testimonial_text: string;
  is_featured: boolean;
  display_order: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

// Testimonials functions
export async function getTestimonialsPageData(): Promise<TestimonialsPage | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('testimonials_page')
      .select('*')
      .eq('is_active', true)
      .single();
    
    if (error) {
      console.error('Error fetching testimonials page data:', error);
      return null;
    }
    
    return data as TestimonialsPage;
  } catch (error) {
    console.error('Unexpected error fetching testimonials page data:', error);
    return null;
  }
}

export async function getAllActiveTestimonials(): Promise<TestimonialDB[] | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('testimonials')
      .select('*')
      .eq('is_active', true)
      .order('display_order');
    
    if (error) {
      console.error('Error fetching testimonials:', error);
      return null;
    }
    
    return data as TestimonialDB[];
  } catch (error) {
    console.error('Unexpected error fetching testimonials:', error);
    return null;
  }
}

export async function getFeaturedTestimonials(limit?: number): Promise<TestimonialDB[] | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    let query = client
      .from('testimonials')
      .select('*')
      .eq('is_active', true)
      .eq('is_featured', true)
      .order('display_order');
    
    if (limit) {
      query = query.limit(limit);
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error('Error fetching featured testimonials:', error);
      return null;
    }
    
    return data as TestimonialDB[];
  } catch (error) {
    console.error('Unexpected error fetching featured testimonials:', error);
    return null;
  }
}
