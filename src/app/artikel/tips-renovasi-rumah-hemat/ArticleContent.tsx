'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Calculator, FileText, Users, Clock, Shield, Lightbulb } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const tipsRenovasi = [
  {
    title: 'Rencanakan dengan Matang',
    points: [
      'Buat daftar prioritas bagian yang perlu direnovasi',
      'Tentukan budget realistis dan tambahkan 10-20% untuk cadangan',
      'Konsultasikan dengan kontraktor profesional',
      'Buat timeline pengerjaan yang jelas',
    ],
  },
  {
    title: 'Pilih Material yang Tepat',
    points: [
      'Bandingkan harga dari beberapa supplier',
      'Pilih material dengan kualitas standar, bukan termurah atau termahal',
      'Manfaatkan promo dan diskon material bangunan',
      'Pertimbangkan material lokal yang lebih terjangkau',
    ],
  },
  {
    title: 'Manfaatkan Struktur yang Ada',
    points: [
      'Jangan merobohkan bagian yang masih bagus',
      'Renovasi bertahap sesuai prioritas dan budget',
      'Maksimalkan tata letak yang sudah ada',
      'Fokus pada perbaikan fungsi, bukan sekadar penampilan',
    ],
  },
  {
    title: 'Pilih Kontraktor yang Tepat',
    points: [
      'Minta rekomendasi dari teman atau keluarga',
      'Bandingkan penawaran dari beberapa kontraktor',
      'Periksa portofolio dan testimoni pelanggan',
      'Pastikan ada garansi pekerjaan',
    ],
  },
  {
    title: 'Waktu yang Strategis',
    points: [
      'Hindari renovasi di musim hujan (biaya bisa bertambah)',
      'Manfaatkan momentum tahun baru atau hari besar untuk promo',
      'Book kontraktor jauh hari untuk mendapat harga lebih baik',
      'Pertimbangkan renovasi saat low season',
    ],
  },
  {
    title: 'DIY untuk Bagian Sederhana',
    points: [
      'Cat ulang dinding bisa dikerjakan sendiri',
      'Dekorasi dan aksesoris bisa di-DIY',
      'Pembersihan dan penataan tidak perlu jasa khusus',
      'Untuk pekerjaan teknis, tetap gunakan profesional',
    ],
  },
]

const kesalahanUmum = [
  'Tidak membuat perencanaan yang jelas',
  'Memilih kontraktor hanya berdasarkan harga termurah',
  'Tidak menyiapkan dana cadangan',
  'Sering mengubah rencana di tengah pengerjaan',
  'Tidak memperhatikan perizinan dan regulasi',
  'Mengabaikan aspek fungsionalitas',
]

const iconTips = [
  { icon: Calculator, title: 'Budget Jelas', desc: 'Perencanaan keuangan' },
  { icon: FileText, title: 'Rencana Matang', desc: 'Timeline detail' },
  { icon: Users, title: 'Tim Tepat', desc: 'Kontraktor berpengalaman' },
  { icon: Shield, title: 'Bergaransi', desc: 'Hasil terjamin' },
]

export default function ArticleContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-600 to-violet-800 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-violet-400/20 text-violet-200 border-violet-400/30 mb-4">
            ARTIKEL TIPS
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Tips Renovasi Rumah Hemat Biaya tapi Berkualitas
          </h1>
          <p className="text-violet-100 text-sm sm:text-base mb-6">
            Dipublikasikan pada Maret 2024 | MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi renovasi rumah.')}
              className="bg-white text-violet-600 hover:bg-violet-50 min-h-[48px]"
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
              <strong>Renovasi rumah</strong> tidak selalu harus menguras kantong. Dengan perencanaan yang tepat 
              dan strategi yang bijak, Anda bisa mendapatkan rumah impian tanpa mengorbankan kualitas. 
              Artikel ini akan membagikan tips lengkap untuk renovasi rumah hemat biaya tapi tetap berkualitas.
            </p>
          </div>
        </ScrollAnimation>

        {/* Quick Tips */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Kunci Sukses Renovasi Hemat
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {iconTips.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-violet-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* Tips Section */}
        {tipsRenovasi.map((tip, tipIndex) => (
          <ScrollAnimation key={tipIndex}>
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 font-brand flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-500 text-white rounded-full flex items-center justify-center text-sm">
                  {tipIndex + 1}
                </span>
                {tip.title}
              </h2>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-3">
                    {tip.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        ))}

        {/* Kesalahan Umum */}
        <ScrollAnimation>
          <Card className="bg-red-50 border-red-200 mb-8">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg font-bold text-red-800 mb-3 font-brand flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Kesalahan Umum yang Harus Dihindari
              </h3>
              <ul className="space-y-2">
                {kesalahanUmum.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-red-700 text-sm">
                    <span className="text-red-500">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-violet-500 to-violet-600 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                Butuh Jasa Renovasi Rumah?
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Konsultasi gratis dengan tim ahli MBUZENK ZETRO. Kami bantu wujudkan rumah impian Anda dengan budget yang sesuai!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg"
                  onClick={() => openWhatsApp('Halo, saya ingin konsultasi renovasi rumah hemat.')}
                  className="bg-white text-violet-600 hover:bg-violet-50 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Konsultasi Sekarang
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
              <Link href="/layanan/renovasi-rumah">
                <Badge variant="outline" className="cursor-pointer hover:bg-violet-50">Renovasi Rumah</Badge>
              </Link>
              <Link href="/layanan/kanopi-minimalis">
                <Badge variant="outline" className="cursor-pointer hover:bg-violet-50">Kanopi Minimalis</Badge>
              </Link>
              <Link href="/layanan/pagar-besi">
                <Badge variant="outline" className="cursor-pointer hover:bg-violet-50">Pagar Besi</Badge>
              </Link>
              <Link href="/layanan/tangga-besi">
                <Badge variant="outline" className="cursor-pointer hover:bg-violet-50">Tangga Besi</Badge>
              </Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Author */}
        <ScrollAnimation>
          <Card className="mt-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
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
          <Link href="/" className="inline-flex items-center text-violet-600 hover:text-violet-700">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
