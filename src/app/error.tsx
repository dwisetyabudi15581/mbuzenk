'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw, Home, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error ke error reporting service
    console.error('Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="text-center max-w-md">
        {/* Error Icon */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 font-brand">
          Terjadi Kesalahan
        </h1>

        {/* Description */}
        <p className="text-slate-600 mb-8 text-sm sm:text-base">
          Maaf, terjadi kesalahan saat memuat halaman. 
          Silakan coba lagi atau hubungi kami jika masalah berlanjut.
        </p>

        {/* Error message (dev only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-xs text-red-600 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={() => reset()}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-500/25 w-full sm:w-auto min-h-[48px]"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Coba Lagi
          </Button>
          <Link href="/">
            <Button 
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-100 w-full sm:w-auto min-h-[48px]"
            >
              <Home className="w-4 h-4 mr-2" />
              Ke Beranda
            </Button>
          </Link>
        </div>

        {/* Contact */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <p className="text-slate-500 text-sm mb-3">Butuh bantuan?</p>
          <Button 
            variant="ghost"
            onClick={() => window.open('https://wa.me/6285738602255?text=Halo, saya menemukan error di website.', '_blank')}
            className="text-green-600 hover:bg-green-50 min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Hubungi via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  )
}
