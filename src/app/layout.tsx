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
  metadataBase: new URL('https://www.mbuzenkzetro.com'),
  title: "Bengkel Las Magetan | Renovasi Rumah & Konstruksi Baja - MBUZENK ZETRO",
  description: "Bengkel las terpercaya sejak 2005. Spesialis kanopi minimalis, pagar besi, tangga besi, teralis, konstruksi baja, renovasi rumah. 1000+ proyek selesai. Melayani Jawa Timur & Indonesia. Hubungi: 0857-3860-2255.",
  keywords: [
    // Keywords utama - high volume
    "bengkel las",
    "bengkel las magetan",
    "las magetan",
    "renovasi rumah",
    "renovasi rumah magetan",
    "tukang las",
    "tukang las magetan",
    // Keywords layanan las
    "kanopi minimalis",
    "kanopi carport",
    "kanopi baja ringan",
    "pagar besi",
    "pagar minimalis",
    "pagar besi minimalis",
    "tangga besi",
    "tangga spiral",
    "teralis jendela",
    "teralis",
    "konstruksi baja",
    "baja ringan",
    "pergola",
    // Keywords lokasi - Jawa Timur
    "bengkel las jawa timur",
    "bengkel las madiun",
    "bengkel las ngawi",
    "bengkel las ponorogo",
    "bengkel las surabaya",
    "las madiun",
    "las ngawi",
    "las ponorogo",
    "renovasi rumah jawa timur",
    "renovasi madiun",
    "renovasi ngawi",
    "renovasi ponorogo",
    "kanopi minimalis jawa timur",
    "kanopi magetan",
    "kanopi madiun",
    "kanopi ngawi",
    "pagar besi jawa timur",
    // Keywords layanan renovasi
    "renovasi kamar mandi",
    "kitchen set",
    "kitchen set magetan",
    "renovasi dapur",
    "renovasi atap",
    "renovasi total rumah",
    // Keywords jangkauan luas
    "bengkel las terpercaya",
    "bengkel las profesional",
    "jasa las besi",
    "jasa las terpercaya",
    "spesialis las",
    "kontraktor renovasi",
    "jasa renovasi rumah terpercaya",
    // Keywords long-tail
    "jasa las besi magetan",
    "pembuatan kanopi",
    "pembuatan pagar besi",
    "toko besi magetan",
    "harga kanopi minimalis",
    "harga pagar besi",
    "spesialis las magetan",
    "kontraktor renovasi magetan",
    "harga teralis jendela",
    "harga tangga besi",
    // Brand
    "MBUZENK ZETRO",
    "mbuzenkzetro",
    "mbuzenk zetro magetan",
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
    title: "Bengkel Las Magetan | Renovasi Rumah & Konstruksi Baja - MBUZENK ZETRO",
    description: "Bengkel las Magetan terpercaya sejak 2005. Jasa renovasi rumah, kanopi minimalis, pagar besi, tangga besi, konstruksi baja. 1000+ proyek selesai. Gratis survei! Hubungi: 0857-3860-2255.",
    type: "website",
    locale: "id_ID",
    siteName: "MBUZENK ZETRO - Bengkel Las Magetan",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Bengkel Las MBUZENK ZETRO Magetan - Spesialis Kanopi, Pagar Besi, Renovasi Rumah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengkel Las Magetan | Renovasi Rumah - MBUZENK ZETRO",
    description: "Bengkel las terpercaya sejak 2005. Kanopi, pagar besi, tangga, konstruksi baja, renovasi rumah. 1000+ proyek selesai. Gratis survei!",
    images: ["/hero-image.png"],
  },
  alternates: {
    canonical: "https://www.mbuzenkzetro.com",
  },
  verification: {
    google: "-kfDC-67NO6XdQIDHFe7P_Lo7iJsdnQn17Zg9U-lDYQ",
  },
};

// WebSite Schema for Sitelinks Search Box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MBUZENK ZETRO",
  "url": "https://www.mbuzenkzetro.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.mbuzenkzetro.com/artikel?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MBUZENK ZETRO",
  "url": "https://www.mbuzenkzetro.com",
  "logo": "https://www.mbuzenkzetro.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+6285738602255",
    "contactType": "customer service",
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "availableLanguage": "Indonesian"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Jawa Timur"
    },
    {
      "@type": "Country",
      "name": "Indonesia"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/mbuzenk.zetro",
    "https://www.tiktok.com/@mbah.tro.mbuzenk"
  ]
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.mbuzenkzetro.com/#business",
  "name": "MBUZENK ZETRO",
  "alternateName": "Bengkel Las MBUZENK ZETRO",
  "description": "Bengkel las dan jasa renovasi rumah terpercaya sejak 2005. Spesialis kanopi minimalis, pagar besi, tangga besi, teralis jendela, konstruksi baja, kitchen set, dan renovasi rumah lengkap. Melayani seluruh Jawa Timur dan Indonesia.",
  "url": "https://www.mbuzenkzetro.com",
  "telephone": "+6285738602255",
  "email": "mbuzenkzetro@gmail.com",
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
  "hasMap": "https://maps.google.com/?q=-7.6516,111.3619",
  "areaServed": [
    {
      "@type": "City",
      "name": "Magetan"
    },
    {
      "@type": "City",
      "name": "Madiun"
    },
    {
      "@type": "City",
      "name": "Ngawi"
    },
    {
      "@type": "City",
      "name": "Ponorogo"
    },
    {
      "@type": "City",
      "name": "Surabaya"
    },
    {
      "@type": "State",
      "name": "Jawa Timur"
    },
    {
      "@type": "Country",
      "name": "Indonesia"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "image": "https://www.mbuzenkzetro.com/hero-image.png",
  "logo": "https://www.mbuzenkzetro.com/logo.png",
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
          "description": "Pembuatan kanopi carport, kanopi teras, kanopi minimalis berbagai model"
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

// FAQ Schema for Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa lama waktu pengerjaan kanopi minimalis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Waktu pengerjaan kanopi minimalis biasanya 3-7 hari kerja tergantung ukuran dan kompleksitas desain. Untuk kanopi carport standar (3x5 meter), pengerjaan membutuhkan waktu sekitar 4-5 hari kerja termasuk pengukuran, fabrikasi, dan instalasi."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah ada garansi untuk hasil pekerjaan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, kami memberikan garansi untuk setiap pekerjaan. Garansi konstruksi besi hingga 2 tahun, garansi finishing cat 6 bulan, dan garansi service gratis seumur hidup untuk pelanggan setia."
      }
    },
    {
      "@type": "Question",
      "name": "Apa saja layanan renovasi rumah yang ditawarkan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kami menyediakan layanan renovasi rumah lengkap meliputi: renovasi atap, renovasi kamar mandi, renovasi dapur, pembuatan kitchen set, pergola, teralis, tangga besi, dan konstruksi baja ringan."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah melayani area di luar Magetan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, kami melayani seluruh Jawa Timur dan Indonesia. Area utama: Magetan, Madiun, Ngawi, Ponorogo, Surabaya, Malang, Kediri, Jember, dan kota lainnya di Indonesia. Untuk lokasi di luar radius 50km, akan ada biaya transportasi yang diinformasikan saat survei gratis."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa biaya survei lokasi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Survei lokasi GRATIS untuk area Magetan dan sekitarnya. Tim kami akan datang untuk pengukuran dan konsultasi langsung di lokasi Anda."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana sistem pembayarannya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sistem pembayaran kami fleksibel: DP 50% untuk memulai pengerjaan, pelunasan setelah pekerjaan selesai dan disetujui. Kami juga menerima pembayaran bertahap untuk proyek besar."
      }
    }
  ]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
