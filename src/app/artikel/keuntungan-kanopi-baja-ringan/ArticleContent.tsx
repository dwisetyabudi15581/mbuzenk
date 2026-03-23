'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Shield, Sun, Droplets, Zap, Scale } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { RelatedArticles } from '@/components/ui/related-articles'

const keuntunganList = [
  {
    title: 'Ringan dan Tidak Membebani Struktur',
    points: [
      'Berat baja ringan hanya 1/3 dari besi konvensional',
      'Tidak membebani konstruksi bangunan',
      'Cocok untuk rumah dengan struktur minimalis',
      'Pemasangan lebih cepat dan mudah',
    ],
  },
  {
    title: 'Anti Karat dan Tahan Lama',
    points: [
      'Terbuat dari baja berlapis seng (galvalum)',
      'Tidak mudah berkarat meski terkena hujan',
      'Umur pakai bisa mencapai 20-30 tahun',
      'Tidak perlu perawatan khusus',
    ],
  },
  {
    title: 'Desain Modern dan Minimalis',
    points: [
      'Tampilan bersih dan elegan',
      'Berbagai pilihan bentuk dan model',
      'Cocok untuk rumah bergaya modern',
      'Bisa dikombinasikan dengan berbagai material atap',
    ],
  },
  {
    title: 'Pemasangan Cepat dan Presisi',
    points: [
      'Menggunakan sistem koneksi baut dan sekrup',
      'Tidak memerlukan pengelasan di lokasi',
      'Proses pemasangan 1-2 hari untuk carport standar',
      'Hasil lebih rapi dan presisi',
    ],
  },
  {
    title: 'Ramah Lingkungan',
    points: [
      'Material bisa didaur ulang 100%',
      'Proses produksi lebih hemat energi',
      'Tidak menghasilkan limbah berbahaya',
      'Bangunan ramah lingkungan',
    ],
  },
]

const perbandingan = [
  { aspek: 'Berat', bajaRingan: 'Ringan (4-6 kg/m²)', besiBiasa: 'Berat (15-20 kg/m²)' },
  { aspek: 'Karat', bajaRingan: 'Anti karat (lapisan seng)', besiBiasa: 'Mudah berkarat' },
  { aspek: 'Perawatan', bajaRingan: 'Minimal', besiBiasa: 'Perlu pengecatan rutin' },
  { aspek: 'Umur Pakai', bajaRingan: '20-30 tahun', besiBiasa: '10-15 tahun' },
  { aspek: 'Pemasangan', bajaRingan: 'Cepat (baut)', besiBiasa: 'Lama (las)' },
  { aspek: 'Desain', bajaRingan: 'Modern, presisi', besiBiasa: 'Klasik, tradisional' },
]

const iconKeuntungan = [
  { icon: Scale, title: 'Ringan', desc: 'Tidak membebani bangunan' },
  { icon: Shield, title: 'Anti Karat', desc: 'Lapisan seng pelindung' },
  { icon: Zap, title: 'Cepat', desc: 'Instalasi 1-2 hari' },
  { icon: Sun, title: 'Tahan Lama', desc: 'Hingga 30 tahun' },
]

export default function ArticleContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-blue-400/20 text-blue-200 border-blue-400/30 mb-4">
            ARTIKEL INFORMASI
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Keuntungan Menggunakan Kanopi Baja Ringan
          </h1>
          <p className="text-blue-100 text-sm sm:text-base mb-6">
            Dipublikasikan pada Maret 2024 | MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang kanopi baja ringan.')}
              className="bg-white text-blue-600 hover:bg-blue-50 min-h-[48px]"
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
              <strong>Kanopi baja ringan</strong> menjadi pilihan populer untuk carport dan teras rumah modern. 
              Material ini memiliki banyak keunggulan dibanding besi konvensional. Di artikel ini, 
              kami akan membahas berbagai keuntungan menggunakan kanopi baja ringan untuk rumah Anda.
            </p>
          </div>
        </ScrollAnimation>

        {/* Quick Benefits */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Keunggulan Utama
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {iconKeuntungan.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* Detailed Benefits */}
        {keuntunganList.map((item, itemIndex) => (
          <ScrollAnimation key={itemIndex}>
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 font-brand flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                  {itemIndex + 1}
                </span>
                {item.title}
              </h2>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-3">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        ))}

        {/* Comparison Table */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Perbandingan Baja Ringan vs Besi Biasa
          </h2>
          <Card className="mb-8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-3 text-left text-sm">Aspek</th>
                    <th className="p-3 text-left text-sm text-blue-300">Baja Ringan</th>
                    <th className="p-3 text-left text-sm text-orange-300">Besi Biasa</th>
                  </tr>
                </thead>
                <tbody>
                  {perbandingan.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-3 text-sm font-medium text-slate-800">{item.aspek}</td>
                      <td className="p-3 text-sm text-blue-600">{item.bajaRingan}</td>
                      <td className="p-3 text-sm text-slate-600">{item.besiBiasa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                Tertarik dengan Kanopi Baja Ringan?
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Konsultasi gratis dengan tim ahli MBUZENK ZETRO. Kami bantu pilihkan kanopi terbaik untuk rumah Anda!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg"
                  onClick={() => openWhatsApp('Halo, saya ingin pesan kanopi baja ringan.')}
                  className="bg-white text-blue-600 hover:bg-blue-50 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pesan Kanopi Sekarang
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Related Articles */}
        <RelatedArticles currentSlug="keuntungan-kanopi-baja-ringan" />
        
        {/* Related Services */}
        <ScrollAnimation>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">
              Layanan Terkait:
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/layanan/kanopi-minimalis">
                <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Kanopi Minimalis</Badge>
              </Link>
              <Link href="/layanan/pagar-besi">
                <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Pagar Besi</Badge>
              </Link>
              <Link href="/layanan/tangga-besi">
                <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Tangga Besi</Badge>
              </Link>
              <Link href="/layanan/renovasi-rumah">
                <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">Renovasi Rumah</Badge>
              </Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Author */}
        <ScrollAnimation>
          <Card className="mt-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
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
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
