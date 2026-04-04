'use client'

import {
  Navbar,
  HeroSection,
  AboutSection,
  ServicesSection,
  PortfolioSection,
  TestimonialsSection,
  ContactSection,
  Footer,
  SitemapSection,
} from '@/components/sections'
import { FAQSection } from '@/components/sections/FAQSection'
import { LazyFloatingWhatsApp, LazyBackToTop } from '@/components/ui/lazy-components'

export function MainPageClient() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <SitemapSection />
      <ContactSection />
      <Footer />
      <LazyFloatingWhatsApp />
      <LazyBackToTop />
    </main>
  )
}
