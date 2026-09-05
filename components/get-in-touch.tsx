"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Send, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { SocialLinks } from "@/components/brand-icons"

const CONTACT_EMAIL = "ejioforkelvin@gmail.com"

export function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    // Honeypot: hidden from people, filled in by bots.
    company: "",
  })

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "sending") return
    setStatus("sending")
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus("error")
        setError(
          data?.error === "not_configured"
            ? `The form isn't connected to a mail service yet. Please email me directly at ${CONTACT_EMAIL}.`
            : (data?.error ?? "Something went wrong. Please try again or email me directly."),
        )
        return
      }

      setStatus("sent")
      setFormData({ name: "", email: "", subject: "", message: "", company: "" })
    } catch {
      setStatus("error")
      setError(`Could not reach the server. Please email me directly at ${CONTACT_EMAIL}.`)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ejioforkelvin@gmail.com",
      href: "mailto:ejioforkelvin@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+2347037455194",
      href: "tel:+2347037455194",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos State, Nigeria",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Let's Work Together
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Feel free to reach out through any of the channels below. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs sm:text-sm"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Connect With Me</h4>
              <SocialLinks
                className="flex gap-3 sm:gap-4"
                iconClassName="w-5 h-5 sm:w-6 sm:h-6"
                linkClassName="inline-flex w-11 h-11 sm:w-12 sm:h-12 items-center justify-center rounded-md border border-gray-300 text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
              />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-gray-200 dark:border-neutral-800">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-gray-900 dark:text-white text-lg sm:text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="text-sm"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={4}
                    className="text-sm resize-none"
                    required
                  />
                </div>

                {/* Honeypot. Hidden from people and from screen readers; bots fill it in. */}
                <div className="hidden" aria-hidden>
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <div aria-live="polite">
                  {status === "sent" && (
                    <p className="flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-3 text-xs text-green-800 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-300 sm:text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      Thanks — your message is on its way. I'll reply to the address you gave.
                    </p>
                  )}
                  {status === "error" && error && (
                    <p className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300 sm:text-sm">
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      {error}
                    </p>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
