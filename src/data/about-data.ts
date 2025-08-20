export interface CompanyStats {
  id: string
  value: number
  label: string
  description: string
  icon: string
  order: number
  created_at?: string
  updated_at?: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  created_at?: string
  updated_at?: string
}

export interface Service {
  id: string
  title: string
  description: string
  image: string
  isReversed?: boolean
  order: number
  created_at?: string
  updated_at?: string
}

export interface HeroSection {
  id: string
  title: string
  backgroundImage: string
  created_at?: string
  updated_at?: string
}

export interface CompanyInfo {
  id: string
  yearsInBusiness: string
  yearsLabel: string
  whoWeAreTitle: string
  description: string
  additionalDescription: string
  quote: string
  globalExhibitionText: string
  created_at?: string
  updated_at?: string
}

export interface FactsSection {
  id: string
  title: string
  description: string
  created_at?: string
  updated_at?: string
}

export interface TeamInfo {
  id: string
  title: string
  description: string
  teamImage: string
  created_at?: string
  updated_at?: string
}

export const heroData: HeroSection = {
  id: "hero-1",
  title: "ABOUT US",
  backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=800&fit=crop&crop=center",
}

export const companyInfo: CompanyInfo = {
  id: "company-info-1",
  yearsInBusiness: "25+",
  yearsLabel: "YEARS",
  whoWeAreTitle: "WHO WE ARE?",
  description:
    "RADON SP. Z.O.O. is one of the leading Exhibition stand builder in Europe. For last 20 years we have been serving industries in participating in Exhibitions and empowering company's brand image. Our team of experts are specialized in creating hassle-free creative stand designs for Exhibitions across Germany & Europe.",
  additionalDescription:
    "RADON SP. Z.O.O. is one of the leading Exhibition stand builder in Europe. For last 20 years we have been serving industries in participating in Exhibitions and empowering company's brand image. Our team of experts are specialized in creating hassle-free creative stand designs for Exhibitions across Germany & Europe.",
  quote: "Our service is available at single point of contact, hence no third-party involvement.",
  globalExhibitionText:
    "We are global exhibition stand design manufacturer. Explore the boundless creative opportunities with us.",
}

export const companyStats: CompanyStats[] = [
  {
    id: "stat-1",
    value: 20,
    label: "YEAR IN INDUSTRY",
    description: "Years of expertise",
    icon: "✓",
    order: 1,
  },
  {
    id: "stat-2",
    value: 4650,
    label: "PROJECTS WORLDWIDE",
    description: "Successful projects",
    icon: "★",
    order: 2,
  },
  {
    id: "stat-3",
    value: 1000,
    label: "HAPPY CLIENTS",
    description: "Satisfied customers",
    icon: "👤",
    order: 3,
  },
  {
    id: "stat-4",
    value: 1121,
    label: "TRADE SHOW WORLDWIDE",
    description: "Combined team experience",
    icon: "🌍",
    order: 4,
  },
]

export const teamInfo: TeamInfo = {
  id: "team-info-1",
  title: "MEET OUR TEAM",
  description:
    "Our team is the backbone of our success and outstanding outcomes. We serves best and that happy and celebrated when we accomplish your Exhibition goal. For us, satisfaction comes with client's success.",
  teamImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=faces",
}

export const services: Service[] = [
  {
    id: "service-1",
    title: "MARKETING EXPERTS",
    description:
      "The sales and marketing team is responsible for sending the right message to prospects who are involved in the decision-making process within the target company. They track market developments, create strategies, set up sales plans, and maintain customer relations.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&crop=center",
    isReversed: true,
    order: 1,
  },
  {
    id: "service-2",
    title: "PROJECT MANAGEMENT",
    description:
      "This department Plans and use the company's resources, tools & techniques for the specific task, event. They create a timeline and plan for every assignment. They also ensure that the given assignment is completed within time frame without compromising on quality.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face",
    isReversed: false,
    order: 2,
  },
  {
    id: "service-3",
    title: "DESIGN AND PLANNING",
    description:
      "The effect of CAD and 3D MAX technology and the designing skills of our creative team of designers brings creativity.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&crop=center",
    isReversed: true,
    order: 3,
  },
  {
    id: "service-4",
    title: "FABRICATION AND INSTALLATION",
    description:
      "Implementation is the step-wise process of putting a decision into action and our experts provide the hassle-free installation with perfection.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center",
    isReversed: false,
    order: 4,
  },
  {
    id: "service-5",
    title: "LOGISTICS",
    description:
      "Our Logistic department is one of the strong factor of Radon sp. z.o.o. A huge manufacturing plant in Poland and our worldwide presence makes all operations very smooth and easy from carrying to transporting to the final venue. We have a massive storage area to store all components.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop&crop=center",
    isReversed: true,
    order: 5,
  },
]

export const factsSection: FactsSection = {
  id: "facts-1",
  title: "FACT & FIGURES!",
  description:
    "Some facts about us is worth mentioning here before you choose our solution. Our designing teams are committed to provide you a range of creative solutions to stand out in Exhibition and encourage maximum engagement during show.",
}
