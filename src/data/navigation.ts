export const navigationData = {
  logo: {
    imageUrl: "https://chronicleexhibits.com/chronicle-logo-2.svg", // Replace with your logo image path
    alt: "CHRONICLES Logo", // Optional alt text for accessibility
  },
  menuItems: [
    { label: "HOME", href: "/" },
    { label: "COMPANY", href: "#" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "TESTIMONIALS", href: "/review" },
    { label: "FURNITURE PRODUCTION", href: "#" },
    { label: "CONTACT US", href: "/contact-us" },
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
