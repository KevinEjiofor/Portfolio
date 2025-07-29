"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar, CheckCircle, Star } from "lucide-react"
import Image from "next/image"

export function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      issueDate: "March 2023",
      expiryDate: "March 2026",
      credentialId: "AWS-PSA-12345",
      verificationUrl: "#",
      logo: "/placeholder.svg?height=60&width=60&text=AWS",
      description: "Advanced certification demonstrating expertise in designing distributed systems on AWS platform.",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
      status: "Active",
      level: "Professional",
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      issueDate: "January 2023",
      expiryDate: "January 2025",
      credentialId: "GCP-PCA-67890",
      verificationUrl: "#",
      logo: "/placeholder.svg?height=60&width=60&text=GCP",
      description:
        "Professional-level certification for designing and managing robust, secure, scalable cloud solutions.",
      skills: ["GCP Services", "Cloud Migration", "DevOps", "Kubernetes"],
      status: "Active",
      level: "Professional",
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      issueDate: "September 2022",
      expiryDate: "September 2025",
      credentialId: "CKA-54321",
      verificationUrl: "#",
      logo: "/placeholder.svg?height=60&width=60&text=K8s",
      description: "Hands-on certification demonstrating skills in Kubernetes administration and troubleshooting.",
      skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Troubleshooting"],
      status: "Active",
      level: "Professional",
    },
    {
      title: "Microsoft Azure Developer Associate",
      issuer: "Microsoft",
      issueDate: "June 2022",
      expiryDate: "June 2024",
      credentialId: "AZ-204-98765",
      verificationUrl: "#",
      logo: "/placeholder.svg?height=60&width=60&text=Azure",
      description: "Certification validating skills in developing cloud solutions using Microsoft Azure services.",
      skills: ["Azure Services", "API Development", "Monitoring", "Security"],
      status: "Expiring Soon",
      level: "Associate",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "Expiring Soon":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Professional":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
      case "Associate":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
      case "Expert":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const activeCertifications = certifications.filter((cert) => cert.status === "Active")
  const totalCertifications = certifications.length

  return (
    <section
      id="certifications"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4">
            Professional Certifications
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Credentials & Achievements
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Industry-recognized certifications that validate my expertise in modern technologies and best practices
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="border-gray-200 dark:border-gray-700 text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {totalCertifications}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total Certifications</div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700 text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {activeCertifications.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Active Certifications</div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700 text-center sm:col-span-1 col-span-1">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {certifications.filter((cert) => cert.level === "Professional").length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Professional Level</div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow group">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Certification Logo */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={`${cert.issuer} logo`}
                      width={32}
                      height={32}
                      className="object-contain sm:w-10 sm:h-10"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <CardTitle className="text-base sm:text-lg text-gray-900 dark:text-white leading-tight pr-2">
                        {cert.title}
                      </CardTitle>
                      <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                        <Badge className={getLevelColor(cert.level)} variant="secondary">
                          <span className="text-xs">{cert.level}</span>
                        </Badge>
                        <Badge className={getStatusColor(cert.status)} variant="secondary">
                          <span className="text-xs">{cert.status}</span>
                        </Badge>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {cert.issuer}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Issued: {cert.issueDate}</span>
                      </div>
                      {cert.expiryDate !== "Never" && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Expires: {cert.expiryDate}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                    Key Skills Validated
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Credential Info */}
                <div className="pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Credential ID:</span> {cert.credentialId}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 bg-transparent w-fit"
                      asChild
                    >
                      <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Verify
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto">
              I'm committed to staying current with the latest technologies and industry best practices. Currently
              pursuing additional certifications in AI/ML and advanced cloud architectures.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 bg-transparent w-full sm:w-auto"
              >
                View All Credentials
              </Button>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
