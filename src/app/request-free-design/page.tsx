"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { requestDesignFormData } from "@/data/request-design-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function RequestFreeDesignPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    yourName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    website: "",
    yourCountry: "",
    eventName: "",
    eventCity: "",
    width: "",
    length: "",
    area: "",
    standType: "",
    spaceType: "",
    meetingArea: "",
    facilities: [] as string[],
    budget: "",
    additionalInfo: "",
    sampleDesign: null as File | null,
    floorDesign: null as File | null,
    graphicLogo: null as File | null
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }))
  }

  const handleFacilityChange = (facility: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      facilities: checked 
        ? [...prev.facilities, facility]
        : prev.facilities.filter(f => f !== facility)
    }))
  }

  const validateForm = () => {
    // Required fields validation
    if (!formData.yourName.trim()) {
      alert("Please enter your name")
      return false
    }
    if (!formData.email.trim()) {
      alert("Please enter your email")
      return false
    }
    if (!formData.companyName.trim()) {
      alert("Please enter your company name")
      return false
    }
    if (!formData.eventName.trim()) {
      alert("Please enter the event name")
      return false
    }
    if (!formData.eventCity.trim()) {
      alert("Please enter the event city")
      return false
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
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
        className="text-white py-16 px-4 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${requestDesignFormData.hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {requestDesignFormData.hero.title.split(' ').map((word, index) => {
              if (word === 'FREE' || word === 'DESIGN') {
                return <span key={index} className="text-primary">{word} </span>
              }
              return word + ' '
            })}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {requestDesignFormData.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b-2 border-primary pb-2 inline-block">
                {requestDesignFormData.contactDetails.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder={requestDesignFormData.contactDetails.fields.yourName}
                  value={formData.yourName}
                  onChange={(e) => handleInputChange("yourName", e.target.value)}
                  className="border-black"
                />
                <Input
                  placeholder={requestDesignFormData.contactDetails.fields.email}
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-black"
                />
                <Input
                  placeholder={requestDesignFormData.contactDetails.fields.phoneNumber}
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="border-black"
                />
                <Input
                  placeholder={requestDesignFormData.contactDetails.fields.companyName}
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  className="border-black"
                />
                <Input
                  placeholder={requestDesignFormData.contactDetails.fields.website}
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  className="border-black"
                />
                <Input
                  placeholder={requestDesignFormData.contactDetails.fields.yourCountry}
                  value={formData.yourCountry}
                  onChange={(e) => handleInputChange("yourCountry", e.target.value)}
                  className="border-black"
                />
              </div>
            </div>

            {/* Event Detail */}
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b-2 border-primary pb-2 inline-block">
                {requestDesignFormData.eventDetail.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder={requestDesignFormData.eventDetail.fields.eventName}
                  value={formData.eventName}
                  onChange={(e) => handleInputChange("eventName", e.target.value)}
                  className="border-black"
                />
                <Input
                  placeholder={requestDesignFormData.eventDetail.fields.eventCity}
                  value={formData.eventCity}
                  onChange={(e) => handleInputChange("eventCity", e.target.value)}
                  className="border-black"
                />
              </div>
            </div>

            {/* Stand Dimensions & Size */}
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b-2 border-primary pb-2 inline-block">
                {requestDesignFormData.standDimensions.title}
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 flex-wrap">
                  <Input
                    placeholder="10"
                    value={formData.width}
                    onChange={(e) => handleInputChange("width", e.target.value)}
                    className="w-20 border-black"
                  />
                  <span className="text-lg">X</span>
                  <Input
                    placeholder="20"
                    value={formData.length}
                    onChange={(e) => handleInputChange("length", e.target.value)}
                    className="w-20 border-black"
                  />
                  <span className="text-lg">=</span>
                  <Input
                    placeholder="200"
                    value={formData.area}
                    onChange={(e) => handleInputChange("area", e.target.value)}
                    className="w-24 border-black"
                  />
                  <span className="text-lg">SQM</span>
                </div>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="standType"
                      value="single"
                      checked={formData.standType === "single"}
                      onChange={(e) => handleInputChange("standType", e.target.value)}
                      className="text-primary"
                    />
                    <span>{requestDesignFormData.standDimensions.standTypes.singleDecker}</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="standType"
                      value="double"
                      checked={formData.standType === "double"}
                      onChange={(e) => handleInputChange("standType", e.target.value)}
                      className="text-primary"
                    />
                    <span>{requestDesignFormData.standDimensions.standTypes.doubleDecker}</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Your Space Is */}
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b-2 border-primary pb-2 inline-block">
                {requestDesignFormData.yourSpaceIs.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {requestDesignFormData.yourSpaceIs.options.map((option) => (
                  <label key={option.id} className="flex flex-col items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="spaceType"
                      value={option.id}
                      checked={formData.spaceType === option.id}
                      onChange={(e) => handleInputChange("spaceType", e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-16 h-16 border-2 rounded flex items-center justify-center ${
                      formData.spaceType === option.id 
                        ? "border-primary bg-primary/10" 
                        : "border-gray-300"
                    }`}>
                      {/* Placeholder for space type icon */}
                      <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    </div>
                    <span className="text-sm text-center">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Meeting Area */}
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b-2 border-primary pb-2 inline-block">
                {requestDesignFormData.meetingArea.title}
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {requestDesignFormData.meetingArea.options.map((option) => (
                    <label key={option.id} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="meetingArea"
                        value={option.id}
                        checked={formData.meetingArea === option.id}
                        onChange={(e) => handleInputChange("meetingArea", e.target.value)}
                        className="text-primary"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {requestDesignFormData.meetingArea.facilities.map((facility) => (
                    <label key={facility.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.facilities.includes(facility.id)}
                        onChange={(e) => handleFacilityChange(facility.id, e.target.checked)}
                        className="text-primary"
                      />
                      <span>{facility.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Design Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {requestDesignFormData.designOptions.sampleDesign.label}
                </label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf,.ai,.psd"
                  onChange={(e) => handleFileChange("sampleDesign", e.target.files?.[0] || null)}
                  className="w-full border border-black rounded p-3 bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-primary/90"
                />
                {formData.sampleDesign && (
                  <p className="text-sm text-gray-600 mt-1">Selected: {formData.sampleDesign.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {requestDesignFormData.designOptions.floorDesign.label}
                </label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf,.ai,.psd"
                  onChange={(e) => handleFileChange("floorDesign", e.target.files?.[0] || null)}
                  className="w-full border border-black rounded p-3 bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-primary/90"
                />
                {formData.floorDesign && (
                  <p className="text-sm text-gray-600 mt-1">Selected: {formData.floorDesign.name}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  {requestDesignFormData.designOptions.graphicLogo.label}
                </label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf,.ai,.psd,.svg"
                  onChange={(e) => handleFileChange("graphicLogo", e.target.files?.[0] || null)}
                  className="w-full border border-black rounded p-3 bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-primary/90"
                />
                {formData.graphicLogo && (
                  <p className="text-sm text-gray-600 mt-1">Selected: {formData.graphicLogo.name}</p>
                )}
              </div>
            </div>

            {/* Budget */}
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b-2 border-primary pb-2 inline-block">
                {requestDesignFormData.budget.title}
              </h2>
              <Input
                placeholder={requestDesignFormData.budget.placeholder}
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
                className="border-black max-w-md"
              />
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b-2 border-primary pb-2 inline-block">
                {requestDesignFormData.additionalInformation.title}
              </h2>
              <Textarea
                placeholder={requestDesignFormData.additionalInformation.placeholder}
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                className="border-black min-h-32"
                rows={6}
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded font-semibold"
              >
                {requestDesignFormData.submitButton}
              </Button>
            </div>

          </form>
        </div>
      </section>
    </div>
  )
}