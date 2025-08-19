// Interfaces for strong typing & backend integration

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  buttons: string[];
}

export interface BenefitsData {
  title: string;
  benefits: string[];
  image: string;
}

export interface PortfolioData {
  title: string;
  description: string;
  
}

export interface PartnerData {
  title: string;
  subtitle: string;
  description: string;
}

export interface StatementData {
  title: string;
  subtitle: string;
  description: string;
}

export interface PointsTableData {
  title: string;
  items: string[];
  descriptions: string[];
}

// ✅ Typed Data Exports

export const doubleDeckHeroData: HeroData = {
  title: "DOUBLE DECKER EXHIBITION STANDS",
  subtitle: "DESIGN & BUILD",
  description:
    "If you want to make your brand easily spotted on the show floor then contact Chronicles to get double-decker exhibit stands. These booths allow users to expand the usable space upwards. We have designed and built double-decker exhibition stands for 1150+ trade shows in Europe and clients worldwide trust us for their exhibit needs. Our designed two-story booths add prominence to the brand and drive traffic to the stall.",
  buttons: ["REQUEST FOR FREE DESIGN", "REQUEST FOR QUOTATION"],
};

export const doubleDeckBenefitsData: BenefitsData = {
  title: "BENEFITS OF THE DOUBLE-DECKER EXHIBITION STAND:",
  benefits: [
    "Double-decker exhibits are easy to spot on the show floor, and it can drive traffic to the stall.",
    "These booths allow users to expand the usable space upwards. It provides a lot of branding, interactivity, and product displays as exhibitors have separate spaces for meetings and social gatherings.",
    "Double-decker booths offer maximum customer engagement in a private atmosphere.",
    "Double-decker stands offer great flexibility to use some creative ideas with captivating graphics and add value to the business.",
  ],
  image:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop",
};

export const doubleDeckPortfolioData: PortfolioData = {
  title: "OUR PORTFOLIO",
  description:
    "Please check some of our double-decker booth designs that we have made on order for our valuable clients. These designs were aesthetically stunning and filled with lots of creativity.",

};

export const doubleDeckPartnerData: PartnerData = {
  title: "CHRONICLES",
  subtitle: "YOUR IDEAL DOUBLE DECK BOOTH PARTNER",
  description:
    "Double Decker Trade Show Booths can be difficult to design and build, but nothing is difficult for Chronicles. We are one of the most trusted double-decker exhibition stand builders in Europe. We have been in the double-decker exhibition stand designing industry for the last 20+ years.",
};

export const doubleDeckStatementData: StatementData = {
  title: "MAKE A BOLD STATEMENT",
  subtitle: "DOUBLE DECKER EXHIBITION STAND",
  description:
    "The double-decker booths designed by Chronicles not only increase the exhibiting space but also make a solid impression amidst the competition.",
};

export const doubleDeckPointsTable: PointsTableData = {
  title: "WHY CHOOSE DOUBLE-DECKER STANDS?",
  items: [
    "Maximize your floor space without increasing costs.",
    "Create private meeting areas on the upper deck.",
    "Gain better visibility on the crowded show floor.",
    "Showcase products with stunning two-level designs.",
  ],
  descriptions: [
    "At Chronicles, we design double-decker booths that not only expand the exhibiting space but also ensure your brand stands tall amidst the competition.",
    "Our innovative booth designs help clients achieve maximum impact with functional, creative, and visually striking two-story exhibition stands.",
  ],
};
