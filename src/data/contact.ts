export const contactData = {
  title: "CONTACT US",
  fields: [
    { name: "firstName", label: "Your Name*", type: "text", required: true },
    { name: "companyName", label: "Company Name*", type: "text", required: true },
    { name: "email", label: "Email Id*", type: "email", required: true },
    { name: "phone", label: "Phone Number*", type: "tel", required: true },
    { name: "eventCity", label: "Event City*", type: "text", required: true },
    {
      name: "budget",
      label: "Stand Budget*",
      type: "select",
      required: true,
      options: ["Under €5000", "€5000 - €10000", "€10000 - €20000", "€20000+"],
    },
  ],
}