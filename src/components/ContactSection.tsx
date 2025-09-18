"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { contactData } from "@/data/contact"
import { sortedCountryCodes } from "@/data/countryCodes"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    countryCode: "+971"
  })
  const router = useRouter()
  const [countrySearch, setCountrySearch] = useState("")
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)

  // Filter countries based on search
  const filteredCountries = sortedCountryCodes.filter(country => 
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch) ||
    country.iso2.toLowerCase().includes(countrySearch.toLowerCase())
  )

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCountryCodeChange = (code: string) => {
    setFormData(prev => ({ ...prev, countryCode: code }))
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    try {
      // Submit form data via API route
      const response = await fetch('/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: "/contact-section",
          formData: formData
        }),
      })
      
      const result = await response.json()
      
      if (result.success) {
        console.log("Form submitted successfully:", result.data)
      } else {
        console.error("Error submitting form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }

    // redirect after submit
    router.push("/thank-you")
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          {contactData.title}
        </h2>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {contactData.fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium mb-2">{field.label}</label>
                {field.type === "select" ? (
                  <Select onValueChange={(value) => handleSelectChange(field.name, value)}>
                    <SelectTrigger className="border-black">
                      <SelectValue placeholder="Choose Budget Range" />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options?.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : field.name === "phone" ? (
                  // Phone field with country code dropdown
                  <div>
                    <div className="flex gap-2">
                      {/* Custom Country Code Dropdown */}
                      <div className="relative w-24" data-country-dropdown>
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="w-full h-10 border border-black rounded-md px-2 py-2 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#A5CD39] focus:border-[#A5CD39] transition-colors"
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
                          <div className="absolute z-50 mt-1 w-64 bg-white border border-black rounded-md shadow-lg">
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
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        className="flex-1 border-black"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                ) : (
                  <Input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    className="w-full border-black"
                    onChange={handleInputChange}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Additional Information</label>
            <Textarea
              name="additionalInfo"
              rows={4}
              className="border-black w-full"
              placeholder="Enter your message here..."
              onChange={handleInputChange}
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-8"
            >
              SEND MESSAGE
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}