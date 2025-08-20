"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { contactData } from "@/data/contact"

export default function ContactSection() {
  const [formData] = useState({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">{contactData.title}</h2>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {contactData.fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium mb-2">{field.label}</label>
                {field.type === "select" ? (
                  <Select>
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
                    required={field.required}
                    className="w-full border-black"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Additional Information</label>
            <Textarea
              rows={4}
              className="border-black w-full"
              placeholder="Enter your message here..."
            />
          </div>

          <div className="text-center">
            <Button type="submit" size="lg" className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-8">
              SEND MESSAGE
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
