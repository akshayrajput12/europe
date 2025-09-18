"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactData } from "@/data/contact-data"
import { sortedCountryCodes } from "@/data/countryCodes"

export default function ContactSection() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    countryCode: "+971",
    country: "",
    additionalInfo: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [countrySearch, setCountrySearch] = useState("")
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)

  // Filter countries based on search
  const filteredCountries = sortedCountryCodes.filter(country => 
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch) ||
    country.iso2.toLowerCase().includes(countrySearch.toLowerCase())
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    
    try {
      // Submit form data via API route
      const response = await fetch('/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: "/contact-us",
          formData: formData
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log("Form submitted successfully:", result.data)
        // Redirect to thank you page
        router.push("/thank-you")
      } else {
        alert("There was an error submitting your message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCountryCodeChange = (code: string) => {
    setFormData({
      ...formData,
      countryCode: code
    })
    setIsCountryDropdownOpen(false)
    setCountrySearch('')
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-country-dropdown]')) {
        setIsCountryDropdownOpen(false)
        setCountrySearch('')
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info Card */}
          <div className="bg-[#1E293B] text-white p-6 md:p-8 rounded-lg relative order-2 lg:order-1">
            <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 bg-[#A5CD39] rounded-full opacity-20"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
              {contactData.contactInfo.title}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="text-[#A5CD39] mt-1 text-lg">📍</div>
                <div>
                  <p className="font-semibold text-white">{contactData.contactInfo.address}</p>
                  <p className="text-[#94A3B8] text-sm md:text-base">{contactData.contactInfo.fullAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#A5CD39] mt-1 text-lg">📞</div>
                <div>
                  {contactData.contactInfo.phone.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-[#94A3B8] hover:text-[#A5CD39] transition-colors text-sm md:text-base"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#A5CD39] mt-1 text-lg">✉️</div>
                <a
                  href={`mailto:${contactData.contactInfo.email}`}
                  className="text-[#94A3B8] hover:text-[#A5CD39] transition-colors text-sm md:text-base"
                >
                  {contactData.contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="rounded-lg p-6 md:p-8  bg-opacity-10 w-[95%] md:w-[90%] h-auto min-h-[500px] mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder="Your Name*"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-gray-800"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email ID*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-gray-800"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Phone Number with Country Code */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number*</label>
                    <div className="flex gap-2">
                      {/* Custom Country Code Dropdown */}
                      <div className="relative w-24" data-country-dropdown>
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="w-full h-12 border-2 border-gray-800 rounded-md px-2 py-2 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#A5CD39] focus:border-[#A5CD39] transition-colors"
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
                          <div className="absolute z-50 mt-1 w-64 bg-white border-2 border-gray-800 rounded-md shadow-lg">
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
                                    onClick={() => handleCountryCodeChange(country.code)}
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
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 h-12 border-2 border-gray-800"
                        required
                      />
                    </div>
                  </div>
                  
                  <Input
                    name="country"
                    placeholder="Your Country*"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-gray-800"
                    required
                  />
                </div>

                <Textarea
                  name="additionalInfo"
                  placeholder="Additional Information*"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="min-h-[120px] border-2 border-gray-800"
                  required
                />

                <Button
                  type="submit"
                  className="bg-[#A5CD39] text-white px-8 py-3 h-12 rounded-full hover:bg-[#8fb32e] hover:scale-105 transition-all duration-300 font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}