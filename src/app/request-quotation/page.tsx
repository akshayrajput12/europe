"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { requestQuotationFormData } from "@/data/request-quotation-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitFormData } from "@/lib/form-submission"

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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
      
      // Prepare files object for submission
      const files = formData.uploadFiles.length > 0 ? {
        uploadFiles: formData.uploadFiles
      } : undefined
      
      console.log('Files to upload:', formData.uploadFiles.length)
      
      // Submit form data with page URL as form type
      console.log('Submitting form data...')
      const result = await submitFormData("/request-quotation", formData, files)
      
      if (result) {
        console.log("Form submitted successfully:", result)
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