'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Clock, Shield, Thermometer, Droplets, Wind, Sun } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const tipsKanopi = [
  {
    title: 'Perhatikan Material Atap',
    points: [
      'Spandek - Ringan, ekonomis, berbagai pilihan warna',
      'Polikarbonat - Transparan, modern, tahan UV',
      'Alderon - Kedap suara, kuat, isolasi baik',
      'Baja Ringan - Anti karat, ringan, presisi',
    ],
  },
  {
    title: 'Sesuaikan dengan Fungsi',
    points: [
      'Carport - Butuh perlindungan maksimal dari hujan dan panas',
      'Teras - Fokus pada estetika dan pencahayaan',
      'Pagar - Kombinasi dengan desain pagar rumah',
    ],
  },
  {
    title: 'Pertimbangkan Ukuran',
    points: [
      'Carport standar: 3x5 meter hingga 4x6 meter',
      'Teras: sesuaikan dengan lebar rumah',
      'Tinggi ideal: 2.5-3 meter dari tanah',
    ],
  },
  {
    title: 'Pilih Model yang Tepat',
    points: [
      'Model datar - simpel dan minimalis',
      'Model pelana - klasik dan elegan',
      'Model lengkung - modern dan artistik',
      'Custom - sesuai keinginan Anda',
    ],
  },
]

const keuntunganKanopi = [
  { icon: Sun, title: 'Melindungi dari Panas', desc: 'Suhu mobil tetap nyaman' },
  { icon: Droplets, title: 'Tahan Hujan', desc: 'Mobil tidak terkena air hujan langsung' },
  { icon: Wind, title: 'Tahan Angin', desc: 'Konstruksi kokoh dan aman' },
  { icon: Shield, title: 'Keamanan', desc: 'Melindungi dari curat' },
]

export default function ArticleKanopi() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            ARTIKEL
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Tips Memilih Kanopi Minimalis yang Tepat untuk Rumah
          </h1>
          <p className="text-white/80 text-sm sm:text-base mb-6">
            Dipublikasikan pada Maret 2024 | MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang kanopi minimalis.')}
              className="bg-white text-orange-600 hover:bg-white/90 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Konsultasi Gratis
            </Button>
            <Button 
              onClick={() => makeCall()}
              className="bg-white/20 text-white border border-white/30 hover:bg-white/30 min-h-[48px]"
            >
              <Phone className="w-4 h-4 mr-2" />
              {CONFIG.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <ScrollAnimation>
          {/* Introduction */}
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              <strong>Kanopi minimalis</strong> menjadi pilihan populer untuk melindungi carport dan teras rumah. 
              Selain fungsional, kanopi juga menambah estetika rumah Anda. Di artikel ini, kami akan membahas 
              panduan lengkap cara memilih kanopi minimalis yang tepat untuk rumah Anda.
            </p>
          </div>
        </ScrollAnimation>

        {/* Keuntungan */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Mengapa Rumah Perlu Kanopi?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {keuntunganKanopi.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* Tips Section */}
        {tipsKanopi.map((tip, tipIndex) => (
          <ScrollAnimation key={tipIndex}>
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 font-brand flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">
                  {tipIndex + 1}
                </span>
                {tip.title}
              </h2>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-3">
                    {tip.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        ))}

        {/* CTA */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-orange-500 to-red-600 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                Butuh Kanopi Minimalis untuk Rumah?
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Konsultasi gratis dengan tim ahli MBUZENK ZETRO. Kami bantu pilihkan kanopi terbaik untuk Anda!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg"
                  onClick={() => openWhatsApp('Halo, saya ingin pesan kanopi minimalis dari artikel tips memilih kanopi.')}
                  className="bg-white text-orange-600 hover:bg-white/90 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pesan Kanopi Sekarang
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Related Services */}
        <ScrollAnimation>
          <div className="mt-12">
            <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">
              Layanan Terkait:
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/layanan/kanopi-minimalis">
                <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Kanopi Minimalis</Badge>
              </Link>
              <Link href="/layanan/pagar-besi">
                <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Pagar Besi</Badge>
              </Link>
              <Link href="/layanan/tangga-besi">
                <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Tangga Besi</Badge>
              </Link>
              <Link href="/layanan/teralis-jendela">
                <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Teralis Jendela</Badge>
              </Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Author */}
        <ScrollAnimation>
          <Card className="mt-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  MZ
                </div>
                <div>
                  <p className="font-semibold text-slate-800">MBUZENK ZETRO</p>
                  <p className="text-slate-500 text-sm">Bengkel Las & Renovasi Magetan - Sejak 2005</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </article>

      {/* Footer */}
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
