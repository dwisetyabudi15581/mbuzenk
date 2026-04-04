'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Award, MessageCircle, Hammer } from 'lucide-react'
import { CONFIG, openWhatsApp, scrollToSection } from '@/lib/config'

export function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-16 sm:pt-20">
      {/* Background Image - Optimized with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.webp"
          alt="Bengkel Las MBUZENK ZETRO - Spesialis Kanopi, Pagar Besi, Renovasi Rumah"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 animate-fade-in">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
            <span className="text-orange-400 text-xs sm:text-sm font-medium">
              Bengkel Las Terpercaya Sejak {CONFIG.yearEstablished}
            </span>
          </div>

          {/* Main Heading - SEO Optimized */}
          <h1 className="font-brand text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-slide-in-left">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-gradient">
              {CONFIG.businessName}
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-slate-300 mt-2">
              Bengkel Las & Renovasi Rumah
            </span>
          </h1>

          {/* Description with Keywords */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            <strong className="text-orange-400">Bengkel las</strong> dan jasa{' '}
            <strong className="text-orange-400">renovasi rumah</strong> terpercaya sejak 2005. 
            Spesialis konstruksi baja, kanopi minimalis, pagar besi, tangga besi, dan renovasi profesional. 
            Dengan pengalaman <strong className="text-orange-400">{CONFIG.yearsExperience}</strong>, 
            melayani <strong className="text-orange-400">seluruh Jawa Timur & Indonesia</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Button 
              size="lg" 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi gratis untuk proyek renovasi/bengkel las.')}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-xl shadow-orange-500/30 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 cursor-pointer min-h-[52px] sm:min-h-[56px] w-full sm:w-auto relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Konsultasi Gratis
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('portofolio')}
              className="border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 cursor-pointer min-h-[52px] sm:min-h-[56px] w-full sm:w-auto bg-white/5 backdrop-blur-sm group"
            >
              <Hammer className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Lihat Portofolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={() => scrollToSection('portofolio')} 
              className="text-center sm:text-left cursor-pointer hover:opacity-80 transition-opacity p-2 group"
              aria-label="Lihat proyek selesai"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 font-brand group-hover:scale-105 transition-transform">
                {CONFIG.projectsCompleted}
              </div>
              <div className="text-slate-400 text-xs sm:text-sm">Proyek Selesai</div>
            </button>
            <div className="text-center sm:text-left p-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 font-brand">
                {CONFIG.yearsExperience}
              </div>
              <div className="text-slate-400 text-xs sm:text-sm">Tahun Pengalaman</div>
            </div>
            <button 
              onClick={() => scrollToSection('testimoni')} 
              className="text-center sm:text-left cursor-pointer hover:opacity-80 transition-opacity p-2 group"
              aria-label="Lihat testimoni pelanggan"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 font-brand group-hover:scale-105 transition-transform">100%</div>
              <div className="text-slate-400 text-xs sm:text-sm">Kepuasan Klien</div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('tentang')} 
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer p-2"
        aria-label="Scroll ke bawah"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-orange-400 rounded-full animate-pulse" />
        </div>
      </button>
    </section>
  )
}
