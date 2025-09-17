"use client"

import { TradeShow } from "@/data/trade-shows"
import "@/styles/content.css"
import { useEffect } from "react"

interface TradeShowContentProps {
  show: TradeShow
}

export default function TradeShowContent({ show }: TradeShowContentProps) {
  useEffect(() => {
    // Add data labels to table cells for mobile responsiveness
    const tables = document.querySelectorAll('.rich-content table')
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
            
            {/* Excerpt as bold detail title */}
            {show.excerpt && (
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
                {show.excerpt}
              </h3>
            )}
            
            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
              <div 
                className="rich-content text-sm sm:text-base"
                dangerouslySetInnerHTML={{ __html: show.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}