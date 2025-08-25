// Main Countries Data File
import { getCountries, getAvailableCountries, isCountryAvailable } from "./countries";

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
  countries: CountryLink[];
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
export const mainCountriesData: MainCountriesData = {
  title: "EXHIBITION",
  subtitle: "STANDS",
  description: "Planning to exhibit in the following countries? RADON SF 2.O.O. design and build stands in all of these major exhibiting countries. Get in touch with us to get a new design and quote.",
  heroBackground: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=800&fit=crop&crop=center",
  // Dynamically get countries from the existing system and map them to match our format
  get countries() {
    const countries = getCountries();
    return countries.map(country => ({
      name: country.name.toUpperCase(),
      slug: country.slug.toLowerCase()
    }));
  }
};

// Exhibition Stand Types
export const exhibitionStandTypes: ExhibitionStandType[] = [
  {
    title: "CUSTOM EXHIBITION STANDS",
    description: "RADON SF 2.O.O. specializes in designing and building custom exhibition stands that are aligned perfectly with the brand identity. We incorporate interactive graphics, logos, themes, colors, and brand messages into the booth. We ensure that your brand is totally highlighted on the show floor and stands values among prospective buyers.",
    images: [
      "https://images.unsplash.com/photo-1611401267409-1c5bf5b76b31?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop"
    ],
    ctaText: "LEARN MORE ABOUT CUSTOM EXHIBITION STAND",
    ctaLink: "/custom-stands"
  },
  {
    title: "MODULAR EXHIBITION STANDS",
    description: "Modular exhibition stands come in separate components, all of which are set up together to make impressive booths that deliver excellence. RADON SF 2.O.O. is a trusted exhibition stand contractor who designs and builds customizable modular booths at cost-effective prices. Our designed booths are easy to transport, durable, reusable, and easy to transport.",
    images: [
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=1000&auto=format&fit=crop"
    ],
    ctaText: "LEARN MORE ABOUT MODULAR EXHIBITION STAND",
    ctaLink: "/modular-stands"
  },
  {
    title: "DOUBLE DECKER EXHIBITION STANDS",
    description: "If you want to utilize maximum traffic at your stall, then you must opt out of double-decker exhibition stands designed and manufactured by RADON SF 2.O.O. These booths add prominence to the brand and portray your company as an industry expert. Our designed booths are easy to spot on the show floor and make your brand stand out on the show floor.",
    images: [
      "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop"
    ],
    ctaText: "LEARN MORE ABOUT DOUBLE DECKER STAND",
    ctaLink: "/double-decker-stands"
  },
  {
    title: "PAVILION EXHIBITION STANDS",
    description: "Designing and manufacturing the country pavilion exhibition stand requires hands-on expertise. RADON SF 2.O.O. is a professional exhibition stand builder who is an expert in constructing an impressive range of country pavilion stands. Exhibiting with teams that are promoting a similar culture, ethnicity, and lifestyle but designed exhibits could bring countless benefits to the business.",
    images: [
      "https://images.unsplash.com/photo-1540317580384-e5d6509d5cc2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597314040917-99c7647ee8c6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=1000&auto=format&fit=crop"
    ],
    ctaText: "LEARN MORE ABOUT PAVILION EXHIBITION STAND",
    ctaLink: "/pavilion-design"
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
  title: "HAVE A LOOK AT OUR TRADE SHOW EXHIBIT RENTAL WORK IN ORLANDO",
  description: "For decades of experience, we have gained trust in providing an outstanding trade show booth in Orlando and things will remain the same in the coming years as our gratitude level can put each and every task with complete dedication and enthusiasm. So, take a look at various innovative designs that our team has created to make our clients happy.",
  ctaText: "VIEW PORTFOLIO",
  ctaLink: "/portfolio"
};

// Footer Section
export const buildSection = {
  title: "WE BUILD",
  highlight: "EXHIBITION STANDS",
  description: "RADON SF 2.O.O. has its manufacturing units and designing studios in Europe & UK. By hiring us, you can be assured of getting the premium quality exhibition stand that will be installed timely at the background. Our in-house production units are equipped with state-of-art technologies and advanced printing machines in order you the most captivating booth. We have acquired the reputation for delivering the best exhibition stand designs that include real-time technologies, extensive creativity, AI/VR technologies (on demand), interactive graphics, etc. to construct bespoke stands that make the brand stand out of the show floor."
};

// Get available countries helper - uses the existing system
export { getAvailableCountries };

// Helper to check if a country is available - uses the existing system
export { isCountryAvailable as isCountryInList };