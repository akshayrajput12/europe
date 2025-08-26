"use client"

import Image from "next/image"
import { portfolioPageData } from "@/data/portfolio"
import { useEffect, useState } from "react"

export default function PortfolioGallery() {
  // Define the height sequence pattern
  const heightSequence = [200, 300, 400, 300, 250, 350, 200, 400, 300, 250, 350, 200]
  
  // Pre-calculate heights once when the component loads
  const [itemHeights, setItemHeights] = useState<number[]>([])
  
  useEffect(() => {
    // Create a new array to store the heights
    const heights: number[] = []
    
    // Calculate the column index for each item (0, 1, 2 for 3 columns)
    // Pattern: Column 1 starts with small, Column 2 starts with large, Column 3 starts with medium
    portfolioPageData.items.forEach((_, index) => {
      const columnIndex = index % 3
      const sequenceIndex = Math.floor(index / 3) % heightSequence.length
      let heightIndex = sequenceIndex
      
      // Adjust the starting height based on column
      if (columnIndex === 1) { // Second column starts with large
        heightIndex = (sequenceIndex + 2) % heightSequence.length
      } else if (columnIndex === 2) { // Third column starts with medium
        heightIndex = (sequenceIndex + 4) % heightSequence.length
      }
      
      heights.push(heightSequence[heightIndex])
    })
    
    setItemHeights(heights)
  }, [])
  
  return (
    <section className="py-16 md:py-20">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-1 space-y-1">
        {portfolioPageData.items.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300"
            style={{ height: itemHeights[index] ? `${itemHeights[index]}px` : 'auto' }}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}