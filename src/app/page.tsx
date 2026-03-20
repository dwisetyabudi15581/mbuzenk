import {
  Navbar,
  HeroSection,
  AboutSection,
  ServicesSection,
  PortfolioSection,
  TestimonialsSection,
  ContactSection,
  Footer,
} from '@/components/sections'

export default function MainPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
