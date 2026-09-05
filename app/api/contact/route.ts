import type { NextRequest } from "next/server"
import { site } from "@/lib/site"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const MAX = { name: 100, email: 254, subject: 150, message: 5000 }
// Simple in-memory throttle. Resets on redeploy, which is fine for a portfolio form.
const RATE_LIMIT = { windowMs: 60 * 60 * 1000, max: 5 }
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs)
  if (recent.length >= RATE_LIMIT.max) return true
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return false
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many messages from this address. Please try again later." },
      { status: 429 },
    )
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 })
  }

  // Honeypot: bots fill hidden fields, people never see them.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return Response.json({ ok: true })
  }

  const field = (key: keyof typeof MAX) => (typeof body[key] === "string" ? (body[key] as string).trim() : "")
  const name = field("name")
  const email = field("email")
  const subject = field("subject")
  const message = field("message")

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email and message are required." }, { status: 400 })
  }
  if (!isEmail(email)) {
    return Response.json({ error: "That email address does not look valid." }, { status: 400 })
  }
  for (const [key, limit] of Object.entries(MAX) as [keyof typeof MAX, number][]) {
    if (field(key).length > limit) {
      return Response.json({ error: `The ${key} field is too long.` }, { status: 400 })
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !from) {
    // Deployment is not finished. Say so plainly instead of pretending the mail sent.
    console.error("Contact form: RESEND_API_KEY or CONTACT_FROM_EMAIL is not set.")
    return Response.json({ error: "not_configured" }, { status: 503 })
  }

  const heading = subject || "New portfolio message"
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `Portfolio <${from}>`,
      to: [site.email],
      reply_to: email,
      subject: `[Portfolio] ${heading}`,
      text: `From: ${name} <${email}>\nSubject: ${heading}\n\n${message}`,
      html:
        `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>` +
        `<p><strong>Subject:</strong> ${escapeHtml(heading)}</p><hr>` +
        `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  })

  if (!res.ok) {
    console.error("Resend rejected the message:", res.status, await res.text().catch(() => ""))
    return Response.json({ error: "The message could not be sent. Please email me directly." }, { status: 502 })
  }

  return Response.json({ ok: true })
}
