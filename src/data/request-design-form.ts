export interface RequestDesignFormData {
  hero: {
    title: string;
    backgroundImage: string;
  };
  contactDetails: {
    title: string;
    fields: {
      yourName: string;
      email: string;
      phoneNumber: string;
      companyName: string;
      website: string;
      yourCountry: string;
    };
  };
  eventDetail: {
    title: string;
    fields: {
      eventName: string;
      eventCity: string;
    };
  };
  standDimensions: {
    title: string;
    dimensions: {
      width: string;
      length: string;
      area: string;
      sqm: string;
    };
    standTypes: {
      singleDecker: string;
      doubleDecker: string;
    };
  };
  yourSpaceIs: {
    title: string;
    options: Array<{
      id: string;
      label: string;
      image: string;
    }>;
  };
  meetingArea: {
    title: string;
    options: Array<{
      id: string;
      label: string;
    }>;
    facilities: Array<{
      id: string;
      label: string;
    }>;
  };
  designOptions: {
    sampleDesign: {
      label: string;
      placeholder: string;
    };
    floorDesign: {
      label: string;
      placeholder: string;
    };
    graphicLogo: {
      label: string;
      placeholder: string;
    };
  };
  budget: {
    title: string;
    placeholder: string;
  };
  additionalInformation: {
    title: string;
    placeholder: string;
  };
  submitButton: string;
}

export const requestDesignFormData: RequestDesignFormData = {
  hero: {
    title: "REQUEST FREE DESIGN",
    backgroundImage: "https://plus.unsplash.com/premium_photo-1723517419729-1ecee473604c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
  },
  contactDetails: {
    title: "CONTACT DETAILS",
    fields: {
      yourName: "Your name*",
      email: "Email ID*",
      phoneNumber: "Phone Number",
      companyName: "Company Name*",
      website: "Website",
      yourCountry: "Your Country"
    }
  },
  eventDetail: {
    title: "EVENT DETAIL",
    fields: {
      eventName: "Event Name*",
      eventCity: "Event City*"
    }
  },
  standDimensions: {
    title: "STAND DIMENSIONS & SIZE",
    dimensions: {
      width: "Width",
      length: "Length", 
      area: "Area",
      sqm: "SQM"
    },
    standTypes: {
      singleDecker: "Single Decker",
      doubleDecker: "Double Decker"
    }
  },
  yourSpaceIs: {
    title: "YOUR SPACE IS",
    options: [
      {
        id: "one-side-open",
        label: "One Side Open",
        image: "/space-icons/one-side-open.svg"
      },
      {
        id: "two-side-l-t",
        label: "Two Side L & L",
        image: "/space-icons/two-side-l-t.svg"
      },
      {
        id: "two-side-f-b",
        label: "Two Side F & B",
        image: "/space-icons/two-side-f-b.svg"
      },
      {
        id: "three-side-open",
        label: "Three Side Open",
        image: "/space-icons/three-side-open.svg"
      },
      {
        id: "island",
        label: "Island",
        image: "/space-icons/island.svg"
      }
    ]
  },
  meetingArea: {
    title: "MEETING AREA",
    options: [
      { id: "closed", label: "Closed" },
      { id: "semi-closed", label: "Semi Closed" },
      { id: "open", label: "Open" },
      { id: "not-required", label: "Not Required" }
    ],
    facilities: [
      { id: "hanging-structure", label: "Hanging Structure" },
      { id: "storage-room", label: "Storage Room" },
      { id: "refreshment-area", label: "Refreshment Area" },
      { id: "reception", label: "Reception" },
      { id: "audio-video", label: "Audio / Video" }
    ]
  },
  designOptions: {
    sampleDesign: {
      label: "Refrence Design",
      placeholder: "Choose files"
    },
    floorDesign: {
      label: "Floor Design", 
      placeholder: "Choose files"
    },
    graphicLogo: {
      label: "Graphic Logo",
      placeholder: "Choose files"
    }
  },
  budget: {
    title: "BUDGET",
    placeholder: "Your Approx Budget"
  },
  additionalInformation: {
    title: "ADDITIONAL INFORMATION",
    placeholder: "Additional information"
  },
  submitButton: "SUBMIT REQUIREMENTS"
};