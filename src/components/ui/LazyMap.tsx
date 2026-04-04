'use client'

import { useState } from 'react'
import { MapPin, Loader2 } from 'lucide-react'
import { CONFIG } from '@/lib/config'

interface LazyMapProps {
  className?: string
}

export function LazyMap({ className = '' }: LazyMapProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  // Load map only when user clicks
  const handleLoadMap = () => {
    setIsClicked(true)
    setIsLoaded(true)
  }

  if (isLoaded) {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2852026783544!2d111.3593054!3d-7.6516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bd5a4c5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sBengkel%20Las%20MBUZENK%20ZETRO!5e0!3m2!1sid!2sid!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Bengkel Las MBUZENK ZETRO Magetan"
        className={`w-full h-full min-h-[200px] ${className}`}
      />
    )
  }

  return (
    <button
      onClick={handleLoadMap}
      className={`w-full h-full min-h-[200px] bg-slate-700/50 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-slate-700/70 transition-colors group ${className}`}
      aria-label="Klik untuk memuat peta"
    >
      {isClicked ? (
        <Loader2 className="w-12 h-12 text-orange-400 animate-spin" />
      ) : (
        <>
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <div className="text-center px-4">
            <p className="text-white font-medium mb-1">Klik untuk Lihat Peta</p>
            <p className="text-slate-400 text-sm">{CONFIG.address}, {CONFIG.city}</p>
          </div>
        </>
      )}
    </button>
  )
}
