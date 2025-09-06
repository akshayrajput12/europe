import { supabase } from '@/lib/supabase'
import { createServerClient } from '@/lib/supabase-server'

// Constant for About Us hero background image
export const ABOUT_HERO_BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=800&fit=crop&crop=center'
export const ABOUT_HERO_BACKGROUND_IMAGE_ALT = 'Modern office interior with people working together'

export interface CompanyStats {
  id: string
  value: number
  label: string
  description: string
  icon: string
  order: number
  created_at?: string
  updated_at?: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  imageAlt?: string
  created_at?: string
  updated_at?: string
}

export interface Service {
  id: string
  title: string
  description: string
  image: string
  imageAlt?: string
  isReversed?: boolean
  order: number
  created_at?: string
  updated_at?: string
}

export interface HeroSection {
  id: string
  title: string
  backgroundImage: string
  backgroundImageAlt?: string
  created_at?: string
  updated_at?: string
}

export interface CompanyInfo {
  id: string
  yearsInBusiness: string
  yearsLabel: string
  whoWeAreTitle: string
  description: string
  quotes: string[]
  created_at?: string
  updated_at?: string
}

export interface FactsSection {
  id: string
  title: string
  description: string
  created_at?: string
  updated_at?: string
}

export interface TeamInfo {
  id: string
  title: string
  description: string
  teamImage: string
  teamImageAlt?: string
  created_at?: string
  updated_at?: string
}

export interface AboutPageMeta {
  title: string
  description: string
  keywords: string
}

export interface AboutPageData {
  meta: AboutPageMeta
  hero: HeroSection
  companyInfo: CompanyInfo
  factsSection: FactsSection
  companyStats: CompanyStats[]
  teamInfo: TeamInfo
  services: Service[]
}

// Main function to get all about page data from database (NO STATIC FALLBACK)
export async function getAboutPageData(): Promise<AboutPageData> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }
    
    const { data, error } = await client
      .rpc('get_about_page_data')
      .single()
    
    if (error || !data) {
      console.error('Failed to fetch about page data from database:', error)
      throw new Error('Failed to fetch about page data from database')
    }
    
    // Override the backgroundImage with our constant
    const updatedData: AboutPageData = {
      ...(data as AboutPageData),
      hero: {
        ...(data as AboutPageData).hero,
        backgroundImage: ABOUT_HERO_BACKGROUND_IMAGE,
        backgroundImageAlt: ABOUT_HERO_BACKGROUND_IMAGE_ALT
      }
    }
    
    return updatedData
  } catch (error) {
    console.error('Error fetching about page data:', error)
    throw error
  }
}

// Helper functions to get specific sections
export async function getHeroData(): Promise<HeroSection> {
  const data = await getAboutPageData()
  return data.hero
}

export async function getCompanyInfo(): Promise<CompanyInfo> {
  const data = await getAboutPageData()
  return data.companyInfo
}

export async function getCompanyStats(): Promise<CompanyStats[]> {
  const data = await getAboutPageData()
  return data.companyStats
}

export async function getTeamInfo(): Promise<TeamInfo> {
  const data = await getAboutPageData()
  return data.teamInfo
}

export async function getServices(): Promise<Service[]> {
  const data = await getAboutPageData()
  return data.services
}

export async function getFactsSection(): Promise<FactsSection> {
  const data = await getAboutPageData()
  return data.factsSection
}

export async function getAboutPageMeta(): Promise<AboutPageMeta> {
  const data = await getAboutPageData()
  return data.meta
}