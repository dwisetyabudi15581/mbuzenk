'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, MessageCircle, Phone, ArrowRight, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const faqHarga = [
  {
    q: 'Berapa harga kanopi minimalis per meter?',
    a: 'Harga kanopi minimalis bervariasi tergantung material atap (spandek, polikarbonat, alderon) dan rangka (besi hollow atau baja ringan). Hubungi kami untuk penawaran terbaik sesuai kebutuhan Anda.',
    category: 'Kanopi',
  },
  {
    q: 'Berapa biaya pembuatan pagar besi?',
    a: 'Harga pagar besi disesuaikan dengan model (BRC, hollow, custom), tinggi, panjang, dan kompleksitas desain. Kami menyediakan berbagai pilihan sesuai budget Anda. Konsultasi gratis!',
    category: 'Pagar',
  },
  {
    q: 'Harga tangga besi spiral berapa?',
    a: 'Tangga spiral besi memiliki variasi harga berdasarkan tinggi, diameter, dan kompleksitas desain. Hubungi kami untuk survei gratis dan penawaran sesuai lokasi Anda.',
    category: 'Tangga',
  },
  {
    q: 'Berapa biaya teralis jendela?',
    a: 'Teralis jendela tersedia dalam berbagai model: minimalis, artistik dengan ornamen, hingga security dengan besi tebal. Harga disesuaikan dengan model dan ukuran. Konsultasi gratis!',
    category: 'Teralis',
  },
  {
    q: 'Apakah bisa konsultasi dulu sebelum order?',
    a: 'Tentu! Kami menyediakan konsultasi dan survei lokasi GRATIS. Tim kami akan membantu merencanakan proyek sesuai kebutuhan dan budget Anda.',
    category: 'Layanan',
  },
  {
    q: 'Apakah bisa DP dulu?',
    a: 'Ya, sistem pembayaran kami fleksibel. DP untuk memulai pengerjaan, pelunasan setelah selesai. Untuk proyek besar bisa negosiasi pembayaran bertahap.',
    category: 'Pembayaran',
  },
  {
    q: 'Apakah ada garansi?',
    a: 'Ya! Garansi konstruksi untuk semua pekerjaan las. Garansi finishing cat juga tersedia. Service gratis untuk pelanggan setia.',
    category: 'Garansi',
  },
  {
    q: 'Berapa biaya survei lokasi?',
    a: 'Survei lokasi GRATIS untuk area Magetan dan sekitarnya. Untuk luar area akan diinformasikan saat booking.',
    category: 'Layanan',
  },
  {
    q: 'Berapa lama waktu pengerjaan?',
    a: 'Waktu pengerjaan bervariasi: Kanopi 3-7 hari kerja, Pagar 2-5 hari, Teralis 1-3 hari, Tangga 3-7 hari. Renovasi tergantung luas dan kompleksitas. Kami berikan estimasi pasti saat survei.',
    category: 'Waktu',
  },
  {
    q: 'Apakah melayani luar Magetan?',
    a: 'Ya, kami melayani Madiun, Ngawi, Ponorogo, dan sekitarnya. Hubungi kami untuk konfirmasi area layanan.',
    category: 'Area',
  },
]

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <section className="bg-gradient-to-br from-orange-500 to-red-600 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">FAQ LAYANAN</Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Pertanyaan Seputar Layanan
          </h1>
          <p className="text-white/80 text-sm sm:text-base">
            Jawaban lengkap pertanyaan yang sering diajukan tentang layanan kami
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <ScrollAnimation>
          <div className="space-y-3">
            {faqHarga.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-4 h-4 text-orange-500" />
                      </div>
                      <div>
                        <span className="text-xs text-orange-500 font-medium">{faq.category}</span>
                        <h3 className="text-sm sm:text-base font-semibold text-slate-800">{faq.q}</h3>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-4 sm:px-5 pb-4 sm:pb-5 pl-16 sm:pl-17 text-slate-600 text-sm">{faq.a}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-orange-500 to-red-600 mt-8 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3 font-brand">
                Mau Penawaran Terbaik?
              </h3>
              <p className="text-white/80 mb-6 text-sm">
                Hubungi kami untuk konsultasi gratis dan penawaran sesuai kebutuhan Anda
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang layanan bengkel las.')}
                  className="bg-white text-orange-600 hover:bg-white/90 min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat WhatsApp
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => makeCall()}
                  className="border-white text-white hover:bg-white/10 min-h-[48px]"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Telepon
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">Layanan Kami:</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/layanan/kanopi-minimalis"><Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Kanopi Minimalis</Badge></Link>
            <Link href="/layanan/pagar-besi"><Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Pagar Besi</Badge></Link>
            <Link href="/layanan/tangga-besi"><Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Tangga Besi</Badge></Link>
            <Link href="/layanan/teralis-jendela"><Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Teralis Jendela</Badge></Link>
            <Link href="/layanan/renovasi-rumah"><Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Renovasi Rumah</Badge></Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
