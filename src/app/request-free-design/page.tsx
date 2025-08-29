"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { requestDesignFormData } from "@/data/request-design-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
    sampleDesign: [] as File[],
    floorDesign: [] as File[],
    graphicLogo: [] as File[]
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (field: string, files: FileList | null) => {
    if (files) {
      setFormData(prev => ({ ...prev, [field]: Array.from(files) }))
    }
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
        className="relative h-[50vh] flex items-center justify-center text-white"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${requestDesignFormData.hero.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            {requestDesignFormData.hero.title.split(' ').map((word, index) => {
              if (word === 'FREE' || word === 'DESIGN') {
                return <span key={index} className="text-primary">{word} </span>
              }
              return word + ' '
            })}
          </h1>
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
                    placeholder="Length[m]"
                    value={formData.width}
                    onChange={(e) => {
                      const width = e.target.value;
                      handleInputChange("width", width);
                      // Calculate area when width changes
                      if (width && formData.length) {
                        const area = (parseFloat(width) || 0) * (parseFloat(formData.length) || 0);
                        handleInputChange("area", area.toString());
                      } else if (!width) {
                        handleInputChange("area", "");
                      }
                    }}
                    className="w-28 border-black"
                  />
                  <span className="text-lg">X</span>
                  <Input
                    placeholder="Breadth[m]"
                    value={formData.length}
                    onChange={(e) => {
                      const length = e.target.value;
                      handleInputChange("length", length);
                      // Calculate area when length changes
                      if (length && formData.width) {
                        const area = (parseFloat(formData.width) || 0) * (parseFloat(length) || 0);
                        handleInputChange("area", area.toString());
                      } else if (!length) {
                        handleInputChange("area", "");
                      }
                    }}
                    className="w-28 border-black"
                  />
                  <span className="text-lg">=</span>
                  <Input
                    placeholder="Area"
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
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {/* One Side Open */}
                <div className="flex flex-col items-center">
                  <label className="flex items-center mb-3">
                    <input
                      type="radio"
                      name="spaceType"
                      value="one-side-open"
                      checked={formData.spaceType === "one-side-open"}
                      onChange={(e) => handleInputChange("spaceType", e.target.value)}
                      className="mr-2"
                    />
                    <span>One Side Open</span>
                  </label>
                  <div className={`w-20 h-16 relative ${formData.spaceType === "one-side-open" ? "opacity-100" : "opacity-50"}`}>
                    <svg width="100%" height="100%" viewBox="0 0 112 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="110" height="94" stroke="#648a00" strokeWidth="3" />
                      <line x1="1" y1="95" x2="111" y2="95" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Two Side F & L */}
                <div className="flex flex-col items-center">
                  <label className="flex items-center mb-3">
                    <input
                      type="radio"
                      name="spaceType"
                      value="two-side-l-t"
                      checked={formData.spaceType === "two-side-l-t"}
                      onChange={(e) => handleInputChange("spaceType", e.target.value)}
                      className="mr-2"
                    />
                    <span>Two Side F & L</span>
                  </label>
                  <div className={`w-20 h-16 relative ${formData.spaceType === "two-side-l-t" ? "opacity-100" : "opacity-50"}`}>
                    <svg width="100%" height="100%" viewBox="0 0 112 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="110" height="94" stroke="#648a00" strokeWidth="3" />
                      <line x1="1" y1="95" x2="111" y2="95" stroke="white" strokeWidth="2" />
                      <line x1="111" y1="1" x2="111" y2="95" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Two Side F & R */}
                <div className="flex flex-col items-center">
                  <label className="flex items-center mb-3">
                    <input
                      type="radio"
                      name="spaceType"
                      value="two-side-f-b"
                      checked={formData.spaceType === "two-side-f-b"}
                      onChange={(e) => handleInputChange("spaceType", e.target.value)}
                      className="mr-2"
                    />
                    <span>Two Side F & R</span>
                  </label>
                  <div className={`w-20 h-16 relative ${formData.spaceType === "two-side-f-b" ? "opacity-100" : "opacity-50"}`}>
                    <svg width="100%" height="100%" viewBox="0 0 112 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="110" height="94" stroke="#648a00" strokeWidth="3" />
                      <line x1="1" y1="1" x2="1" y2="95" stroke="white" strokeWidth="2" />
                      <line x1="1" y1="95" x2="111" y2="95" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Three Side Open */}
                <div className="flex flex-col items-center">
                  <label className="flex items-center mb-3">
                    <input
                      type="radio"
                      name="spaceType"
                      value="three-side-open"
                      checked={formData.spaceType === "three-side-open"}
                      onChange={(e) => handleInputChange("spaceType", e.target.value)}
                      className="mr-2"
                    />
                    <span>Three Side Open</span>
                  </label>
                  <div className={`w-20 h-16 relative ${formData.spaceType === "three-side-open" ? "opacity-100" : "opacity-50"}`}>
                    <svg width="100%" height="100%" viewBox="0 0 112 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="110" height="94" stroke="#648a00" strokeWidth="3" />
                      <line x1="1" y1="95" x2="111" y2="95" stroke="white" strokeWidth="2" />
                      <line x1="1" y1="1" x2="1" y2="95" stroke="white" strokeWidth="2" />
                      <line x1="111" y1="1" x2="111" y2="95" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Island */}
                <div className="flex flex-col items-center">
                  <label className="flex items-center mb-3">
                    <input
                      type="radio"
                      name="spaceType"
                      value="island"
                      checked={formData.spaceType === "island"}
                      onChange={(e) => handleInputChange("spaceType", e.target.value)}
                      className="mr-2"
                    />
                    <span>Island</span>
                  </label>
                  <div className={`w-20 h-16 relative ${formData.spaceType === "island" ? "opacity-100" : "opacity-50"}`}>
                    <svg width="100%" height="100%" viewBox="0 0 112 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="110" height="94" stroke="#648a00" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
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
                  {requestDesignFormData.designOptions.floorDesign.label}
                </label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => handleFileChange("floorDesign", e.target.files)}
                  className="w-full border border-black rounded p-3 bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-[#8fb32e]"
                />
                {formData.floorDesign.length > 0 && (
                  <div className="text-sm text-gray-600 mt-1">
                    Selected files:
                    <ul className="list-disc list-inside">
                      {formData.floorDesign.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {requestDesignFormData.designOptions.sampleDesign.label}
                </label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => handleFileChange("sampleDesign", e.target.files)}
                  className="w-full border border-black rounded p-3 bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-[#8fb32e]"
                />
                {formData.sampleDesign.length > 0 && (
                  <div className="text-sm text-gray-600 mt-1">
                    Selected files:
                    <ul className="list-disc list-inside">
                      {formData.sampleDesign.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  {requestDesignFormData.designOptions.graphicLogo.label}
                </label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => handleFileChange("graphicLogo", e.target.files)}
                  className="w-full border border-black rounded p-3 bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-[#8fb32e]"
                />
                {formData.graphicLogo.length > 0 && (
                  <div className="text-sm text-gray-600 mt-1">
                    Selected files:
                    <ul className="list-disc list-inside">
                      {formData.graphicLogo.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Budget */}
            <div>
              <h2 className="text-xl font-semibold mb-6 border-b-2 border-primary pb-2 inline-block">
                {requestDesignFormData.budget.title}
              </h2>
              <Select 
                value={formData.budget} 
                onValueChange={(value) => handleInputChange("budget", value)}
              >
                <SelectTrigger className="border-black max-w-md">
                  <SelectValue placeholder={requestDesignFormData.budget.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {requestDesignFormData.budget.options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-8 py-3 rounded font-semibold"
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