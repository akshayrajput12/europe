// src/data/trade-shows.ts
import { 
  getTradeShowsPageData, 
  getAllActiveTradeShows, 
  getTradeShowBySlug as dbGetTradeShowBySlug,
  getRelatedTradeShows as dbGetRelatedTradeShows,
  getTradeShowsByCategory as dbGetTradeShowsByCategory,
  getUpcomingTradeShows as dbGetUpcomingTradeShows
} from "@/lib/database";

export interface TradeShow {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  startDate: string;
  endDate: string;
  location: string;
  country: string;
  city: string;
  category: string;
  logo: string;
  logoAlt?: string;
  organizer?: string;
  website?: string;
  venue?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
}

export interface TradeShowData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroImageAlt?: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  shows: TradeShow[];
}

// Dynamic data fetching functions
export async function getTradeShowData(): Promise<TradeShowData | null> {
  try {
    // Fetch page data
    const pageData = await getTradeShowsPageData();
    if (!pageData) {
      console.error('Failed to fetch trade shows page data');
      return null;
    }

    // Fetch all trade shows
    const showsData = await getAllActiveTradeShows();
    if (!showsData) {
      console.error('Failed to fetch trade shows data');
      return null;
    }

    // Transform database data to match the interface
    const shows: TradeShow[] = showsData.map(show => ({
      id: show.id,
      slug: show.slug,
      title: show.title,
      excerpt: show.excerpt,
      content: show.content,
      startDate: show.start_date,
      endDate: show.end_date,
      location: show.location,
      country: show.country,
      city: show.city,
      category: show.category,
      logo: show.logo,
      logoAlt: show.logo_alt,
      organizer: show.organizer,
      website: show.website,
      venue: show.venue,
      metaTitle: show.meta_title,
      metaDescription: show.meta_description,
      metaKeywords: show.meta_keywords
    }));

    return {
      title: pageData.hero_title,
      subtitle: pageData.hero_subtitle,
      description: pageData.description,
      heroImage: pageData.hero_background_image,
      heroImageAlt: pageData.hero_background_image_alt,
      metaTitle: pageData.meta_title,
      metaDescription: pageData.meta_description,
      metaKeywords: pageData.meta_keywords,
      shows
    };
  } catch (error) {
    console.error('Error fetching trade show data:', error);
    return null;
  }
}

export async function getTradeShows(): Promise<TradeShow[]> {
  try {
    const showsData = await getAllActiveTradeShows();
    if (!showsData) return [];

    return showsData.map(show => ({
      id: show.id,
      slug: show.slug,
      title: show.title,
      excerpt: show.excerpt,
      content: show.content,
      startDate: show.start_date,
      endDate: show.end_date,
      location: show.location,
      country: show.country,
      city: show.city,
      category: show.category,
      logo: show.logo,
      logoAlt: show.logo_alt,
      organizer: show.organizer,
      website: show.website,
      venue: show.venue,
      metaTitle: show.meta_title,
      metaDescription: show.meta_description,
      metaKeywords: show.meta_keywords
    }));
  } catch (error) {
    console.error('Error fetching trade shows:', error);
    return [];
  }
}

export async function getTradeShowBySlug(slug: string): Promise<TradeShow | null> {
  try {
    const show = await dbGetTradeShowBySlug(slug);
    if (!show) return null;

    return {
      id: show.id,
      slug: show.slug,
      title: show.title,
      excerpt: show.excerpt,
      content: show.content,
      startDate: show.start_date,
      endDate: show.end_date,
      location: show.location,
      country: show.country,
      city: show.city,
      category: show.category,
      logo: show.logo,
      logoAlt: show.logo_alt,
      organizer: show.organizer,
      website: show.website,
      venue: show.venue,
      metaTitle: show.meta_title,
      metaDescription: show.meta_description,
      metaKeywords: show.meta_keywords
    };
  } catch (error) {
    console.error(`Error fetching trade show with slug ${slug}:`, error);
    return null;
  }
}

export async function getRelatedTradeShows(currentSlug: string, limit: number = 2): Promise<TradeShow[]> {
  try {
    const showsData = await dbGetRelatedTradeShows(currentSlug, limit);
    if (!showsData) return [];

    return showsData.map(show => ({
      id: show.id,
      slug: show.slug,
      title: show.title,
      excerpt: show.excerpt,
      content: show.content,
      startDate: show.start_date,
      endDate: show.end_date,
      location: show.location,
      country: show.country,
      city: show.city,
      category: show.category,
      logo: show.logo,
      logoAlt: show.logo_alt,
      organizer: show.organizer,
      website: show.website,
      venue: show.venue,
      metaTitle: show.meta_title,
      metaDescription: show.meta_description,
      metaKeywords: show.meta_keywords
    }));
  } catch (error) {
    console.error('Error fetching related trade shows:', error);
    return [];
  }
}

export async function getTradeShowsByCategory(category: string): Promise<TradeShow[]> {
  try {
    const showsData = await dbGetTradeShowsByCategory(category);
    if (!showsData) return [];

    return showsData.map(show => ({
      id: show.id,
      slug: show.slug,
      title: show.title,
      excerpt: show.excerpt,
      content: show.content,
      startDate: show.start_date,
      endDate: show.end_date,
      location: show.location,
      country: show.country,
      city: show.city,
      category: show.category,
      logo: show.logo,
      logoAlt: show.logo_alt,
      organizer: show.organizer,
      website: show.website,
      venue: show.venue,
      metaTitle: show.meta_title,
      metaDescription: show.meta_description,
      metaKeywords: show.meta_keywords
    }));
  } catch (error) {
    console.error(`Error fetching trade shows by category ${category}:`, error);
    return [];
  }
}

export async function getUpcomingTradeShows(limit?: number): Promise<TradeShow[]> {
  try {
    const showsData = await dbGetUpcomingTradeShows(limit);
    if (!showsData) return [];

    return showsData.map(show => ({
      id: show.id,
      slug: show.slug,
      title: show.title,
      excerpt: show.excerpt,
      content: show.content,
      startDate: show.start_date,
      endDate: show.end_date,
      location: show.location,
      country: show.country,
      city: show.city,
      category: show.category,
      logo: show.logo,
      logoAlt: show.logo_alt,
      organizer: show.organizer,
      website: show.website,
      venue: show.venue,
      metaTitle: show.meta_title,
      metaDescription: show.meta_description,
      metaKeywords: show.meta_keywords
    }));
  } catch (error) {
    console.error('Error fetching upcoming trade shows:', error);
    return [];
  }
}

// Export the hero image from the database
export async function getTradeShowHeroImage(): Promise<{ url: string; alt: string } | null> {
  try {
    const pageData = await getTradeShowsPageData();
    if (!pageData) return null;

    return {
      url: pageData.hero_background_image,
      alt: pageData.hero_background_image_alt
    };
  } catch (error) {
    console.error('Error fetching trade show hero image:', error);
    return null;
  }
}
