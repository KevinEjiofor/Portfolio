"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AlertTriangle, EyeOff, Loader2, ShieldCheck } from "lucide-react"

const WATERMARK = "Ejiofor E. Kevin · Portfolio · View only"
const FLASH_MS = 1800
const MAX_WIDTH = 1600

type Status = "loading" | "ready" | "error"

interface ProtectedCertificateViewerProps {
  id: string
  title: string
}

/**
 * View-only certificate display.
 *
 * The image is fetched through the protected API route and painted onto a canvas,
 * so there is no <img> URL in the DOM to save, drag or open in a new tab. A diagonal
 * watermark is baked into the pixels, the canvas is hidden whenever the window loses
 * focus or a print/save/screenshot shortcut is pressed, and the block is excluded
 * from printing. These measures deter casual copying; no web page can stop a camera
 * or an OS-level screen capture entirely.
 */
export function ProtectedCertificateViewer({ id, title }: ProtectedCertificateViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const flashTimer = useRef<number | null>(null)
  const [status, setStatus] = useState<Status>("loading")
  const [hidden, setHidden] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)

  const conceal = useCallback((message: string) => {
    setHidden(true)
    setNotice(message)
  }, [])

  const reveal = useCallback(() => {
    setHidden(false)
    setNotice(null)
  }, [])

  const flash = useCallback(
    (message: string) => {
      conceal(message)
      if (flashTimer.current) window.clearTimeout(flashTimer.current)
      flashTimer.current = window.setTimeout(() => {
        flashTimer.current = null
        if (document.hasFocus() && !document.hidden) reveal()
      }, FLASH_MS)
    },
    [conceal, reveal],
  )

  // Load the certificate through the protected route and draw it (with watermark) on the canvas.
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let cancelled = false
    let objectUrl: string | null = null
    setStatus("loading")

    const run = async () => {
      try {
        const res = await fetch(`/api/certificates/${encodeURIComponent(id)}`, {
          headers: { "X-Certificate-Viewer": "1" },
          cache: "no-store",
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const blob = await res.blob()
        objectUrl = URL.createObjectURL(blob)
        const img = await loadImage(objectUrl)
        if (cancelled) return

        const scale = Math.min(1, MAX_WIDTH / img.naturalWidth)
        canvas.width = Math.round(img.naturalWidth * scale)
        canvas.height = Math.round(img.naturalHeight * scale)
        const ctx = canvas.getContext("2d")
        if (!ctx) throw new Error("Canvas unavailable")
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        drawWatermark(ctx, canvas.width, canvas.height)
        setStatus("ready")
      } catch {
        if (!cancelled) setStatus("error")
      } finally {
        if (objectUrl) URL.revokeObjectURL(objectUrl)
      }
    }
    run()

    return () => {
      cancelled = true
    }
  }, [id])

  // Hide the certificate whenever the page is not the active, visible, on-screen document.
  useEffect(() => {
    const onBlur = () => conceal("Hidden while this window is not active.")
    const onFocus = () => {
      if (!document.hidden && flashTimer.current === null) reveal()
    }
    const onVisibility = () => (document.hidden ? onBlur() : onFocus())
    const onBeforePrint = () => conceal("Printing is disabled for certificates.")
    const onAfterPrint = () => reveal()

    const onKeyDown = (e: KeyboardEvent) => {
      const mod = e.ctrlKey || e.metaKey
      const key = e.key.toLowerCase()
      const blocked =
        e.key === "PrintScreen" ||
        (mod && ["p", "s", "u"].includes(key)) ||
        (mod && e.shiftKey && ["3", "4", "5", "s"].includes(key))
      if (blocked) {
        e.preventDefault()
        flash("Saving, printing and screenshots are disabled for certificates.")
      }
    }
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        navigator.clipboard?.writeText("").catch(() => {})
        flash("Screenshots are disabled for certificates.")
      }
    }

    window.addEventListener("blur", onBlur)
    window.addEventListener("focus", onFocus)
    document.addEventListener("visibilitychange", onVisibility)
    window.addEventListener("beforeprint", onBeforePrint)
    window.addEventListener("afterprint", onAfterPrint)
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)
    if (!document.hasFocus()) onBlur()

    return () => {
      window.removeEventListener("blur", onBlur)
      window.removeEventListener("focus", onFocus)
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("beforeprint", onBeforePrint)
      window.removeEventListener("afterprint", onAfterPrint)
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
      if (flashTimer.current) window.clearTimeout(flashTimer.current)
    }
  }, [conceal, reveal, flash])

  const showCanvas = status === "ready" && !hidden

  return (
    <div
      className="cert-protected relative select-none"
      style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none" }}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
    >
      <div className="relative flex min-h-[16rem] items-center justify-center overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={`${title} (view-only)`}
          className={`pointer-events-none block h-auto max-h-[75vh] w-auto max-w-full transition-opacity duration-150 ${
            showCanvas ? "opacity-100" : "invisible opacity-0"
          }`}
        />

        {status === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Loading certificate…
          </div>
        )}

        {status === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center text-sm text-gray-600 dark:text-gray-300">
            <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            <span>The certificate could not be loaded. Please try again.</span>
          </div>
        )}

        {status === "ready" && hidden && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-neutral-100 px-6 text-center text-sm text-gray-600 dark:bg-neutral-900 dark:text-gray-300">
            <EyeOff className="h-6 w-6" />
            <span>{notice ?? "Certificate hidden."}</span>
          </div>
        )}
      </div>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-gray-500 dark:text-gray-400">
        <ShieldCheck className="h-3.5 w-3.5 flex-shrink-0" />
        Watermarked, view-only copy. Downloading, printing and saving are disabled.
      </p>
    </div>
  )
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new window.Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error("Image decode failed"))
    img.src = src
  })
}

function drawWatermark(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const fontSize = Math.max(18, Math.round(width / 40))
  ctx.save()
  ctx.globalAlpha = 0.14
  ctx.fillStyle = "#111111"
  ctx.font = `600 ${fontSize}px system-ui, -apple-system, "Segoe UI", sans-serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.translate(width / 2, height / 2)
  ctx.rotate(-Math.PI / 6)

  const stepX = fontSize * 16
  const stepY = fontSize * 5
  const span = Math.max(width, height)
  let row = 0
  for (let y = -span; y <= span; y += stepY, row++) {
    const offset = row % 2 === 0 ? 0 : stepX / 2
    for (let x = -span; x <= span; x += stepX) {
      ctx.fillText(WATERMARK, x + offset, y)
    }
  }
  ctx.restore()
}
