// Main Countries Data File
import { getAvailableCountries, isCountryAvailable } from "./countries";

// Interface for country links
export interface CountryLink {
  name: string;
  slug: string;
}

// Main Countries Page Data
export interface MainCountriesData {
  title: string;
  subtitle: string;
  description: string;
  heroBackground: string;
  countries?: CountryLink[]; // Make countries optional since we're not using the getter
}

// Exhibition Stand Types
export interface ExhibitionStandType {
  title: string;
  description: string;
  images: string[];
  ctaText: string;
  ctaLink: string;
}

// Main Data Structure
export const mainCountriesData: Omit<MainCountriesData, 'countries'> = {
  title: "EXHIBITION",
  subtitle: "STANDS",
  description: "Expanding your business across Europe? We design and build world-class exhibition stands in all major European trade show destinations. Partner with us to create impactful brand experiences that drive results and elevate your market presence.",
  heroBackground: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=800&fit=crop&crop=center"
  // Removed the countries getter since it's not being used and was causing build issues
};

// Exhibition Stand Types
export const exhibitionStandTypes: ExhibitionStandType[] = [
  {
    title: "CUSTOM EXHIBITION STANDS",
    description: "Transform your brand vision into reality with our bespoke exhibition stands. Our expert designers craft unique, brand-aligned displays that capture attention and drive engagement. From innovative graphics to interactive elements, we ensure your booth becomes the centerpiece of any trade show, creating memorable experiences that convert visitors into customers.",
    images: [
      "https://images.unsplash.com/photo-1611401267409-1c5bf5b76b31?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop"
    ],
    ctaText: "EXPLORE CUSTOM SOLUTIONS",
    ctaLink: "/custom-booth-design-and-build"
  },
  {
    title: "MODULAR EXHIBITION STANDS",
    description: "Smart, flexible, and cost-effective exhibition solutions that grow with your business. Our premium modular systems offer unlimited design possibilities while ensuring easy setup, transportation, and reuse. Perfect for businesses seeking professional impact without compromising on budget or convenience.",
    images: [
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=1000&auto=format&fit=crop"
    ],
    ctaText: "DISCOVER MODULAR OPTIONS",
    ctaLink: "/modular-booth-design-and-build"
  },
  {
    title: "DOUBLE DECKER EXHIBITION STANDS",
    description: "Maximize your exhibition impact with stunning two-story displays that command attention across the show floor. Our double-decker stands create premium brand experiences with expanded space for meetings, demonstrations, and hospitality areas, positioning your company as an industry leader.",
    images: [
      "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop"
    ],
    ctaText: "VIEW DOUBLE DECKER DESIGNS",
    ctaLink: "/double-decker-exhibition-stands"
  },
  {
    title: "PAVILION EXHIBITION STANDS",
    description: "Showcase your heritage and values with sophisticated pavilion designs that tell your story. Our expert team creates immersive cultural and corporate pavilions that foster meaningful connections, whether representing countries, regions, or corporate identity on the global stage.",
    images: [
      "https://images.unsplash.com/photo-1540317580384-e5d6509d5cc2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597314040917-99c7647ee8c6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=1000&auto=format&fit=crop"
    ],
    ctaText: "EXPLORE PAVILION SOLUTIONS",
    ctaLink: "/pavilion-design-build"
  }
];

// Portfolio Showcase
export interface PortfolioShowcase {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const portfolioShowcase: PortfolioShowcase = {
  title: "DISCOVER OUR AWARD-WINNING EXHIBITION DESIGNS",
  description: "With decades of experience creating stunning exhibition experiences across Europe, we've earned the trust of leading brands worldwide. Explore our innovative portfolio showcasing cutting-edge designs that captivate audiences and deliver exceptional results for our clients.",
  ctaText: "VIEW OUR PORTFOLIO",
  ctaLink: "/portfolio"
};

// Footer Section
export const buildSection = {
  title: "WE BUILD",
  highlight: "EXHIBITION STANDS",
  description: "Chronicle Exhibitions operates state-of-the-art manufacturing facilities and design studios across Europe and the UK. Our commitment to excellence ensures premium quality exhibition stands delivered on time, every time. Our in-house production facilities feature cutting-edge technology and advanced printing capabilities, enabling us to create captivating displays with real-time technologies, innovative creativity, and interactive experiences that make your brand the star of any show floor."
};

// Get available countries helper - uses the existing system
export { getAvailableCountries };

// Helper to check if a country is available - uses the existing system
export { isCountryAvailable as isCountryInList };