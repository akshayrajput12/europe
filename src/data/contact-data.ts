export interface ContactInfo {
  address: string
  city: string
  country: string
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

export const contactData = {
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
    backgroundImage:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  },
}