"use client"

import { useEffect } from "react"

export default function QRRedirect() {
  useEffect(() => {
    window.location.href = "https://kovaperformance.typeform.com/workwithus"
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="text-center">
        <div className="animate-pulse text-gray-400">Redirecting...</div>
      </div>
    </div>
  )
}
