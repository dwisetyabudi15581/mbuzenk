'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, MessageCircle, Wrench } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="text-[150px] sm:text-[200px] font-bold text-slate-100 font-brand">404</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Wrench className="w-16 h-16 sm:w-20 sm:h-20 text-orange-500 animate-bounce" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 font-brand">
          Halaman Tidak Ditemukan
        </h1>

        {/* Description */}
        <p className="text-slate-600 mb-8 text-sm sm:text-base">
          Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan. 
          Mungkin Anda ingin kembali ke beranda atau menghubungi kami.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-500/25 w-full sm:w-auto min-h-[48px]">
              <Home className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
          <Button 
            variant="outline"
            onClick={() => window.open('https://wa.me/6285738602255?text=Halo, saya menemukan halaman error di website.', '_blank')}
            className="border-orange-500 text-orange-600 hover:bg-orange-50 w-full sm:w-auto min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Hubungi Kami
          </Button>
        </div>

        {/* Fun fact */}
        <p className="mt-8 text-slate-400 text-xs sm:text-sm">
          Bengkel Las MBUZENK ZETRO - Spesialis Las & Renovasi Rumah Magetan
        </p>
      </div>
    </div>
  )
}
