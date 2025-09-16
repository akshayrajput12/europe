// src/data/trade-shows.ts
import { 
  getTradeShowsPageData, 
  getAllActiveTradeShows, 
  getTradeShowBySlug as dbGetTradeShowBySlug,
  getRelatedTradeShows as dbGetRelatedTradeShows,
  getTradeShowsByCategory as dbGetTradeShowsByCategory,
  getUpcomingTradeShows as dbGetUpcomingTradeShows,
  getPaginatedTradeShows as dbGetPaginatedTradeShows
} from "@/lib/database";

export interface TradeShow {
  id: string;
  slug: string;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  location: string;
  country: string;
  city: string;
  logo: string;
  logoAlt?: string;
  heroImage?: string;
  heroImageAlt?: string;
  website?: string;
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

// Helper function to check if a trade show is expired
export function isTradeShowExpired(endDate: string): boolean {
  const today = new Date();
  const end = new Date(endDate);
  // Set time to end of day for comparison
  end.setHours(23, 59, 59, 999);
  return end < today;
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

    // Transform database data to match the interface and filter out expired shows
    const shows: TradeShow[] = showsData
      .filter(show => !isTradeShowExpired(show.end_date)) // Filter out expired trade shows
      .map(show => ({
        id: show.id,
        slug: show.slug,
        title: show.title,
        content: show.content,
        startDate: show.start_date,
        endDate: show.end_date,
        location: show.location,
        country: show.country,
        city: show.city,
        logo: show.logo,
        logoAlt: show.logo_alt,
        heroImage: pageData.hero_background_image,
        heroImageAlt: pageData.hero_background_image_alt,
        website: show.website,
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

    // Fetch the page data to get the hero image
    const pageData = await getTradeShowsPageData();

    // Filter out expired trade shows
    return showsData
      .filter(show => !isTradeShowExpired(show.end_date)) // Filter out expired trade shows
      .map(show => ({
        id: show.id,
        slug: show.slug,
        title: show.title,
        content: show.content,
        startDate: show.start_date,
        endDate: show.end_date,
        location: show.location,
        country: show.country,
        city: show.city,
        logo: show.logo,
        logoAlt: show.logo_alt,
        heroImage: pageData?.hero_background_image,
        heroImageAlt: pageData?.hero_background_image_alt,
        website: show.website,
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

    // Check if the trade show is expired
    if (isTradeShowExpired(show.end_date)) {
      console.log(`Trade show with slug ${slug} is expired`);
      return null;
    }

    // Fetch the page data to get the hero image
    const pageData = await getTradeShowsPageData();

    return {
      id: show.id,
      slug: show.slug,
      title: show.title,
      content: show.content,
      startDate: show.start_date,
      endDate: show.end_date,
      location: show.location,
      country: show.country,
      city: show.city,
      logo: show.logo,
      logoAlt: show.logo_alt,
      heroImage: pageData?.hero_background_image,
      heroImageAlt: pageData?.hero_background_image_alt,
      website: show.website,
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

    // Fetch the page data to get the hero image
    const pageData = await getTradeShowsPageData();

    // Filter out expired trade shows
    return showsData
      .filter(show => !isTradeShowExpired(show.end_date)) // Filter out expired trade shows
      .map(show => ({
        id: show.id,
        slug: show.slug,
        title: show.title,
        content: show.content,
        startDate: show.start_date,
        endDate: show.end_date,
        location: show.location,
        country: show.country,
        city: show.city,
        logo: show.logo,
        logoAlt: show.logo_alt,
        heroImage: pageData?.hero_background_image,
        heroImageAlt: pageData?.hero_background_image_alt,
        website: show.website,
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

    // Fetch the page data to get the hero image
    const pageData = await getTradeShowsPageData();

    // Filter out expired trade shows
    return showsData
      .filter(show => !isTradeShowExpired(show.end_date)) // Filter out expired trade shows
      .map(show => ({
        id: show.id,
        slug: show.slug,
        title: show.title,
        content: show.content,
        startDate: show.start_date,
        endDate: show.end_date,
        location: show.location,
        country: show.country,
        city: show.city,
        logo: show.logo,
        logoAlt: show.logo_alt,
        heroImage: pageData?.hero_background_image,
        heroImageAlt: pageData?.hero_background_image_alt,
        website: show.website,
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

    // Fetch the page data to get the hero image
    const pageData = await getTradeShowsPageData();

    // Filter out expired trade shows (shouldn't be needed for upcoming shows, but added for safety)
    return showsData
      .filter(show => !isTradeShowExpired(show.end_date))
      .map(show => ({
        id: show.id,
        slug: show.slug,
        title: show.title,
        content: show.content,
        startDate: show.start_date,
        endDate: show.end_date,
        location: show.location,
        country: show.country,
        city: show.city,
        logo: show.logo,
        logoAlt: show.logo_alt,
        heroImage: pageData?.hero_background_image,
        heroImageAlt: pageData?.hero_background_image_alt,
        website: show.website,
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

// Add a new function to get paginated trade shows
export async function getPaginatedTradeShows(page: number = 1, limit: number = 6): Promise<{ shows: TradeShow[]; total: number } | null> {
  try {
    const data = await dbGetPaginatedTradeShows(page, limit);
    if (!data) return null;

    // Fetch the page data to get the hero image
    const pageData = await getTradeShowsPageData();

    // Transform database data to match the interface and filter out expired shows
    const shows: TradeShow[] = data.shows
      .filter(show => !isTradeShowExpired(show.end_date)) // Filter out expired trade shows
      .map(show => ({
        id: show.id,
        slug: show.slug,
        title: show.title,
        content: show.content,
        startDate: show.start_date,
        endDate: show.end_date,
        location: show.location,
        country: show.country,
        city: show.city,
        logo: show.logo,
        logoAlt: show.logo_alt,
        heroImage: pageData?.hero_background_image,
        heroImageAlt: pageData?.hero_background_image_alt,
        website: show.website,
        metaTitle: show.meta_title,
        metaDescription: show.meta_description,
        metaKeywords: show.meta_keywords
      }));

    return {
      shows,
      total: data.total
    };
  } catch (error) {
    console.error('Unexpected error fetching paginated trade shows:', error);
    return null;
  }
}
