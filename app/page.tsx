import Image from "next/image"
import { Instagram, Mail } from "lucide-react"

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center p-4 relative">
      <div className="text-center space-y-12 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="relative">
          <Image
            src="/images/kova-logo-performance.png"
            alt="KOVA Performance Logo"
            width={1280}
            height={720}
            className="mx-auto drop-shadow-2xl w-[280px] h-auto md:w-[560px] block"
            priority
          />
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide leading-none mt-1 md:mt-2">
            {"Lean Athletes. Crafted by KOVA."}
          </p>
        </div>

        {/* Coming Soon Text */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wider">COMING SOON</h1>
        </div>

        {/* Optional animated dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-6 text-gray-500 text-sm">
          <a href="mailto:team@kova.fit" className="flex items-center space-x-1 hover:text-gray-300 transition-colors">
            <Mail size={16} />
            <p>team@kova.fit</p>
          </a>
          <a
            href="https://instagram.com/kova.performance"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
          >
            <Instagram size={16} />
            <p>@kova.performance</p>
          </a>
        </div>
      </div>
    </div>
  )
}
