import Image from "next/image"
import ContactLinks from "@/components/contact-links"

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <main className="w-full max-w-2xl flex flex-col items-center text-center gap-4 md:gap-6">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/kova-logo-performance.png"
            alt="KOVA Performance Logo"
            width={1280}
            height={720}
            className="mx-auto drop-shadow-2xl w-[280px] md:w-[560px] h-auto"
            priority
          />
          <p className="text-gray-300 text-base md:text-lg font-light tracking-wide leading-none mt-2">
            {"Lean Athletes. Crafted by KOVA."}
          </p>
        </div>

        {/* Coming Soon */}
        <h1 className="text-lg md:text-2xl font-bold text-gray-300 tracking-wider">COMING SOON</h1>

        {/* Animated dots */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>

        {/* Contact */}
        <ContactLinks />
      </main>
    </div>
  )
}
