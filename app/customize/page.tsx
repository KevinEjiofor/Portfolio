"use client"

import { useState } from "react"
import { AvatarUpload } from "@/components/avatar-upload"
import { ImageCustomizationGuide } from "@/components/image-customization-guide"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CustomizePage() {
  const [currentImage, setCurrentImage] = useState<string>("")

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Customize Your Portfolio</h1>
          <p className="text-muted-foreground mt-2">
            Upload your profile image and customize your portfolio appearance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <AvatarUpload currentImage={currentImage} onImageChange={setCurrentImage} />
          </div>
          <div className="lg:col-span-2">
            <ImageCustomizationGuide />
          </div>
        </div>
      </div>
    </div>
  )
}
