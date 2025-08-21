export type HeroData = {
  name: string
  company: string
  image: string
  text: string
}

export type IntroData = {
  title: string
  subtitle: string
  text: string
}

export type Testimonial = {
  id: number
  name: string
  company: string
  logo: string
  rating: number
  text: string
}

export const heroData: HeroData = {
  name: "Chronicles Company Reviews",
  company: "Hero Section",
  image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center",
  text: "Chronicles company reviews",
}

export const introData: IntroData = {
  title: "WE HAVE LIST OF TRUSTED AND",
  subtitle: "PROUD CLIENTS TO NARRATE",
  text: "WE HAVE LIST OF TRUSTED AND PROUD CLIENTS TO NARRATE WITH US",
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Marcos Drescher",
    company: "Marcos Drescher",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Excellent service and professional approach. The team delivered exactly what we needed within the promised timeframe.",
  },
  {
    id: 2,
    name: "Justin Kaufmann",
    company: "OPTIMEDIA",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center",
    rating: 5,
    text: "Your service took a huge amount of worry and time off my small team, and let us focus on the things we're good at. We approached Radon Exhibitions with very short deadline to initiate our stand design process. They immediately responded and finished the process of designing in a very short time. Their design execution was very quick and having fine quality. It was really comfortable to work with guys.",
  },
  {
    id: 3,
    name: "Mark Biermann",
    company: "AIRTECH",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=120&h=60&fit=crop&crop=center",
    rating: 4,
    text: "Radon Exhibitions helped us with the exhibition stand design solution very quickly within a short span of time. Especially when we talk about exhibitions, we always need to go for flexible and supportive company which Radon Exhibitions proved it and we are very happy with their services. We will obviously recommend to others as well.",
  },
  {
    id: 4,
    name: "Grant Hirsch",
    company: "GFR",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop&crop=center",
    rating: 4,
    text: "The design of stand was fresh and innovative, all our requests and changes were included without a problem, nothing seemed too much trouble and the stand was built on time and to a high quality. I would have no problem with using Radon Exhibitions for future exhibitions.",
  },
  {
    id: 5,
    name: "Kiley Eisenberg",
    company: "BOTANY WEAVING",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "We are happy with the services provided by the Radon Exhibitions and even they are very flexible in the last moment changes required by us. We will definitely recommend Radon Exhibitions to our business circle. We really appreciate Radon Exhibitions services and especially their immediate and 24/7 support.",
  },
  {
    id: 6,
    name: "Kiley Eisenberg",
    company: "BOTANY WEAVING",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "We are happy with the services provided by the Radon Exhibitions and even they are very flexible in the last moment changes required by us. We will definitely recommend Radon Exhibitions to our business circle. We really appreciate Radon Exhibitions services and especially their immediate and 24/7 support.",
  },
]

export const reviewsData = testimonialsData
