import { supabase } from '@/lib/supabase'
import { createServerClient } from '@/lib/supabase-server'

// Constants for hero section background image
export const CUSTOM_STANDS_HERO_BG_IMAGE = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop";
export const CUSTOM_STANDS_HERO_BG_IMAGE_ALT = "Custom Exhibition Stands";

// Interfaces for strong typing
export interface HeroSection {
  title: string
  subtitle?: string
  backgroundImage?: string // Made optional since we'll use constant
  backgroundImageAlt?: string
  buttonTitle?: string // Add button title field
}

export interface BenefitsSection {
  title: string
  image?: string
  imageAlt?: string
  content: string // Single HTML content instead of items array
}

export interface StandProjectText {
  title: string
  highlight?: string // for green part of heading
  description: string // Will be rendered as HTML content
}

export interface ExhibitionBenefits {
  title: string
  subtitle: string
  content: string // Single HTML content instead of items array
  image: string
  imageAlt?: string
}

export interface BespokeSection {
  title: string
  subtitle?: string
  description: string
}

export interface FreshDesignSection {
  title: string
  subtitle?: string
  description: string
}

export interface CostSection {
  title: string
  subtitle?: string
  description: string
}

export interface PointsTable {
  title: string
  // Combined content as single HTML string
  content: string
}

// Add PortfolioSection interface
export interface PortfolioSection {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

export interface MetaData {
  title: string
  description: string
}

// ✅ Added `exhibitionBenefits` here
export interface CustomStandsData {
  meta: MetaData
  hero: HeroSection
  benefits: BenefitsSection
  StandProjectText: StandProjectText
  exhibitionBenefits: ExhibitionBenefits
  bespoke: BespokeSection
  freshDesign: FreshDesignSection
  costSection: CostSection
  pointsTable: PointsTable
  // Add portfolio section
  portfolio: PortfolioSection
}

// Main function to get custom stands data from database (NO FALLBACK DATA)
export async function getCustomStandsData(): Promise<CustomStandsData> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    // Fetch data directly from the custom_stands_page table
    const { data, error } = await client
      .from('custom_stands_page')
      .select('*')
      .eq('is_active', true)
      .single()
    
    if (error) {
      console.error('Error fetching custom stands data:', error)
      throw new Error('Failed to fetch custom stands data from database: ' + error.message)
    }
    
    if (!data) {
      console.error('No custom stands data found in database')
      throw new Error('No custom stands data available in database')
    }
    
    // Transform database columns to match TypeScript interfaces
    const customStandsData: CustomStandsData = {
      meta: {
        title: data.meta_title || '',
        description: data.meta_description || ''
      },
      hero: {
        title: data.hero_title || '',
        subtitle: data.hero_subtitle || '',
        backgroundImage: CUSTOM_STANDS_HERO_BG_IMAGE, // Use constant instead of database value
        backgroundImageAlt: data.hero_background_image_alt || CUSTOM_STANDS_HERO_BG_IMAGE_ALT,
        buttonTitle: data.hero_button_title || 'REQUEST FOR QUOTATION' // Add button title with fallback
      },
      benefits: {
        title: data.benefits_title || '',
        image: data.benefits_image || '',
        imageAlt: data.benefits_image_alt || '',
        content: data.benefits_content || ''
      },
      StandProjectText: {
        title: data.stand_project_title || '',
        highlight: data.stand_project_highlight || '',
        description: data.stand_project_description || ''
      },
      exhibitionBenefits: {
        title: data.exhibition_benefits_title || '',
        subtitle: data.exhibition_benefits_subtitle || '',
        content: data.exhibition_benefits_content || '',
        image: data.exhibition_benefits_image || '',
        imageAlt: data.exhibition_benefits_image_alt || ''
      },
      bespoke: {
        title: data.bespoke_title || '',
        subtitle: data.bespoke_subtitle || '',
        description: data.bespoke_description || ''
      },
      freshDesign: {
        title: data.fresh_design_title || '',
        subtitle: data.fresh_design_subtitle || '',
        description: data.fresh_design_description || ''
      },
      costSection: {
        title: data.cost_section_title || '',
        subtitle: data.cost_section_subtitle || '',
        description: data.cost_section_description || ''
      },
      pointsTable: {
        title: data.points_table_title || '',
        content: data.points_table_content || ''
      },
      // Add portfolio section data
      portfolio: {
        title: data.portfolio_section_title || 'OUR PORTFOLIO',
        subtitle: data.portfolio_section_subtitle || 'Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project.',
        ctaText: data.portfolio_section_cta_text || 'View All Projects',
        ctaLink: data.portfolio_section_cta_link || '/portfolio'
      }
    }
    
    return customStandsData
  } catch (error) {
    console.error('Database connection failed:', error)
    throw error
  }
}

// Remove static initialization - components will fetch data directly