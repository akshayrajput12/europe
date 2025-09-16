// src/data/portfolio.ts
import { getPortfolioPageDataFromDB, getAllPortfolioItems } from '@/lib/database';

export interface PortfolioItem {
  image: string;
  // Removed featured property as it's no longer used
}

export interface PortfolioPageData {
  title: string;
  items: PortfolioItem[];
}

export interface HeroPortfolioData {
  title: string;
  subtitle: string;
}

export interface PortfolioData {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
  ctaText: string;
  ctaLink: string;
}

// Hero Portfolio Section Data (for home page) - now fetched from database
export const getHeroPortfolioData = async (): Promise<HeroPortfolioData> => {
  try {
    const portfolioData = await getPortfolioPageDataFromDB();
    if (portfolioData) {
      return {
        title: portfolioData.portfolio_title || "OUR PORTFOLIO",
        subtitle: portfolioData.portfolio_subtitle || "Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project."
      };
    }
  } catch (error) {
    console.error('Error fetching hero portfolio data:', error);
  }
  
  // Fallback data (minimal)
  return {
    title: "OUR PORTFOLIO",
    subtitle: "Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project."
  };
};

export const getPortfolioData = async (): Promise<PortfolioData> => {
  try {
    const portfolioData = await getPortfolioPageDataFromDB();
    if (portfolioData) {
      // Show the first 6 items instead of filtering by featured
      const firstSixItems = portfolioData.portfolio_items.slice(0, 6);
      
      return {
        title: portfolioData.hero_title || "OUR PORTFOLIO",
        subtitle: portfolioData.portfolio_subtitle || "Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project.",
        items: firstSixItems,
        ctaText: "View All Projects",
        ctaLink: "/portfolio",
      };
    }
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
  }
  
  // Minimal fallback data
  return {
    title: "OUR PORTFOLIO",
    subtitle: "Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project.",
    items: [],
    ctaText: "View All Projects",
    ctaLink: "/portfolio",
  };
};

// Portfolio Page Data with extensive portfolio items - now fetched from database
export const getPortfolioPageData = async (): Promise<PortfolioPageData> => {
  try {
    const portfolioItems = await getAllPortfolioItems();
    if (portfolioItems) {
      return {
        title: "PORTFOLIO",
        items: portfolioItems
      };
    }
  } catch (error) {
    console.error('Error fetching portfolio page data:', error);
  }
  
  // Minimal fallback data
  return {
    title: "PORTFOLIO",
    items: []
  };
};