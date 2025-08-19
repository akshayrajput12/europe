// src/data/portfolio.ts

export interface PortfolioItem {
  image: string;
  title: string;
  category: string;
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
    },
    {
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Creative Booth in Paris",
      category: "Exhibition",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      title: "Custom Build in New York",
      category: "Corporate Event",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=2012&q=80",
      title: "Expo Stand in Dubai",
      category: "International Expo",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Conference Setup in London",
      category: "Conference",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      title: "Trade Fair Booth in Las Vegas",
      category: "Trade Fair",
    },
  ],
  ctaText: "View All Projects",
  ctaLink: "/portfolio",
};
