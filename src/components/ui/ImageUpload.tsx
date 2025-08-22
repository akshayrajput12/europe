"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X, Image as ImageIcon } from "lucide-react"
import Image from "next/image"

interface ImageUploadProps {
  value?: string
  onChange: (value: string) => void
  onDelete?: () => void
  label?: string
  className?: string
  accept?: string
}

export default function ImageUpload({
  value,
  onChange,
  onDelete,
  label = "Upload Image",
  className = "",
  accept = "image/*"
}: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return

    const file = files[0]
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    setUploading(true)
    
    // Convert file to base64 data URL for preview
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      onChange(result)
      setUploading(false)
    }
    reader.onerror = () => {
      alert('Error reading file')
      setUploading(false)
    }
    reader.readAsDataURL(file)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    handleFiles(e.dataTransfer.files)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files)
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleDelete = () => {
    if (onDelete) {
      onDelete()
    } else {
      onChange("")
    }
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <label className="text-sm font-medium text-gray-700 block">{label}</label>
      
      {value ? (
        // Image Preview with Delete Option
        <div className="relative group">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200">
            <Image
              src={value}
              alt="Preview"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling?.classList.remove('hidden')
              }}
            />
            <div className="hidden absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <ImageIcon className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Image not found</p>
              </div>
            </div>
          </div>
          
          {/* Delete Button */}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleDelete}
            className="absolute top-2 right-2 bg-white/90 hover:bg-white text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Replace Button */}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleClick}
            className="absolute bottom-2 right-2 bg-white/90 hover:bg-white"
          >
            <Upload className="h-4 w-4 mr-2" />
            Replace
          </Button>
        </div>
      ) : (
        // Upload Area
        <div
          className={`relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            dragActive 
              ? "border-[#A5CD39] bg-[#A5CD39]/5" 
              : "border-gray-300 hover:border-[#A5CD39] hover:bg-gray-50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <div className="space-y-3">
            <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              {uploading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#A5CD39]"></div>
              ) : (
                <Upload className="h-6 w-6 text-gray-400" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {uploading ? "Uploading..." : "Click to upload or drag and drop"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* URL Input Alternative */}
      <div className="text-center text-gray-500">
        <p className="text-xs mb-2">Or enter image URL:</p>
        <div className="flex gap-2">
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            value={value?.startsWith('data:') ? '' : value || ''}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#A5CD39] focus:border-[#A5CD39]"
          />
          {value && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleDelete}
              className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}