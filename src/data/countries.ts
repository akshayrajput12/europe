// src/data/countries.ts

// Interfaces for strong typing
export interface CountryHero {
  title: string
  subtitle: string
  backgroundImage: string
}

export interface BenefitItem {
  icon: string
  title: string
  description: string
}

export interface WhyChooseUs {
  title: string
  subtitle: string
  benefits: BenefitItem[]
  mainImage: string
}

export interface CompanyInfo {
  title: string
  content: string[]
}

export interface ProcessStep {
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

export interface BestCompany {
  title: string
  subtitle: string
  content: string[]
  stats: {
    clients: number
    projects: number
    manufacturingUnit: string
  }
}

export interface WhatWeDo {
  title: string
  subtitle: string
  description: string
}

// Simple interface for country cards (like cities grid)
export interface CountryCard {
  slug: string
  name: string
}

// Interface for countries page header
export interface CountriesData {
  title: string
  subtitle: string
}

// Countries page header data
export const countriesData: CountriesData = {
  title: "EXHIBITION STAND SERVICES",
  subtitle: "IN EUROPE"
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

// Simple country cards data (derived from detail data)
export const getCountryCards = (): CountryCard[] => {
  return countryDetailsData.countries.map(country => ({
    slug: country.slug,
    name: country.hero.subtitle
  }))
}

// Country detail pages data
export const countryDetailsData: CountryDetailsData = {
  countries: [
    {
      id: "1",
      slug: "france",
      hero: {
        title: "EXHIBITION STAND DESIGN AND BUILD IN",
        subtitle: "FRANCE",
        backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop"
      },
      whyChooseUs: {
        title: "Why Choose Us for Exhibition Stands in",
        subtitle: "France?",
        mainImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop",
        benefits: [
          {
            icon: "🎯",
            title: "We are more than just exhibition stand builders in France",
            description: "we are your gateway to success"
          },
          {
            icon: "⚡",
            title: "In-house production and storage facilities in Europe",
            description: ""
          },
          {
            icon: "🛡️",
            title: "Experienced project managers with multilingual capabilities",
            description: ""
          },
          {
            icon: "💰",
            title: "Competitive pricing with no compromise on quality",
            description: ""
          },
          {
            icon: "⏰",
            title: "One-stop shop for complete exhibition participation",
            description: ""
          }
        ]
      },
      whatWeDo: {
        title: "WHAT WE DO?",
        subtitle: "WE DO?",
        description: "We offer our clients a wide range of trade show booth designs in France from custom and modular exhibition booths to country pavilion and double-decker exhibition booths."
      },
      companyInfo: {
        title: "DISTINGUISHED EXHIBITION STAND BUILDER IN FRANCE",
        content: [
          "At RADON SP Z O.O., we work with a client-centric approach to offer incredible exhibition stand construction and experience services in France. Our team of highly experienced exhibition stand designers in France are equipped with in-depth knowledge of local regulations, venue requirements, and cultural nuances to ensure that your exhibition stand not only meets but exceeds expectations.",
          "We understand that most exhibitors face discomfort from various terminologies and need guidance and are limited by budgets, construction and venue limitations and are time constrained - that's it! We have expertise at all levels to deliver significant optimization, efficiency and delivery activities with an unparalleled combination of value, expertise and commitment.",
          "Our future and team are ready for further iterations of your organization and what you construct we add experience comprehensive information where we get for re-connections that help enhance our team service delivery such a record service throughout your entire exhibition journey.",
          "We offer high-quality materials and rely on the latest tools and machinery to boost construction in France and deliver to best construction we are thingshex. etc. bench here",
          "As exhibitors in France, the record we have now covers combining technology with extensive such as innovation and throughout experience - that's it! From making to service your information to product today."
        ]
      },
      bestCompany: {
        title: "BEST EXHIBITION STAND DESIGN COMPANY IN FRANCE FOR",
        subtitle: "EXCEPTIONAL EXPERIENCE",
        content: [
          "We are dedicated to designing a unique brand experience that fully showcases your brand essence and enhances your presence. As we have been delivering quality construction services for 20+ years, we have now become an exhibition stand contractor that delivers exceptional results.",
          "Our team has successfully delivered quality services to 1000+ clients and completed 4000+ projects across 50+ exhibition events globally. Our professional team is here to provide customized exhibition services to help you convey your brand message effectively. We have a state-of-the-art manufacturing unit that allows us to deliver booth building projects with quick turnaround time.",
          "Our team puts the latest of their skills and experience to work on creative solutions to meet your exhibition floor. Get in touch with the most trusted exhibition stand design company in France to deliver a distinct and unparalleled experience at your next trade show in France."
        ],
        stats: {
          clients: 1000,
          projects: 4000,
          manufacturingUnit: "state-of-the-art"
        }
      },
      processSection: {
        title: "The Art And Science Behind Our Exhibition Stand Design & Build Process",
        steps: [
          {
            icon: "💡",
            title: "Brief",
            description: "Understanding your specific requirements and exhibition goals through detailed briefing sessions."
          },
          {
            icon: "✏️",
            title: "3D Visuals",
            description: "Creating realistic 3D visualizations to help you envision your exhibition stand before construction."
          },
          {
            icon: "🏭",
            title: "Production",
            description: "Professional manufacturing in our state-of-the-art facilities with quality control at every step."
          },
          {
            icon: "🚚",
            title: "Logistics",
            description: "Seamless transportation and delivery to ensure your stand arrives on time and in perfect condition."
          },
          {
            icon: "🔧",
            title: "Installation",
            description: "Expert installation team ensures proper setup and functionality of all stand components."
          },
          {
            icon: "🎯",
            title: "Show Support",
            description: "Round-the-clock support throughout your exhibition to address any issues immediately."
          }
        ]
      },
      citiesSection: {
        title: "EXHIBITION STANDS IN",
        subtitle: "FRANCE"
      }
    },
    {
      id: "2",
      slug: "germany",
      hero: {
        title: "EXHIBITION STAND DESIGN AND BUILD IN",
        subtitle: "GERMANY",
        backgroundImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&h=400&fit=crop"
      },
      whyChooseUs: {
        title: "Why Choose Us for Exhibition Stands in",
        subtitle: "Germany?",
        mainImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&h=400&fit=crop",
        benefits: [
          {
            icon: "🎯",
            title: "Leading exhibition stand builders in Germany",
            description: "Your trusted partner for success in German trade shows"
          },
          {
            icon: "⚡",
            title: "Local expertise with European manufacturing",
            description: "Understanding German market requirements and regulations"
          },
          {
            icon: "🛡️",
            title: "German-speaking project managers",
            description: "Seamless communication throughout your project"
          },
          {
            icon: "💰",
            title: "Competitive German market pricing",
            description: "Best value for money without compromising quality"
          },
          {
            icon: "⏰",
            title: "Complete exhibition services in Germany",
            description: "From design to dismantling - we handle everything"
          }
        ]
      },
      whatWeDo: {
        title: "WHAT WE DO?",
        subtitle: "WE DO?",
        description: "We offer our clients a wide range of trade show booth designs in Germany from custom and modular exhibition booths to country pavilion and double-decker exhibition booths."
      },
      companyInfo: {
        title: "PREMIER EXHIBITION STAND BUILDER IN GERMANY",
        content: [
          "At RADON SP Z O.O., we specialize in delivering exceptional exhibition stand construction services in Germany. Our team combines deep understanding of German trade show culture with cutting-edge design and construction expertise to create stands that make lasting impressions.",
          "Germany hosts some of Europe's most prestigious trade shows, and we understand the unique requirements of German exhibition venues. Our experienced team navigates local regulations, venue specifications, and cultural preferences to ensure your exhibition stand performs exceptionally.",
          "We pride ourselves on German precision and efficiency, delivering projects that meet the highest standards of quality and punctuality. Our comprehensive approach covers every aspect of your exhibition participation in Germany.",
          "With state-of-the-art manufacturing facilities and a dedicated German market team, we provide cost-effective solutions that maximize your exhibition ROI in Germany's competitive trade show environment.",
          "From concept to completion, we ensure your brand message resonates with German audiences through innovative design and flawless execution."
        ]
      },
      bestCompany: {
        title: "BEST EXHIBITION STAND DESIGN COMPANY IN GERMANY FOR",
        subtitle: "OUTSTANDING RESULTS",
        content: [
          "We are committed to creating exceptional brand experiences that capture the attention of German trade show visitors. With over 18 years of experience in the German exhibition market, we have established ourselves as a premier exhibition stand contractor.",
          "Our portfolio includes successful projects for 800+ clients across 3500+ projects in Germany's leading exhibition venues. Our German-focused team delivers customized exhibition solutions that effectively communicate your brand message to German audiences.",
          "With our advanced manufacturing capabilities and deep understanding of German exhibition standards, we deliver projects with remarkable efficiency and quality. Partner with Germany's most trusted exhibition stand design company."
        ],
        stats: {
          clients: 800,
          projects: 3500,
          manufacturingUnit: "European-standard"
        }
      },
      processSection: {
        title: "Our Proven Exhibition Stand Design & Build Process in Germany",
        steps: [
          {
            icon: "💡",
            title: "Briefing",
            description: "Comprehensive briefing sessions tailored to German exhibition standards and audience preferences."
          },
          {
            icon: "✏️",
            title: "3D Design",
            description: "Detailed 3D renderings that meet German exhibition venue specifications and regulations."
          },
          {
            icon: "🏭",
            title: "Manufacturing",
            description: "High-quality manufacturing with German-level precision and attention to detail."
          },
          {
            icon: "🚚",
            title: "Logistics",
            description: "Specialized transportation solutions for major German exhibition centers."
          },
          {
            icon: "🔧",
            title: "Installation",
            description: "Expert installation team familiar with German venue requirements and safety standards."
          },
          {
            icon: "🎯",
            title: "Show Support",
            description: "24/7 German-language support throughout your exhibition period."
          }
        ]
      },
      citiesSection: {
        title: "EXHIBITION STANDS IN",
        subtitle: "GERMANY"
      }
    }
  ]
}

// Helper functions for countries
export const getCountries = (): CountryCard[] => {
  return getCountryCards()
}

export const getCountryBySlug = (slug: string): CountryCard | null => {
  return getCountryCards().find(country => country.slug.toLowerCase() === slug.toLowerCase()) || null
}

// Helper functions for country details
export const getCountryDetails = (): CountryDetail[] => {
  return countryDetailsData.countries
}

export const getCountryDetailBySlug = (slug: string): CountryDetail | null => {
  return countryDetailsData.countries.find(country => country.slug.toLowerCase() === slug.toLowerCase()) || null
}

// Function to get complete country data (listing + detail merged)
export const getCompleteCountryData = (slug: string) => {
  const cardData = getCountryBySlug(slug)
  const detailData = getCountryDetailBySlug(slug)
  
  if (!cardData || !detailData) return null
  
  return {
    ...cardData,
    ...detailData
  }
}

// Legacy compatibility functions
export const getCountryDataByKey = (countryKey: string): CountryDetail | null => {
  const key = countryKey.toLowerCase()
  return getCountryDetailBySlug(key)
}

// Function to get all available countries
export const getAvailableCountries = (): string[] => {
  return countryDetailsData.countries.map(country => country.slug)
}

// Function to check if a country is available
export const isCountryAvailable = (countryKey: string): boolean => {
  return getAvailableCountries().includes(countryKey.toLowerCase())
}

// Function to get featured countries (simple cards)
export const getFeaturedCountries = (): CountryCard[] => {
  return getCountryCards() // All countries are "featured" in simple version
}