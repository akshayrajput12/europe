// src/data/countries.ts

// Import Supabase client
import { supabase } from '@/lib/supabase';

// Interfaces for strong typing
export interface CountryHero {
  title: string
  subtitle: string
  backgroundImage: string
}

export interface WhyChooseUs {
  title: string
  subtitle: string
  benefits: string
  mainImage: string
}

export interface CompanyInfo {
  title: string
  content: string
}

export interface BestCompany {
  title: string
  subtitle: string
  content: string
}

export interface WhatWeDo {
  title: string
  subtitle: string
  description: string
}

export interface ProcessStep {
  id: string
  icon: string
  title: string
  description: string
}

export interface ProcessSection {
  title: string
  steps: ProcessStep[]
}

export interface City {
  name: string
  link: string
}

export interface CitiesSection {
  title: string
  subtitle: string
}

// Simple interface for country cards (like cities grid)
export interface CountryCard {
  slug: string
  name: string
}

// Interface for database city records
export interface DatabaseCity {
  id: number;
  name: string;
  country_slug: string;
  city_slug: string;
}

// Interface for countries page header
export interface CountriesData {
  title: string
  subtitle: string
}

// Interface for country detail pages
export interface CountryDetail {
  id: string
  slug: string
  hero: CountryHero
  whyChooseUs: WhyChooseUs
  whatWeDo: WhatWeDo
  companyInfo: CompanyInfo
  bestCompany: BestCompany
  processSection: ProcessSection
  citiesSection: CitiesSection
}

export interface CountryDetailsData {
  countries: CountryDetail[]
}

// Countries page header data
export const countriesData: CountriesData = {
  title: "EXHIBITION STAND SERVICES",
  subtitle: "IN EUROPE"
}

// Database functions for country details
export const getCountryBySlugFromDB = async (slug: string): Promise<CountryDetail | null> => {
  // This function will fetch country data from the database
  try {
    const { data, error } = await supabase
      .from('countries')
      .select('*')
      .eq('slug', slug.toLowerCase())
      .eq('is_active', true)
      .single();

    if (error) {
      console.error('Error fetching country data:', error);
      return null;
    }

    if (!data) {
      return null;
    }

    // Transform database data to match our TypeScript interfaces
    const countryData: CountryDetail = {
      id: data.id,
      slug: data.slug,
      hero: {
        title: data.hero_title || '',
        subtitle: data.hero_subtitle || '',
        backgroundImage: data.hero_background_image_url || ''
      },
      whyChooseUs: {
        title: data.why_choose_us_title || '',
        subtitle: data.why_choose_us_subtitle || '',
        benefits: data.why_choose_us_benefits_html || '',
        mainImage: data.why_choose_us_main_image_url || ''
      },
      whatWeDo: {
        title: data.what_we_do_title || '',
        subtitle: data.what_we_do_subtitle || '',
        description: data.what_we_do_description_html || ''
      },
      companyInfo: {
        title: data.company_info_title || '',
        content: data.company_info_content_html || ''
      },
      bestCompany: {
        title: data.best_company_title || '',
        subtitle: data.best_company_subtitle || '',
        content: data.best_company_content_html || ''
      },
      processSection: {
        title: data.process_section_title || '',
        steps: data.process_section_steps && Array.isArray(data.process_section_steps) 
          ? data.process_section_steps.map((step: { id?: string; icon?: string; title?: string; description?: string }, index: number) => ({
              id: step.id || `${index + 1}`,
              icon: step.icon || ['💡', '✏️', '🏭', '🚚', '🔧', '🎯'][index] || '💡',
              title: step.title || '',
              description: step.description || ''
            }))
          : []
      },
      citiesSection: {
        title: data.cities_section_title || '',
        subtitle: data.cities_section_subtitle || ''
      }
    };

    return countryData;
  } catch (error) {
    console.error('Error fetching country data:', error);
    return null;
  }
};

export const getAvailableCountriesFromDB = async (): Promise<string[]> => {
  // This function will fetch all available countries from the database
  try {
    const { data, error } = await supabase
      .from('countries')
      .select('slug')
      .eq('is_active', true);

    if (error) {
      console.error('Error fetching available countries:', error);
      return [];
    }

    return data.map(country => country.slug);
  } catch (error) {
    console.error('Error fetching available countries:', error);
    return [];
  }
};

export const isCountryAvailableFromDB = async (countryKey: string): Promise<boolean> => {
  // This function will check if a country is available in the database
  try {
    const { count, error } = await supabase
      .from('countries')
      .select('*', { count: 'exact', head: true })
      .eq('slug', countryKey.toLowerCase())
      .eq('is_active', true);

    if (error) {
      console.error('Error checking country availability:', error);
      return false;
    }

    return count !== null && count > 0;
  } catch (error) {
    console.error('Error checking country availability:', error);
    return false;
  }
};

// Function to get all cities for a specific country from database
export const getCitiesByCountryFromDB = async (countrySlug: string): Promise<DatabaseCity[]> => {
  try {
    const { data, error } = await supabase
      .from('cities')
      .select('*')
      .eq('country_slug', countrySlug.toLowerCase());

    if (error) {
      console.error('Error fetching cities for country:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getCitiesByCountryFromDB:', error);
    return [];
  }
};

// Function to get all available cities for selection
export const getAllCitiesFromDB = async (): Promise<DatabaseCity[]> => {
  try {
    const { data, error } = await supabase
      .from('cities')
      .select('*');

    if (error) {
      console.error('Error fetching all cities:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getAllCitiesFromDB:', error);
    return [];
  }
};

// Function to get selected cities for a country
export const getSelectedCitiesForCountry = async (countrySlug: string): Promise<string[]> => {
  try {
    const { data, error } = await supabase
      .from('countries')
      .select('selected_cities')
      .eq('slug', countrySlug.toLowerCase())
      .single();

    if (error) {
      console.error('Error fetching selected cities:', error);
      return [];
    }

    if (data && data.selected_cities && Array.isArray(data.selected_cities)) {
      return data.selected_cities;
    }

    return [];
  } catch (error) {
    console.error('Error in getSelectedCitiesForCountry:', error);
    return [];
  }
};

// Simple country cards data (derived from detail data)
export const getCountryCards = async (): Promise<CountryCard[]> => {
  // This function will fetch country cards from the database
  try {
    const { data, error } = await supabase
      .from('countries')
      .select('slug, name')
      .eq('is_active', true)
      .order('name');

    if (error) {
      console.error('Error fetching country cards:', error);
      return [];
    }

    // Transform database data to match our TypeScript interface
    return data.map(country => ({
      slug: country.slug,
      name: country.name
    }));
  } catch (error) {
    console.error('Error in getCountryCards:', error);
    return [];
  }
};

// Helper functions for countries
export const getCountries = async (): Promise<CountryCard[]> => {
  return await getCountryCards()
}

export const getCountryBySlug = (): CountryCard | null => {
  // This will now only work with database data
  return null;
}

// Helper functions for country details
export const getCountryDetails = (): CountryDetail[] => {
  // This will now only work with database data
  return [];
}

export const getCountryDetailBySlug = (): CountryDetail | null => {
  // This will now only work with database data
  return null;
}

// Function to get complete country data (listing + detail merged)
export const getCompleteCountryData = async (slug: string) => {
  const countryData = await getCountryBySlugFromDB(slug);
  return countryData;
}

// Function to get all available countries
export const getAvailableCountries = async (): Promise<string[]> => {
  const availableCountries = await getAvailableCountriesFromDB();
  return availableCountries;
}

// Function to check if a country is available
export const isCountryAvailable = async (countryKey: string) => {
  const countryIsAvailable = await isCountryAvailableFromDB(countryKey);
  return countryIsAvailable;
}

// Function to generate metadata for a country page with full SEO support
export async function generateCountryMetadata(countrySlug: string) {
  try {
    // Get SEO data directly from database
    const { data, error } = await supabase
      .from('countries')
      .select('seo_title, seo_description, seo_keywords, name')
      .eq('slug', countrySlug.toLowerCase())
      .eq('is_active', true)
      .single();
      
    if (error || !data) {
      // Fallback to basic SEO data when database record is not found
      return {
        title: 'Country Not Found',
        description: 'The requested country page could not be found.',
      };
    }
    
    // Use database SEO data, with fallbacks to generated content if database fields are null
    const countryName = data.name || `${countrySlug.charAt(0).toUpperCase() + countrySlug.slice(1)}`;
    
    return {
      title: data.seo_title || `${countryName} Exhibition Stand Design & Build Solutions`,
      description: data.seo_description || `Discover our professional exhibition stand design and build solutions in ${countryName}. Custom trade show booths and displays.`,
      keywords: data.seo_keywords || `exhibition stands, trade shows, ${countryName}, booth design, event marketing`,
      openGraph: {
        title: data.seo_title || `${countryName} Exhibition Stand Design & Build Solutions`,
        description: data.seo_description || `Discover our professional exhibition stand design and build solutions in ${countryName}. Custom trade show booths and displays.`,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: data.seo_title || `${countryName} Exhibition Stand Design & Build Solutions`,
        description: data.seo_description || `Discover our professional exhibition stand design and build solutions in ${countryName}. Custom trade show booths and displays.`,
      },
    };
  } catch (error) {
    console.error('Error generating country metadata:', error);
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
