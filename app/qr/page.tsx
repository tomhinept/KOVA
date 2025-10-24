export default function QRPage() {
  return null
}

export async function generateMetadata() {
  return {
    title: "Redirecting...",
    other: {
      "http-equiv": "refresh",
      content: "0;url=https://kovaperformance.typeform.com/workwithus",
    },
  }
}
