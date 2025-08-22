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
  stats: {
    projects: number
    years: number
    tradeshows: number
  }
}

export interface ProcessStep {
  icon: string
  title: string
  subtitle: string
  description: string
}

export interface ProcessSection {
  title: string
  subtitle: string
  steps: ProcessStep[]
}

export interface City {
  name: string
  link: string
}

export interface CitiesSection {
  title: string
  subtitle: string
  cities: City[]
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

export interface CountryData {
  hero: CountryHero
  whyChooseUs: WhyChooseUs
  companyInfo: CompanyInfo
  bestCompany: BestCompany
  processSection: ProcessSection
  citiesSection: CitiesSection
}

// Interface for countries list
export interface CountryItem {
  name: string
  featured?: boolean
}

export interface CountriesData {
  title: string
  subtitle: string
  countries: CountryItem[]
}

// Countries list data with featured flag
export const countriesData: CountriesData = {
  title: "EXHIBITION STAND SERVICES",
  subtitle: "IN EUROPE",
  countries: [
    { name: "Germany", featured: true },
    { name: "France", featured: true },
    { name: "Netherlands", featured: true },
    { name: "United Kingdom", featured: true },
    { name: "Switzerland", featured: true },
    { name: "Spain", featured: true },
    { name: "Italy", featured: false },
    { name: "Austria", featured: false },
    { name: "Belgium", featured: false },
    { name: "Poland", featured: false },
    { name: "Czech Republic", featured: false },
    { name: "Denmark", featured: false },
    { name: "Sweden", featured: false },
    { name: "Norway", featured: false },
    { name: "Finland", featured: false },
    { name: "Portugal", featured: false }
  ]
}

// France data
export const franceData: CountryData = {
  hero: {
    title: "EXHIBITION STAND DESIGN AND BUILD IN",
    subtitle: "FRANCE",
    backgroundImage: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
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

  companyInfo: {
    title: "DISTINGUISHED EXHIBITION STAND BUILDER IN FRANCE",
    content: [
      "At RADON SP Z O.O., we work with a client-centric approach to offer incredible exhibition stand construction and experience services in France. Our team of highly experienced exhibition stand designers in France are equipped with in-depth knowledge of local regulations, venue requirements, and cultural nuances to ensure that your exhibition stand not only meets but exceeds expectations.",
      "We understand that most exhibitors face discomfort from various terminologies and need guidance and are limited by budgets, construction and venue limitations and are time constrained - that's it! We have expertise at all levels to deliver significant optimization, efficiency and delivery activities with an unparalleled combination of value, expertise and commitment.",
      "Our future and team are ready for further iterations of your organization and what you construct we add experience comprehensive information where we get for re-connections that help enhance our team service delivery such a record service throughout your entire exhibition journey.",
      "We offer high-quality materials and rely on the latest tools and machinery to boost construction in France and deliver to best construction we are thingshex. etc. bench here",
      "As exhibitors in France, the record we have now covers combining technology with extensive such as innovation and throughout experience - that's it! From making to service your information to product today."
    ],
    stats: {
      projects: 4000,
      years: 20,
      tradeshows: 1200
    }
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
    title: "The Art And Science Behind Our Exhibition Stand Design &",
    subtitle: "Build Process",
    steps: [
      {
        icon: "💡",
        title: "Brief",
        subtitle: "Design the team based on client brief",
        description: "Understanding your specific requirements and exhibition goals through detailed briefing sessions."
      },
      {
        icon: "✏️",
        title: "3D Visuals",
        subtitle: "Quick turnaround 3D visuals and brief confirmation for client review",
        description: "Creating realistic 3D visualizations to help you envision your exhibition stand before construction."
      },
      {
        icon: "🏭",
        title: "Production",
        subtitle: "In-house design excellence builds production management line",
        description: "Professional manufacturing in our state-of-the-art facilities with quality control at every step."
      },
      {
        icon: "🚚",
        title: "Logistics",
        subtitle: "Effective logistics planning and management",
        description: "Seamless transportation and delivery to ensure your stand arrives on time and in perfect condition."
      },
      {
        icon: "🔧",
        title: "Installation",
        subtitle: "Professional installation team with skilled technical expertise",
        description: "Expert installation team ensures proper setup and functionality of all stand components."
      },
      {
        icon: "🎯",
        title: "Show Support",
        subtitle: "24/7 support during event duration",
        description: "Round-the-clock support throughout your exhibition to address any issues immediately."
      }
    ]
  },

  citiesSection: {
    title: "EXHIBITION STANDS IN",
    subtitle: "FRANCE",
    cities: [
      { name: "ANGERS", link: "/countries/france/angers" },
      { name: "BORDEAUX", link: "/countries/france/bordeaux" },
      { name: "CANNES", link: "/countries/france/cannes" },
      { name: "GRENOBLE", link: "/countries/france/grenoble" },
      { name: "LE MANS", link: "/countries/france/le-mans" },
      { name: "LILLE", link: "/countries/france/lille" },
      { name: "LYON", link: "/countries/france/lyon" },
      { name: "MARSEILLE", link: "/countries/france/marseille" },
      { name: "METZ", link: "/countries/france/metz" },
      { name: "MONTPELLIER", link: "/countries/france/montpellier" },
      { name: "NANTES", link: "/countries/france/nantes" },
      { name: "NICE", link: "/countries/france/nice" },
      { name: "PARIS", link: "/countries/france/paris" },
      { name: "REIMS", link: "/countries/france/reims" },
      { name: "STRASBOURG", link: "/countries/france/strasbourg" },
      { name: "TOULOUSE", link: "/countries/france/toulouse" }
    ]
  }
}

// Generic country data that can be customized for different countries
export const getCountryData = (countryName: string): CountryData => {
  // This can be extended to return different data based on the country
  // For now, returning France data as template
  return {
    ...franceData,
    hero: {
      ...franceData.hero,
      subtitle: countryName.toUpperCase()
    },
    whyChooseUs: {
      ...franceData.whyChooseUs,
      subtitle: countryName
    },
    bestCompany: {
      ...franceData.bestCompany,
      title: `BEST EXHIBITION STAND DESIGN COMPANY IN ${countryName.toUpperCase()} FOR`
    }
  }
}