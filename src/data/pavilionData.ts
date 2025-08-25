export interface HeroData {
  title: string
  subtitle?: string
  description: string
  backgroundImage: string
}

export interface StandProjectText {
  title: string
  highlight?: string
  description: string
}

export interface WhyChooseData {
  title: string
  paragraphs: string[]
}

export interface BenefitItem {
  text: string
}

export interface BenefitsData {
  title: string
  benefits: BenefitItem[]
  image: string
}

export interface OurExpertiseData {
  title: string
  paragraphs: string[]
}

export interface AdvantageItem {
  text: string
}

export interface AdvantagesData {
  title: string
  advantages: AdvantageItem[]
  image: string
}

export interface PortfolioData {
  title: string
  subtitle?: string
  description: string
}

export interface CompanyInfoData {
  title: string
  points: string[]  // Changed from description to points array
}

export interface FooterData {
  company: {
    name: string
    description: string
    contact: {
      email: string
      phone: string
    }
  }
  sections: {
    title: string
    links: { label: string; href: string }[]
  }[]
  countries: {
    title: string
    list: string[]
  }
}

export const pavilionStandProjectText: StandProjectText = {
  title: "SOME OF OUR",
  highlight: "EXHIBITION PAVILION DESIGNS",
  description:
    "Check some of the designs aesthetically created and delivered in the best quality by our professional exhibition pavilion designers. The below pictures demonstrate our specially tailored pavilion designs to meet the client's objectives and maximise the expo's success.",
}

// Consolidated pavilion data
export const pavilionData = {
  hero: {
    title: "EXHIBITION PAVILION DESIGN",
    subtitle: "DESIGN & BUILD",
    description: "Design and build custom exhibition pavilions that showcase your brand with maximum impact and professional excellence.",
    backgroundImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
  } as HeroData,

  StandProjectText: pavilionStandProjectText,

  whyChoose: {
    title: "WHY TO CHOOSE US?",
    paragraphs: [
      "We have our manufacturing units in Germany and Poland which are equipped with modern machinery and printing technologies. So, with us, you'll not have to worry about storage and on-time delivery part.",
      "We have a team of expert, qualified, skilled, and experienced 3D designers, visualizers, and copywriters who design, build, and manufacture your expo pavilion on the basis of your marketing needs.",
      "We also provide on-site supervision during the trade show. Even if you have an emergency, our team's problem-solving capability will help you resolve that issue.",
      "We have our manufacturing units in Germany and Poland which are equipped with modern machinery and printing technologies. So, with us, you'll not have to worry about storage and on-time delivery part.",
      "We have a team of expert, qualified, skilled, and experienced 3D designers, visualizers, and copywriters who design, build, and manufacture your expo pavilion on the basis of your marketing needs.",
      "We also provide on-site supervision during the trade show. Even if you have an emergency, our team's problem-solving capability will help you resolve that issue.",
    ],
  } as WhyChooseData,

  benefits: {
    title: "BENEFITS OF PAVILION EXHIBITION STANDS:",
    benefits: [
      {
        text: "As pavilion booths bring together a group of different brands in one place so offer the best space for collaboration, engagement, and knowledge exchange.",
      },
      {
        text: "Pavilion stands are cost-effective as small enterprises can gain exposure without bearing the cost of large stand-alone exhibitions.",
      },
      {
        text: "Pavilion vendors offer greater visibility as multiple companies are sharing the same area which draws the attention of attendees.",
      },
      {
        text: "Pavilion booth allows exhibitors to collectively use the shared spaces like meeting rooms, and storage space for storing their marketing materials.",
      },
    ],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
  } as BenefitsData,

  ourExpertise: {
    title: "OUR EXPERTISE & EXPERIENCE",
    paragraphs: [
      "With over two decades of experience in the exhibition industry, we have mastered the art of creating impactful pavilion designs that drive business results and enhance brand visibility.",
      "Our team consists of certified architects, interior designers, and project managers who understand the nuances of different industries and can tailor solutions accordingly.",
      "We utilize cutting-edge technology including 3D modeling, virtual reality previews, and advanced construction techniques to ensure precision in every project we undertake.",
      "Our global presence spans across Europe, Asia, and the Middle East, allowing us to serve clients worldwide with consistent quality and local expertise.",
      "We maintain strategic partnerships with leading material suppliers and logistics companies to ensure cost-effective solutions without compromising on quality standards.",
      "Our post-installation support includes maintenance services, storage solutions, and modification capabilities to extend the lifecycle of your exhibition investments.",
    ],
  } as OurExpertiseData,

  advantages: {
    title: "ADVANTAGES OF CUSTOM EXHIBITION SOLUTIONS:",
    advantages: [
      {
        text: "Custom-built pavilions provide unique brand identity and help companies stand out from competitors with distinctive design elements and innovative layouts.",
      },
      {
        text: "Modular construction allows for easy reconfiguration and reuse across multiple events, maximizing return on investment and reducing long-term costs.",
      },
      {
        text: "Advanced lighting systems and interactive technology integration create immersive experiences that engage visitors and generate quality leads.",
      },
      {
        text: "Sustainable materials and eco-friendly construction methods align with corporate social responsibility goals while maintaining aesthetic appeal.",
      },
    ],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
  } as AdvantagesData,

  portfolio: {
    title: "WE CREATE CAPTIVATING EXHIBITION DESIGN & BUILD",
    description:
      "RADON SP Z.O.O. is a pavilion builder was launched in 2003, proving us more than a decade-old exhibition pavilion designer and builder in Europe. We have expertise in designing an exhibition pavilion that reflects your professionalism and business goals. We are a team of creative minds with extensive experience in the exhibition industry.",
  } as PortfolioData,

  companyInfo: {
    title: "RADON SP Z.O.O. AND ITS STAND-BUILDING SERVICES",
    points: [  // Changed from description to points array
      "As a premier exhibition stand builder in Europe, we offer a range of services and solutions in all the major exhibiting countries across Europe, including the Netherlands, Germany, Spain, and others.",
      "We always aim to understand the client's marketing goals and deliver a perfect exhibition position.",
      "We use an integrated approach and methodology that ensures outstanding results every time we take up a project.",
      "Since 2003, we have been providing project-only solutions with a deep understanding of client's marketing goals.",
      "Our team consists of certified architects, interior designers, and project managers who understand the nuances of different industries.",
      "We maintain strategic partnerships with leading material suppliers and logistics companies to ensure cost-effective solutions without compromising on quality standards."
    ]
  } as CompanyInfoData,
}
