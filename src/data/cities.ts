// src/data/cities.ts

// City Hero Section Interface
export interface CityHero {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

// What We Do Interface
export interface WhatWeDo {
  title: string;
  subtitle: string;
  description: string; // HTML content
}

// Benefit Item Interface
export interface BenefitItem {
  text: string; // HTML content
}

// Why Choose Us Interface
export interface WhyChooseUs {
  title: string;
  subtitle: string;
  benefits: BenefitItem[];
  mainImage: string;
}

// Exhibiting Experience Interface
export interface ExhibitingExperience {
  title: string;
  subtitle: string;
  benefits: string[]; // HTML content
  excellence: {
    title: string;
    subtitle: string;
    points: string[]; // HTML content
  };
}

// City Detail Interface
export interface CityDetail {
  id: string;
  countrySlug: string;
  slug: string;
  name: string;
  hero: CityHero;
  whyChooseUs: WhyChooseUs;
  whatWeDo: WhatWeDo;
  exhibitingExperience: ExhibitingExperience;
}

// Import Supabase client
import { supabase } from '@/lib/supabase';

// Define the database city type that matches our SQL schema
export interface DBCity {
  id: string;
  country_slug: string;
  city_slug: string;
  name: string;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  hero_title: string | null;
  hero_subtitle: string | null;
  hero_background_image_url: string | null;
  why_choose_us_title: string | null;
  why_choose_us_subtitle: string | null;
  why_choose_us_main_image_url: string | null;
  why_choose_us_benefits_html: string | null;
  what_we_do_title: string | null;
  what_we_do_subtitle: string | null;
  what_we_do_description_html: string | null;
  portfolio_title_template: string | null;
  exhibiting_experience_title: string | null;
  exhibiting_experience_subtitle: string | null;
  exhibiting_experience_benefits_html: string | null;
  exhibiting_experience_excellence_title: string | null;
  exhibiting_experience_excellence_subtitle: string | null;
  exhibiting_experience_excellence_points_html: string | null;
}

// Function to get city data by country and city slug
export async function getCityByCountryAndSlugFromDB(countrySlug: string, citySlug: string): Promise<CityDetail | null> {
  try {
    const { data, error } = await supabase
      .from('cities')
      .select('*')
      .eq('country_slug', countrySlug.toLowerCase())
      .eq('city_slug', citySlug.toLowerCase())
      .single();

    if (error) {
      console.error('Error fetching city data:', error);
      return null;
    }

    if (!data) {
      return null;
    }

    // Transform database data to match our TypeScript interfaces
    const cityData: CityDetail = {
      id: data.id,
      countrySlug: data.country_slug,
      slug: data.city_slug,
      name: data.name,
      hero: {
        title: data.hero_title || '',
        subtitle: data.hero_subtitle || '',
        backgroundImage: data.hero_background_image_url || ''
      },
      whyChooseUs: {
        title: data.why_choose_us_title || '',
        subtitle: data.why_choose_us_subtitle || '',
        mainImage: data.why_choose_us_main_image_url || '',
        benefits: data.why_choose_us_benefits_html ? 
          [{ text: data.why_choose_us_benefits_html }] : 
          [{ text: '' }]
      },
      whatWeDo: {
        title: data.what_we_do_title || '',
        subtitle: data.what_we_do_subtitle || '',
        description: data.what_we_do_description_html || ''
      },
      exhibitingExperience: {
        title: data.exhibiting_experience_title || '',
        subtitle: data.exhibiting_experience_subtitle || '',
        benefits: data.exhibiting_experience_benefits_html ? 
          data.exhibiting_experience_benefits_html.split('</p><p>').map((b: string, i: number, arr: string[]) => {
            // Add back the <p> tags that were removed by split
            if (i === 0) return `<p>${b}`;
            if (i === arr.length - 1) return `${b}</p>`;
            return `<p>${b}</p>`;
          }).filter((b: string) => b.length > 7) : // Filter out empty or malformed entries
          [],
        excellence: {
          title: data.exhibiting_experience_excellence_title || '',
          subtitle: data.exhibiting_experience_excellence_subtitle || '',
          points: data.exhibiting_experience_excellence_points_html ? 
            data.exhibiting_experience_excellence_points_html.split('</p><p>').map((p: string, i: number, arr: string[]) => {
              // Add back the <p> tags that were removed by split
              if (i === 0) return `<p>${p}`;
              if (i === arr.length - 1) return `${p}</p>`;
              return `<p>${p}</p>`;
            }).filter((p: string) => p.length > 7) : // Filter out empty or malformed entries
            []
        }
      }
    };

    return cityData;
  } catch (error) {
    console.error('Error in getCityByCountryAndSlugFromDB:', error);
    return null;
  }
}

// Function to get all available cities for static generation
export async function getAvailableCitiesFromDB(): Promise<{countrySlug: string, citySlug: string}[]> {
  try {
    const { data, error } = await supabase
      .from('cities')
      .select('country_slug, city_slug');

    if (error) {
      console.error('Error fetching available cities:', error);
      return [];
    }

    return data.map(city => ({
      countrySlug: city.country_slug,
      citySlug: city.city_slug
    }));
  } catch (error) {
    console.error('Error in getAvailableCitiesFromDB:', error);
    return [];
  }
}

// Function to check if a city is available
export async function isCityAvailableFromDB(countrySlug: string, citySlug: string): Promise<boolean> {
  try {
    const { count, error } = await supabase
      .from('cities')
      .select('*', { count: 'exact', head: true })
      .eq('country_slug', countrySlug.toLowerCase())
      .eq('city_slug', citySlug.toLowerCase());

    if (error) {
      console.error('Error checking city availability:', error);
      return false;
    }

    return count !== null && count > 0;
  } catch (error) {
    console.error('Error in isCityAvailableFromDB:', error);
    return false;
  }
}

// Function to generate metadata for a city page with full SEO support
export async function generateCityMetadata(countrySlug: string, citySlug: string) {
  try {
    // Get SEO data directly from database
    const { data, error } = await supabase
      .from('cities')
      .select('seo_title, seo_description, seo_keywords, name')
      .eq('country_slug', countrySlug.toLowerCase())
      .eq('city_slug', citySlug.toLowerCase())
      .single();
      
    if (error || !data) {
      // Fallback to basic SEO data when database record is not found
      return {
        title: 'City Not Found',
        description: 'The requested city page could not be found.',
      };
    }
    
    // Use database SEO data, with fallbacks to generated content if database fields are null
    const cityName = data.name || `${citySlug.charAt(0).toUpperCase() + citySlug.slice(1)}`;
    
    return {
      title: data.seo_title || `${cityName} Exhibition Stand Design & Build Solutions`,
      description: data.seo_description || `Discover our professional exhibition stand design and build solutions in ${cityName}. Custom trade show booths and displays.`,
      keywords: data.seo_keywords || `exhibition stands, trade shows, ${cityName}, booth design, event marketing`,
      openGraph: {
        title: data.seo_title || `${cityName} Exhibition Stand Design & Build Solutions`,
        description: data.seo_description || `Discover our professional exhibition stand design and build solutions in ${cityName}. Custom trade show booths and displays.`,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: data.seo_title || `${cityName} Exhibition Stand Design & Build Solutions`,
        description: data.seo_description || `Discover our professional exhibition stand design and build solutions in ${cityName}. Custom trade show booths and displays.`,
      },
    };
  } catch (error) {
    console.error('Error generating city metadata:', error);
    // Fallback to basic SEO data in case of database error
    return {
      title: 'Exhibition Stand Design & Build Solutions',
      description: 'Professional exhibition stand design and construction services for trade shows and events.',
      keywords: 'exhibition stands, trade shows, booth design, event marketing',
      openGraph: {
        title: 'Exhibition Stand Design & Build Solutions',
        description: 'Professional exhibition stand design and construction services for trade shows and events.',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Exhibition Stand Design & Build Solutions',
        description: 'Professional exhibition stand design and construction services for trade shows and events.',
      },
    };
  }
}
