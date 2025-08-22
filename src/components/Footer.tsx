import React from "react"; 
import { footerData } from "@/data/footer";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

// Map social names to icons
const socialIcons: Record<string, React.ReactNode> = {
  facebook: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
  twitter: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
  instagram: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
  linkedin: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
  youtube: <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Company Column */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">
              {footerData.company.name}
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {footerData.company.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media with Icons */}
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4 mt-4 sm:mt-6 md:mt-8">
              {footerData.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcons[social.name.toLowerCase()] || (
                    <span className="text-white text-xs sm:text-sm font-bold">
                      {social.icon.charAt(0).toUpperCase()}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">
              {footerData.services.title}
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {footerData.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">
              {footerData.locations.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 sm:gap-2 md:gap-3">
              {footerData.locations.countries.map((country, index) => (
                <Link
                  key={index}
                  href={`/locations/${country
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg"
                >
                  {country}
                </Link>
              ))}
            </div>
            <Link
              href="/locations"
              className="inline-block mt-3 sm:mt-4 md:mt-6 text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base md:text-lg"
            >
              {footerData.locations.viewMore}
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/20 mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 md:pt-10">
          <div className="flex flex-col sm:flex-col md:flex-row justify-between items-start sm:items-start md:items-center space-y-3 sm:space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-col md:flex-row space-y-2 sm:space-y-3 md:space-y-0 md:space-x-6 lg:space-x-8">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg"
                >
                  {footerData.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${footerData.contact.phone}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base md:text-lg"
                >
                  {footerData.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 text-center">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            Copyright © {currentYear} Chronicles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
