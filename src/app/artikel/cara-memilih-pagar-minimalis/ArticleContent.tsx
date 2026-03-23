'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Ruler, Palette, Shield, Home, Car } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { RelatedArticles } from '@/components/ui/related-articles'

const tipsMemilih = [
  {
    title: 'Sesuaikan dengan Arsitektur Rumah',
    points: [
      'Pilih desain pagar yang selaras dengan gaya rumah',
      'Minimalis untuk rumah modern, klasik untuk rumah tradisional',
      'Warna pagar sebaiknya senada dengan warna rumah',
      'Pertimbangkan elemen dekoratif rumah saat memilih motif pagar',
    ],
  },
  {
    title: 'Tentukan Tinggi yang Tepat',
    points: [
      'Tinggi standar pagar: 1.5 - 1.8 meter',
      'Untuk keamanan maksimal, pilih tinggi 1.8 - 2 meter',
      'Pagar terlalu tinggi bisa membuat rumah tertutup',
      'Sesuaikan dengan peraturan setempat',
    ],
  },
  {
    title: 'Pilih Material yang Berkualitas',
    points: [
      'Besi hollow: modern, kuat, minimalis',
      'Besi pipa: klasik, artistik, kokoh',
      'Pagar BRC: ekonomis, praktis, cepat pasang',
      'Pilih ketebalan yang sesuai dengan kebutuhan',
    ],
  },
  {
    title: 'Perhatikan Fungsi Pagar',
    points: [
      'Untuk keamanan: pilih pagar tertutup atau semi tertutup',
      'Untuk estetika: pilih pagar dengan ornamen artistik',
      'Untuk privasi: pilih pagar tinggi dengan jarak rapat',
      'Untuk sirkulasi udara: pilih pagar dengan jarak antar besi',
    ],
  },
  {
    title: 'Pertimbangkan Akses dan Pintu',
    points: [
      'Sediakan pintu utama lebar 3-4 meter untuk mobil',
      'Pintu kecil untuk akses pejalan kaki',
      'Pilih sistem bukaan yang sesuai (dorong/swing)',
      'Pertimbangkan otomatisasi untuk kemudahan',
    ],
  },
]

const perbandinganMaterial = [
  { material: 'Besi Hollow', kelebihan: 'Modern, minimalis', perawatan: 'Cat rutin', umur: '15-20 tahun' },
  { material: 'Besi Pipa', kelebihan: 'Artistik, klasik', perawatan: 'Cat rutin', umur: '15-25 tahun' },
  { material: 'Pagar BRC', kelebihan: 'Ekonomis, cepat', perawatan: 'Minimal', umur: '10-15 tahun' },
  { material: 'Wrought Iron', kelebihan: 'Mewah, custom', perawatan: 'Cat khusus', umur: '20-30 tahun' },
]

const quickTips = [
  { icon: Ruler, title: 'Ukur dengan Tepat', desc: 'Panjang dan tinggi sesuai kebutuhan' },
  { icon: Palette, title: 'Pilih Warna', desc: 'Hitam, abu-abu, atau custom' },
  { icon: Shield, title: 'Prioritas Keamanan', desc: 'Besi tebal dan konstruksi kuat' },
  { icon: Home, title: 'Sesuai Rumah', desc: 'Harmonis dengan desain' },
]

export default function ArticleContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            PANDUAN PEMILIHAN
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Cara Memilih Pagar Minimalis yang Tepat untuk Rumah
          </h1>
          <p className="text-white/80 text-sm sm:text-base mb-6">
            Dipublikasikan pada Maret 2024 | MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang pagar minimalis.')}
              className="bg-white text-teal-600 hover:bg-teal-50 min-h-[48px]"
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
              <strong>Pagar minimalis</strong> adalah pilihan populer untuk rumah modern. Selain berfungsi sebagai keamanan, 
              pagar juga menjadi elemen penting dalam tampilan eksterior rumah. Memilih pagar yang tepat memerlukan 
              pertimbangan berbagai faktor. Artikel ini akan membantu Anda memilih pagar minimalis yang sempurna.
            </p>
          </div>
        </ScrollAnimation>

        {/* Quick Tips */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Tips Cepat Memilih Pagar
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {quickTips.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* Tips Detail */}
        {tipsMemilih.map((tip, tipIndex) => (
          <ScrollAnimation key={tipIndex}>
            <div className="mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 font-brand flex items-center gap-2">
                <span className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm">
                  {tipIndex + 1}
                </span>
                {tip.title}
              </h2>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-3">
                    {tip.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        ))}

        {/* Perbandingan Material */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Perbandingan Material Pagar
          </h2>
          <Card className="mb-8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-teal-600 text-white">
                    <th className="p-3 text-left text-sm">Material</th>
                    <th className="p-3 text-left text-sm">Kelebihan</th>
                    <th className="p-3 text-left text-sm">Perawatan</th>
                    <th className="p-3 text-left text-sm">Umur Pakai</th>
                  </tr>
                </thead>
                <tbody>
                  {perbandinganMaterial.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-3 text-sm font-medium text-slate-800">{item.material}</td>
                      <td className="p-3 text-sm text-slate-600">{item.kelebihan}</td>
                      <td className="p-3 text-sm text-slate-600">{item.perawatan}</td>
                      <td className="p-3 text-sm text-slate-600">{item.umur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-teal-500 to-teal-600 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                Butuh Pagar Minimalis Custom?
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Konsultasi gratis dengan tim ahli MBUZENK ZETRO. Kami bantu desain pagar sesuai rumah Anda!
              </p>
              <Button 
                size="lg"
                onClick={() => openWhatsApp('Halo, saya ingin pesan pagar minimalis custom.')}
                className="bg-white text-teal-600 hover:bg-teal-50 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Pesan Pagar Sekarang
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Related Articles */}
        <RelatedArticles currentSlug="cara-memilih-pagar-minimalis" />
        
        {/* Related */}
        <ScrollAnimation>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">Layanan Terkait:</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/layanan/pagar-besi"><Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Pagar Besi</Badge></Link>
              <Link href="/layanan/kanopi-minimalis"><Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Kanopi Minimalis</Badge></Link>
              <Link href="/layanan/teralis-jendela"><Badge variant="outline" className="cursor-pointer hover:bg-teal-50">Teralis Jendela</Badge></Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Author */}
        <ScrollAnimation>
          <Card className="mt-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">MZ</div>
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
          <Link href="/" className="inline-flex items-center text-teal-600 hover:text-teal-700">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
