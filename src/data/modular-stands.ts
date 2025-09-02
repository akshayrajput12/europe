import { supabase } from '@/lib/supabase'
import { createServerClient } from '@/lib/supabase-server'

// ----------------------------------------
// INTERFACES
// ----------------------------------------

// Base interface for hero section
export interface HeroSection {
  title: string
  subtitle?: string
  backgroundImage: string
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
}

// ----------------------------------------
// DATA OBJECTS - ORDERED BY DEFINITION DEPENDENCY
// ----------------------------------------

// Individual section data objects (defined first to avoid circular dependencies)
export const modularBenefitsSection: ModularBenefitsSection = {
  title: "BENEFITS OF MODULAR EXHIBITION STANDS:",
  content: `
    <ul>
      <li>Modular exhibition stands offer exceptional versatility with components that can be rearranged to create completely different layouts for each event.</li>
      <li>These systems feature lightweight yet durable materials that make transportation and setup significantly easier than traditional custom builds.</li>
      <li>Cost efficiency is a major advantage, as modular components can be reused across multiple events, dramatically reducing long-term exhibition expenses.</li>
      <li>The quick assembly process means your team can focus on preparing marketing materials rather than spending hours on complex construction.</li>
      <li>Storage is simplified with compact cases that protect components and make warehouse organization straightforward.</li>
    </ul>
  `,
  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
}

export const modularPointsTable: ModularPointsTable = {
  title: "BENEFITS OF MODULAR EXHIBITION STANDS",
  content: `
    <ul>
      <li>Rapid deployment systems that reduce setup time by up to 70% compared to traditional custom builds.</li>
      <li>Reusable components that deliver significant cost savings over multiple events, with many clients seeing ROI within 2-3 exhibitions.</li>
      <li>Flexible design options that can be easily modified to accommodate different products, messaging, or branding requirements.</li>
      <li>Lightweight materials that simplify transportation and reduce shipping costs, particularly important for international exhibitions.</li>
      <li>Durable construction that maintains professional appearance through years of repeated use across various environments.</li>
    </ul>
    <p>As pioneers in modular exhibition design since 2003, we've refined our systems to offer the perfect balance of affordability, functionality, and visual impact. Our modular solutions incorporate the latest materials and technologies, ensuring your booth stands out while remaining easy to manage. Each system is designed with European logistics in mind, optimizing for the region's transportation networks and venue requirements.</p>
  `
}

export const standProjectText: StandProjectText = {
  title: "SOME OF OUR",
  highlight: "MODULAR EXHIBITION STANDS",
  description:
    "Our portfolio showcases innovative modular designs that have helped brands across various industries make a lasting impression at trade shows throughout Europe. Each project demonstrates our commitment to combining functionality with striking visual appeal. From compact 10 square meter booths to expansive island displays, our modular solutions are engineered to maximize impact while minimizing setup complexity. These examples illustrate how our flexible systems can be adapted to different products, target audiences, and venue requirements while maintaining consistent brand messaging.",
}

export const exhibitionBenefits: ExhibitionBenefits = {
  title: "BENEFITS OF MODULAR EXHIBITION STANDS:",
  subtitle:
    "Discover why modular exhibition booths are the most practical and cost-effective solution for your brand in Europe.",
  content: `
    <ul>
      <li>Economic efficiency through reusable components that eliminate the need for new builds at each event.</li>
      <li>Time savings with streamlined setup processes that can be completed in hours rather than days.</li>
      <li>Design flexibility allowing for easy updates to graphics and layout between exhibitions.</li>
      <li>Storage convenience with compact packaging that requires minimal warehouse space.</li>
      <li>Sustainability benefits through reduced waste and material consumption compared to traditional booth construction.</li>
    </ul>
  `,
  image:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
}

export const modularDiversitySection: ModularDiversitySection = {
  title: "MODULAR",
  subtitle: "DIVERSITY",
  content: `
    <ul>
      <li>Our modular systems include various frame options from aluminum extrusions to hybrid constructions, accommodating different design aesthetics and structural requirements for diverse exhibition environments.</li>
      <li>Multiple panel types are available including fabric graphics, direct print, and SEG (Silicone Edge Graphics) for maximum visual impact, allowing for complete brand customization.</li>
      <li>Specialized components such as LED lighting systems, interactive displays, touchscreen technology integration, and modular flooring options enhance functionality and visitor engagement.</li>
      <li>Accessories like literature racks, product display shelves, counter units, and branded signage elements can be easily added or repositioned to adapt to changing marketing needs.</li>
      <li>Advanced connectivity solutions including integrated power distribution, data cabling, and wireless networking capabilities ensure modern booth requirements are met.</li>
    </ul>
  `,
}

export const fastestConstructionSection: FastestConstructionSection = {
  title: "FASTEST CONSTRUCTION",
  subtitle: "OF MODULAR BOOTHS IN EUROPE",
  description:
    "Our modular exhibition systems can be assembled in a fraction of the time required for custom builds, with most standard booths ready in under 4 hours. This rapid deployment is particularly valuable for European trade shows where setup time is limited. Our experienced team can handle everything from initial design to final installation, storing your modular components between events to ensure they're always ready for your next exhibition. This approach saves you both time and money while ensuring consistent quality at every show.",
}

export const expertsSection: ExpertsSection = {
  title: "EXPERTS IN",
  subtitle: "MODULAR BOOTHS",
  description:
    "With over two decades of experience in the European exhibition industry, our team specializes in creating modular booth solutions that align with your brand identity and marketing objectives. We serve clients across major European markets including Germany, France, UK, Italy, Spain, and the Nordics, providing comprehensive support from initial concept through to on-site execution. Our expertise includes customizing modular systems to meet specific industry requirements, integrating advanced technology solutions, and ensuring compliance with venue regulations. We provide end-to-end service including design, production, logistics, installation, and dismantling, allowing you to focus on your exhibition goals while we handle all the technical details. Our dedicated project managers and skilled installation teams ensure seamless execution at every venue, with multilingual support available for international exhibitions.",
}

// Main data object (defined last to reference all individual sections)
export const modularStandsData: ModularStandsData = {
  meta: {
    title: "Modular Exhibition Stands Design & Build Services",
    description: "Professional modular exhibition stand design and build services. Create flexible, cost-effective displays that can be reconfigured for multiple events and represent your brand perfectly at trade shows and exhibitions."
  },
  hero: {
    title: "MODULAR EXHIBITION STANDS",
    subtitle: "DESIGN & BUILD",
    backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop",
  },
  benefits: modularBenefitsSection,
  pointsTable: modularPointsTable,
  StandProjectText: standProjectText,
  exhibitionBenefits: exhibitionBenefits,
  modularDiversity: modularDiversitySection,
  fastestConstruction: fastestConstructionSection,
  experts: expertsSection,
}

// Main function to get modular stands data from database (with fallback to static data)
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
      // Return static data as fallback
      return modularStandsData
    }
    
    if (!data) {
      console.error('No modular stands data found in database')
      // Return static data as fallback
      return modularStandsData
    }
    
    // Transform database columns to match TypeScript interfaces
    const modularStandsDataFromDB: ModularStandsData = {
      meta: {
        title: data.meta_title || modularStandsData.meta.title,
        description: data.meta_description || modularStandsData.meta.description
      },
      hero: {
        title: data.hero_title || modularStandsData.hero.title,
        subtitle: data.hero_subtitle || modularStandsData.hero.subtitle,
        backgroundImage: data.hero_background_image || modularStandsData.hero.backgroundImage
      },
      benefits: {
        title: data.benefits_title || modularStandsData.benefits.title,
        content: data.benefits_content || modularStandsData.benefits.content,
        image: data.benefits_image || modularStandsData.benefits.image
      },
      pointsTable: {
        title: data.points_table_title || modularStandsData.pointsTable.title,
        content: data.points_table_content || modularStandsData.pointsTable.content
      },
      StandProjectText: {
        title: data.stand_project_title || modularStandsData.StandProjectText.title,
        highlight: data.stand_project_highlight || modularStandsData.StandProjectText.highlight,
        description: data.stand_project_description || modularStandsData.StandProjectText.description
      },
      exhibitionBenefits: {
        title: data.exhibition_benefits_title || modularStandsData.exhibitionBenefits.title,
        subtitle: data.exhibition_benefits_subtitle || modularStandsData.exhibitionBenefits.subtitle,
        content: data.exhibition_benefits_content || modularStandsData.exhibitionBenefits.content,
        image: data.exhibition_benefits_image || modularStandsData.exhibitionBenefits.image
      },
      modularDiversity: {
        title: data.modular_diversity_title || modularStandsData.modularDiversity.title,
        subtitle: data.modular_diversity_subtitle || modularStandsData.modularDiversity.subtitle,
        content: data.modular_diversity_content || modularStandsData.modularDiversity.content
      },
      fastestConstruction: {
        title: data.fastest_construction_title || modularStandsData.fastestConstruction.title,
        subtitle: data.fastest_construction_subtitle || modularStandsData.fastestConstruction.subtitle,
        description: data.fastest_construction_description || modularStandsData.fastestConstruction.description
      },
      experts: {
        title: data.experts_title || modularStandsData.experts.title,
        subtitle: data.experts_subtitle || modularStandsData.experts.subtitle,
        description: data.experts_description || modularStandsData.experts.description
      }
    }
    
    return modularStandsDataFromDB
  } catch (error) {
    console.error('Database connection failed:', error)
    // Return static data as fallback
    return modularStandsData
  }
}