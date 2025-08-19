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
  facebook: <Facebook className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  youtube: <Youtube className="w-5 h-5" />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {footerData.company.name}
            </h3>
            <ul className="space-y-2">
              {footerData.company.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media with Icons */}
            <div className="flex space-x-3 mt-6">
              {footerData.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcons[social.name.toLowerCase()] || (
                    <span className="text-white text-sm font-bold">
                      {social.icon.charAt(0).toUpperCase()}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {footerData.services.title}
            </h3>
            <ul className="space-y-2">
              {footerData.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {footerData.locations.title}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {footerData.locations.countries.map((country, index) => (
                <Link
                  key={index}
                  href={`/locations/${country
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {country}
                </Link>
              ))}
            </div>
            <Link
              href="/locations"
              className="inline-block mt-4 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              {footerData.locations.viewMore}
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
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
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {footerData.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
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
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {footerData.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-6 pt-6 text-center">
          <p className="text-gray-300">
            Copyright © {currentYear} Chronicles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
