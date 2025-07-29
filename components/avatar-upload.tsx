"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Upload, X } from "lucide-react"
import Image from "next/image"

interface AvatarUploadProps {
  currentImage?: string
  onImageChange?: (imageUrl: string) => void
  className?: string
}

export function AvatarUpload({ currentImage, onImageChange, className = "" }: AvatarUploadProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(currentImage || null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setIsUploading(true)
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setPreviewImage(result)
        onImageChange?.(result)
        setIsUploading(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const removeImage = () => {
    setPreviewImage(null)
    onImageChange?.("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5" />
          Profile Photo
        </CardTitle>
        <CardDescription>Upload your profile picture. Recommended size: 400x400px</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Avatar Preview */}
        <div className="flex justify-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted border-4 border-background shadow-lg">
            {previewImage ? (
              <>
                <Image src={previewImage || "/placeholder.svg"} alt="Profile preview" fill className="object-cover" />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-1 right-1 h-6 w-6 rounded-full"
                  onClick={removeImage}
                >
                  <X className="h-3 w-3" />
                </Button>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Camera className="h-8 w-8 text-muted-foreground" />
              </div>
            )}
          </div>
        </div>

        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50"
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className="hidden"
            id="avatar-upload"
          />

          {isUploading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="text-sm text-muted-foreground">Uploading...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Upload className="h-8 w-8 text-muted-foreground" />
              <p className="text-sm font-medium">Drop your image here or click to browse</p>
              <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
            </div>
          )}
        </div>

        {/* Upload Button */}
        <Button
          onClick={() => fileInputRef.current?.click()}
          className="w-full"
          disabled={isUploading}
          variant="outline"
        >
          <Upload className="mr-2 h-4 w-4" />
          Choose File
        </Button>

        {/* Quick Options */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Quick Options:</p>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const url = "/placeholder.svg?height=400&width=400&text=Professional"
                setPreviewImage(url)
                onImageChange?.(url)
              }}
            >
              Professional
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const url = "/placeholder.svg?height=400&width=400&text=Casual"
                setPreviewImage(url)
                onImageChange?.(url)
              }}
            >
              Casual
            </Button>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-muted/50 rounded-lg p-3">
          <h4 className="text-sm font-medium mb-2">Tips for a great profile photo:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Use a high-quality, well-lit photo</li>
            <li>• Face should be clearly visible and centered</li>
            <li>• Professional attire recommended</li>
            <li>• Avoid busy backgrounds</li>
            <li>• Square aspect ratio works best</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
