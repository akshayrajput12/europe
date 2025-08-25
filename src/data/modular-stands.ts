export interface HeroSection {
  title: string
  subtitle?: string
  backgroundImage: string
}

export interface ModularStandsData {
  hero: HeroSection
  benefits: ModularBenefitsSection
  StandProjectText: StandProjectText
  exhibitionBenefits: ExhibitionBenefits
  pointsTable: ModularPointsTable
  modularDiversity: ModularDiversitySection
  fastestConstruction: FastestConstructionSection
  experts: ExpertsSection
}

export interface ModularPointsTable {
  title: string
  items: string[]
  descriptions: string[]
}

export interface ModularBenefit {
  text: string
}

export interface ModularBenefitsSection {
  title: string
  benefits: ModularBenefit[]
  image: string
}

export interface ExhibitionBenefits {
  title: string
  subtitle: string
  items: string[]
  image: string
}

export interface StandProjectText {
  title: string
  highlight?: string
  description: string
}

export interface ModularDiversitySection {
  title: string
  points: string[]
}

export interface FastestConstructionSection {
  title: string
  subtitle: string
  description: string
  additionalText: string
}

export interface ExpertsSection {
  title: string
  description: string
  additionalText: string
}

export const modularBenefitsSection: ModularBenefitsSection = {
  title: "BENEFITS OF MODULAR EXHIBITION STANDS:",
  benefits: [
    {
      text: "Modular booths are the most user-friendly and can be assembled, shipped, and dismantled in a short period.",
    },
    {
      text: "Modular exhibits offer endless scope for reconfiguration as they can be broken down into different parts and rebuilt for new experiences.",
    },
    { text: "Modular stands are light in weight and strong, so they can be carried easily at different venues." },
    {
      text: "Modular exhibits can be easily packed in compact cases and stored for a long time for reuse at the next event.",
    },
    {
      text: "Modular stands are the most budget-friendly option that requires less maintenance costs and shipping package charges.",
    },
  ],
  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
}

export const modularDiversitySection: ModularDiversitySection = {
  title: "MODULAR DIVERSITY",
  points: [
    "After years, we realized that the modular trade show booth construction requires lots of modification as per the brand's individualization.",
    "Our dedicated project manager will tell you about the different modular booth options that could be best for your next event.",
    "We know how to bring individuality to your modular booths to enhance the brand's presence, adding functionality and creating a strong visual impact.",
  ],
}

export const fastestConstructionSection: FastestConstructionSection = {
  title: "FASTEST CONSTRUCTION",
  subtitle: "OF MODULAR BOOTHS IN EUROPE",
  description:
    "Modular booths do not require any huge investment. These booths can be constructed and disassembled in a short period. These exhibits are perfect for those companies who want to reuse the modular display stands at their future events.",
  additionalText:
    "Hiring us as your partner could be a real-time saver as we will take care of everything from the concept and planning to build to the delivery of modular booths. We will also store these booths for your next trade usage.",
}

export const expertsSection: ExpertsSection = {
  title: "EXPERTS IN PROVIDING MODULAR BOOTHS",
  description:
    "We specialize in providing high-quality modular booths and delivering exceptional services across Europe, including France, Germany, Spain, Italy, Austria, Switzerland, the Netherlands, Ukraine, the UK, and more. With extensive experience in designing modular exhibition booths tailored to exhibitors' requirements and budgets, we ensure a seamless process from concept to execution using advanced manufacturing unit and the latest use of technology enhance efficiency, making the entire experience hassle-free for our clients.",
  additionalText:
    "From delivery to set-up, we take care of every minute detail at your exhibition venue, ensuring a hassle-free experience. Our professionally skilled team also provides complete on-site supervision to guarantee flawless execution. To know more, call us right away!",
}

export const standProjectText: StandProjectText = {
  title: "SOME OF OUR",
  highlight: "MODULAR EXHIBITION STANDS",
  description:
    "Check some of the designs aesthetically created and delivered in the best quality by our professional modular exhibition stand builders. The below pictures demonstrate our specially tailored exhibition stands to meet the client's objectives and maximise the expo's success.",
}

export const modularPointsTable: ModularPointsTable = {
  title: "BENEFITS OF MODULAR EXHIBITION STANDS",
  items: [
    "Modular booths are the most user-friendly and can be assembled, shipped, and dismantled in a short period.",
    "Modular exhibits offer endless scope for reconfiguration as they can be broken down into different parts and rebuilt for new experiences.",
    "Modular stands are light in weight and strong, so they can be carried easily at different venues.",
    "Modular exhibits can be easily packed in compact cases and stored for a long time for reuse at the next event.",
    "Modular stands are the most budget-friendly option that requires less maintenance costs and shipping package charges."
  ],
  descriptions: [
    "Chronicles SP Z.O.O. has been a leading modular exhibition stand construction company in Europe for over 20 years.",
    "We design customizable, easy-to-configure modular booths that are lightweight, sturdy, reusable, and perfect for showcasing products at any trade show.",
    "Our modular trade show booth construction ensures efficiency, cost-effectiveness, and visual impact, helping your brand stand out at every event."
  ]
}

export const exhibitionBenefits: ExhibitionBenefits = {
  title: "lets see OF MODULAR EXHIBITION STANDS:",
  subtitle:
    "Discover why modular exhibition booths are the most practical and cost-effective solution for your brand in Europe.",
  items: [
    "Modular booths are the most user-friendly and can be assembled, shipped, and dismantled in a short period.",
    "Modular exhibits offer endless scope for reconfiguration as they can be broken down into different parts and rebuilt for new experiences.",
    "Modular stands are light in weight and strong, so they can be carried easily at different venues.",
    "Modular exhibits can be easily packed in compact cases and stored for a long time for reuse at the next event.",
    "Modular stands are the most budget-friendly option that requires less maintenance costs and shipping package charges.",
  ],
  image:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
}

// Main consolidated data export
export const modularStandsData: ModularStandsData = {
  hero: {
    title: "MODULAR EXHIBITION STANDS",
    subtitle: "DESIGN & BUILD",
    backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop",
  },
  benefits: modularBenefitsSection,
  StandProjectText: standProjectText,
  exhibitionBenefits: exhibitionBenefits,
  pointsTable: modularPointsTable,
  modularDiversity: modularDiversitySection,
  fastestConstruction: fastestConstructionSection,
  experts: expertsSection,
}