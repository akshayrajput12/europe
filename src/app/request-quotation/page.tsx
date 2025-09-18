"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { requestQuotationFormData } from "@/data/request-quotation-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sortedCountryCodes } from "@/data/countryCodes"

export default function RequestQuotationPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    eventName: "",
    eventCity: "",
    boothSize: "",
    uploadFiles: [] as File[],
    fullName: "",
    emailId: "",
    phoneNumber: "",
    countryCode: "+971",
    country: "",
    additionalInfo: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [countrySearch, setCountrySearch] = useState("")
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)

  // Filter countries based on search
  const filteredCountries = sortedCountryCodes.filter(country => 
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch) ||
    country.iso2.toLowerCase().includes(countrySearch.toLowerCase())
  )

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCountryCodeChange = (code: string) => {
    setFormData(prev => ({ ...prev, countryCode: code }))
    setIsCountryDropdownOpen(false)
    setCountrySearch('')
  }

  const handleFileChange = (files: FileList | null) => {
    if (files) {
      console.log('Files selected:', Array.from(files).map(f => ({
        name: f.name,
        size: f.size,
        type: f.type
      })))
      setFormData(prev => ({ ...prev, uploadFiles: Array.from(files) }))
    }
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

  const validateForm = () => {
    // Reset previous errors
    setSubmitError(null)
    
    // Required fields validation
    if (!formData.eventName.trim()) {
      setSubmitError("Please enter the event name")
      return false
    }
    if (!formData.eventCity.trim()) {
      setSubmitError("Please enter the event city")
      return false
    }
    if (!formData.boothSize.trim()) {
      setSubmitError("Please enter the booth size")
      return false
    }
    if (!formData.fullName.trim()) {
      setSubmitError("Please enter your full name")
      return false
    }
    if (!formData.emailId.trim()) {
      setSubmitError("Please enter your email ID")
      return false
    }
    if (!formData.country.trim()) {
      setSubmitError("Please enter your country")
      return false
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.emailId)) {
      setSubmitError("Please enter a valid email address")
      return false
    }
    
    // File size validation (50MB limit per file)
    for (const file of formData.uploadFiles) {
      if (file.size > 52428800) { // 50MB in bytes
        setSubmitError(`File ${file.name} exceeds 50MB limit. Please select a smaller file.`)
        return false
      }
    }
    
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('=== Form Submission Started ===')
    console.log('Current form data:', formData)
    
    if (!validateForm()) {
      console.log('Form validation failed:', submitError)
      return
    }
    
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      console.log('Preparing form data for submission')
      
      // Submit form data via API route
      const response = await fetch('/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: "/request-quotation",
          formData: formData
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log("Form submitted successfully:", result.data)
        // Redirect to thank you page
        router.push("/thank-you")
      } else {
        const errorMessage = "There was an error submitting your request. Please check the console for more details."
        console.error(errorMessage)
        setSubmitError(errorMessage)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      const errorMessage = "There was an unexpected error submitting your request. Please check the console for more details."
      setSubmitError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] flex items-center justify-center text-white"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${requestQuotationFormData.hero.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            {requestQuotationFormData.hero.title}
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Error Message */}
            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                <div className="font-bold">Error submitting form:</div>
                <div>{submitError}</div>
                <div className="mt-2 text-sm">
                  Please check the browser console (F12) for detailed error information.
                </div>
              </div>
            )}
            
            {/* Contact Details */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-6 text-primary">
                {requestQuotationFormData.contactDetails.title}
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder={requestQuotationFormData.contactDetails.fields.fullName}
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="border-gray-300 bg-white"
                    required
                  />
                  <Input
                    placeholder={requestQuotationFormData.contactDetails.fields.emailId}
                    type="email"
                    value={formData.emailId}
                    onChange={(e) => handleInputChange("emailId", e.target.value)}
                    className="border-gray-300 bg-white"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Number with Country Code */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {requestQuotationFormData.contactDetails.fields.phoneNumber}*
                    </label>
                    <div className="flex gap-2">
                      {/* Custom Country Code Dropdown */}
                      <div className="relative w-24" data-country-dropdown>
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="w-full h-10 border border-gray-300 rounded-md px-2 py-2 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#A5CD39] focus:border-[#A5CD39] transition-colors"
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
                          <div className="absolute z-50 mt-1 w-64 bg-white border border-gray-300 rounded-md shadow-lg">
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
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        className="flex-1 border-gray-300 bg-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <Input
                    placeholder={requestQuotationFormData.contactDetails.fields.country}
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    className="border-gray-300 bg-white"
                    required
                  />
                </div>
                <Textarea
                  placeholder={requestQuotationFormData.contactDetails.fields.additionalInfo}
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  className="border-gray-300 bg-white min-h-32"
                  rows={4}
                  required
                />
              </div>
            </div>

            {/* Upload Your Design */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-6 text-primary">
                {requestQuotationFormData.uploadDesign.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder={requestQuotationFormData.uploadDesign.fields.boothSize}
                  value={formData.boothSize}
                  onChange={(e) => handleInputChange("boothSize", e.target.value)}
                  className="border-gray-300 bg-white"
                  required
                />
                <div>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => handleFileChange(e.target.files)}
                    className="w-full border border-gray-300 rounded p-3 bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  />
                  {formData.uploadFiles.length > 0 && (
                    <div className="text-sm text-gray-600 mt-1">
                      Selected files:
                      <ul className="list-disc list-inside">
                        {formData.uploadFiles.map((file, index) => (
                          <li key={index}>{file.name} ({(file.size / 1024).toFixed(1)} KB)</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-6 text-primary">
                {requestQuotationFormData.eventDetails.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder={requestQuotationFormData.eventDetails.fields.eventName}
                  value={formData.eventName}
                  onChange={(e) => handleInputChange("eventName", e.target.value)}
                  className="border-gray-300 bg-white"
                  required
                />
                <Input
                  placeholder={requestQuotationFormData.eventDetails.fields.eventCity}
                  value={formData.eventCity}
                  onChange={(e) => handleInputChange("eventCity", e.target.value)}
                  className="border-gray-300 bg-white"
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : requestQuotationFormData.submitButton}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}