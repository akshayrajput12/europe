"use client"

import Image from "next/image"
import { portfolioPageData } from "@/data/portfolio"
import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function PortfolioGallery() {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return
      
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentImageIndex(prev => 
          prev === 0 ? portfolioPageData.items.length - 1 : prev - 1
        )
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setCurrentImageIndex(prev => 
          prev === portfolioPageData.items.length - 1 ? 0 : prev + 1
        )
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])
  
  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }
  
  const closeModal = () => {
    setIsModalOpen(false)
  }
  
  const goToNext = () => {
    setCurrentImageIndex((prev) => {
      const newIndex = prev === portfolioPageData.items.length - 1 ? 0 : prev + 1
      return newIndex
    })
  }
  
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => {
      const newIndex = prev === 0 ? portfolioPageData.items.length - 1 : prev - 1
      return newIndex
    })
  }
  
  const currentItem = portfolioPageData.items[currentImageIndex]
  
  return (
    <>
      <section className="py-16 md:py-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2 px-4">
          {portfolioPageData.items.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid cursor-pointer mb-2"
              onClick={() => openModal(index)}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`Portfolio image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </section>
      
      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeModal()
            }}
            className="absolute top-4 right-4 z-[60] text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-[60] text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-[60] text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Image container */}
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center px-16 z-[50]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={currentItem.image}
                alt={`Portfolio image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Image info */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white bg-black bg-opacity-50 rounded-lg px-6 py-3 z-[50]">
            <p className="text-xs opacity-60 mt-2">
              {currentImageIndex + 1} of {portfolioPageData.items.length}
            </p>
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 z-[30]" 
            onClick={(e) => {
              e.stopPropagation()
              closeModal()
            }}
            aria-label="Close modal"
          />
        </div>
      )}
    </>
  )
}