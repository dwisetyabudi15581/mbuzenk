'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone, Menu, X } from 'lucide-react'
import { CONFIG, NAV_LINKS, makeCall, scrollToSection } from '@/lib/config'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('beranda')} 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:opacity-80 transition-opacity"
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
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-lg text-slate-800 leading-tight font-brand">
                {CONFIG.businessName}
              </span>
              <span className="text-[10px] sm:text-xs text-orange-600 font-medium hidden sm:block">
                {CONFIG.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-slate-600 hover:text-orange-600 font-medium transition-colors duration-200 relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
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
          <div className="lg:hidden py-4 border-t border-slate-200 bg-white">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-slate-600 hover:text-orange-600 font-medium py-3 px-4 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50 min-h-[44px]"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => makeCall()}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white mt-2 cursor-pointer min-h-[44px]"
              >
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
