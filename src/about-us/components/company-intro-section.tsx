"use client"

import { useEffect, useState } from "react"
import { companyInfo, companyStats, factsSection } from "@/data/about-data"

export default function CompanyIntroSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12 sm:mb-16">
          {/* Years Badge + First Quote */}
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="text-center relative flex-shrink-0">
              <div className="text-6xl sm:text-8xl md:text-9xl font-bold text-slate-800 leading-none">
                {companyInfo.yearsInBusiness}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 border-b-2 border-slate-800 pb-1 mt-2">
                {companyInfo.yearsLabel}
              </div>
              {/* Decorative arrow */}
              <div className="absolute -bottom-4 -right-4 w-6 h-6 sm:w-8 sm:h-8">
                <svg viewBox="0 0 24 24" className="w-full h-full text-slate-400">
                  <path fill="currentColor" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
            <div className="flex-1 pt-2 sm:pt-4">
              <div className="relative">
                <div className="text-4xl sm:text-6xl text-slate-300 absolute -top-4 -left-2 font-serif">"</div>
                <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed pl-6 sm:pl-8">
                  {companyInfo.globalExhibitionText}
                </p>
              </div>
            </div>
          </div>

          {/* Second Quote */}
          <div className="lg:pl-8">
            <div className="relative">
              <div className="text-4xl sm:text-6xl text-slate-300 absolute -top-4 -left-2 font-serif">"</div>
              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed pl-6 sm:pl-8">
                {companyInfo.quote}
              </p>
            </div>
          </div>
        </div>

        {/* Who We Are */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-8 sm:mb-12 text-center tracking-wide">
            {companyInfo.whoWeAreTitle}
          </h2>
          <div className="space-y-6 sm:space-y-8 text-slate-700 leading-relaxed text-justify max-w-5xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg">{companyInfo.description}</p>
            <p className="text-sm sm:text-base md:text-lg">{companyInfo.description}</p>
            <p className="text-sm sm:text-base md:text-lg">{companyInfo.description}</p>
            <p className="text-sm sm:text-base md:text-lg">{companyInfo.description}</p>
          </div>
        </div>

        {/* Facts & Figures */}
        <div className="py-12 sm:py-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 tracking-wide">
            FACT <span className="text-[#A5CD39]">&</span>{" "}
            <span className="text-[#A5CD39]">FIGURES!</span>
          </h3>
          <p className="text-slate-500 text-center mb-12 sm:mb-16 max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            {factsSection.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {companyStats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ✅ Odometer-style Stat Card */
function StatCard({ stat }: { stat: { value: number; label: string; icon: React.ReactNode } }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = stat.value
    const duration = 2000 // ms
    const frameRate = 30 // fps
    const totalFrames = Math.round((duration / 1000) * frameRate)

    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const currentValue = Math.floor(eased * end)

      setCount(currentValue)

      if (frame === totalFrames) clearInterval(counter)
    }, 1000 / frameRate)

    return () => clearInterval(counter)
  }, [stat.value])

  return (
    <div className="text-center hover:scale-105 transition-all duration-300">
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <span className="text-2xl sm:text-3xl md:text-4xl text-black">{stat.icon}</span>
        </div>
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-1 sm:mb-2 font-mono tracking-wider">
        {count.toLocaleString()}+
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  )
}
