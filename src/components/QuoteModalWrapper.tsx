"use client"

import { QuoteModalProvider, useQuoteModal } from "@/contexts/QuoteModalContext"
import RequestQuoteModal from "@/components/RequestQuoteModal"

function ModalWrapper({ children }: { children: React.ReactNode }) {
  const { isOpen, modalType, closeModal } = useQuoteModal()
  
  return (
    <>
      {children}
      <RequestQuoteModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        type={modalType} 
      />
    </>
  )
}

export default function QuoteModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <QuoteModalProvider>
      <ModalWrapper>
        {children}
      </ModalWrapper>
    </QuoteModalProvider>
  )
}