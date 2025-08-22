"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface QuoteModalContextType {
  isOpen: boolean
  modalType: "quote" | "design"
  openQuoteModal: () => void
  openDesignModal: () => void
  closeModal: () => void
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined)

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState<"quote" | "design">("quote")

  const openQuoteModal = () => {
    setModalType("quote")
    setIsOpen(true)
  }

  const openDesignModal = () => {
    setModalType("design")
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        modalType,
        openQuoteModal,
        openDesignModal,
        closeModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  )
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext)
  if (context === undefined) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider")
  }
  return context
}