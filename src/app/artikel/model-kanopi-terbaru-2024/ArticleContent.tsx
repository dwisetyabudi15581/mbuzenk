'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Home, Car, Sun, TrendingUp, Palette } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { RelatedArticles } from '@/components/ui/related-articles'

const modelKanopi = [
  {
    nama: 'Kanopi Datar Minimalis',
    deskripsi: 'Desain simpel dengan atap datar, cocok untuk rumah bergaya modern minimalis',
    keunggulan: ['Tampilan clean dan modern', 'Mudah perawatan', 'Cocok untuk area terbatas', 'Biaya ekonomis'],
    material: 'Spandek, Alderon, Polikarbonat',
  },
  {
    nama: 'Kanopi Pelana/Klasik',
    deskripsi: 'Bentuk atap seperti pelana kuda, memberikan kesan elegan dan klasik',
    keunggulan: ['Aliran air hujan optimal', 'Sirkulasi udara baik', 'Kesan mewah', 'Tahan lama'],
    material: 'Genteng metal, Spandek, Alderon',
  },
  {
    nama: 'Kanopi Lengkung/Curve',
    deskripsi: 'Desain melengkung yang artistik dan modern',
    keunggulan: ['Tampilan unik dan eye-catching', 'Aliran air sempurna', 'Dimensi estetis tinggi', 'Custom design tersedia'],
    material: 'Polikarbonat, Spandek curve',
  },
  {
    nama: 'Kanopi Kaca/Tempered',
    deskripsi: 'Menggunakan kaca tempered transparan untuk tampilan mewah',
    keunggulan: ['Transparan dan elegan', 'Pencahayaan alami maksimal', 'Tampilan premium', 'Tahan benturan'],
    material: 'Kaca tempered 5-12mm',
  },
  {
    nama: 'Kanopi Kombinasi Kayu',
    deskripsi: 'Perpaduan besi dan kayu untuk kesan natural dan hangat',
    keunggulan: ['Kesan natural dan hangat', 'Unik dan berbeda', 'Custom design', 'Ramah lingkungan'],
    material: 'Besi hollow + Kayu hardwood',
  },
  {
    nama: 'Kanopi Cantilever',
    deskripsi: 'Tanpa tiang penyangga di depan, memberikan ruang lebih luas',
    keunggulan: ['Ruangan terasa lebih luas', 'Akses mudah', 'Desain modern', 'Minimalis maksimal'],
    material: 'Besi hollow tebal, Baja ringan',
  },
]

const trend2024 = [
  { icon: TrendingUp, title: 'Minimalis Clean', desc: 'Desain simpel tanpa ornamen berlebih' },
  { icon: Sun, title: 'Eco-Friendly', desc: 'Material ramah lingkungan' },
  { icon: Palette, title: 'Warna Natural', desc: 'Abu-abu, hitam, coklat kayu' },
  { icon: Home, title: 'Smart Integration', desc: 'Siap instalasi lampu LED' },
]

export default function ArticleContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-500 to-pink-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            TREND 2024
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Model Kanopi Terbaru 2024 untuk Rumah Modern
          </h1>
          <p className="text-white/80 text-sm sm:text-base mb-6">
            Dipublikasikan pada Maret 2024 | MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang model kanopi terbaru.')}
              className="bg-white text-rose-600 hover:bg-rose-50 min-h-[48px]"
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
              Tahun 2024 menghadirkan berbagai <strong>model kanopi terbaru</strong> yang mengutamakan desain minimalis, 
              fungsionalitas, dan estetika modern. Dari kanopi datar simpel hingga kanopi kaca premium, 
              pilihan semakin beragam untuk melengkapi rumah impian Anda. Mari kita lihat koleksi model kanopi terkini!
            </p>
          </div>
        </ScrollAnimation>

        {/* Trend 2024 */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Tren Desain Kanopi 2024
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {trend2024.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* Model Kanopi */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
          Koleksi Model Kanopi Terbaru
        </h2>
        <div className="grid gap-6">
          {modelKanopi.map((kanopi, index) => (
            <ScrollAnimation key={index}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white font-brand">{kanopi.nama}</h3>
                        <p className="text-slate-300 text-sm">{kanopi.deskripsi}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 text-sm">Keunggulan:</h4>
                        <ul className="space-y-1">
                          {kanopi.keunggulan.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 text-sm">Material:</h4>
                        <p className="text-slate-600 text-sm bg-slate-50 p-3 rounded-lg">{kanopi.material}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-rose-500 to-pink-500 overflow-hidden mt-8">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                Tertarik dengan Model Kanopi Terbaru?
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Konsultasi gratis dengan tim ahli MBUZENK ZETRO. Kami bantu pilihkan model kanopi terbaik untuk rumah Anda!
              </p>
              <Button 
                size="lg"
                onClick={() => openWhatsApp('Halo, saya ingin pesan kanopi model terbaru 2024.')}
                className="bg-white text-rose-600 hover:bg-rose-50 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Pesan Kanopi Sekarang
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Related Articles */}
        <RelatedArticles currentSlug="model-kanopi-terbaru-2024" />
        
        {/* Related */}
        <ScrollAnimation>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">Layanan Terkait:</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/layanan/kanopi-minimalis"><Badge variant="outline" className="cursor-pointer hover:bg-rose-50">Kanopi Minimalis</Badge></Link>
              <Link href="/layanan/pagar-besi"><Badge variant="outline" className="cursor-pointer hover:bg-rose-50">Pagar Besi</Badge></Link>
              <Link href="/layanan/teralis-jendela"><Badge variant="outline" className="cursor-pointer hover:bg-rose-50">Teralis Jendela</Badge></Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Author */}
        <ScrollAnimation>
          <Card className="mt-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">MZ</div>
                <div>
                  <p className="font-semibold text-slate-800">MBUZENK ZETRO</p>
                  <p className="text-slate-500 text-sm">Bengkel Las & Renovasi Magetan - Sejak 2005</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </article>

      <section className="bg-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center text-rose-600 hover:text-rose-700">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
