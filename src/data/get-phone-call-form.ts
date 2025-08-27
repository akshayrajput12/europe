export interface GetPhoneCallFormData {
  hero: {
    title: string;
    highlightText: string;
    backgroundImage: string;
  };
  description: {
    text: string;
  };
  dateTimeSelection: {
    title: string;
    dateSelector: {
      monthYear: string;
      weekDays: string[];
    };
    timeSlots: {
      morning: string[];
      afternoon: string[];
      evening: string[];
    };
  };
  continueButton: string;
  saveCallDetail: {
    hero: {
      title: string;
      backgroundImage: string;
    };
    scheduledInfo: {
      dateLabel: string;
      timeLabel: string;
    };
    form: {
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
  };
}

export const getPhoneCallFormData: GetPhoneCallFormData = {
  hero: {
    title: "GET CALL BACK IN JUST",
    highlightText: "30 MINUTES",
    backgroundImage: "https://plus.unsplash.com/premium_photo-1723517419729-1ecee473604c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
  },
  description: {
    text: "Seeking for innovative exhibition stand? Connect with our designing experts now to get a bespoke stand for your upcoming show!"
  },
  dateTimeSelection: {
    title: "SELECT A DATE AND TIME",
    dateSelector: {
      monthYear: "August 2025",
      weekDays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    },
    timeSlots: {
      morning: ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
      afternoon: ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"],
      evening: ["04:00 PM", "05:00 PM"]
    }
  },
  continueButton: "Continue Confirmation",
  saveCallDetail: {
    hero: {
      title: "Scheduled DATE & TIME",
      backgroundImage: "https://plus.unsplash.com/premium_photo-1723517419729-1ecee473604c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
    },
    scheduledInfo: {
      dateLabel: "AUGUST 21, 2025",
      timeLabel: "12:00 pm"
    },
    form: {
      title: "PLEASE FILL YOUR INFORMATION:",
      fields: {
        fullName: "Full Name*",
        emailId: "Email ID*",
        phoneNumber: "Phone Number*",
        country: "Country*",
        additionalInfo: "Additional Information*"
      }
    },
    submitButton: "SUBMIT REQUIREMENTS"
  }
};