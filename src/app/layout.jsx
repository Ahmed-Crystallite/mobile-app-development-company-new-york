import dynamic from "next/dynamic"
import "bootstrap/dist/css/bootstrap.min.css"
import ConditionalLayout from "@/src/app/ConditionalLayout"
// const Scripts = dynamic(() => import("@/src/app/Scripts"))

//===== Meta Data =====
export const metadata = {
  metadataBase: new URL("http://appdevelopmentcompanynewyork.com/"),
  //===== Meta Tags =====
  title: "Mobile App Development Company in New York | Expert App Developers",
  description:
    "Looking for a mobile app development company in New York? Our expert team crafts high-performance, user-friendly iOS & Android apps tailored to your business needs.",
  //===== OG Tags =====
  openGraph: {
    title: "Mobile App Development Company in New York | Expert App Developers",
    description:
      "Looking for a mobile app development company in New York? Our expert team crafts high-performance, user-friendly iOS & Android apps tailored to your business needs.",
    url: "/",
    siteName: "BitsWits",
    locale: "en_US",
    type: "website",
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== GEO Tags =====

  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": [
        "Qt-497Wghx553U3hqDw6wV8NvilpVp8WK4_5W3rf_a0",
      ],
      "dmca-site-verification": ["Z05ObW9WMWo4VTlQL0VpdEJuTzU0UT090"],
      "msvalidate.01": ["A21040CE08685574268E4A1F724E0FFD"],
    },
  },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/x-icon" />
      {/* <Scripts /> */}
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
