import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#f97316",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mbuzenkzetro.com'),
  title: "MBUZENK ZETRO - Bengkel Las & Renovasi Rumah Magetan | Spesialis Konstruksi Baja",
  description: "Bengkel las dan jasa renovasi rumah terpercaya di Magetan. Spesialis kanopi, pagar besi, tangga besi, konstruksi baja, kitchen set, dan renovasi rumah lengkap. Pengalaman 19+ tahun, 1000+ proyek selesai. Melayani Magetan, Madiun, Ngawi, Ponorogo.",
  keywords: [
    // Keywords utama
    "bengkel las",
    "renovasi rumah",
    "las magetan",
    "renovasi magetan",
    // Keywords spesifik layanan
    "kanopi minimalis",
    "pagar besi",
    "tangga besi",
    "konstruksi baja",
    "kitchen set",
    "renovasi kamar mandi",
    "teralis jendela",
    "pergola",
    // Keywords lokasi
    "las madiun",
    "las ngawi",
    "las ponorogo",
    "renovasi madiun",
    "renovasi ngawi",
    // Keywords tambahan
    "tukang las magetan",
    "jasa las magetan",
    "bengkel las magetan",
    "spesialis las",
    "kontraktor renovasi",
    "MBUZENK ZETRO",
  ],
  authors: [{ name: "MBUZENK ZETRO" }],
  creator: "MBUZENK ZETRO",
  publisher: "MBUZENK ZETRO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "MBUZENK ZETRO - Bengkel Las & Renovasi Rumah Magetan",
    description: "Bengkel las dan jasa renovasi rumah terpercaya. Spesialis kanopi, pagar besi, tangga besi, konstruksi baja. Pengalaman 19+ tahun, 1000+ proyek selesai.",
    type: "website",
    locale: "id_ID",
    siteName: "MBUZENK ZETRO",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "MBUZENK ZETRO - Bengkel Las & Renovasi Magetan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBUZENK ZETRO - Bengkel Las & Renovasi Rumah Magetan",
    description: "Bengkel las dan jasa renovasi rumah terpercaya. Spesialis kanopi, pagar, tangga besi, konstruksi baja.",
    images: ["/hero-image.png"],
  },
  alternates: {
    canonical: "https://mbuzenkzetro.com",
  },
  verification: {
    google: "-kfDC-67NO6XdQIDHFe7P_Lo7iJsdnQn17Zg9U-lDYQ",
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mbuzenkzetro.com",
  "name": "MBUZENK ZETRO",
  "alternateName": "Bengkel Las MBUZENK ZETRO",
  "description": "Bengkel las dan jasa renovasi rumah terpercaya di Magetan. Spesialis kanopi, pagar besi, tangga besi, konstruksi baja, kitchen set, dan renovasi rumah lengkap.",
  "url": "https://mbuzenkzetro.com",
  "telephone": "+6285738602255",
  "email": "info@mbuzenkzetro.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "CFR3+5JQ, Setro, Tebon, Kec. Bar.",
    "addressLocality": "Magetan",
    "addressRegion": "Jawa Timur",
    "postalCode": "63395",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-7.6516",
    "longitude": "111.3619"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "image": "https://mbuzenkzetro.com/hero-image.png",
  "logo": "https://mbuzenkzetro.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/mbuzenk.zetro",
    "https://www.tiktok.com/@mbah.tro.mbuzenk"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Layanan Bengkel Las & Renovasi",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kanopi Minimalis",
          "description": "Pembuatan kanopi carport, kanopi teras, kanopiminimalis berbagai model"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pagar Besi",
          "description": "Pembuatan pagar besi minimalis, pagar BRC, pagar custom"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tangga Besi",
          "description": "Pembuatan tangga besi, tangga putar, tangga minimalis"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Konstruksi Baja",
          "description": "Konstruksi baja ringan, rangka atap, mezzanine"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Renovasi Rumah",
          "description": "Jasa renovasi rumah lengkap, renovasi kamar mandi, dapur, atap"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "100",
    "bestRating": "5"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
