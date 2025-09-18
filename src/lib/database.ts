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

// Optimized interface for paginated trade shows (only fields needed for display)
export interface PaginatedTradeShow {
  id: string;
  slug: string;
  title: string;
  start_date: string;
  end_date: string;
  location: string;
  logo: string;
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

// Add cache for trade shows page data
interface PageDataCache {
  data: TradeShowPage | null;
  timestamp: number;
}

let pageDataCache: PageDataCache | null = null;
const PAGE_DATA_CACHE_TTL = 30 * 60 * 1000; // 30 minutes cache TTL

export async function getTradeShowsPageData(): Promise<TradeShowPage | null> {
  try {
    const now = Date.now();
    
    // Check if we have valid cached data
    if (pageDataCache && (now - pageDataCache.timestamp) < PAGE_DATA_CACHE_TTL) {
      return pageDataCache.data;
    }

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
    
    const result = data as TradeShowPage;
    
    // Cache the result
    pageDataCache = { data: result, timestamp: now };
    
    return result;
  } catch (error) {
    console.error('Unexpected error fetching trade shows page data:', error);
    return null;
  }
}

// Add cache for all active trade shows
let allTradeShowsCache: { data: TradeShow[] | null, timestamp: number } | null = null;
const ALL_TRADE_SHOWS_CACHE_TTL = 30 * 60 * 1000; // 30 minutes cache TTL

export async function getAllActiveTradeShows(): Promise<TradeShow[] | null> {
  try {
    const now = Date.now();
    
    // Check if we have valid cached data
    if (allTradeShowsCache && (now - allTradeShowsCache.timestamp) < ALL_TRADE_SHOWS_CACHE_TTL) {
      return allTradeShowsCache.data;
    }

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
    
    // Cache the result
    allTradeShowsCache = { data: data as TradeShow[], timestamp: now };
    
    return data as TradeShow[];
  } catch (error) {
    console.error('Unexpected error fetching trade shows:', error);
    return null;
  }
}

// Add a simple in-memory cache for paginated results
const paginationCache = new Map<string, { data: { shows: PaginatedTradeShow[]; total: number }, timestamp: number }>()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes cache TTL

// Add a new function to get paginated trade shows with search functionality and caching
export async function getPaginatedTradeShows(page: number = 1, limit: number = 6, searchTerm: string = ''): Promise<{ shows: PaginatedTradeShow[]; total: number } | null> {
  try {
    // Create cache key
    const cacheKey = `${page}-${limit}-${searchTerm}`
    const now = Date.now()
    
    // Check if we have valid cached data
    const cached = paginationCache.get(cacheKey)
    if (cached && (now - cached.timestamp) < CACHE_TTL) {
      return cached.data
    }

    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    // Calculate offset
    const offset = (page - 1) * limit

    // Build the query
    let query = client
      .from('trade_shows')
      .select(`
        id,
        slug,
        title,
        start_date,
        end_date,
        location,
        logo
      `)
      .eq('is_active', true)

    // Add search filter if provided
    if (searchTerm) {
      query = query.or(`title.ilike.%${searchTerm}%,location.ilike.%${searchTerm}%`)
    }

    // Get total count first
    const countQuery = client
      .from('trade_shows')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true)
    
    // Add search filter to count query if provided
    if (searchTerm) {
      countQuery.or(`title.ilike.%${searchTerm}%,location.ilike.%${searchTerm}%`)
    }
    
    const { count, error: countError } = await countQuery
    
    if (countError) {
      console.error('Error fetching trade shows count:', countError)
      return null
    }

    // Get paginated shows with only necessary fields for the card display
    const { data, error } = await query
      .order('sort_order')
      .range(offset, offset + limit - 1)
    
    if (error) {
      console.error('Error fetching paginated trade shows:', error)
      return null
    }

    const result = {
      shows: data as PaginatedTradeShow[],
      total: count || 0
    }

    // Cache the result
    paginationCache.set(cacheKey, { data: result, timestamp: now })
    
    return result
  } catch (error) {
    console.error('Unexpected error fetching paginated trade shows:', error)
    return null
  }
}

// Add cache for individual trade shows by slug
const tradeShowBySlugCache = new Map<string, { data: TradeShow | null, timestamp: number }>();
const TRADE_SHOW_CACHE_TTL = 30 * 60 * 1000; // 30 minutes cache TTL

export async function getTradeShowBySlug(slug: string): Promise<TradeShow | null> {
  try {
    const now = Date.now();
    
    // Check if we have valid cached data
    const cached = tradeShowBySlugCache.get(slug);
    if (cached && (now - cached.timestamp) < TRADE_SHOW_CACHE_TTL) {
      return cached.data;
    }

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
      // Cache the null result to avoid repeated failed requests
      tradeShowBySlugCache.set(slug, { data: null, timestamp: now });
      return null;
    }
    
    const result = data as TradeShow;
    
    // Cache the result
    tradeShowBySlugCache.set(slug, { data: result, timestamp: now });
    
    return result;
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

// Portfolio interfaces
export interface PortfolioPageDB {
  id: string;
  hero_title: string;
  hero_background_image: string;
  portfolio_title: string;
  portfolio_subtitle: string;
  portfolio_items: PortfolioItemDB[];
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface PortfolioItemDB {
  image: string;
  featured?: boolean;
}

// Portfolio functions
export async function getPortfolioPageDataFromDB(): Promise<PortfolioPageDB | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('portfolio_page')
      .select('*')
      .eq('is_active', true)
      .single();
    
    if (error) {
      console.error('Error fetching portfolio page data:', error);
      return null;
    }
    
    return data as PortfolioPageDB;
  } catch (error) {
    console.error('Unexpected error fetching portfolio page data:', error);
    return null;
  }
}

export async function getAllPortfolioItems(): Promise<PortfolioItemDB[] | null> {
  try {
    const portfolioData = await getPortfolioPageDataFromDB();
    if (!portfolioData) {
      return null;
    }
    
    return portfolioData.portfolio_items || [];
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return null;
  }
}

// Define interfaces for the JSONB fields
interface FormFieldData {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

interface OfficeLocationData {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
}

interface SupportItemData {
  icon: string;
  title: string;
  description: string;
}

// Contact page interfaces
interface ContactPageData {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    backgroundImage: string;
  };
  contactInfo: {
    title: string;
    address: string;
    fullAddress: string;
    phone: string[];
    email: string;
  };
  formFields: FormFieldData[];
  otherOffices: {
    title: string;
    offices: OfficeLocationData[];
  };
  support: {
    title: string;
    description: string;
    items: SupportItemData[];
  };
  map: {
    embedUrl: string;
  };
}

// Contact page functions
export async function getContactPageData(): Promise<ContactPageData | null> {
  try {
    let client;
    try {
      client = createServerClient();
    } catch {
      client = supabase;
    }

    // Call the PostgreSQL function directly
    const { data, error } = await client.rpc('get_contact_page_data');
    
    if (error) {
      console.error('Error fetching contact page data:', error);
      return null;
    }
    
    if (!data) {
      console.error('No contact page data found');
      return null;
    }
    
    // Transform the data to match our TypeScript interface
    return {
      meta: {
        title: data.meta.title,
        description: data.meta.description,
        keywords: data.meta.keywords
      },
      hero: {
        title: data.hero.title,
        backgroundImage: data.hero.backgroundImage
      },
      contactInfo: {
        title: data.contactInfo.title,
        address: data.contactInfo.address,
        fullAddress: data.contactInfo.fullAddress,
        phone: data.contactInfo.phone.filter((phone: string) => phone), // Filter out empty phones
        email: data.contactInfo.email
      },
      formFields: data.formFields,
      otherOffices: {
        title: data.otherOffices.title,
        offices: data.otherOffices.offices
      },
      support: {
        title: data.support.title,
        description: data.support.description,
        items: data.support.items
      },
      map: {
        embedUrl: data.map.embedUrl
      }
    } as ContactPageData;
  } catch (error) {
    console.error('Unexpected error fetching contact page data:', error);
    return null;
  }
}

// Function to clear all caches (useful for revalidation)
export function clearTradeShowCaches(): void {
  pageDataCache = null;
  allTradeShowsCache = null;
  paginationCache.clear();
  tradeShowBySlugCache.clear();
}

// Add the form submission interface and functions at the end of the file
export interface FormSubmission {
  id?: string
  form_type: string
  submission_data: Record<string, unknown>
  documents?: Array<{
    field_name: string
    file_name: string
    file_size: number
    file_type: string
  }>
  created_at?: string
  updated_at?: string
}

export async function getAllFormSubmissions(): Promise<FormSubmission[] | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('form_submissions')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching form submissions:', error)
      return null
    }
    
    return data as FormSubmission[]
  } catch (error) {
    console.error('Unexpected error fetching form submissions:', error)
    return null
  }
}

export async function getFormSubmissionsByType(formType: string): Promise<FormSubmission[] | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('form_submissions')
      .select('*')
      .eq('form_type', formType)
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error(`Error fetching ${formType} submissions:`, error)
      return null
    }
    
    return data as FormSubmission[]
  } catch (error) {
    console.error(`Unexpected error fetching ${formType} submissions:`, error)
    return null
  }
}

// Privacy page interfaces
export interface PrivacyPageDB {
  id: string;
  title: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  content: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

// Privacy page functions
export async function getPrivacyPageData(): Promise<PrivacyPageDB | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('privacy_page')
      .select('*')
      .eq('is_active', true)
      .single();
      
    if (error) {
      console.error('Error fetching privacy page data:', error);
      return null;
    }
    
    return data as PrivacyPageDB;
  } catch (error) {
    console.error('Error fetching privacy page data:', error);
    return null;
  }
}

// Terms page interfaces
export interface TermsPageDB {
  id: string;
  title: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  content: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

// Terms page functions
export async function getTermsPageData(): Promise<TermsPageDB | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('terms_page')
      .select('*')
      .eq('is_active', true)
      .single();
      
    if (error) {
      console.error('Error fetching terms page data:', error);
      return null;
    }
    
    return data as TermsPageDB;
  } catch (error) {
    console.error('Error fetching terms page data:', error);
    return null;
  }
}


