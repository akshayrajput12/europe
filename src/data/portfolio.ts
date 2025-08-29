// src/data/portfolio.ts

export interface PortfolioItem {
  image: string;
  size: 'small' | 'medium' | 'large' | 'wide';
  featured?: boolean;
}

export interface PortfolioPageData {
  title: string;
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
      size: "medium",
      featured: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      size: "large",
      featured: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      size: "medium",
      featured: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=2012&q=80",
      size: "wide",
      featured: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      size: "small",
      featured: true
    },
    {
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      size: "medium",
      featured: true
    },
  ],
  ctaText: "View All Projects",
  ctaLink: "/portfolio",
};

// Portfolio Page Data with extensive portfolio items
export const portfolioPageData: PortfolioPageData = {
  title: "PORTFOLIO",
  items: [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      size: "large"
    },
    {
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      size: "wide"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      size: "large"
    },
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      size: "wide"
    },
    {
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop",
      size: "large"
    },
    {
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
      size: "small"
    },
    {
      image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=800&h=600&fit=crop",
      size: "large"
    },
    {
      image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=800&h=600&fit=crop",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop",
      size: "small"
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
      size: "large"
    },
    {
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop",
      size: "wide"
    },
    {
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      size: "small"
    },
    {
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=600&fit=crop",
      size: "large"
    },
    {
      image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=800&h=600&fit=crop",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&h=600&fit=crop",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      size: "wide"
    },
    {
      image: "https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?w=800&h=600&fit=crop",
      size: "small"
    },
    {
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop",
      size: "large"
    },
    {
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      size: "wide"
    },
    {
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      size: "large"
    }
  ]
};