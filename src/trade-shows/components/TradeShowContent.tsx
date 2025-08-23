"use client"

import { TradeShow } from "@/data/trade-shows"
import "@/styles/trade-show-content.css"
import { useEffect } from "react"

interface TradeShowContentProps {
  show: TradeShow
}

export default function TradeShowContent({ show }: TradeShowContentProps) {
  useEffect(() => {
    // Add data labels to table cells for mobile responsiveness
    const tables = document.querySelectorAll('.trade-show-content table')
    tables.forEach(table => {
      const headers = table.querySelectorAll('th')
      const rows = table.querySelectorAll('tbody tr')
      
      rows.forEach(row => {
        const cells = row.querySelectorAll('td')
        cells.forEach((cell, index) => {
          if (headers[index]) {
            cell.setAttribute('data-label', headers[index].textContent || '')
          }
        })
      })
    })
  }, [show.content])

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">
              {show.title} - {show.location}
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">{show.excerpt}</p>
              
              <div 
                className="trade-show-content text-sm sm:text-base"
                dangerouslySetInnerHTML={{ __html: show.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}