"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { requestQuotationFormData } from "@/data/request-quotation-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
    country: "",
    additionalInfo: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (files: FileList | null) => {
    if (files) {
      setFormData(prev => ({ ...prev, uploadFiles: Array.from(files) }))
    }
  }

  const validateForm = () => {
    // Required fields validation
    if (!formData.eventName.trim()) {
      alert("Please enter the event name")
      return false
    }
    if (!formData.eventCity.trim()) {
      alert("Please enter the event city")
      return false
    }
    if (!formData.boothSize.trim()) {
      alert("Please enter the booth size")
      return false
    }
    if (!formData.fullName.trim()) {
      alert("Please enter your full name")
      return false
    }
    if (!formData.emailId.trim()) {
      alert("Please enter your email ID")
      return false
    }
    if (!formData.country.trim()) {
      alert("Please enter your country")
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    console.log("Form submitted:", formData)
    // Handle form submission here (e.g., send to API)
    
    // Redirect to thank you page
    router.push("/thank-you")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center text-white"
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
                  />
                  <Input
                    placeholder={requestQuotationFormData.contactDetails.fields.emailId}
                    type="email"
                    value={formData.emailId}
                    onChange={(e) => handleInputChange("emailId", e.target.value)}
                    className="border-gray-300 bg-white"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder={requestQuotationFormData.contactDetails.fields.phoneNumber}
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    className="border-gray-300 bg-white"
                  />
                  <Input
                    placeholder={requestQuotationFormData.contactDetails.fields.country}
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    className="border-gray-300 bg-white"
                  />
                </div>
                <Textarea
                  placeholder={requestQuotationFormData.contactDetails.fields.additionalInfo}
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  className="border-gray-300 bg-white min-h-32"
                  rows={4}
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
                          <li key={index}>{file.name}</li>
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
                />
                <Input
                  placeholder={requestQuotationFormData.eventDetails.fields.eventCity}
                  value={formData.eventCity}
                  onChange={(e) => handleInputChange("eventCity", e.target.value)}
                  className="border-gray-300 bg-white"
                />
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold">
                {requestQuotationFormData.submitButton}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}