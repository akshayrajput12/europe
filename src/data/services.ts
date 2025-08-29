// src/data/services.ts

// 1. Interfaces for strong typing
export interface HeroSection {
  title: string
  subtitle?: string
  backgroundImage: string
}

export interface Service {
  id: string
  title: string
  description: string
  // Static icon path - no longer dynamic from TS file
}

export interface ServicesData {
  hero: HeroSection
  introText: string
  services: Service[]
}

// 2. Data Implementation
export const servicesData: ServicesData = {
  hero: {
    title: "OUR SERVICES",
    subtitle: "PROFESSIONAL EXHIBITION SOLUTIONS",
    backgroundImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
  },
  
  introText: "Our vast range of capabilities and allegiance to innovation allow us to tailor and execute custom booths suited to specific business goals.",
  
  services: [
    {
      id: "graphic-production",
      title: "Graphic Production",
      description: "We have digital graphic specialists who are adept at figuring out the best way to design the imagery for your brands stall so that all."
    },
    {
      id: "project-management",
      title: "Project Management",
      description: "All of our project managers are skilled in using the leading project management systems to ensure that your event goes without a hitch. They are also adept."
    },
    {
      id: "installation",
      title: "Installation, Dismantle & Shipping",
      description: "From setting up your booth to taking it down without any hassles, let our dedicated team of professionals take care of the transportation, storage."
    },
    {
      id: "booth-design",
      title: "Trade Show Booth Design",
      description: "The trade show booth is where your concept comes to life, so we arrange a wide array of different booth sizes that you can choose from."
    },
    {
      id: "booth-construction",
      title: "Booth Construction & Custom Fabrication",
      description: "When clients have precise requirements and a detailed brief to be followed to the T, booth construction and."
    },
    {
      id: "site-supervision",
      title: "On Site Supervision",
      description: "We offer you on site supervision and storage for your booth and equipment so that you can remain hassle free and only worry about pulling off a great presentation."
    }
  ]
};