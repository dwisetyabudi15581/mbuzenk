import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MBUZENK ZETRO - Spesialis Las & Renovasi Magetan",
  description: "Spesialis las dan renovasi terpercaya di Magetan. Melayani kanopi, pagar, tangga besi, konstruksi baja, dan renovasi rumah. Pengalaman 19+ tahun dengan 1000+ proyek selesai.",
  keywords: ["las magetan", "kanopi", "pagar besi", "tangga besi", "renovasi rumah", "konstruksi baja", "renovasi magetan", "MBUZENK ZETRO"],
  authors: [{ name: "MBUZENK ZETRO" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "MBUZENK ZETRO - Spesialis Las & Renovasi",
    description: "Spesialis las dan renovasi terpercaya dengan pengalaman 19+ tahun. Kanopi, pagar, tangga besi, konstruksi baja, renovasi rumah.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
