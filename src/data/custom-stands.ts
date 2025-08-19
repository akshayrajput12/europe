// src/data/customStandsData.ts

// 1. Interfaces for strong typing



export interface HeroSection {
  title: string
  subtitle?: string
  description: string
  backgroundImage: string
}

export interface BenefitsSection {
  title: string
  image?: string
  items: string[]
}

export interface StandProjectText {
  title: string
  highlight?: string // for green part of heading
  description: string
}


export interface BespokeSection {
  title: string
  subtitle?: string
  description: string
}

export interface FreshDesignSection {
  title: string
  subtitle?: string
  description: string
}

export interface CostSection {
  title: string
  subtitle?: string
  description: string
}

export interface PointsTable {
  title: string
  items: string[]
  descriptions: string[]
}

export interface CustomStandsData {
  hero: HeroSection
  benefits: BenefitsSection
  StandProjectText: StandProjectText
  bespoke: BespokeSection
  freshDesign: FreshDesignSection
  costSection: CostSection
  pointsTable: PointsTable
}

// 2. Data Implementation

export const customStandsData: CustomStandsData = {
  hero: {
    title: "CUSTOM EXHIBITION STANDS",
    subtitle: "DESIGN & BUILD",
    description:
      "CHRONICLES SP Z O.O. has 20+ years of experience in designing and building custom exhibition stands that maximize client ROI. As a leading exhibition stand contractor, we are experts in building unique and tailor-made exhibition stands on your behalf. Our team of skilled professionals will work closely with you to create a custom exhibition stand that perfectly reflects your company's vision and outshines competitors. Our design and builds boldly reflect the brand's identity and make your brand stand out at any trade show.",
    backgroundImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
    
  },

  benefits: {
    title: "BENEFITS OF CUSTOM EXHIBITION STAND:",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
    items: [
      "Custom stand designs are tailored to your brand, accurately representing your company's values.",
      "Bespoke exhibition booths are visually attractive, capturing visitors' attention and creating a buzz on the show floor.",
      "They feature interactive elements, live presentations, and product demonstrations, encouraging more visitor engagement.",
      "Custom booths create unique experiences, forge relationships, and make your brand memorable.",
      "These booths enhance visitor engagement with interactive elements and live demonstrations.",
    ],
  },

  StandProjectText: {
  title: "SOME OF OUR",
  highlight: "CUSTOM EXHIBITION STAND", // green span
  description:
    "Check some of the designs aesthetically created and delivered in the best quality by our professional bespoke exhibition stand builders. The below pictures demonstrate our specially tailored exhibition stands to meet the client's objectives and maximise the expo's success.",

},


  bespoke: {
    title: "A BESPOKE EXHIBITION STAND:",
    subtitle: "SETTING YOUR BRAND APART",
    description:
      "We are known for our adaptability and expertise in creating exhibition stand designs that set your brand's story and connect the brand with the audience on an emotional level. Our experience has taught us that a well-designed exhibition stand can present your brand better and make a real difference on the show floor. As a bespoke exhibition stand design company, we tailor customized exhibition stands to communicate your brand's message, core values, and set your brand apart from the competition. Exhibiting with these bespoke stands means ensuring your brand gets the attention it deserves.",
  },

  freshDesign: {
    title: "ARE YOU LOOKING FOR",
    subtitle: "A FRESH STAND DESIGN FOR YOUR NEXT EVENT?",
    description:
      "Our team of professional exhibition stand designers will connect with your marketing team to understand your brand needs. Then, they will transform your vision into a perfect custom exhibition stand modelling your exact requirements. Our expert custom exhibition stand builders will do an in-depth study of your brand and then consider interactive elements, graphics, branded space, and formal goals. Our overall aim is to build a stand that perfectly represents your company's values.",
  },

  costSection: {
    title: "IS DESIGNING AND BUILDING",
    subtitle: "CUSTOM EXHIBITION STAND COSTLY?",
    description:
      "We take pride in offering custom exhibition stand design and build services at the most competitive and cost-effective prices. We manage expenses wisely as we have in-house manufacturing units where we create high-quality portable stands, taking care of all costs related to printing, transportation, etc. We aim to create an exciting exhibition stand experience for your visitors while ensuring your investment delivers maximum ROI.",
  },

  pointsTable: {
    title: "Key Benefits of Our Custom Stands",
    items: [
      "Tailor-made designs to match your brand identity",
      "High-quality materials ensuring durability",
      "Cost-effective solutions with maximum impact",
      "Easy to set up and dismantle for convenience",
    ],
    descriptions: [
      "Our custom stands are designed with your brand in mind, offering personalized solutions that highlight your unique identity.",
      "We use premium materials to ensure durability while keeping the structure lightweight and portable.",
      "Whether you are showcasing at trade fairs, exhibitions, or corporate events, our stands are optimized to make a lasting impression.",
    ],
  },
}
