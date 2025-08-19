"use client"

import { Button } from "@/components/ui/button"
import { navigationData } from "@/data/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-secondary text-slate-800 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
          <div className="flex items-center">
            <a href="/">
  <img
    src={navigationData.logo.imageUrl}
    alt={navigationData.logo.alt}
    className="h-12 w-auto object-contain"
  />
  </a>
</div>


            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {navigationData.ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-slate-800 border-slate-800 hover:bg-[#A5CD39] hover:text-white hover:border-[#A5CD39] bg-background px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  {button.label}
                </Button>
              ))}
            </div>

            <div className="hidden md:flex lg:hidden items-center justify-between w-full">
              <button className="p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu size={24} className="text-background" />
              </button>
              
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-background p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Secondary Navigation Bar - Hidden on tablet */}
        <div className="bg-slate-50 border-t border-slate-200 hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <nav className="hidden  md:flex items-center space-x-4 lg:space-x-8 flex-1">
                {navigationData.menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="hover:text-[#A5CD39] transition-colors font-medium text-xs md:text-sm text-slate-700 hover:scale-105 transform duration-200 whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

                
              </div>
            </div>
          </div>

        {isMobileMenuOpen && (
          <div className="md:absolute top-full left-0 right-0 bg-white border-t border-slate-200 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigationData.menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block hover:text-[#A5CD39] transition-colors font-medium text-sm py-2 text-slate-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-slate-200 lg:hidden">
                {navigationData.ctaButtons.map((button, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-slate-800 border-slate-800 hover:bg-[#A5CD39] hover:text-white hover:border-[#A5CD39] bg-transparent rounded-full font-medium transition-all duration-300"
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="h-[80px] lg:h-[120px]"></div>
    </>
  )
}
