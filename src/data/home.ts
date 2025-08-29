// Interfaces for strong typing
export interface Hero {
  backgroundImage: string
}

export interface MainSection {
  title: string
  subtitle: string
  htmlContent: string // Changed from description to htmlContent
}

export interface Exhibition {
  title: string
  subtitle?: string
  boothImage?: string
  htmlContent: string // Unified to HTML content only
}

export interface SolutionItem {
  title: string
  description: string
  image: string
}

export interface Solutions {
  title: string
  htmlContent: string // Changed from subtitle to htmlContent
  items: SolutionItem[]
}

export interface WhyBest {
  title: string
  subtitle: string
  htmlContent: string // Changed from content array to htmlContent
}

export interface HomeData {
  hero: Hero
  mainSection: MainSection
  exhibitionData: {
    [key: string]: Exhibition // e.g., 'europe', 'usa'
  }
  solutions: Solutions
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
    htmlContent: `<p>Transform your trade show presence with our <strong>comprehensive exhibition stand solutions</strong> across Europe. We specialize in creating <em>impactful brand experiences</em> that drive results and elevate your market presence.</p>
`
  },

  exhibitionData: {
    europe: {
      title: "EXHIBITION STAND SERVICES",
      subtitle: "ACROSS EUROPE",
      boothImage:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      htmlContent: `<p>As a <strong>leading exhibition stand builder</strong>, we offer complete exhibition stand design and fabrication services across Europe. From initial concept to final installation, we cover all aspects you need for <em>stress-free exhibition participation</em>.</p>`
    },
    usa: {
      title: "YOUR TRADE SHOW BOOTH BUILDER IN USA",
      htmlContent: `<p>Welcome to <strong>Chronicle Exhibit LLC</strong>, your prominent partner for custom trade show booth displays and exhibits. With <em>13+ years</em> worth of experience and an excellent team, we have been providing exclusive <a href="/custom-stands">custom trade show booth design services</a> across the United States of America.</p>

<p>As Chronicle Exhibit LLC, we are aware that exhibitions and trade shows serve as a fantastic opportunity for companies like you to display your products and services to potential customers. For this reason, we offer locally attractive custom trade show booth designs that can make your brand stand out from the crowd.</p>
`
    },
  },

  solutions: {
    title: "EXHIBITION STAND SOLUTIONS",
    htmlContent: `<p>Discover our comprehensive range of <strong>exhibition stand solutions</strong> designed to meet every business need and budget. From innovative custom designs to flexible modular systems, we create impactful displays that drive engagement and deliver results.</p>
`,
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
          "Modular booths are the most user-friendly and can be assembled, disassembled and transported in a fast...",
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Double Decker Exhibition Stands",
        description:
          "Double-decker exhibits are easy to spot on the show floor, and in turn drive traffic and ...",
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

  whyBest: {
    title: "WHY WE ARE ONE OF THE",
    subtitle: "BEST EXHIBITION STAND DESIGN COMPANIES?",
    htmlContent: `<p>Like a successful <strong>exhibition stand construction company</strong> in Europe, RADON SP Z O.O. has provided valuable exhibition stand design and build services for the last <em>20+ years</em>. We have accomplished <strong>4000+ projects</strong> by participating in more than 1200 trade shows.</p>

<p>We aim to give you a great trade show booth that attracts your audience and achieves the results you want. Our <a href="/portfolio">top-notch turnkey solution</a> has provided a stress-free exhibiting experience to numerous companies to the present date.</p>

<p>Our comprehensive services include all the essential aspects such as <strong>installation, designing, logistics, and dismantling</strong>. In case you encounter any issues during the trade show, we provide world-class on-site supervision with our team members present throughout the entire event.</p>

<p>You just have to arrive at the venue, showcase your deals, and simply leave after the event gets over. We will manage the rest with our <em>expertise and experience</em>. Our own design studio helps us deliver the best-customized services in the market.</p>

<p>Our skilled team first collaborates with your representative to understand your promotional activity's goals and needs. Then our qualified graphic designer creates a perfect design that meets your business objectives. Contact us if you're looking for the <strong>best exhibition stand designer</strong> with adequate resources to deliver excellence.</p>`
  },
}
