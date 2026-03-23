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
import { FloatingWhatsApp } from '@/components/ui/floating-whatsapp'
import { BackToTop } from '@/components/ui/back-to-top'

export default function MainPage() {
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
      <FloatingWhatsApp />
      <BackToTop />
    </main>
  )
}
