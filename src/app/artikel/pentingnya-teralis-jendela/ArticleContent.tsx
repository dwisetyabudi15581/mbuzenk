'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Shield, AlertTriangle, Lock, Eye, Home } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { RelatedArticles } from '@/components/ui/related-articles'

const manfaatTeralis = [
  {
    icon: Shield,
    title: 'Proteksi dari Pencurian',
    desc: 'Menghalangi akses masuk pencuri melalui jendela, memberikan keamanan ekstra untuk keluarga Anda',
  },
  {
    icon: Lock,
    title: 'Keamanan 24 Jam',
    desc: 'Teralis bekerja sepanjang waktu melindungi rumah, bahkan saat Anda sedang tidak di rumah',
  },
  {
    icon: Eye,
    title: 'Nilai Estetika',
    desc: 'Teralis modern bisa mempercantik tampilan rumah dengan desain minimalis atau artistik',
  },
  {
    icon: Home,
    title: 'Perlindungan Anak',
    desc: 'Mencegah anak-anak jatuh dari jendela, terutama untuk rumah dengan jendela di lantai 2',
  },
]

const statistik = [
  { angka: '70%', keterangan: 'pencuri masuk melalui jendela' },
  { angka: '3x', keterangan: 'lebih aman dengan teralis' },
  { angka: '85%', keterangan: 'pencuri urungkan niat lihat teralis' },
]

const jenisTeralis = [
  {
    nama: 'Teralis Minimalis',
    deskripsi: 'Desain simpel dengan garis-garis horizontal/vertikal',
    kelebihan: ['Tampilan modern', 'Mudah dibersihkan', 'Harga ekonomis', 'Cocok untuk rumah minimalis'],
  },
  {
    nama: 'Teralis Artistik',
    deskripsi: 'Dengan ornamen dan ukiran untuk kesan klasik',
    kelebihan: ['Tampilan unik', 'Nilai seni tinggi', 'Custom design', 'Kesan mewah'],
  },
  {
    nama: 'Teralis Security',
    deskripsi: 'Besi tebal dengan konstruksi kokoh untuk keamanan maksimal',
    kelebihan: ['Keamanan maksimal', 'Besi tebal', 'Sistem kunci tambahan', 'Anti bongkar'],
  },
  {
    nama: 'Teralis Invisible',
    deskripsi: 'Desain minimalis hampir tak terlihat dari jauh',
    kelebihan: ['Tidak menghalangi view', 'Minimalis maksimal', 'Modern', 'Tetap aman'],
  },
]

const tipsKeamanan = [
  'Pilih besi dengan ketebalan minimal 12mm untuk keamanan optimal',
  'Pastikan jarak antar besi maksimal 12cm agar tidak bisa dimasuki',
  'Gunakan sistem pengelasan yang kuat dan rapi',
  'Tambahkan kunci untuk teralis yang bisa dibuka',
  'Cat dengan anti karat untuk ketahanan jangka panjang',
  'Periksa kondisi teralis secara berkala',
]

export default function ArticleContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            KEAMANAN RUMAH
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Pentingnya Teralis Jendela untuk Keamanan Rumah
          </h1>
          <p className="text-white/80 text-sm sm:text-base mb-6">
            Dipublikasikan pada Maret 2024 | MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang teralis jendela.')}
              className="bg-white text-red-600 hover:bg-red-50 min-h-[48px]"
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
              <strong>Teralis jendela</strong> bukan sekadar aksesoris rumah, tetapi investasi keamanan yang sangat penting. 
              Dengan meningkatnya kasus pencurian, teralis menjadi lapisan pertahanan pertama untuk melindungi keluarga 
              dan harta benda Anda. Artikel ini akan membahas mengapa teralis sangat penting dan bagaimana memilih yang tepat.
            </p>
          </div>
        </ScrollAnimation>

        {/* Statistik */}
        <ScrollAnimation>
          <Card className="bg-red-50 border-red-200 mb-8">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg font-bold text-red-800 mb-4 font-brand flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Fakta Keamanan Rumah
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                {statistik.map((item, index) => (
                  <div key={index}>
                    <p className="text-2xl sm:text-3xl font-bold text-red-600">{item.angka}</p>
                    <p className="text-slate-600 text-xs sm:text-sm">{item.keterangan}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Manfaat */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Manfaat Memasang Teralis Jendela
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {manfaatTeralis.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-red-500" />
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

        {/* Jenis Teralis */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
          Jenis-Jenis Teralis Jendela
        </h2>
        <div className="grid gap-4 mb-8">
          {jenisTeralis.map((teralis, index) => (
            <ScrollAnimation key={index}>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg font-bold text-slate-800 font-brand mb-2">{teralis.nama}</h3>
                  <p className="text-slate-600 text-sm mb-3">{teralis.deskripsi}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {teralis.kelebihan.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-red-500" />
                        {item}
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
            Tips Memilih Teralis yang Aman
          </h2>
          <Card className="mb-8">
            <CardContent className="p-4 sm:p-6">
              <ul className="space-y-3">
                {tipsKeamanan.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
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
          <Card className="bg-gradient-to-r from-red-500 to-red-600 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                Lindungi Rumah Anda Sekarang!
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Konsultasi gratis dengan tim ahli MBUZENK ZETRO. Kami bantu pilihkan teralis terbaik untuk keamanan rumah Anda!
              </p>
              <Button 
                size="lg"
                onClick={() => openWhatsApp('Halo, saya ingin pasang teralis jendela.')}
                className="bg-white text-red-600 hover:bg-red-50 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Pasang Teralis Sekarang
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Related Articles */}
        <RelatedArticles currentSlug="pentingnya-teralis-jendela" />
        
        {/* Related */}
        <ScrollAnimation>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">Layanan Terkait:</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/layanan/teralis-jendela"><Badge variant="outline" className="cursor-pointer hover:bg-red-50">Teralis Jendela</Badge></Link>
              <Link href="/layanan/pagar-besi"><Badge variant="outline" className="cursor-pointer hover:bg-red-50">Pagar Besi</Badge></Link>
              <Link href="/layanan/kanopi-minimalis"><Badge variant="outline" className="cursor-pointer hover:bg-red-50">Kanopi Minimalis</Badge></Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Author */}
        <ScrollAnimation>
          <Card className="mt-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">MZ</div>
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
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
