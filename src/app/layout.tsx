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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
