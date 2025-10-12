"use client"

import type React from "react"

import { Instagram, Mail } from "lucide-react"
import { useCallback } from "react"

type Props = {
  email?: string
  instagramHandle?: string
  instagramWebUrl?: string
}

export default function ContactLinks({
  email = "team@kovaperformance.com",
  instagramHandle = "@kova.performance",
  instagramWebUrl = "https://www.instagram.com/kova.performance/",
}: Props) {
  const onInstagramClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Prevent any parent navigation
      e.stopPropagation()

      // Try to open Instagram app on mobile; fallback to web
      const ua = typeof navigator !== "undefined" ? navigator.userAgent : ""
      const isMobile = /Android|iPhone|iPad|iPod/i.test(ua)
      if (isMobile) {
        // Attempt deep link; fallback after a short delay
        const deepLink = "instagram://user?username=kova.performance"
        const start = Date.now()
        // Open the app
        window.location.href = deepLink
        // Fallback to web if app not installed
        setTimeout(() => {
          // If the app didn't take over within 700ms, open web profile
          if (Date.now() - start < 1600) {
            window.open(instagramWebUrl, "_blank", "noopener,noreferrer")
          }
        }, 700)
      } else {
        // Desktop: open web profile in new tab
        window.open(instagramWebUrl, "_blank", "noopener,noreferrer")
      }
    },
    [instagramWebUrl],
  )

  return (
    <div className="flex items-center gap-4 md:gap-6 text-gray-500 text-sm px-4 md:px-0">
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-1 hover:text-gray-300 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <Mail size={16} aria-hidden="true" />
        <span className="sr-only">{"Email:"}</span>
        <span>{email}</span>
      </a>

      <a
        href={instagramWebUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-gray-300 transition-colors"
        onClick={onInstagramClick}
      >
        <Instagram size={16} aria-hidden="true" />
        <span className="sr-only">{"Instagram:"}</span>
        <span>{instagramHandle}</span>
      </a>
    </div>
  )
}
