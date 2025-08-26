"use client"

import Image from "next/image"
import { portfolioPageData } from "@/data/portfolio"
import { useEffect, useState } from "react"

export default function PortfolioGallery() {
  // Define the height sequence pattern for each column
  const heightSequence = [200, 300, 400, 300, 250, 350, 200, 400, 300, 250, 350, 200]
  
  // Pre-calculate heights once when the component loads
  const [itemHeights, setItemHeights] = useState<number[]>([])
  
  useEffect(() => {
    // Create a new array to store the heights
    const heights: number[] = []
    
    // For each item, determine which column it belongs to and assign height accordingly
    portfolioPageData.items.forEach((_, index) => {
      // Determine column (0, 1, or 2)
      const columnIndex = index % 3
      
      // Determine position within the column cycle
      const positionInColumn = Math.floor(index / 3)
      
      // Calculate height index based on column-specific pattern
      let heightIndex: number
      
      switch (columnIndex) {
        case 0: // First column: small -> medium -> large
          heightIndex = positionInColumn % 3
          break
        case 1: // Second column: large -> small -> medium
          heightIndex = (positionInColumn + 2) % 3
          break
        case 2: // Third column: medium -> large -> small
          heightIndex = (positionInColumn + 1) % 3
          break
        default:
          heightIndex = positionInColumn % heightSequence.length
      }
      
      // Map to actual height values (small, medium, large)
      const heightValues = [200, 300, 400] // small, medium, large
      heights.push(heightValues[heightIndex])
    })
    
    setItemHeights(heights)
  }, [])
  
  return (
    <section className="py-16 md:py-20">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {portfolioPageData.items.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid"
            style={{ height: itemHeights[index] ? `${itemHeights[index]}px` : 'auto' }}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}