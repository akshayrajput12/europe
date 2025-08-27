export interface RequestQuotationFormData {
  hero: {
    title: string;
    backgroundImage: string;
  };
  eventDetails: {
    title: string;
    fields: {
      eventName: string;
      eventCity: string;
    };
  };
  uploadDesign: {
    title: string;
    fields: {
      boothSize: string;
      uploadFile: string;
    };
  };
  contactDetails: {
    title: string;
    fields: {
      fullName: string;
      emailId: string;
      phoneNumber: string;
      country: string;
      additionalInfo: string;
    };
  };
  submitButton: string;
}

export const requestQuotationFormData: RequestQuotationFormData = {
  hero: {
    title: "Contact For Booth Design & Construction Services",
    backgroundImage: "https://plus.unsplash.com/premium_photo-1723517419729-1ecee473604c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
  },
  eventDetails: {
    title: "EVENT DETAILS:",
    fields: {
      eventName: "Event Name*",
      eventCity: "Event City*"
    }
  },
  uploadDesign: {
    title: "UPLOAD YOUR DESIGN:",
    fields: {
      boothSize: "Booth Size*",
      uploadFile: "Choose files"
    }
  },
  contactDetails: {
    title: "CONTACT DETAILS:",
    fields: {
      fullName: "Full Name*",
      emailId: "Email ID*",
      phoneNumber: "Phone Number",
      country: "Country*",
      additionalInfo: "Additional Information"
    }
  },
  submitButton: "SUBMIT REQUIREMENTS"
};