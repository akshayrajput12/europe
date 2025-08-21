"use client"

import { Button } from "@/components/ui/button"
import { Hand } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Hand Icon */}
        <div className="mb-8">
          <Hand className="w-16 h-16 text-lime-500 mx-auto" strokeWidth={1.5} />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-wide">THANK YOU</h1>

        {/* Success Message */}
        <p className="text-lg text-gray-700 mb-2 font-medium">
          {"You're one step closer to a smooth and successful exhibition!"}
        </p>

        {/* Subtext */}
        <p className="text-gray-600 mb-8">
          Your request has been successfully submitted. Our team will connect with you shortly.
        </p>

        {/* Back to Home Button */}
        <Button
          className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-sm font-medium"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  )
}
