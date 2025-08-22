"use client"

import { Button } from "@/components/ui/button"
import { navigationData } from "@/data/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { useQuoteModal } from "@/contexts/QuoteModalContext"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openQuoteModal, openDesignModal } = useQuoteModal()

  const handleCTAClick = (label: string) => {
    if (label.toLowerCase().includes('design')) {
      openDesignModal()
    } else {
      openQuoteModal()
    }
  }

  return (
    <>
      <header className="bg-secondary text-slate-800 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="relative h-8 w-24 sm:h-10 w-28 md:h-12 w-32 lg:h-14 w-36">
              <Image
                src={navigationData.logo.imageUrl}
                alt={navigationData.logo.alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
              {navigationData.ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleCTAClick(button.label)}
                  className="text-slate-800 border-slate-800 hover:bg-[#A5CD39] hover:text-white hover:border-[#A5CD39] bg-background px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
                >
                  {button.label}
                </Button>
              ))}
            </div>

            <div className="hidden md:flex lg:hidden items-center justify-between w-full">
              <button className="p-1.5 sm:p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu size={20} className="sm:w-6 sm:h-6 text-background" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-background p-1.5 sm:p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Secondary Navigation Bar - Hidden on tablet */}
        <div className="bg-slate-50 border-t border-slate-200 hidden lg:block">
          <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 sm:py-3">
              <nav className="hidden md:flex items-center space-x-2 sm:space-x-4 lg:space-x-8 xl:space-x-10 flex-1">
                {navigationData.menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="hover:text-[#A5CD39] transition-colors font-medium text-xs sm:text-sm md:text-base text-slate-700 hover:scale-105 transform duration-200 whitespace-nowrap"
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
            <div className="container mx-auto px-2 sm:px-4 md:px-6 py-3 sm:py-4 space-y-3 sm:space-y-4">
              {navigationData.menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block hover:text-[#A5CD39] transition-colors font-medium text-sm sm:text-base py-1.5 sm:py-2 text-slate-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-slate-200 lg:hidden">
                {navigationData.ctaButtons.map((button, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      handleCTAClick(button.label)
                      setIsMobileMenuOpen(false)
                    }}
                    className="text-slate-800 border-slate-800 hover:bg-[#A5CD39] hover:text-white hover:border-[#A5CD39] bg-transparent rounded-full font-medium transition-all duration-300 text-sm sm:text-base py-2 sm:py-3"
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="h-16 sm:h-[70px] md:h-[80px] lg:h-[120px] xl:h-[130px]"></div>
    </>
  )
}
