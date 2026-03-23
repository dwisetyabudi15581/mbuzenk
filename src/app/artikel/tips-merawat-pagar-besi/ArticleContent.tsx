'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Shield, Droplets, Sun, Wrench, Clock } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { RelatedArticles } from '@/components/ui/related-articles'

const tipsMerawat = [
  {
    title: 'Bersihkan Secara Rutin',
    points: [
      'Gunakan air dan sabun untuk membersihkan debu dan kotoran',
      'Sikat bagian yang sulit dijangkau dengan sikat lembut',
      'Lakukan pembersihan minimal 2 minggu sekali',
      'Keringkan pagar setelah dicuci dengan kain bersih',
    ],
  },
  {
    title: 'Perhatikan Area yang Mudah Berkarat',
    points: [
      'Bagian bawah pagar yang sering terkena percikan air hujan',
      'Sambungan dan lasan yang rentan terhadap karat',
      'Engsel dan kunci yang perlu pelumasan rutin',
      'Bagian yang tergores atau cat mengelupas',
    ],
  },
  {
    title: 'Lapisi dengan Cat Anti Karat',
    points: [
      'Gunakan cat dasar (primer) anti karat sebelum cat akhir',
      'Pilih cat khusus untuk besi outdoor',
      'Aplikasikan 2-3 lapis cat untuk hasil maksimal',
      'Ulangi pengecatan setiap 2-3 tahun sekali',
    ],
  },
  {
    title: 'Hindari Kontak dengan Bahan Korosif',
    points: [
      'Jauhkan pagar dari pupuk dan bahan kimia keras',
      'Pastikan drainase sekitar pagar baik agar tidak tergenang air',
      'Jangan menempelkan benda logam berbeda yang bisa menyebabkan korosi galvanis',
      'Pangkas tanaman yang terlalu dekat dengan pagar',
    ],
  },
  {
    title: 'Perbaikan Segera Jika Ada Kerusakan',
    points: [
      'Tutup segera bagian cat yang mengelupas',
      'Perbaiki bagian yang bengkok atau penyok',
      'Ganti engsel atau kunci yang sudah rusak',
      'Hubungi bengkel las profesional untuk perbaikan besar',
    ],
  },
]

const keuntunganPerawatan = [
  { icon: Shield, title: 'Lebih Awet', desc: 'Pagar tahan hingga 15-20 tahun' },
  { icon: Droplets, title: 'Anti Karat', desc: 'Terhindar dari korosi' },
  { icon: Sun, title: 'Warna Tetap', desc: 'Cat tidak mudah pudar' },
  { icon: Clock, title: 'Hemat Biaya', desc: 'Tidak sering ganti pagar' },
]

export default function ArticleContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
            ARTIKEL TIPS
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Tips Merawat Pagar Besi Agar Tidak Berkarat
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Dipublikasikan pada Maret 2024 | MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang perawatan pagar besi.')}
              className="bg-orange-500 text-white hover:bg-orange-600 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Konsultasi Gratis
            </Button>
            <Button 
              onClick={() => makeCall()}
              className="bg-slate-700/50 text-white border border-slate-500 hover:bg-slate-700 min-h-[48px]"
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
              <strong>Pagar besi</strong> adalah investasi jangka panjang untuk keamanan dan estetika rumah Anda. 
              Namun tanpa perawatan yang tepat, pagar besi bisa cepat berkarat dan rusak. Di artikel ini, 
              kami akan membagikan tips lengkap cara merawat pagar besi agar tetap awet dan terlihat seperti baru.
            </p>
          </div>
        </ScrollAnimation>

        {/* Keuntungan */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Mengapa Perawatan Pagar Penting?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {keuntunganPerawatan.map((item, index) => (
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
        {tipsMerawat.map((tip, tipIndex) => (
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

        {/* Additional Info */}
        <ScrollAnimation>
          <Card className="bg-slate-50 border-slate-200 mb-8">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-3 font-brand flex items-center gap-2">
                <Wrench className="w-5 h-5 text-orange-500" />
                Butuh Perawatan Profesional?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-4">
                Jika pagar besi Anda sudah parah berkarat atau membutuhkan perbaikan besar, 
                sebaiknya hubungi bengkel las profesional. MBUZENK ZETRO menyediakan layanan 
                perawatan dan perbaikan pagar besi dengan garansi hasil.
              </p>
              <Button 
                onClick={() => openWhatsApp('Halo, saya ingin servis/perbaikan pagar besi.')}
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-orange-500 to-red-600 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                Butuh Pagar Besi Baru?
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Konsultasi gratis dengan tim ahli MBUZENK ZETRO. Kami bantu pilihkan pagar terbaik untuk rumah Anda!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg"
                  onClick={() => openWhatsApp('Halo, saya ingin pesan pagar besi baru.')}
                  className="bg-white text-orange-600 hover:bg-white/90 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pesan Pagar Sekarang
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Related Articles */}
        <RelatedArticles currentSlug="tips-merawat-pagar-besi" />
        
        {/* Related Services */}
        <ScrollAnimation>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">
              Layanan Terkait:
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/layanan/pagar-besi">
                <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Pagar Besi</Badge>
              </Link>
              <Link href="/layanan/kanopi-minimalis">
                <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Kanopi Minimalis</Badge>
              </Link>
              <Link href="/layanan/teralis-jendela">
                <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Teralis Jendela</Badge>
              </Link>
              <Link href="/layanan/renovasi-rumah">
                <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Renovasi Rumah</Badge>
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
