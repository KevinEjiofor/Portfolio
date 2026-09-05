"use client"

import { useState } from "react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Eye,
  ExternalLink,
  Flag,
  GraduationCap,
  Rocket,
  ShieldCheck,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ProtectedCertificateViewer } from "@/components/protected-certificate-viewer"

type Category = "Academic" | "National Service" | "Professional" | "Course"

interface Certification {
  /** Key of the image served by /api/certificates/[id] (see lib/certificate-files.ts). */
  id: string
  title: string
  issuer: string
  date: string
  description: string
  category: Category
  icon: LucideIcon
  credentialId?: string
  verificationUrl?: string
  skills?: string[]
}

const certifications: Certification[] = [
  {
    id: "hnd",
    title: "Higher National Diploma in Computer Science",
    issuer: "Abia State Polytechnic, Aba",
    date: "September 2024",
    description:
      "Awarded at Upper Credit level by the Academic Board of the Polytechnic after completing the approved course of study and passing the prescribed examinations in August 2022.",
    category: "Academic",
    icon: GraduationCap,
    credentialId: "024721",
    skills: ["Computer Science", "Software Development", "Databases", "Data Structures"],
  },
  {
    id: "nd",
    title: "National Diploma in Computer Science",
    issuer: "Abia State Polytechnic, Aba",
    date: "September 2024",
    description:
      "Awarded at Upper Credit level by the Academic Board of the Polytechnic after completing the approved course of study and passing the prescribed examinations in August 2019.",
    category: "Academic",
    icon: GraduationCap,
    credentialId: "023858",
    skills: ["Computer Science", "Programming Fundamentals", "Databases"],
  },
  {
    id: "nysc",
    title: "Certificate of National Service",
    issuer: "National Youth Service Corps (NYSC), Nigeria",
    date: "April 2026",
    description:
      "One year of national service satisfactorily completed from 23 April 2025 to 22 April 2026, in accordance with Section 11 of the National Youth Service Corps Act. Course of study: Computer Science.",
    category: "National Service",
    icon: Flag,
    credentialId: "A 006063960",
  },
  {
    id: "henley",
    title: "Business Management Module",
    issuer: "Henley Business School, University of Reading · Semicolon Africa",
    date: "30 August 2024",
    description:
      "Joint Henley Business School / Semicolon business management module, certified by the Vice-Dean of Henley Africa and the CEO of Semicolon Africa.",
    category: "Professional",
    icon: Briefcase,
    skills: ["Business Management", "Strategy", "Entrepreneurship"],
  },
  {
    id: "semicolon",
    title: "Techpreneurship Program — Certificate of Completion",
    issuer: "Semicolon Africa",
    date: "30 August 2024",
    description:
      "Successfully completed Semicolon's one-year techpreneurship program, combining intensive software engineering training with entrepreneurship and product development.",
    category: "Professional",
    icon: Rocket,
    skills: ["Software Engineering", "Techpreneurship", "Product Development"],
  },
  {
    id: "udemy-react",
    title: "Simple React App from Scratch",
    issuer: "Udemy · Pierre-Henry Soria",
    date: "18 September 2024",
    description: "Two-hour hands-on course building a React application from the ground up.",
    category: "Course",
    icon: BookOpen,
    credentialId: "UC-a6bb1587-e6dc-453c-bdd6-18b55633a1c6",
    verificationUrl: "https://www.udemy.com/certificate/UC-a6bb1587-e6dc-453c-bdd6-18b55633a1c6/",
    skills: ["React", "JavaScript", "Front-end"],
  },
  {
    id: "udemy-powershell-regex",
    title: "PowerShell Regular Expressions: Regex Master Class",
    issuer: "Udemy · Luxmi Narayan",
    date: "15 August 2024",
    description: "Course on writing and applying regular expressions in PowerShell for parsing, matching and automation.",
    category: "Course",
    icon: BookOpen,
    credentialId: "UC-9c41daf7-0c69-4891-bc39-12251e63484d",
    verificationUrl: "https://www.udemy.com/certificate/UC-9c41daf7-0c69-4891-bc39-12251e63484d/",
    skills: ["PowerShell", "Regular Expressions", "Scripting"],
  },
  {
    id: "udemy-monday",
    title: "Mastering High-Level & Low-Level Boards in monday.com",
    issuer: "Udemy · Tara Horn",
    date: "16 August 2024",
    description: "Course on structuring high-level and low-level boards in monday.com for project tracking and team workflows.",
    category: "Course",
    icon: BookOpen,
    credentialId: "UC-547d507c-350c-463a-90b3-27cfc03facf5",
    verificationUrl: "https://www.udemy.com/certificate/UC-547d507c-350c-463a-90b3-27cfc03facf5/",
    skills: ["monday.com", "Project Management", "Workflow Design"],
  },
]

const categoryStyles: Record<Category, { badge: string; tile: string }> = {
  Academic: {
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    tile: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
  },
  "National Service": {
    badge: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    tile: "bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400",
  },
  Professional: {
    badge: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    tile: "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",
  },
  Course: {
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    tile: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
  },
}

export function CertificationsSection() {
  const [active, setActive] = useState<Certification | null>(null)

  const totalCertifications = certifications.length
  const formalCredentials = certifications.filter((c) => c.category !== "Course").length
  const courses = certifications.filter((c) => c.category === "Course").length

  return (
    <section
      id="certifications"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-950/60"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4">
            Certifications
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Credentials & Achievements
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic qualifications, professional programs and courses I have completed. Each certificate can be
            viewed in a watermarked, view-only viewer.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="border-gray-200 dark:border-neutral-800 text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {totalCertifications}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total Credentials</div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-neutral-800 text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {formalCredentials}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Academic & Professional</div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-neutral-800 text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{courses}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Online Courses</div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {certifications.map((cert) => {
            const Icon = cert.icon
            const styles = categoryStyles[cert.category]
            return (
              <Card
                key={cert.id}
                className="border-gray-200 dark:border-neutral-800 hover:shadow-lg transition-shadow flex flex-col"
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${styles.tile}`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <CardTitle className="text-base sm:text-lg text-gray-900 dark:text-white leading-tight pr-2">
                          {cert.title}
                        </CardTitle>
                        <Badge className={`${styles.badge} flex-shrink-0 w-fit`} variant="secondary">
                          <span className="text-xs">{cert.category}</span>
                        </Badge>
                      </div>

                      <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {cert.issuer}
                      </p>

                      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Issued: {cert.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 px-2 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-200 dark:border-neutral-800">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="text-xs text-gray-500 dark:text-gray-400 min-w-0 truncate">
                        {cert.credentialId ? (
                          <>
                            <span className="font-medium">Credential ID:</span> {cert.credentialId}
                          </>
                        ) : (
                          <span className="italic">Certificate on file</span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 flex-shrink-0">
                        <Button
                          size="sm"
                          className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => setActive(cert)}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View certificate
                        </Button>
                        {cert.verificationUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 bg-transparent"
                            asChild
                          >
                            <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Verify
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-8 sm:mb-12 lg:mb-16">
          <ShieldCheck className="w-3.5 h-3.5" />
          Certificates open in a watermarked, view-only viewer. Copies are not available for download.
        </p>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white dark:bg-neutral-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-neutral-800">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto">
              I'm committed to staying current with the latest technologies and industry best practices, and I keep
              adding to these credentials as I grow.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Protected certificate viewer */}
      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-[min(96vw,1100px)] gap-3 p-4 sm:p-6">
          {active && (
            <>
              <DialogHeader className="pr-8 text-left">
                <DialogTitle className="text-base sm:text-lg">{active.title}</DialogTitle>
                <DialogDescription>
                  {active.issuer} · {active.date}
                </DialogDescription>
              </DialogHeader>
              <ProtectedCertificateViewer id={active.id} title={active.title} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
