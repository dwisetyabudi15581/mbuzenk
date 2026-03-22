'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Award, Users, Shield, Clock, MapPin, Star } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const tipsMemilih = [
  {
    title: 'Cek Pengalaman dan Track Record',
    points: [
      'Cari tahu sudah berapa lama bengkel tersebut beroperasi',
      'Tanyakan proyek-proyek yang pernah dikerjakan',
      'Lihat portofolio hasil karya mereka',
      'Bengkel berpengalaman biasanya lebih konsisten kualitasnya',
    ],
  },
  {
    title: 'Periksa Testimoni dan Review Pelanggan',
    points: [
      'Baca review di Google Maps atau media sosial',
      'Tanya rekomendasi dari teman atau tetangga',
      'Perhatikan testimoni di website bengkel tersebut',
      'Review negatif juga perlu diperhatikan',
    ],
  },
  {
    title: 'Pastikan Ada Garansi Pekerjaan',
    points: [
      'Tanyakan garansi konstruksi (biasanya 1-2 tahun)',
      'Garansi finishing cat (minimal 6 bulan)',
      'Service after sales untuk perbaikan',
      'Garansi tertulis lebih baik dari lisan',
    ],
  },
  {
    title: 'Lihat Langsung Workshop dan Material',
    points: [
      'Kunjungi bengkel untuk melihat kondisi workshop',
      'Periksa kualitas material yang digunakan',
      'Lihat peralatan dan mesin yang dimiliki',
      'Bengkel profesional biasanya memiliki workshop terorganisir',
    ],
  },
  {
    title: 'Bandingkan Penawaran dengan Bijak',
    points: [
      'Minta penawaran detail (material, tenaga kerja, waktu)',
      'Jangan hanya fokus pada harga termurah',
      'Perhatikan spesifikasi material yang ditawarkan',
      'Tanyakan biaya tambahan yang mungkin muncul',
    ],
  },
  {
    title: 'Komunikasi dan Konsultasi',
    points: [
      'Pilih bengkel yang responsif dan mudah dihubungi',
      'Perhatikan apakah mau memberikan konsultasi gratis',
      'Tim profesional akan mendengarkan kebutuhan Anda',
      'Evaluasi kemampuan mereka memberikan solusi',
    ],
  },
]

const kriteriaBengkelBaik = [
  { icon: Award, title: 'Berpengalaman', desc: 'Minimal 5 tahun' },
  { icon: Users, title: 'Banyak Pelanggan', desc: 'Testimoni positif' },
  { icon: Shield, title: 'Bergaransi', desc: 'Garansi resmi' },
  { icon: Clock, title: 'Tepat Waktu', desc: 'Komitmen deadline' },
  { icon: MapPin, title: 'Mudah Ditemukan', desc: 'Lokasi jelas' },
  { icon: Star, title: 'Bintang 4+', desc: 'Rating Google' },
]

export default function ArticleContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-emerald-400/20 text-emerald-200 border-emerald-400/30 mb-4">
            PANDUAN PEMILIHAN
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Cara Memilih Bengkel Las yang Tepat dan Terpercaya
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base mb-6">
            Dipublikasikan pada Maret 2024 | MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang jasa bengkel las.')}
              className="bg-white text-emerald-600 hover:bg-emerald-50 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Konsultasi Gratis
            </Button>
            <Button 
              variant="outline"
              onClick={() => makeCall()}
              className="border-emerald-300 text-white hover:bg-emerald-700 min-h-[48px]"
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
              Memilih <strong>bengkel las yang tepat</strong> sangat penting untuk mendapatkan hasil pekerjaan 
              yang berkualitas dan tahan lama. Dengan banyaknya pilihan bengkel las di luar sana, 
              Anda perlu memilih dengan bijak. Artikel ini akan membantu Anda mengidentifikasi bengkel las 
              profesional dan terpercaya.
            </p>
          </div>
        </ScrollAnimation>

        {/* Kriteria */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Kriteria Bengkel Las Profesional
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {kriteriaBengkelBaik.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* Tips Section */}
        {tipsMemilih.map((tip, tipIndex) => (
          <ScrollAnimation key={tipIndex}>
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 font-brand flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm">
                  {tipIndex + 1}
                </span>
                {tip.title}
              </h2>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-3">
                    {tip.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        ))}

        {/* Warning */}
        <ScrollAnimation>
          <Card className="bg-amber-50 border-amber-200 mb-8">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg font-bold text-amber-800 mb-3 font-brand">
                ⚠️ Tanda Bengkel Las yang Perlu Dihindari
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-amber-700 text-sm">
                  <span className="text-amber-500">•</span>
                  Tidak mau memberikan alamat workshop yang jelas
                </li>
                <li className="flex items-start gap-2 text-amber-700 text-sm">
                  <span className="text-amber-500">•</span>
                  Tidak ada portofolio atau testimoni pelanggan
                </li>
                <li className="flex items-start gap-2 text-amber-700 text-sm">
                  <span className="text-amber-500">•</span>
                  Menolak memberikan garansi tertulis
                </li>
                <li className="flex items-start gap-2 text-amber-700 text-sm">
                  <span className="text-amber-500">•</span>
                  Meminta full payment di muka tanpa kontrak
                </li>
                <li className="flex items-start gap-2 text-amber-700 text-sm">
                  <span className="text-amber-500">•</span>
                  Sulit dihubungi atau tidak responsif
                </li>
              </ul>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-emerald-500 to-emerald-600 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                MBUZENK ZETRO - Bengkel Las Terpercaya
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Pengalaman 18+ tahun | Garansi resmi | Testimoni pelanggan positif | Melayani Magetan, Madiun, Ngawi, Ponorogo
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg"
                  onClick={() => openWhatsApp('Halo, saya tertarik dengan jasa bengkel las MBUZENK ZETRO.')}
                  className="bg-white text-emerald-600 hover:bg-emerald-50 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Related Services */}
        <ScrollAnimation>
          <div className="mt-12">
            <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">
              Layanan Kami:
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/layanan/bengkel-las">
                <Badge variant="outline" className="cursor-pointer hover:bg-emerald-50">Bengkel Las</Badge>
              </Link>
              <Link href="/layanan/kanopi-minimalis">
                <Badge variant="outline" className="cursor-pointer hover:bg-emerald-50">Kanopi Minimalis</Badge>
              </Link>
              <Link href="/layanan/pagar-besi">
                <Badge variant="outline" className="cursor-pointer hover:bg-emerald-50">Pagar Besi</Badge>
              </Link>
              <Link href="/layanan/teralis-jendela">
                <Badge variant="outline" className="cursor-pointer hover:bg-emerald-50">Teralis Jendela</Badge>
              </Link>
              <Link href="/layanan/renovasi-rumah">
                <Badge variant="outline" className="cursor-pointer hover:bg-emerald-50">Renovasi Rumah</Badge>
              </Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Author */}
        <ScrollAnimation>
          <Card className="mt-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
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
          <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
