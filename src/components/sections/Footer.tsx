'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, Facebook, Newspaper, MapPin, ImageIcon, HelpCircle, Wrench, FileText } from 'lucide-react'
import { CONFIG, NAV_LINKS, LAYANAN_LINKS, AREA_LAYANAN_LINKS, openWhatsApp, scrollToSection } from '@/lib/config'

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button 
              onClick={() => scrollToSection('beranda')}
              className="flex items-center gap-2 sm:gap-3 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Kembali ke beranda"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/logo.png" 
                  alt="MBUZENK ZETRO Logo" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 40px, 48px"
                />
              </div>
              <div>
                <span className="font-bold text-base sm:text-xl text-white font-brand">{CONFIG.businessName}</span>
                <span className="block text-[10px] sm:text-xs text-orange-400">{CONFIG.tagline}</span>
              </div>
            </button>
            <p className="text-slate-400 mb-4 sm:mb-6 max-w-md leading-relaxed text-xs sm:text-sm">
              {CONFIG.businessName} adalah bengkel las dan jasa renovasi rumah terpercaya. 
              Dengan pengalaman lebih dari {CONFIG.yearsExperience} tahun, kami berkomitmen 
              memberikan hasil terbaik dengan standar kualitas tertinggi. 
              Melayani Magetan, Madiun, Ngawi, Ponorogo dan sekitarnya.
            </p>
            {/* Social Media */}
            <div className="flex gap-3 sm:gap-4">
              <a 
                href={CONFIG.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
                aria-label="Facebook MBUZENK ZETRO"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-white" />
              </a>
              <a 
                href={CONFIG.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 hover:bg-black rounded-lg flex items-center justify-center transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
                aria-label="TikTok MBUZENK ZETRO"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <button 
                onClick={() => openWhatsApp('Halo, saya menghubungi dari website.')}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
                aria-label="WhatsApp MBUZENK ZETRO"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Menu Utama</h4>
            <ul className="space-y-2 sm:space-y-3">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-xs sm:text-sm py-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link href="/galeri" className="text-slate-400 hover:text-orange-400 transition-colors text-xs sm:text-sm py-1 flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5" />
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/faq-harga" className="text-slate-400 hover:text-orange-400 transition-colors text-xs sm:text-sm py-1 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  FAQ & Harga
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Layanan Kami</h4>
            <ul className="space-y-2 sm:space-y-3">
              {LAYANAN_LINKS.map((link) => (
                <li key={link.slug}>
                  <Link 
                    href={`/layanan/${link.slug}`}
                    className="text-slate-400 hover:text-orange-400 transition-colors text-xs sm:text-sm py-1 flex items-center gap-1.5"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Artikel */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Artikel</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/artikel" className="text-orange-300 hover:text-orange-200 transition-colors text-xs sm:text-sm py-1 font-medium flex items-center gap-1.5">
                  <Newspaper className="w-3.5 h-3.5" />
                  Semua Artikel
                </Link>
              </li>
              <li>
                <Link href="/artikel/keuntungan-kanopi-baja-ringan" className="text-slate-400 hover:text-orange-400 transition-colors text-xs sm:text-sm py-1 block">
                  Keuntungan Kanopi Baja Ringan
                </Link>
              </li>
              <li>
                <Link href="/artikel/tips-memilih-kanopi-minimalis" className="text-slate-400 hover:text-orange-400 transition-colors text-xs sm:text-sm py-1 block">
                  Tips Memilih Kanopi
                </Link>
              </li>
              <li>
                <Link href="/artikel/cara-memilih-pagar-minimalis" className="text-slate-400 hover:text-orange-400 transition-colors text-xs sm:text-sm py-1 block">
                  Cara Memilih Pagar
                </Link>
              </li>
              <li>
                <Link href="/artikel/cara-memilih-bengkel-las" className="text-slate-400 hover:text-orange-400 transition-colors text-xs sm:text-sm py-1 block">
                  Cara Memilih Bengkel Las
                </Link>
              </li>
            </ul>
          </div>

          {/* Area Layanan */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Area Layanan</h4>
            <ul className="space-y-2 sm:space-y-3">
              {AREA_LAYANAN_LINKS.map((link) => (
                <li key={link.slug}>
                  <Link 
                    href={`/area-layanan/${link.slug}`}
                    className="text-slate-400 hover:text-orange-400 transition-colors text-xs sm:text-sm py-1 flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {link.description}
                  </Link>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => openWhatsApp('Halo, apakah bisa melayani daerah saya?')}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-xs sm:text-sm py-1"
                >
                  Area Lainnya →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} {CONFIG.businessName}. Bengkel Las & Renovasi Rumah Magetan. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <button 
                onClick={() => openWhatsApp('Halo, saya ingin bertanya tentang kebijakan privasi.')}
                className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                Kebijakan Privasi
              </button>
              <button 
                onClick={() => openWhatsApp('Halo, saya ingin bertanya tentang syarat dan ketentuan.')}
                className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                Syarat & Ketentuan
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
