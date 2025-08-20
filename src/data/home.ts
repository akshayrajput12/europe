// Interfaces for strong typing
export interface Hero {
  backgroundImage: string
}

export interface MainSection {
  title: string
  subtitle: string
  description: string
}

export interface Exhibition {
  title: string
  subtitle?: string
  boothImage?: string
  paragraphs: string[]
}

export interface SolutionItem {
  title: string
  description: string
  image: string
}

export interface Solutions {
  title: string
  subtitle: string
  items: SolutionItem[]
}

export interface WhyBest {
  title: string
  subtitle: string
  content: string[]
}

export interface HomeData {
  hero: Hero
  mainSection: MainSection
  exhibitionData: {
    [key: string]: Exhibition // e.g., 'europe', 'usa'
  }
  solutions: Solutions
  portfolio: string[]
  countries: string[]
  whyBest: WhyBest
}

// Actual data
export const homeData: HomeData = {
  hero: {
    backgroundImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },

  mainSection: {
    title: "YOUR EXHIBITION STAND BUILDER",
    subtitle: "IN EUROPE",
    description:
      "As a leading exhibition stand builder, we offer complete exhibition stand design and fabrication services in Europe. From start to finish, we cover all the aspects you need for stress-free exhibition participation.",
  },

  exhibitionData: {
    europe: {
      title: "YOUR EXHIBITION STAND BUILDER",
      subtitle: "IN EUROPE",
      boothImage:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      paragraphs: [
        "As a leading exhibition stand builder, we offer complete exhibition stand design and fabrication services in Europe. From start to finish, we cover all the aspects you need for stress-free exhibition participation.",
        "As a leading exhibition stand builder, we offer complete exhibition stand design and fabrication services in Europe. From start to finish, we cover all the aspects you need for stress-free exhibition participation.",
        "As a leading exhibition stand builder, we offer complete exhibition stand design and fabrication services in Europe. From start to finish, we cover all the aspects you need for stress-free exhibition participation.",
      ],
    },
    usa: {
      title: "YOUR TRADE SHOW BOOTH BUILDER IN USA",
      paragraphs: [
        "Welcome to Chronicle Exhibit LLC, your prominent partner for custom trade show booth displays and exhibits. With 13+ years worth of experience are an excellent team we have been providing exclusive custom trade show booth design services across the United States of America.",
        "As Chronicle Exhibit LLC, we are aware that exhibitions and trade shows serve as a fantastic opportunity for companies like you to display your products and services to potential customers. For this reason, we offer locally attractive custom trade show booth designs that can make your brand stand out from the crowd.",
        "As a trusted trade show booth builder, we have completed 5780+ trade show booth displays design and building projects successfully. Our team of dedicated professionals will handle all your shows with efficiency and precision. We will guide you at every step, from laying the concept, outlining the trade show booth design and fabrication to installing, dismantling storing.",
        "You are important to us and we will never compromise on your work. We believe in building long lasting relationships and will support you throughout your trade show journey.",
      ],
    },
  },

  solutions: {
    title: "EXHIBITION STAND SOLUTIONS",
    subtitle:
      "As a leading exhibition stand builder, we offer complete exhibition stand design and fabrication services in Europe. From start to finish, we cover all the aspects you need for stress-free exhibition participation.",
    items: [
      {
        title: "Custom Exhibition Stands",
        description:
          "Custom stand designs are tailored to your brand, accurately representing your company's unique...",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Modular Exhibition Stands",
        description:
          "Modular booths are the most user-friendly and can be assembled, disassembled and transported in a fast and...",
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Double Decker Exhibition Stands",
        description:
          "Double-decker exhibits are easy to spot on the show floor, and in turn drive traffic...",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      },
      {
        title: "Exhibition Pavilion Design",
        description:
          "All pavilion booths bring together a group of different brands in one place, or offer the best space...",
        image:
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
      },
    ],
  },

  portfolio: [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  ],

  countries: [
    "Germany",
    "France",
    "Netherlands",
    "United Kingdom",
    "Switzerland",
    "Spain",
    "Italy",
    "Austria",
  ],

  whyBest: {
    title: "WHY WE ARE ONE OF THE",
    subtitle: "BEST EXHIBITION STAND DESIGN COMPANIES?",
    content: [
      "Like a successful exhibition stand construction company in Europe, RADON SP Z O.O. has provided valuable exhibition stand design and build services for the last 20+ years. We have accomplished 4000+ projects by participating in more than 1200 trade shows.",
      "We aim to give you a great trade show booth that attracts your audience and achieves the results you want.",
      "Our top-notch turnkey solution has provided a stress - free exhibiting experience to numerous companies to the present date. It includes all the essential services such as installation, designing, logistics, and dismantling.",
      "In case you are stuck somewhere due to any glitches during the trade show. Then there is nothing to worry about because we have a provision of world-class on-site supervision. In this service, our team members will be present throughout the whole trade show for handling all the glitches.",
      "You just have to arrive at the venue, showcase your deals, and simply leave after the event gets over. We will manage the rest of the things with our expertise and experience.",
      "We have always achieved excellence in providing the best trade show stand designs in the market! RADON SP Z O.O. has its own design studio that helps us in carrying out the best-customized services.",
      "Our skilled team first collaborates with your representative to know your promotional activity's goals and needs. Then our qualified graphic designer will carry out a perfect design that meets your business goals.",
      "Just contact us if you are looking for the best exhibition stand designer. We have adequate resources to offer the best trade show stand design in the best possible manner.",
    ],
  },
}
