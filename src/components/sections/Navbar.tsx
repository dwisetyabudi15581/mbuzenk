'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Menu, X, ChevronDown, Newspaper, MapPin, ImageIcon, HelpCircle, Wrench } from 'lucide-react'
import { CONFIG, NAV_LINKS, LAYANAN_LINKS, AREA_LAYANAN_LINKS, OTHER_PAGES, makeCall, scrollToSection } from '@/lib/config'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setIsOpen(false)
    setOpenDropdown(null)
  }

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-lg shadow-lg border-b border-slate-200' 
        : 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'}`}>
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('beranda')} 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Kembali ke beranda"
          >
            <div className={`relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${isScrolled ? 'w-9 h-9 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'}`}>
              <Image 
                src="/logo.png" 
                alt="MBUZENK ZETRO Logo" 
                fill
                className="object-cover"
                sizes="(max-width: 640px) 40px, 48px"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-slate-800 leading-tight font-brand transition-all duration-300 ${isScrolled ? 'text-sm sm:text-base' : 'text-sm sm:text-lg'}`}>
                {CONFIG.businessName}
              </span>
              <span className={`text-orange-600 font-medium transition-all duration-300 ${isScrolled ? 'text-[9px] sm:text-[10px]' : 'text-[10px] sm:text-xs'} hidden sm:block`}>
                {CONFIG.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
            {/* Home Link */}
            <button
              onClick={() => handleNavClick('beranda')}
              className="text-slate-600 hover:text-orange-600 font-medium transition-colors duration-200 relative group cursor-pointer"
            >
              Beranda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full" />
            </button>

            {/* Tentang */}
            <button
              onClick={() => handleNavClick('tentang')}
              className="text-slate-600 hover:text-orange-600 font-medium transition-colors duration-200 relative group cursor-pointer"
            >
              Tentang Kami
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full" />
            </button>

            {/* Layanan Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('layanan')}
                className="text-slate-600 hover:text-orange-600 font-medium transition-colors duration-200 relative group cursor-pointer flex items-center gap-1"
              >
                Layanan
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'layanan' ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full" />
              </button>
              
              {openDropdown === 'layanan' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Layanan Kami</span>
                  </div>
                  {LAYANAN_LINKS.map((link) => (
                    <Link
                      key={link.slug}
                      href={`/layanan/${link.slug}`}
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 px-4 py-2.5 hover:bg-orange-50 transition-colors group"
                    >
                      <Wrench className="w-4 h-4 text-orange-500 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-slate-700 group-hover:text-orange-600">{link.label}</div>
                        <div className="text-xs text-slate-400">{link.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Artikel Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('artikel')}
                className="text-slate-600 hover:text-orange-600 font-medium transition-colors duration-200 relative group cursor-pointer flex items-center gap-1"
              >
                Artikel
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'artikel' ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full" />
              </button>
              
              {openDropdown === 'artikel' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Artikel & Informasi</span>
                  </div>
                  <Link
                    href="/artikel"
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 transition-colors group bg-orange-50/50"
                  >
                    <Newspaper className="w-4 h-4 text-orange-500" />
                    <div>
                      <div className="text-sm font-semibold text-orange-600">Semua Artikel</div>
                      <div className="text-xs text-slate-400">Lihat daftar lengkap artikel</div>
                    </div>
                  </Link>
                  <div className="px-3 py-2 border-t border-slate-100 mt-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Populer</span>
                  </div>
                  <Link href="/artikel/keuntungan-kanopi-baja-ringan" onClick={() => setOpenDropdown(null)} className="block px-4 py-2 hover:bg-orange-50 text-sm text-slate-600 hover:text-orange-600">Keuntungan Kanopi Baja Ringan</Link>
                  <Link href="/artikel/tips-memilih-kanopi-minimalis" onClick={() => setOpenDropdown(null)} className="block px-4 py-2 hover:bg-orange-50 text-sm text-slate-600 hover:text-orange-600">Tips Memilih Kanopi Minimalis</Link>
                  <Link href="/artikel/cara-memilih-pagar-minimalis" onClick={() => setOpenDropdown(null)} className="block px-4 py-2 hover:bg-orange-50 text-sm text-slate-600 hover:text-orange-600">Cara Memilih Pagar Minimalis</Link>
                </div>
              )}
            </div>

            {/* Area Layanan Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('area')}
                className="text-slate-600 hover:text-orange-600 font-medium transition-colors duration-200 relative group cursor-pointer flex items-center gap-1"
              >
                Area Layanan
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'area' ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full" />
              </button>
              
              {openDropdown === 'area' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Wilayah Jangkauan</span>
                  </div>
                  {AREA_LAYANAN_LINKS.map((link) => (
                    <Link
                      key={link.slug}
                      href={`/area-layanan/${link.slug}`}
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 transition-colors group"
                    >
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <div>
                        <div className="text-sm font-medium text-slate-700 group-hover:text-orange-600">{link.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Galeri */}
            <Link
              href="/galeri"
              onClick={() => setOpenDropdown(null)}
              className="text-slate-600 hover:text-orange-600 font-medium transition-colors duration-200 relative group cursor-pointer flex items-center gap-1"
            >
              <ImageIcon className="w-4 h-4" />
              Galeri
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full" />
            </Link>

            {/* FAQ */}
            <Link
              href="/faq-harga"
              onClick={() => setOpenDropdown(null)}
              className="text-slate-600 hover:text-orange-600 font-medium transition-colors duration-200 relative group cursor-pointer flex items-center gap-1"
            >
              <HelpCircle className="w-4 h-4" />
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full" />
            </Link>

            {/* Kontak */}
            <button
              onClick={() => handleNavClick('kontak')}
              className="text-slate-600 hover:text-orange-600 font-medium transition-colors duration-200 relative group cursor-pointer"
            >
              Kontak
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full" />
            </button>

            {/* CTA Button */}
            <Button 
              onClick={() => makeCall()}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-500/25 cursor-pointer min-h-[44px]"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-orange-600 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 bg-white max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {/* Home */}
              <button
                onClick={() => handleNavClick('beranda')}
                className="text-slate-600 hover:text-orange-600 font-medium py-3 px-4 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50"
              >
                Beranda
              </button>

              {/* Tentang */}
              <button
                onClick={() => handleNavClick('tentang')}
                className="text-slate-600 hover:text-orange-600 font-medium py-3 px-4 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50"
              >
                Tentang Kami
              </button>

              {/* Layanan Section */}
              <div className="border-t border-slate-100 mt-2 pt-2">
                <div className="px-4 py-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Layanan</span>
                </div>
                {LAYANAN_LINKS.map((link) => (
                  <Link
                    key={link.slug}
                    href={`/layanan/${link.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-600 hover:text-orange-600 font-medium py-2.5 px-6 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50 flex items-center gap-2"
                  >
                    <Wrench className="w-4 h-4 text-orange-500" />
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Artikel Section */}
              <div className="border-t border-slate-100 mt-2 pt-2">
                <div className="px-4 py-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Artikel</span>
                </div>
                <Link
                  href="/artikel"
                  onClick={() => setIsOpen(false)}
                  className="text-orange-600 font-semibold py-2.5 px-6 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50 flex items-center gap-2"
                >
                  <Newspaper className="w-4 h-4" />
                  Semua Artikel
                </Link>
                <Link href="/artikel/keuntungan-kanopi-baja-ringan" onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-orange-600 py-2 px-6 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50 block text-sm">Keuntungan Kanopi Baja Ringan</Link>
                <Link href="/artikel/tips-memilih-kanopi-minimalis" onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-orange-600 py-2 px-6 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50 block text-sm">Tips Memilih Kanopi Minimalis</Link>
                <Link href="/artikel/cara-memilih-pagar-minimalis" onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-orange-600 py-2 px-6 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50 block text-sm">Cara Memilih Pagar Minimalis</Link>
              </div>

              {/* Area Layanan */}
              <div className="border-t border-slate-100 mt-2 pt-2">
                <div className="px-4 py-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Area Layanan</span>
                </div>
                {AREA_LAYANAN_LINKS.map((link) => (
                  <Link
                    key={link.slug}
                    href={`/area-layanan/${link.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-600 hover:text-orange-600 font-medium py-2.5 px-6 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-orange-500" />
                    {link.description}
                  </Link>
                ))}
              </div>

              {/* Other Pages */}
              <div className="border-t border-slate-100 mt-2 pt-2">
                <Link
                  href="/galeri"
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 hover:text-orange-600 font-medium py-2.5 px-4 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50 flex items-center gap-2"
                >
                  <ImageIcon className="w-4 h-4 text-orange-500" />
                  Galeri
                </Link>
                <Link
                  href="/faq-harga"
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 hover:text-orange-600 font-medium py-2.5 px-4 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50 flex items-center gap-2"
                >
                  <HelpCircle className="w-4 h-4 text-orange-500" />
                  FAQ & Harga
                </Link>
                <button
                  onClick={() => handleNavClick('kontak')}
                  className="text-slate-600 hover:text-orange-600 font-medium py-3 px-4 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50 w-full"
                >
                  Kontak
                </button>
              </div>

              {/* CTA Button */}
              <div className="px-4 mt-4">
                <Button 
                  onClick={() => makeCall()}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white w-full cursor-pointer min-h-[44px]"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
