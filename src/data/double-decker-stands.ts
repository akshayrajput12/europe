// Interfaces for strong typing & backend integration

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
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
export interface ExhibitionBenefits {
  title: string
  subtitle: string
  items: string[]
  image: string
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
    "CHRONICLES SP Z O.O. has 20+ years of experience in designing and building custom exhibition stands that maximize client ROI. As a leading exhibition stand contractor, we are experts in building unique and tailor-made exhibition stands on your behalf",
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

export const exhibitionBenefitsData: ExhibitionBenefits = {
  title: "Why Choose Our Exhibition Stands?",
  subtitle: "Discover the advantages that make our stands unique and effective.",
  items: [
    "Tailor-made designs to match your brand identity.",
    "High-quality materials ensuring durability and elegance.",
    "Eco-friendly and sustainable production methods.",
    "On-time delivery and hassle-free installation.",
    "Cost-effective solutions without compromising on quality.",
  ],
  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop", // update path if needed
}
