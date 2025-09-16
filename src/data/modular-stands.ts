import { supabase } from '@/lib/supabase'
import { createServerClient } from '@/lib/supabase-server'

// Constants for hero section background image
export const MODULAR_STANDS_HERO_BG_IMAGE = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop";

// ----------------------------------------
// INTERFACES
// ----------------------------------------

// Base interface for hero section
export interface HeroSection {
  title: string
  subtitle?: string
  backgroundImage?: string // Made optional since we'll use constant
  buttonTitle?: string // Add button title field
}

// Interface for benefits section with image
export interface ModularBenefitsSection {
  title: string
  content: string
  image: string
}

// Interface for main section (points table)
export interface ModularPointsTable {
  title: string
  content: string
}

// Interface for stand project text section
export interface StandProjectText {
  title: string
  highlight?: string
  description: string
}

// Interface for exhibition benefits section
export interface ExhibitionBenefits {
  title: string
  subtitle: string
  content: string
  image: string
}

// Interface for modular diversity section
export interface ModularDiversitySection {
  title: string
  subtitle: string
  content: string
}

// Interface for fastest construction section
export interface FastestConstructionSection {
  title: string
  subtitle: string
  description: string
}

// Interface for experts section
export interface ExpertsSection {
  title: string
  subtitle: string
  description: string
}

// Interface for SEO metadata
export interface MetaData {
  title: string
  description: string
}

// Add PortfolioSection interface
export interface PortfolioSection {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

// Main interface combining all sections
export interface ModularStandsData {
  meta: MetaData
  hero: HeroSection
  benefits: ModularBenefitsSection
  pointsTable: ModularPointsTable
  StandProjectText: StandProjectText
  exhibitionBenefits: ExhibitionBenefits
  modularDiversity: ModularDiversitySection
  fastestConstruction: FastestConstructionSection
  experts: ExpertsSection
  // Add portfolio section
  portfolio: PortfolioSection
}

// Main function to get modular stands data from database (NO FALLBACK DATA)
export async function getModularStandsData(): Promise<ModularStandsData> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    // Fetch data directly from the modular_stands_page table
    const { data, error } = await client
      .from('modular_stands_page')
      .select('*')
      .eq('is_active', true)
      .single()
    
    if (error) {
      console.error('Error fetching modular stands data:', error)
      throw new Error('Failed to fetch modular stands data from database: ' + error.message)
    }
    
    if (!data) {
      console.error('No modular stands data found in database')
      throw new Error('No modular stands data available in database')
    }
    
    // Transform database columns to match TypeScript interfaces
    const modularStandsData: ModularStandsData = {
      meta: {
        title: data.meta_title || '',
        description: data.meta_description || ''
      },
      hero: {
        title: data.hero_title || '',
        subtitle: data.hero_subtitle || '',
        backgroundImage: MODULAR_STANDS_HERO_BG_IMAGE, // Use constant instead of database value
        buttonTitle: data.hero_button_title || 'REQUEST FOR QUOTATION' // Add button title with fallback
      },
      benefits: {
        title: data.benefits_title || '',
        content: data.benefits_content || '',
        image: data.benefits_image || ''
      },
      pointsTable: {
        title: data.points_table_title || '',
        content: data.points_table_content || ''
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
        image: data.exhibition_benefits_image || ''
      },
      modularDiversity: {
        title: data.modular_diversity_title || '',
        subtitle: data.modular_diversity_subtitle || '',
        content: data.modular_diversity_content || ''
      },
      fastestConstruction: {
        title: data.fastest_construction_title || '',
        subtitle: data.fastest_construction_subtitle || '',
        description: data.fastest_construction_description || ''
      },
      experts: {
        title: data.experts_title || '',
        subtitle: data.experts_subtitle || '',
        description: data.experts_description || ''
      },
      // Add portfolio section data
      portfolio: {
        title: data.portfolio_section_title || 'OUR PORTFOLIO',
        subtitle: data.portfolio_section_subtitle || 'Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project.',
        ctaText: data.portfolio_section_cta_text || 'View All Projects',
        ctaLink: data.portfolio_section_cta_link || '/portfolio'
      }
    }
    
    return modularStandsData
  } catch (error) {
    console.error('Database connection failed:', error)
    throw error
  }
}

// Remove static initialization - components will fetch data directly