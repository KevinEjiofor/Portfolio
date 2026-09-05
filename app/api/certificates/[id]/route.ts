import { promises as fs } from "fs"
import path from "path"
import type { NextRequest } from "next/server"
import { CERTIFICATE_FILES } from "@/lib/certificate-files"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * Serves certificate images only to the in-page protected viewer.
 * Direct navigation, <img> hotlinks and cross-site requests are refused, and the
 * response is never cached, so there is no URL a visitor can open or save.
 */
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const file = Object.prototype.hasOwnProperty.call(CERTIFICATE_FILES, params.id)
    ? CERTIFICATE_FILES[params.id]
    : undefined
  if (!file) return new Response("Not found", { status: 404 })

  // The viewer's fetch() sets this header; a browser navigation or <img> tag cannot.
  const fromViewer = req.headers.get("x-certificate-viewer") === "1"
  // Browsers that send Fetch Metadata must report a same-origin, non-navigation request.
  const site = req.headers.get("sec-fetch-site")
  const dest = req.headers.get("sec-fetch-dest")
  const sameOrigin = site === null || site === "same-origin"
  const notNavigation = dest === null || dest === "empty"

  if (!fromViewer || !sameOrigin || !notNavigation) {
    return new Response("Forbidden", { status: 403 })
  }

  const data = await fs.readFile(path.join(process.cwd(), "certificates", file))
  return new Response(new Uint8Array(data), {
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Disposition": "inline",
      "Cache-Control": "private, no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex, nofollow",
    },
  })
}
