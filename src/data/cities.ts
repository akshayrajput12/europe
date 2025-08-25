// src/data/cities.ts

// City Hero Section Interface
export interface CityHero {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

// What We Do Interface
export interface WhatWeDo {
  title: string;
  subtitle: string;
  description: string;
}

// Benefit Item Interface
export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

// Why Choose Us Interface
export interface WhyChooseUs {
  title: string;
  subtitle: string;
  benefits: BenefitItem[];
  mainImage: string;
}

// Exhibiting Experience Interface
export interface ExhibitingExperience {
  title: string;
  subtitle: string;
  benefits: string[];
  excellence: {
    title: string;
    subtitle: string;
    points: string[];
  };
}





// City Detail Interface
export interface CityDetail {
  id: string;
  countrySlug: string;
  slug: string;
  name: string;
  hero: CityHero;
  whyChooseUs: WhyChooseUs;
  whatWeDo: WhatWeDo;
  exhibitingExperience: ExhibitingExperience;
}

// Cities Data Interface
export interface CitiesData {
  cities: CityDetail[];
}

// Cities data
export const citiesData: CitiesData = {
  cities: [
    // Paris, France
    {
      id: "1",
      countrySlug: "france",
      slug: "paris",
      name: "PARIS",
      hero: {
        title: "EXHIBITION STAND DESIGN & BUILD SOLUTIONS IN",
        subtitle: "PARIS",
        backgroundImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&h=800&fit=crop&crop=center"
      },
      whyChooseUs: {
        title: "Why Choose Us for Exhibition Stands in",
        subtitle: "Paris?",
        mainImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=400&fit=crop",
        benefits: [
          {
            icon: "🎯",
            title: "Local expertise in Paris exhibition venues",
            description: "Familiar with all major Paris venues including Paris Expo Porte de Versailles and Paris Nord Villepinte"
          },
          {
            icon: "⚡",
            title: "Bilingual project management",
            description: "French-speaking team for seamless communication"
          },
          {
            icon: "🛡️",
            title: "Compliance with Paris exhibition regulations",
            description: "Full understanding of local requirements and standards"
          },
          {
            icon: "💰",
            title: "Competitive pricing for Paris trade shows",
            description: "Excellent value without compromising on quality"
          },
          {
            icon: "⏰",
            title: "On-site support throughout Paris exhibitions",
            description: "24/7 assistance for the duration of your event"
          }
        ]
      },
      whatWeDo: {
        title: "WHAT WE DO?",
        subtitle: "WE DO?",
        description: "We specialize in creating exceptional exhibition stands for trade shows in Paris. From concept to completion, we deliver custom, modular, and double-decker stands that showcase your brand effectively in this global business hub."
      },
      exhibitingExperience: {
        title: "DISCOVER THE EXTRAORDINARY EXHIBITING EXPERIENCE",
        subtitle: "WITH US",
        benefits: [
          "Emphasis on strong collaboration and clear communication to understand objectives clearly.",
          "Utilization of interactive technologies like touch screens, augmented reality, virtual reality, and merged digital displays for effective trade show booths.",
          "High-quality finishing is achieved through machine-level production in our own manufacturing facility.",
          "Comprehensive end-to-end services include logistics, installation, designing, and dismantling for a stress-free exhibiting experience.",
          "Commitment to environmental ethics and sustainable practices with an expert team.",
          "Skilled team members were present throughout the event to promptly resolve technical faults.",
          "Cost-effective solutions as a single-source service provider, eliminating middlemen commissions."
        ],
        excellence: {
          title: "FROM CONCEPT TO SHOWCASE: WE DELIVER",
          subtitle: "EXCELLENCE!",
          points: [
            "Refined skills with over 1,000 satisfied clients for maximum client satisfaction.",
            "Leading exhibition stand contractor in Paris, with over 4,500 successful global projects embracing the latest trends.",
            "Global manufacturer offering comprehensive services at local pricing.",
            "Expertise and experience to build impactful, large-size exhibition stands."
          ]
        }
      }
    },
    // Reims, France
    {
      id: "2",
      countrySlug: "france",
      slug: "reims",
      name: "REIMS",
      hero: {
        title: "EXHIBITION STAND DESIGN & BUILD SOLUTIONS IN",
        subtitle: "REIMS",
        backgroundImage: "https://images.unsplash.com/photo-1595568672959-606e76bc841e?w=1920&h=800&fit=crop&crop=center"
      },
      whyChooseUs: {
        title: "Why Choose Us for Exhibition Stands in",
        subtitle: "Reims?",
        mainImage: "https://images.unsplash.com/photo-1578322956407-eec75ad3ba41?w=500&h=400&fit=crop",
        benefits: [
          {
            icon: "🎯",
            title: "Specialized knowledge of Reims exhibition venues",
            description: "Extensive experience with Centre des Congrès de Reims and other local venues"
          },
          {
            icon: "⚡",
            title: "Regional expertise in Champagne-Ardenne",
            description: "Understanding of local business culture and exhibition practices"
          },
          {
            icon: "🛡️",
            title: "Full compliance with Reims venue requirements",
            description: "Seamless navigation of local regulations and specifications"
          },
          {
            icon: "💰",
            title: "Excellent value for Reims exhibitions",
            description: "Competitive pricing structure for this regional market"
          },
          {
            icon: "⏰",
            title: "Dedicated support for all Reims trade shows",
            description: "Continuous assistance before, during, and after your exhibition"
          }
        ]
      },
      whatWeDo: {
        title: "WHAT WE DO?",
        subtitle: "WE DO?",
        description: "We deliver exceptional exhibition stands for trade shows and events in Reims. Our comprehensive services include custom-designed stands, modular solutions, and complete exhibition support tailored to the unique characteristics of Reims venues."
      },
      exhibitingExperience: {
        title: "DISCOVER THE EXTRAORDINARY EXHIBITING EXPERIENCE",
        subtitle: "WITH US",
        benefits: [
          "Emphasis on strong collaboration and clear communication to understand objectives clearly.",
          "Utilization of interactive technologies like touch screens, augmented reality, virtual reality, and merged digital displays for effective trade show booths.",
          "High-quality finishing is achieved through machine-level production in our own manufacturing facility.",
          "Comprehensive end-to-end services include logistics, installation, designing, and dismantling for a stress-free exhibiting experience.",
          "Commitment to environmental ethics and sustainable practices with an expert team.",
          "Skilled team members were present throughout the event to promptly resolve technical faults.",
          "Cost-effective solutions as a single-source service provider, eliminating middlemen commissions."
        ],
        excellence: {
          title: "FROM CONCEPT TO SHOWCASE: WE DELIVER",
          subtitle: "EXCELLENCE!",
          points: [
            "Refined skills with over 1,000 satisfied clients for maximum client satisfaction.",
            "Leading exhibition stand contractor in Reims, with over 4,500 successful global projects embracing the latest trends.",
            "Global manufacturer offering comprehensive services at local pricing.",
            "Expertise and experience to build impactful, large-size exhibition stands."
          ]
        }
      }
    }
  ]
};

// Helper functions for cities
export const getCities = (): CityDetail[] => {
  return citiesData.cities;
};

export const getCitiesByCountry = (countrySlug: string): CityDetail[] => {
  return citiesData.cities.filter(city => city.countrySlug.toLowerCase() === countrySlug.toLowerCase());
};

export const getCityBySlug = (slug: string): CityDetail | null => {
  return citiesData.cities.find(city => city.slug.toLowerCase() === slug.toLowerCase()) || null;
};

export const getCityByCountryAndSlug = (countrySlug: string, citySlug: string): CityDetail | null => {
  return citiesData.cities.find(
    city => city.countrySlug.toLowerCase() === countrySlug.toLowerCase() && 
            city.slug.toLowerCase() === citySlug.toLowerCase()
  ) || null;
};

// Function to get all available cities
export const getAvailableCities = (): {countrySlug: string, citySlug: string}[] => {
  return citiesData.cities.map(city => ({
    countrySlug: city.countrySlug,
    citySlug: city.slug
  }));
};

// Function to check if a city is available
export const isCityAvailable = (countrySlug: string, citySlug: string): boolean => {
  return citiesData.cities.some(
    city => city.countrySlug.toLowerCase() === countrySlug.toLowerCase() && 
            city.slug.toLowerCase() === citySlug.toLowerCase()
  );
};