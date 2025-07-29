"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ImageIcon, Code, Upload, Palette } from "lucide-react"

export function ImageCustomizationGuide() {
  const methods = [
    {
      title: "Upload Your Own Image",
      icon: Upload,
      difficulty: "Easy",
      description: "Use the avatar upload component to add your photo",
      steps: [
        "Click the profile photo area in the hero section",
        "Drag and drop your image or click to browse",
        "Image will be automatically cropped to circular format",
        "Supports PNG, JPG, GIF up to 10MB",
      ],
      code: `// The image will be stored and displayed automatically
// No code changes needed!`,
    },
    {
      title: "Replace Image URL",
      icon: Code,
      difficulty: "Simple",
      description: "Change the image source in the code",
      steps: [
        "Open components/animated-hero.tsx",
        "Find the profileImage variable",
        "Replace with your image URL or path",
        "Save and refresh the page",
      ],
      code: `// In components/animated-hero.tsx
const profileImage = "/your-photo.jpg"
// or
const profileImage = "https://your-domain.com/photo.jpg"`,
    },
    {
      title: "Add to Public Folder",
      icon: ImageIcon,
      difficulty: "Simple",
      description: "Add your image to the project files",
      steps: [
        "Create a 'public' folder in your project root",
        "Add your image file (e.g., profile.jpg)",
        "Update the profileImage path",
        "Image will be served from /profile.jpg",
      ],
      code: `// File structure:
// public/
//   └── profile.jpg
//
// In components/animated-hero.tsx:
const profileImage = "/profile.jpg"`,
    },
    {
      title: "Customize Avatar Styles",
      icon: Palette,
      difficulty: "Advanced",
      description: "Modify the avatar appearance and animations",
      steps: [
        "Adjust size by changing w-32 h-32 classes",
        "Modify border gradient colors",
        "Change animation effects",
        "Add custom hover states",
      ],
      code: `// Larger avatar:
className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64"

// Custom gradient:
className="bg-gradient-to-r from-green-500 to-blue-500"

// Different animation:
className="animate-pulse hover:animate-bounce"`,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            How to Add Your Profile Image
          </CardTitle>
          <CardDescription>
            Multiple ways to customize your avatar image, from simple uploads to advanced customization
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6">
        {methods.map((method, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <method.icon className="h-5 w-5" />
                  {method.title}
                </CardTitle>
                <Badge
                  variant={
                    method.difficulty === "Easy" ? "default" : method.difficulty === "Simple" ? "secondary" : "outline"
                  }
                >
                  {method.difficulty}
                </Badge>
              </div>
              <CardDescription>{method.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Steps:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  {method.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ol>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-2">Code Example:</h4>
                <pre className="bg-muted p-3 rounded-md text-xs overflow-x-auto">
                  <code>{method.code}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Image Specifications */}
      <Card>
        <CardHeader>
          <CardTitle>Image Specifications</CardTitle>
          <CardDescription>Recommended settings for the best results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Technical Requirements:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • <strong>Format:</strong> PNG, JPG, or GIF
                </li>
                <li>
                  • <strong>Size:</strong> Up to 10MB
                </li>
                <li>
                  • <strong>Dimensions:</strong> 400x400px recommended
                </li>
                <li>
                  • <strong>Aspect Ratio:</strong> 1:1 (square) preferred
                </li>
                <li>
                  • <strong>Resolution:</strong> 72-300 DPI
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Best Practices:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• High contrast and good lighting</li>
                <li>• Face clearly visible and centered</li>
                <li>• Professional or semi-professional attire</li>
                <li>• Clean, simple background</li>
                <li>• Genuine, confident expression</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
