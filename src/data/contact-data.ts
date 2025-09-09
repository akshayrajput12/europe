import { supabase } from '@/lib/supabase'
import { createServerClient } from '@/lib/supabase-server'

// Define interfaces that match the component expectations
export interface ContactInfo {
  title: string
  address: string
  fullAddress: string
  phone: string[]
  email: string
}

export interface FormField {
  name: string
  type: string
  placeholder: string
  required: boolean
}

export interface SupportItem {
  icon: string
  title: string
  description: string
}

export interface OfficeLocation {
  name: string
  address: string
  phone: string
  email: string
  website: string
}

// Contact page interfaces
interface ContactPageData {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    backgroundImage: string;
  };
  contactInfo: {
    title: string;
    address: string;
    fullAddress: string;
    phone: string[];
    email: string;
  };
  formFields: FormField[];
  otherOffices: {
    title: string;
    offices: OfficeLocation[];
  };
  support: {
    title: string;
    description: string;
    items: SupportItem[];
  };
  map: {
    embedUrl: string;
  };
}

// Contact page functions - moved from database.ts
async function getContactPageData(): Promise<ContactPageData | null> {
  try {
    let client;
    try {
      client = createServerClient();
    } catch {
      client = supabase;
    }

    // Call the PostgreSQL function directly
    const { data, error } = await client.rpc('get_contact_page_data');
    
    if (error) {
      console.error('Error fetching contact page data:', error);
      return null;
    }
    
    if (!data) {
      console.error('No contact page data found');
      return null;
    }
    
    // Transform the data to match our TypeScript interface
    return {
      meta: {
        title: data.meta.title,
        description: data.meta.description,
        keywords: data.meta.keywords
      },
      hero: {
        title: data.hero.title,
        backgroundImage: data.hero.backgroundImage
      },
      contactInfo: {
        title: data.contactInfo.title,
        address: data.contactInfo.address,
        fullAddress: data.contactInfo.fullAddress,
        phone: data.contactInfo.phone.filter((phone: string) => phone), // Filter out empty phones
        email: data.contactInfo.email
      },
      formFields: data.formFields,
      otherOffices: {
        title: data.otherOffices.title,
        offices: data.otherOffices.offices
      },
      support: {
        title: data.support.title,
        description: data.support.description,
        items: data.support.items
      },
      map: {
        embedUrl: data.map.embedUrl
      }
    } as ContactPageData;
  } catch (error) {
    console.error('Unexpected error fetching contact page data:', error);
    return null;
  }
}

// Store for the dynamic data
let dynamicContactData: {
  hero: {
    title: string
    backgroundImage: string
  }
  contactInfo: ContactInfo
  formFields: FormField[]
  otherOffices: {
    title: string
    offices: OfficeLocation[]
  }
  support: {
    title: string
    description: string
    items: SupportItem[]
  }
  map: {
    embedUrl: string
  }
} | null = null

// Function to initialize the dynamic data
export async function initializeContactData() {
  try {
    const dbData = await getContactPageData()
    
    if (dbData) {
      dynamicContactData = {
        hero: {
          title: dbData.hero.title,
          backgroundImage: dbData.hero.backgroundImage,
        },
        contactInfo: dbData.contactInfo,
        formFields: dbData.formFields,
        otherOffices: dbData.otherOffices,
        support: dbData.support,
        map: dbData.map
      }
    }
  } catch (error) {
    console.error('Error initializing contact data:', error)
    // Keep dynamicContactData as null, will fall back to static data
  }
}

// Define the static data structure
const staticContactData = {
  hero: {
    title: "Contact Us",
    backgroundImage:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
  },

  contactInfo: {
    title: "Contact Us",
    address: "RADON SP. Z.O.O.",
    fullAddress: "Ul. Gorzowska 2B, 65 - 127 Nefana Góra, Poland",
    phone: ["+4 678 789 4774", "+48 531 904 068"],
    email: "enquiry@radonexhibitions.pl",
  },

  formFields: [
    { name: "firstName", type: "text", placeholder: "Your Name*", required: true },
    { name: "email", type: "email", placeholder: "Email ID*", required: true },
    { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
    { name: "country", type: "text", placeholder: "Your Country*", required: true },
    { name: "additionalInfo", type: "textarea", placeholder: "Additional Information*", required: true },
  ],

  otherOffices: {
    title: "OTHER OFFICES",
    offices: [
      {
        name: "Chronicle Exhibits DUBAI",
        address: "Street 5 Lootah Warehouses - WH#11 - 11th St - Mina Jebel Ali - Industrial Area 1 - Dubai - United Arab Emirates",
        phone: "+971 54 347 4645",
        email: "info@chronicleexhibits.ae",
        website: "chronicleexhibits.com",
      },
      {
        name: "Chronicle Exhibits GERMANY",
        address: "Mühlenkamp 55, 22303 Hamburg, Germany",
        phone: "+49 40 1234 5678",
        email: "info@chronicleexhibits.de",
        website: "chronicleexhibits.com",
      },
    ],
  },

  support: {
    title: "SUPPORT",
    description:
      "Your exhibition's success is our commitment. We are here to provide dedicated support for you and your clients, ensuring a seamless experience.",
    items: [
      {
        icon: "design",
        title: "GET FREE DESIGN",
        description:
          "Receive free initially crafted exhibition stand design just for your brand and get ready to stand out at the next event.",
      },
      {
        icon: "submit",
        title: "SUBMIT YOUR DESIGN",
        description:
          "Already have a design? Submit your exhibition stand services for your seamless experience. From design to installation, we have got you covered.",
      },
      {
        icon: "phone",
        title: "GET PHONE CALL",
        description:
          "Ready for quickest service? Call your exhibition stand requirements to us, we are here to support your exhibition stand requirements delivered on time.",
      },
    ],
  },

  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.5!2d15.2!3d52.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI0JzAwLjAiTiAxNcKwMTInMDAuMCJF!5e0!3m2!1sen!2spl!4v1234567890"
  }
}

type StaticContactData = typeof staticContactData;

// Export the contactData that components will use
export const contactData = new Proxy(staticContactData, {
  get(target, prop) {
    // If we have dynamic data, use it
    if (dynamicContactData && prop in dynamicContactData) {
      return (dynamicContactData as unknown as StaticContactData)[prop as keyof StaticContactData]
    }
    
    // Otherwise, fall back to static data
    return (target as unknown as StaticContactData)[prop as keyof StaticContactData]
  }
})