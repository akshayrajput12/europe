import { supabase } from '@/lib/supabase'
import { createServerClient } from '@/lib/supabase-server'

// Interfaces organized in the same sequence as data sections appear on the pavilion page

// Hero Section (first on page)
export interface HeroData {
  title: string
  subtitle?: string
  backgroundImage: string
}

// Why Choose Section (second on page)
export interface WhyChooseData {
  title: string
  content: string // Single HTML content instead of paragraphs array
}

// Benefits Section (third on page)
export interface BenefitsData {
  title: string
  content: string // Single HTML content instead of benefits array
  image: string
}

// Stand Project Text Section (fourth on page)
export interface StandProjectText {
  title: string
  highlight?: string
  description: string // Will be rendered as HTML content
}

// Advantages Section (sixth on page)
export interface AdvantagesData {
  title: string
  content: string // Single HTML content instead of advantages array
  image: string
}

// Our Expertise Section (seventh on page)
export interface OurExpertiseData {
  title: string
  content: string // Single HTML content instead of paragraphs array
}

// Company Info Section (eighth on page)
export interface CompanyInfoData {
  title: string
  content: string // Single HTML content instead of points array
}

// Combined data interface for the entire pavilion page
export interface PavilionPageData {
  meta: {
    title: string
    description: string
  }
  hero: HeroData
  whyChoose: WhyChooseData
  benefits: BenefitsData
  StandProjectText: StandProjectText
  advantages: AdvantagesData
  ourExpertise: OurExpertiseData
  companyInfo: CompanyInfoData
}

// Main function to get pavilion data from database (NO FALLBACK DATA)
export async function getPavilionData(): Promise<PavilionPageData> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    // Fetch data directly from the pavilion_design_page table
    const { data, error } = await client
      .from('pavilion_design_page')
      .select('*')
      .eq('is_active', true)
      .single()
    
    if (error) {
      console.error('Error fetching pavilion data:', error)
      throw new Error('Failed to fetch pavilion data from database: ' + error.message)
    }
    
    if (!data) {
      console.error('No pavilion data found in database')
      throw new Error('No pavilion data available in database')
    }
    
    // Transform database columns to match TypeScript interfaces
    const pavilionData: PavilionPageData = {
      meta: {
        title: data.meta_title || '',
        description: data.meta_description || ''
      },
      hero: {
        title: data.hero_title || '',
        subtitle: data.hero_subtitle || '',
        backgroundImage: data.hero_background_image || ''
      },
      whyChoose: {
        title: data.why_choose_title || '',
        content: data.why_choose_content || ''
      },
      benefits: {
        title: data.benefits_title || '',
        image: data.benefits_image || '',
        content: data.benefits_content || ''
      },
      StandProjectText: {
        title: data.stand_project_title || '',
        highlight: data.stand_project_highlight || '',
        description: data.stand_project_description || ''
      },
      advantages: {
        title: data.advantages_title || '',
        image: data.advantages_image || '',
        content: data.advantages_content || ''
      },
      ourExpertise: {
        title: data.our_expertise_title || '',
        content: data.our_expertise_content || ''
      },
      companyInfo: {
        title: data.company_info_title || '',
        content: data.company_info_content || ''
      }
    }
    
    return pavilionData
  } catch (error) {
    console.error('Database connection failed:', error)
    throw error
  }
}