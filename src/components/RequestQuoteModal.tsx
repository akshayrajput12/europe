"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Clock } from "lucide-react"
import { sortedCountryCodes } from "@/data/countryCodes"

interface RequestQuoteModalProps {
  isOpen: boolean
  onClose: () => void
  type?: "quote" | "design"
}

export default function RequestQuoteModal({ isOpen, onClose, type = "quote" }: RequestQuoteModalProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    exhibitionName: "",
    phoneNumber: "",
    countryCode: "+971",
    budget: "",
    message: "",
  })
  
  const [countrySearch, setCountrySearch] = useState("")
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)

  const isDesignRequest = type === "design"
  const title = isDesignRequest ? "Request a Free Design" : "Request a Quotation"
  const subtitle = isDesignRequest 
    ? "Fill out the form below and our design team will create a custom exhibition stand design for you within 24 hours."
    : "Fill out the form below and our team will get back to you with a customized quotation within 24 hours."

  // Filter countries based on search
  const filteredCountries = sortedCountryCodes.filter(country => 
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch) ||
    country.iso2.toLowerCase().includes(countrySearch.toLowerCase())
  )

  const budgetOptions = [
    "Under €5000",
    "€5000 - €10000",
    "€10000 - €20000",
    "€20000 - €50000",
    "€50000+",
    "Not Sure"
  ]

  // Function to detect country based on IP
  const detectCountryByIP = async () => {
    try {
      const response = await fetch('https://ip-api.com/json/')
      const data = await response.json()
      if (data.status === 'success' && data.countryCode) {
        const country = sortedCountryCodes.find(c => c.iso2.toLowerCase() === data.countryCode.toLowerCase())
        if (country) {
          setFormData(prev => ({ ...prev, countryCode: country.code }))
        }
      }
    } catch (error) {
      console.log('Could not detect country from IP:', error)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, type })
    
    // Close modal and redirect to thank you page
    onClose()
    setTimeout(() => {
      router.push("/thank-you")
    }, 300)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Close modal on escape key and detect IP on open
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-country-dropdown]')) {
        setIsCountryDropdownOpen(false)
        setCountrySearch('')
      }
    }
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
      // Detect country by IP when modal opens
      detectCountryByIP()
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto scrollbar-hide">
        {/* Header */}
        <div className="relative p-6 pb-4">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>

          {/* Icon and Title */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#A5CD39]/10 rounded-full mb-4">
              <Clock className="h-8 w-8 text-[#A5CD39]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {title}
            </h2>
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6">
          <div className="space-y-4">
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name*
                </label>
                <Input
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="h-11 border-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address*
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="h-11 border-black"
                  required
                />
              </div>
            </div>

            {/* Row 2: Company Name & Exhibition Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name*
                </label>
                <Input
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="h-11 border-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Exhibition Name*
                </label>
                <Input
                  value={formData.exhibitionName}
                  onChange={(e) => handleInputChange('exhibitionName', e.target.value)}
                  className="h-11 border-black"
                  required
                />
              </div>
            </div>

            {/* Row 3: Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number*
              </label>
              <div className="flex gap-2">
                {/* Custom Country Code Dropdown */}
                <div className="relative w-32" data-country-dropdown>
                  <button
                    type="button"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className="w-full h-11 border border-black rounded-md px-3 py-2 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#A5CD39] focus:border-[#A5CD39] transition-colors"
                  >
                    <span className="block truncate text-sm font-medium">
                      {formData.countryCode}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isCountryDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </span>
                  </button>
                  
                  {isCountryDropdownOpen && (
                    <div className="absolute z-50 mt-1 w-80 bg-white border border-gray-300 rounded-md shadow-lg">
                      {/* Search Input */}
                      <div className="p-2 border-b">
                        <Input
                          type="text"
                          placeholder="Search countries..."
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          className="h-9 text-sm border-gray-300"
                          autoFocus
                        />
                      </div>
                      
                      {/* Countries List */}
                      <div className="max-h-60 overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country) => (
                            <button
                              key={country.uniqueKey}
                              type="button"
                              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                              onClick={() => {
                                handleInputChange('countryCode', country.code)
                                setIsCountryDropdownOpen(false)
                                setCountrySearch('')
                              }}
                            >
                              <span className="font-medium">{country.code}</span>
                              <span className="ml-2 text-gray-600">{country.name}</span>
                            </button>
                          ))
                        ) : (
                          <div className="px-3 py-2 text-sm text-gray-500">
                            No countries found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="flex-1 h-11 border-black"
                  required
                />
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget
              </label>
              <Select 
                value={formData.budget} 
                onValueChange={(value) => handleInputChange('budget', value)}
              >
                <SelectTrigger className="h-11 border-black">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message*
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className="resize-none border-black"
                required
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-6"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-8"
            >
              Send Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}