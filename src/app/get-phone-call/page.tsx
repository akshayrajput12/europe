"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getPhoneCallFormData } from "@/data/get-phone-call-form"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

export default function GetPhoneCallPage() {
  const router = useRouter()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  // Get current date info
  const today = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  
  // Get month name
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  // Generate calendar days
  const calendarDays = []
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  // Check if a date is in the past (disable it)
  const isDateDisabled = (day: number) => {
    if (!day) return true
    const dateToCheck = new Date(currentYear, currentMonth, day)
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return dateToCheck < todayStart
  }

  // Navigate months
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate)
    if (direction === 'next') {
      newDate.setMonth(currentMonth + 1)
    } else if (direction === 'prev') {
      // Don't allow going to previous months before current month
      if (currentYear > today.getFullYear() || 
          (currentYear === today.getFullYear() && currentMonth > today.getMonth())) {
        newDate.setMonth(currentMonth - 1)
      }
    }
    setCurrentDate(newDate)
    setSelectedDate(null) // Clear selected date when changing months
  }

  const handleDateSelect = (day: number) => {
    if (!isDateDisabled(day)) {
      setSelectedDate(day)
    }
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleContinue = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time")
      return
    }
    
    const monthNames = [
      "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ]
    
    const formattedDate = `${monthNames[currentMonth]} ${selectedDate}, ${currentYear}`
    
    console.log("Selected date:", selectedDate, "Selected time:", selectedTime)
    
    // Navigate to save-call-detail page with date and time parameters
    router.push(`/save-call-detail?date=${encodeURIComponent(formattedDate)}&time=${encodeURIComponent(selectedTime)}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="text-white py-16 px-4 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${getPhoneCallFormData.hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {getPhoneCallFormData.hero.title}
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary">
            {getPhoneCallFormData.hero.highlightText}
          </h2>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            {getPhoneCallFormData.description.text}
          </p>
        </div>
      </section>

      {/* Date and Time Selection */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold text-gray-800">
                {getPhoneCallFormData.dateTimeSelection.title}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <div className="bg-white border rounded-lg p-6">
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-2 hover:bg-gray-100 rounded"
                  disabled={currentYear === today.getFullYear() && currentMonth === today.getMonth()}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-semibold">
                  {monthNames[currentMonth]} {currentYear}
                </h3>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Week Days Header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {getPhoneCallFormData.dateTimeSelection.dateSelector.weekDays.map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => day && handleDateSelect(day)}
                    disabled={!day || isDateDisabled(day)}
                    className={`
                      h-10 w-10 rounded-full text-sm font-medium transition-colors
                      ${!day ? 'invisible' : ''}
                      ${day && isDateDisabled(day) 
                        ? 'text-gray-300 cursor-not-allowed bg-gray-50' 
                        : selectedDate === day 
                          ? 'bg-primary text-white' 
                          : 'text-gray-500 bg-gray-100 hover:bg-white hover:text-gray-700 border'
                      }
                    `}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="space-y-6">
              {/* Morning */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-3">Morning</h4>
                <div className="grid grid-cols-2 gap-3">
                  {getPhoneCallFormData.dateTimeSelection.timeSlots.morning.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`
                        p-3 text-sm font-medium rounded border transition-colors
                        ${selectedTime === time 
                          ? 'bg-primary text-white border-primary' 
                          : 'bg-gray-50 text-gray-700 border-gray-300 hover:border-primary'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Afternoon */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-3">Afternoon</h4>
                <div className="grid grid-cols-2 gap-3">
                  {getPhoneCallFormData.dateTimeSelection.timeSlots.afternoon.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`
                        p-3 text-sm font-medium rounded border transition-colors
                        ${selectedTime === time 
                          ? 'bg-primary text-white border-primary' 
                          : 'bg-gray-50 text-gray-700 border-gray-300 hover:border-primary'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Evening */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-3">Evening</h4>
                <div className="grid grid-cols-2 gap-3">
                  {getPhoneCallFormData.dateTimeSelection.timeSlots.evening.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`
                        p-3 text-sm font-medium rounded border transition-colors
                        ${selectedTime === time 
                          ? 'bg-primary text-white border-primary' 
                          : 'bg-gray-50 text-gray-700 border-gray-300 hover:border-primary'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="text-center mt-8">
            <Button
              onClick={handleContinue}
              disabled={!selectedDate || !selectedTime}
              className={`px-8 py-3 rounded font-medium transition-colors ${
                selectedDate && selectedTime 
                  ? 'bg-primary hover:bg-[#8fb32e] text-white' 
                  : 'bg-gray-400 text-gray-600 cursor-not-allowed'
              }`}
            >
              {getPhoneCallFormData.continueButton}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}