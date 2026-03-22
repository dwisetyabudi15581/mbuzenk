'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { CONFIG, openWhatsApp } from '@/lib/config'

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show button after scrolling 300px
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    // Show tooltip after 5 seconds on first visit
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setShowTooltip(true)
      }
    }, 5000)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [isDismissed])

  const handleClick = () => {
    openWhatsApp('Halo, saya tertarik dengan layanan bengkel las dan renovasi rumah.')
    setShowTooltip(false)
  }

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowTooltip(false)
    setIsDismissed(true)
  }

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 animate-fade-in">
          <div className="relative bg-white rounded-lg shadow-xl p-4 max-w-[240px] border border-slate-200">
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center hover:bg-slate-300 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-3 h-3 text-slate-600" />
            </button>
            <p className="text-slate-700 text-sm font-medium mb-1">
              Butuh Bantuan? 💬
            </p>
            <p className="text-slate-500 text-xs">
              Klik untuk chat langsung dengan tim kami!
            </p>
            <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-slate-200" />
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="group relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
        aria-label="Chat WhatsApp"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10" />
        
        {/* Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
          1
        </span>
      </button>
    </div>
  )
}
