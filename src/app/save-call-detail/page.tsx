"use client"

import { useState, Suspense, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { getPhoneCallFormData } from "@/data/get-phone-call-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock } from "lucide-react"
import { sortedCountryCodes } from "@/data/countryCodes"

function SaveCallDetailContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    fullName: "",
    emailId: "",
    phoneNumber: "",
    countryCode: "+971",
    country: "",
    additionalInfo: ""
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

  // Get date and time from URL parameters
  const selectedDate = searchParams.get('date') || getPhoneCallFormData.saveCallDetail.scheduledInfo.dateLabel
  const selectedTime = searchParams.get('time') || getPhoneCallFormData.saveCallDetail.scheduledInfo.timeLabel

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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

  const validateForm = () => {
    // Required fields validation
    if (!formData.fullName.trim()) {
      alert("Please enter your full name")
      return false
    }
    if (!formData.emailId.trim()) {
      alert("Please enter your email ID")
      return false
    }
    if (!formData.phoneNumber.trim()) {
      alert("Please enter your phone number")
      return false
    }
    if (!formData.country.trim()) {
      alert("Please enter your country")
      return false
    }
    if (!formData.additionalInfo.trim()) {
      alert("Please enter additional information")
      return false
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.emailId)) {
      alert("Please enter a valid email address")
      return false
    }
    
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Include date and time in the form data
      const fullFormData = {
        ...formData,
        selectedDate,
        selectedTime
      }
      
      // Submit form data via API route
      const response = await fetch('/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: "/save-call-detail",
          formData: fullFormData
        }),
      })
      
      const result = await response.json()
      
      if (result.success) {
        console.log("Form submitted successfully:", result.data)
        // Redirect to thank you page
        router.push("/thank-you")
      } else {
        alert("There was an error submitting your request. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="text-white relative bg-cover bg-center bg-no-repeat"
        style={{ 
          height: '70vh',
          backgroundImage: `url(${getPhoneCallFormData.saveCallDetail.hero.backgroundImage})`
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="h-full flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
              {getPhoneCallFormData.saveCallDetail.hero.title}
            </h1>
            
            {/* Date & Time Card */}
            <div className="bg-secondary text-white rounded-lg px-8 py-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-xl font-bold">{selectedDate}</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold">{selectedTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-primary border-2 border-primary rounded px-4 py-2 inline-block">
                {getPhoneCallFormData.saveCallDetail.form.title}
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder={getPhoneCallFormData.saveCallDetail.form.fields.fullName}
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="border-gray-300 bg-white rounded-none h-12"
                  required
                />
                <Input
                  placeholder={getPhoneCallFormData.saveCallDetail.form.fields.emailId}
                  type="email"
                  value={formData.emailId}
                  onChange={(e) => handleInputChange("emailId", e.target.value)}
                  className="border-gray-300 bg-white rounded-none h-12"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Number with Country Code */}
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number*</label>
                  <div className="flex gap-2">
                    {/* Custom Country Code Dropdown */}
                    <div className="relative w-24" data-country-dropdown>
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="w-full h-12 border border-gray-300 rounded-md px-2 py-2 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#A5CD39] focus:border-[#A5CD39] transition-colors"
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
                      className="flex-1 border-gray-300 bg-white rounded-none h-12"
                      required
                    />
                  </div>
                </div>
                <Input
                  placeholder={getPhoneCallFormData.saveCallDetail.form.fields.country}
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  className="border-gray-300 bg-white rounded-none h-12"
                  required
                />
              </div>
              
              <Textarea
                placeholder={getPhoneCallFormData.saveCallDetail.form.fields.additionalInfo}
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                className="border-gray-300 bg-white rounded-none min-h-32"
                rows={6}
                required
              />

              {/* Submit Button */}
              <div className="text-center mt-8">
                <Button
                  type="submit"
                  className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-12 py-4 rounded-full font-semibold text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : getPhoneCallFormData.saveCallDetail.submitButton}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function SaveCallDetailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SaveCallDetailContent />
    </Suspense>
  )
}