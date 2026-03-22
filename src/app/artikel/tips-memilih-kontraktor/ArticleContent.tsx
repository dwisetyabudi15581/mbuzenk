'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Award, FileText, Users, Shield, Clock, AlertTriangle, Star } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const tipsMemilih = [
  {
    title: 'Periksa Legalitas dan Izin',
    points: [
      'Pastikan kontraktor memiliki SIUJK (Surat Izin Usaha Jasa Konstruksi)',
      'Cek NPWP perusahaan atau badan usaha',
      'Tanyakan anggota asosiasi kontraktor (GAPENSI, dll)',
      'Verifikasi alamat kantor yang jelas',
    ],
  },
  {
    title: 'Evaluasi Pengalaman dan Track Record',
    points: [
      'Tanyakan sudah berapa lama beroperasi',
      'Minta daftar proyek yang pernah dikerjakan',
      'Cek portofolio di website atau media sosial',
      'Kunjungi proyek yang sedang berjalan jika memungkinkan',
    ],
  },
  {
    title: 'Cek Testimoni dan Referensi',
    points: [
      'Baca review di Google Maps atau platform online',
      'Minta referensi dari klien sebelumnya',
      'Hubungi klien referensi untuk konfirmasi',
      'Perhatikan rating dan jumlah review',
    ],
  },
  {
    title: 'Minta Penawaran Detail',
    points: [
      'Minta RAB (Rencana Anggaran Biaya) tertulis',
      'Pastikan detail material, upah, dan waktu',
      'Tanyakan biaya tambahan yang mungkin muncul',
      'Bandingkan dengan kontraktor lain',
    ],
  },
  {
    title: 'Periksa Garansi dan Kontrak',
    points: [
      'Tanyakan garansi pekerjaan (biasanya 3-6 bulan)',
      'Pastikan ada kontrak kerja tertulis',
      'Baca syarat dan ketentuan dengan teliti',
      'Tanyakan layanan after-sales',
    ],
  },
  {
    title: 'Komunikasi dan Responsif',
    points: [
      'Pilih kontraktor yang mudah dihubungi',
      'Perhatikan kecepatan respons awal',
      'Evaluasi kemampuan menjelaskan teknis',
      'Pastikan ada kemauan untuk konsultasi',
    ],
  },
]

const warningSigns = [
  'Meminta full payment di muka tanpa kontrak',
  'Tidak mau memberikan alamat kantor jelas',
  'Harga terlalu murah dibanding pasar',
  'Tidak ada portofolio atau testimoni',
  'Menolak memberikan garansi tertulis',
  'Sulit dihubungi atau tidak responsif',
]

const checklist = [
  { icon: Award, title: 'Berpengalaman', desc: 'Min. 5 tahun' },
  { icon: FileText, title: 'Bergaransi', desc: 'Kontrak tertulis' },
  { icon: Users, title: 'Testimoni+', desc: 'Rating baik' },
  { icon: Shield, title: 'Legal', desc: 'Izin lengkap' },
  { icon: Clock, title: 'Tepat Waktu', desc: 'Komitmen deadline' },
  { icon: Star, title: 'Profesional', desc: 'Tim berpengalaman' },
]

export default function ArticleContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            PANDUAN PEMILIHAN
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Tips Memilih Kontraktor Renovasi yang Terpercaya
          </h1>
          <p className="text-white/80 text-sm sm:text-base mb-6">
            Dipublikasikan pada Maret 2024 | MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi renovasi dengan kontraktor profesional.')}
              className="bg-white text-purple-600 hover:bg-purple-50 min-h-[48px]"
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
              <strong>Memilih kontraktor</strong> yang tepat adalah kunci suksesnya proyek renovasi rumah Anda. 
              Kontraktor yang salah bisa menyebabkan budget membengkak, hasil tidak sesuai, hingga proyek mangkrak. 
              Artikel ini akan membantu Anda mengidentifikasi kontraktor terpercaya dan profesional.
            </p>
          </div>
        </ScrollAnimation>

        {/* Checklist */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Checklist Kontraktor Terpercaya
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {checklist.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-purple-500" />
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
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">
                  {tipIndex + 1}
                </span>
                {tip.title}
              </h2>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-3">
                    {tip.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        ))}

        {/* Warning Signs */}
        <ScrollAnimation>
          <Card className="bg-amber-50 border-amber-200 mb-8">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg font-bold text-amber-800 mb-4 font-brand flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Tanda Kontraktor yang Harus Dihindari
              </h3>
              <ul className="space-y-2">
                {warningSigns.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-amber-700 text-sm">
                    <span className="text-amber-500">⚠️</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                MBUZENK ZETRO - Kontraktor Terpercaya
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Pengalaman 19+ tahun | Garansi resmi | Testimoni positif | Melayani Magetan & sekitarnya
              </p>
              <Button 
                size="lg"
                onClick={() => openWhatsApp('Halo, saya tertarik menggunakan jasa renovasi MBUZENK ZETRO.')}
                className="bg-white text-purple-600 hover:bg-purple-50 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Related */}
        <ScrollAnimation>
          <div className="mt-12">
            <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">Layanan Kami:</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/layanan/renovasi-rumah"><Badge variant="outline" className="cursor-pointer hover:bg-purple-50">Renovasi Rumah</Badge></Link>
              <Link href="/layanan/bengkel-las"><Badge variant="outline" className="cursor-pointer hover:bg-purple-50">Bengkel Las</Badge></Link>
              <Link href="/layanan/kanopi-minimalis"><Badge variant="outline" className="cursor-pointer hover:bg-purple-50">Kanopi Minimalis</Badge></Link>
              <Link href="/layanan/pagar-besi"><Badge variant="outline" className="cursor-pointer hover:bg-purple-50">Pagar Besi</Badge></Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Author */}
        <ScrollAnimation>
          <Card className="mt-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">MZ</div>
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
          <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
