"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactData } from "@/data/contact-data"

export default function ContactSection() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    country: "",
    additionalInfo: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    // 👉 simulate form submit success
    setTimeout(() => {
      router.push("/thank-you")
    }, 500) // optional delay for UX
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info Card */}
          <div className="bg-[#1E293B] text-white p-6 md:p-8 rounded-lg relative order-2 lg:order-1">
            <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 bg-[#A5CD39] rounded-full opacity-20"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
              {contactData.contactInfo.title}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="text-[#A5CD39] mt-1 text-lg">📍</div>
                <div>
                  <p className="font-semibold text-white">{contactData.contactInfo.address}</p>
                  <p className="text-[#94A3B8] text-sm md:text-base">{contactData.contactInfo.fullAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#A5CD39] mt-1 text-lg">📞</div>
                <div>
                  {contactData.contactInfo.phone.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-[#94A3B8] hover:text-[#A5CD39] transition-colors text-sm md:text-base"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#A5CD39] mt-1 text-lg">✉️</div>
                <a
                  href={`mailto:${contactData.contactInfo.email}`}
                  className="text-[#94A3B8] hover:text-[#A5CD39] transition-colors text-sm md:text-base"
                >
                  {contactData.contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="rounded-lg p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder="Your Name*"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-gray-800"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email ID*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-gray-800"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-gray-800"
                  />
                  <Input
                    name="country"
                    placeholder="Your Country*"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-gray-800"
                    required
                  />
                </div>

                <Textarea
                  name="additionalInfo"
                  placeholder="Additional Information*"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="min-h-[120px] border-2 border-gray-800"
                  required
                />

                <Button
                  type="submit"
                  className="bg-[#A5CD39] text-white px-8 py-3 h-12 rounded-full hover:bg-[#8fb32e] hover:scale-105 transition-all duration-300 font-semibold"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}