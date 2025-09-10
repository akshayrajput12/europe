"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation" // ✅ import router
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { contactData } from "@/data/contact"
import { submitFormData } from "@/lib/form-submission" // Import form submission function

export default function ContactSection() {
  const [formData, setFormData] = useState({}) // Add state for form data
  const router = useRouter() // ✅ initialize router

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

  const handleSubmit = async (e: React.FormEvent) => { // Make async for form submission
    e.preventDefault()
    console.log("Form submitted:", formData)

    try {
      // Submit form data with page URL as form type
      const result = await submitFormData("/contact-section", formData)
      
      if (result) {
        console.log("Form submitted successfully:", result)
      } else {
        console.error("Error submitting form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }

    // ✅ redirect after submit
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
                ) : (
                  <Input
                    type={field.type}
                    name={field.name} // Add name attribute
                    required={field.required}
                    className="w-full border-black"
                    onChange={handleInputChange} // Add onChange handler
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Additional Information</label>
            <Textarea
              name="additionalInfo" // Add name attribute
              rows={4}
              className="border-black w-full"
              placeholder="Enter your message here..."
              onChange={handleInputChange} // Add onChange handler
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