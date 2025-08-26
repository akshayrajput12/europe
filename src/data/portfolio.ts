// src/data/portfolio.ts

export interface PortfolioItem {
  image: string;
  title: string;
  category: string;
  size: 'small' | 'medium' | 'large' | 'wide';
  location?: string;
  year?: string;
  featured?: boolean;
}

export interface PortfolioPageData {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
}

export interface PortfolioData {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
  ctaText: string;
  ctaLink: string;
}

export const portfolioData: PortfolioData = {
  title: "OUR PORTFOLIO",
  subtitle:
    "We have successfully delivered high-quality exhibition stand designs for global clients across Europe and the USA. Here are some of our featured works.",
  items: [
    {
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Exhibition Stand in Berlin",
      category: "Trade Show",
      size: "medium",
      location: "Berlin, Germany",
      year: "2023",
      featured: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Creative Booth in Paris",
      category: "Exhibition",
      size: "large",
      location: "Paris, France",
      year: "2023",
      featured: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      title: "Custom Build in New York",
      category: "Corporate Event",
      size: "medium",
      location: "New York, USA",
      year: "2023",
      featured: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=2012&q=80",
      title: "Expo Stand in Dubai",
      category: "International Expo",
      size: "wide",
      location: "Dubai, UAE",
      year: "2022",
      featured: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Conference Setup in London",
      category: "Conference",
      size: "small",
      location: "London, UK",
      year: "2023",
      featured: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      title: "Trade Fair Booth in Las Vegas",
      category: "Trade Fair",
      size: "medium",
      location: "Las Vegas, USA",
      year: "2022",
      featured: true
    },
  ],
  ctaText: "View All Projects",
  ctaLink: "/portfolio",
};

// Portfolio Page Data with extensive portfolio items
export const portfolioPageData: PortfolioPageData = {
  title: "PORTFOLIO",
  subtitle: "Check out our extensive portfolio of exhibition stands designed and fabricated with love and care for our clients around the world. We have been designing and building exhibition stands for over 20+ years.",
  items: [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      title: "DEVOREX Custom Stand",
      category: "Custom Exhibition Stand",
      size: "large",
      location: "Frankfurt, Germany",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      title: "METNWEST Interactive Booth",
      category: "Interactive Display",
      size: "wide",
      location: "Amsterdam, Netherlands",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      title: "Large Scale Exhibition",
      category: "Large Scale Build",
      size: "large",
      location: "Milan, Italy",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      title: "SOUTHSIDE Modular Design",
      category: "Modular Stand",
      size: "medium",
      location: "Barcelona, Spain",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      title: "Creative Brand Activation",
      category: "Brand Activation",
      size: "medium",
      location: "London, UK",
      year: "2022"
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      title: "Government Pavilion",
      category: "Pavilion Design",
      size: "wide",
      location: "Brussels, Belgium",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop",
      title: "Tech Innovation Hub",
      category: "Technology Stand",
      size: "large",
      location: "Munich, Germany",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      title: "Interactive Experience Zone",
      category: "Experience Design",
      size: "medium",
      location: "Vienna, Austria",
      year: "2022"
    },
    {
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
      title: "Sustainable Materials Showcase",
      category: "Sustainable Design",
      size: "small",
      location: "Copenhagen, Denmark",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=800&h=600&fit=crop",
      title: "Double Decker Experience",
      category: "Double Decker Stand",
      size: "large",
      location: "Paris, France",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=800&h=600&fit=crop",
      title: "Corporate Meeting Space",
      category: "Corporate Design",
      size: "medium",
      location: "Zurich, Switzerland",
      year: "2022"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      title: "Automotive Display Center",
      category: "Automotive Exhibition",
      size: "wide",
      location: "Stuttgart, Germany",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
      title: "Healthcare Innovation Stand",
      category: "Healthcare Exhibition",
      size: "medium",
      location: "Helsinki, Finland",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop",
      title: "Fashion Retail Experience",
      category: "Retail Design",
      size: "small",
      location: "Milan, Italy",
      year: "2022"
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      title: "Food & Beverage Showcase",
      category: "F&B Exhibition",
      size: "medium",
      location: "Lyon, France",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
      title: "Energy Solutions Display",
      category: "Energy Exhibition",
      size: "large",
      location: "Oslo, Norway",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop",
      title: "Digital Innovation Center",
      category: "Digital Experience",
      size: "wide",
      location: "Stockholm, Sweden",
      year: "2022"
    },
    {
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
      title: "Cultural Heritage Pavilion",
      category: "Cultural Exhibition",
      size: "medium",
      location: "Rome, Italy",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      title: "Startup Innovation Hub",
      category: "Startup Exhibition",
      size: "small",
      location: "Berlin, Germany",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=600&fit=crop",
      title: "Luxury Brand Experience",
      category: "Luxury Exhibition",
      size: "large",
      location: "Monaco",
      year: "2022"
    },
    {
      image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=800&h=600&fit=crop",
      title: "Industrial Solutions Stand",
      category: "Industrial Exhibition",
      size: "medium",
      location: "Düsseldorf, Germany",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&h=600&fit=crop",
      title: "Educational Technology Fair",
      category: "Education Exhibition",
      size: "medium",
      location: "Edinburgh, UK",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      title: "Sports & Recreation Expo",
      category: "Sports Exhibition",
      size: "wide",
      location: "Madrid, Spain",
      year: "2022"
    },
    {
      image: "https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?w=800&h=600&fit=crop",
      title: "Financial Services Hub",
      category: "Financial Exhibition",
      size: "small",
      location: "Frankfurt, Germany",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop",
      title: "Green Technology Showcase",
      category: "Green Tech Exhibition",
      size: "large",
      location: "Amsterdam, Netherlands",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop",
      title: "Travel & Tourism Experience",
      category: "Tourism Exhibition",
      size: "medium",
      location: "Vienna, Austria",
      year: "2022"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      title: "Art & Design Gallery",
      category: "Art Exhibition",
      size: "medium",
      location: "Florence, Italy",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      title: "Architecture & Construction",
      category: "Architecture Exhibition",
      size: "wide",
      location: "Barcelona, Spain",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      title: "Global Summit Pavilion",
      category: "Summit Exhibition",
      size: "large",
      location: "Geneva, Switzerland",
      year: "2022"
    }
  ]
};