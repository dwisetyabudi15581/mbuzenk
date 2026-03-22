'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Home, TrendingUp, Heart, Shield, Zap, Users } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const manfaatRenovasi = [
  {
    icon: Home,
    title: 'Kenyamanan Meningkat',
    desc: 'Rumah yang direnovasi akan lebih nyaman ditinggali dengan tata letak yang lebih efisien dan fasilitas yang lebih modern',
  },
  {
    icon: TrendingUp,
    title: 'Nilai Properti Naik',
    desc: 'Renovasi yang tepat bisa meningkatkan nilai jual rumah hingga 20-50% dari investasi awal',
  },
  {
    icon: Heart,
    title: 'Kesehatan Lebih Baik',
    desc: 'Renovasi dapat mengatasi masalah kelembaban, ventilasi, dan sanitasi yang berdampak pada kesehatan penghuni',
  },
  {
    icon: Shield,
    title: 'Keamanan Terjamin',
    desc: 'Memperbaiki struktur yang rapuh dan menambah fitur keamanan untuk perlindungan keluarga',
  },
  {
    icon: Zap,
    title: 'Efisiensi Energi',
    desc: 'Renovasi bisa mengurangi biaya listrik dengan pencahayaan alami dan sirkulasi udara yang lebih baik',
  },
  {
    icon: Users,
    title: 'Kebutuhan Keluarga',
    desc: 'Menyesuaikan ruang dengan pertambahan anggota keluarga atau kebutuhan gaya hidup baru',
  },
]

const jenisRenovasi = [
  {
    nama: 'Renovasi Total',
    deskripsi: 'Perombakan menyeluruh seluruh bagian rumah',
    keuntungan: ['Tampilan baru total', 'Mengatasi semua masalah', 'Nilai properti maksimal', 'Sesuai kebutuhan saat ini'],
  },
  {
    nama: 'Renovasi Bagian',
    deskripsi: 'Fokus pada area tertentu seperti dapur atau kamar mandi',
    keuntungan: ['Biaya lebih terkontrol', 'Hasil cepat terlihat', 'Tidak mengganggu aktivitas', 'Prioritas sesuai kebutuhan'],
  },
  {
    nama: 'Renovasi Struktural',
    deskripsi: 'Perbaikan fondasi, atap, atau struktur penopang',
    keuntungan: ['Keamanan terjamin', 'Mencegah kerusakan lebih parah', 'Umur rumah lebih panjang', 'Investasi jangka panjang'],
  },
  {
    nama: 'Renovasi Estetika',
    deskripsi: 'Fokus pada penampilan dan dekorasi',
    keuntungan: ['Tampilan lebih fresh', 'Biaya relatif ringan', 'Proses cepat', 'Mood penghuni meningkat'],
  },
]

const tipsRenovasi = [
  'Tentukan prioritas renovasi berdasarkan kebutuhan',
  'Siapkan budget dengan cadangan 10-20%',
  'Pilih kontraktor berpengalaman dan bergaransi',
  'Buat timeline yang realistis',
  'Komunikasikan kebutuhan dengan jelas',
  'Siapkan rencana cadangan jika ada kendala',
]

export default function ArticleContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-cyan-600 to-cyan-800 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            INFORMASI RENOVASI
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Manfaat Renovasi Rumah untuk Kualitas Hidup Lebih Baik
          </h1>
          <p className="text-white/80 text-sm sm:text-base mb-6">
            Dipublikasikan pada Maret 2024 | MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi renovasi rumah.')}
              className="bg-white text-cyan-600 hover:bg-cyan-50 min-h-[48px]"
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
              <strong>Renovasi rumah</strong> bukan sekadar memperbaiki yang rusak atau mengubah tampilan. 
              Lebih dari itu, renovasi adalah investasi untuk kualitas hidup yang lebih baik. 
              Dari kenyamanan hingga nilai investasi, artikel ini akan membahas berbagai manfaat renovasi rumah.
            </p>
          </div>
        </ScrollAnimation>

        {/* Manfaat */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Manfaat Utama Renovasi Rumah
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {manfaatRenovasi.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* Jenis Renovasi */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
          Jenis-Jenis Renovasi
        </h2>
        <div className="grid gap-4 mb-8">
          {jenisRenovasi.map((item, index) => (
            <ScrollAnimation key={index}>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg font-bold text-slate-800 font-brand mb-2">{item.nama}</h3>
                  <p className="text-slate-600 text-sm mb-3">{item.deskripsi}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {item.keuntungan.map((k, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                        {k}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Tips */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Tips Renovasi Sukses
          </h2>
          <Card className="mb-8">
            <CardContent className="p-4 sm:p-6">
              <ul className="space-y-3">
                {tipsRenovasi.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-slate-700 text-sm sm:text-base">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-cyan-500 to-cyan-600 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                Siap Renovasi Rumah Anda?
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Konsultasi gratis dengan tim ahli MBUZENK ZETRO. Wujudkan rumah impian Anda!
              </p>
              <Button 
                size="lg"
                onClick={() => openWhatsApp('Halo, saya ingin konsultasi renovasi rumah.')}
                className="bg-white text-cyan-600 hover:bg-cyan-50 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Sekarang
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Related */}
        <ScrollAnimation>
          <div className="mt-12">
            <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">Layanan Terkait:</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/layanan/renovasi-rumah"><Badge variant="outline" className="cursor-pointer hover:bg-cyan-50">Renovasi Rumah</Badge></Link>
              <Link href="/layanan/kanopi-minimalis"><Badge variant="outline" className="cursor-pointer hover:bg-cyan-50">Kanopi Minimalis</Badge></Link>
              <Link href="/layanan/pagar-besi"><Badge variant="outline" className="cursor-pointer hover:bg-cyan-50">Pagar Besi</Badge></Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Author */}
        <ScrollAnimation>
          <Card className="mt-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">MZ</div>
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
          <Link href="/" className="inline-flex items-center text-cyan-600 hover:text-cyan-700">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
