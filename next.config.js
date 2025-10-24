/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/qr",
        destination: "https://kovaperformance.typeform.com/workwithus",
        permanent: false,
        caseSensitive: false,
      },
      {
        source: "/QR",
        destination: "https://kovaperformance.typeform.com/workwithus",
        permanent: false,
        caseSensitive: false,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
