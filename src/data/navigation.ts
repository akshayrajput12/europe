export const navigationData = {
  logo: {
    text: "CHRONICLES", // Changed company name from RADON to CHRONICLES
    icon: "C", // Updated icon to match new company name
  },
  menuItems: [
    { label: "HOME", href: "/" },
    { label: "COMPANY", href: "#" },
    { label: "PORTFOLIO", href: "#" },
    { label: "TESTIMONIALS", href: "#" },
    { label: "FURNITURE PRODUCTION", href: "#" },
    { label: "CONTACT US", href: "#" },
  ],
  ctaButtons: [
    {
      label: "REQUEST FOR FREE DESIGN",
      variant: "outline" as const,
      href: "#",
    },
    {
      label: "REQUEST FOR QUOTATION",
      variant: "default" as const,
      href: "#",
    },
  ],
  secondaryHeader: {
    logo: "CHRONICLES", // Updated secondary header logo
    showEuFlag: true,
  },
}
