"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sortedCountryCodes } from "@/data/countryCodes"
import { submitFormData } from "@/lib/form-submission"

export default function InlineQuoteForm() {
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

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
    "€50000+"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset previous messages
    setSubmitError("")
    setSubmitSuccess(false)
    setIsSubmitting(true)
    
    try {
      // Prepare form data for submission
      const formDataForSubmission = {
        fullName: formData.fullName,
        email: formData.email,
        companyName: formData.companyName,
        exhibitionName: formData.exhibitionName,
        phoneNumber: `${formData.countryCode} ${formData.phoneNumber}`,
        budget: formData.budget,
        message: formData.message,
        formType: "blog-quote-form"
      }
      
      // Submit form data using the centralized form submission system
      const result = await submitFormData("blog-quote-form", formDataForSubmission)
      
      if (result) {
        setSubmitSuccess(true)
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          exhibitionName: "",
          phoneNumber: "",
          countryCode: "+971",
          budget: "",
          message: "",
        })
        // Redirect to thank you page after a short delay
        setTimeout(() => {
          router.push("/thank-you")
        }, 1000)
      } else {
        setSubmitError("Failed to submit form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Detect IP on component mount
  useEffect(() => {
    detectCountryByIP()
  }, [])

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
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-slate-800 mb-2">GET BOOTH QUOTE</h3>
        <p className="text-sm text-gray-600">
          Fill out the form and our team will get back to you within 24 hours.
        </p>
      </div>
      
      {submitSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
          Form submitted successfully! Redirecting...
        </div>
      )}
      
      {submitError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {submitError}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name*
          </label>
          <Input
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="h-10 text-sm border-gray-300 focus:border-[#A5CD39] focus:ring-[#A5CD39]"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address*
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="h-10 text-sm border-gray-300 focus:border-[#A5CD39] focus:ring-[#A5CD39]"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Name*
          </label>
          <Input
            value={formData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            className="h-10 text-sm border-gray-300 focus:border-[#A5CD39] focus:ring-[#A5CD39]"
            required
          />
        </div>

        {/* Exhibition Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Exhibition Name*
          </label>
          <Input
            value={formData.exhibitionName}
            onChange={(e) => handleInputChange('exhibitionName', e.target.value)}
            className="h-10 text-sm border-gray-300 focus:border-[#A5CD39] focus:ring-[#A5CD39]"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number*
          </label>
          <div className="flex gap-2">
            {/* Custom Country Code Dropdown */}
            <div className="relative w-20" data-country-dropdown>
              <button
                type="button"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className="w-full h-10 border border-gray-300 rounded-md px-2 py-2 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#A5CD39] focus:border-[#A5CD39] transition-colors"
              >
                <span className="block truncate text-xs font-medium">
                  {formData.countryCode}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isCountryDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </span>
              </button>
              
              {isCountryDropdownOpen && (
                <div className="absolute z-50 mt-1 w-72 bg-white border border-gray-300 rounded-md shadow-lg">
                  {/* Search Input */}
                  <div className="p-2 border-b">
                    <Input
                      type="text"
                      placeholder="Search countries..."
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      className="h-8 text-sm border-gray-300"
                      autoFocus
                    />
                  </div>
                  
                  {/* Countries List */}
                  <div className="max-h-48 overflow-y-auto">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((country) => (
                        <button
                          key={country.uniqueKey}
                          type="button"
                          className="w-full text-left px-3 py-2 text-xs hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
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
                      <div className="px-3 py-2 text-xs text-gray-500">
                        No countries found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <Input
              type="tel"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className="flex-1 h-10 text-sm border-gray-300 focus:border-[#A5CD39] focus:ring-[#A5CD39]"
              required
            />
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Budget
          </label>
          <Select 
            value={formData.budget} 
            onValueChange={(value) => handleInputChange('budget', value)}
          >
            <SelectTrigger className="h-10 text-sm border-gray-300 focus:border-[#A5CD39] focus:ring-[#A5CD39]">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgetOptions.map((option) => (
                <SelectItem key={option} value={option} className="text-sm">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Message*
          </label>
          <Textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={3}
            className="resize-none text-sm border-gray-300 focus:border-[#A5CD39] focus:ring-[#A5CD39]"
            placeholder="Tell us about your requirements..."
            required
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#A5CD39] hover:bg-[#94b832] text-white font-semibold py-2 text-sm"
        >
          {isSubmitting ? "Sending..." : "Send Request"}
        </Button>
      </form>
    </div>
  )
}