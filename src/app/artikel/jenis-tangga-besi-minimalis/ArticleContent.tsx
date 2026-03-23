'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Home, RotateCcw, ArrowDownUp, Circle, Ruler, Palette } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { RelatedArticles } from '@/components/ui/related-articles'

const jenisTangga = [
  {
    title: 'Tangga Spiral',
    desc: 'Tangga berbentuk melingkar yang menghemat ruang',
    kelebihan: [
      'Hemat ruang, cocok untuk rumah kecil',
      'Desain artistik dan modern',
      'Menjadi titik fokus interior',
      'Bisa ditempatkan di sudut ruangan',
    ],
    kekurangan: [
      'Tidak cocok untuk lalu lintas tinggi',
      'Sulit untuk membawa barang besar',
      'Perlu perhitungan presisi',
    ],
    cocok: 'Rumah minimalis dengan lahan terbatas, apartemen, atau sebagai akses sekunder',
  },
  {
    title: 'Tangga Lurus',
    desc: 'Tangga garis lurus tanpa belokan',
    kelebihan: [
      'Mudah dipasang dan dihitung',
      'Nyaman untuk naik turun',
      'Mudah membawa barang',
      'Biaya relatif lebih ekonomis',
    ],
    kekurangan: [
      'Membutuhkan ruang panjang yang cukup',
      'Bisa terlihat monoton',
    ],
    cocok: 'Rumah dengan ruang cukup, akses utama, kebutuhan fungsional',
  },
  {
    title: 'Tangga L (Belokan 90°)',
    desc: 'Tangga dengan satu belokan membentuk huruf L',
    kelebihan: [
      'Menghemat ruang dibanding tangga lurus',
      'Lebih aman dengan adanya bordes',
      'Variasi desain lebih banyak',
      'Cocok untuk berbagai ukuran ruangan',
    ],
    kekurangan: [
      'Perhitungan lebih kompleks',
      'Butuh perencanaan matang',
    ],
    cocok: 'Rumah dengan ruang terbatas, sudut ruangan yang tidak memungkinkan tangga lurus',
  },
  {
    title: 'Tangga U (Belokan 180°)',
    desc: 'Tangga dengan dua belokan membentuk huruf U',
    kelebihan: [
      'Paling hemat ruang untuk tinggi tertentu',
      'Terlihat mewah dan elegan',
      'Nyaman dengan istirahat di tengah',
      'Ideal untuk rumah dua lantai',
    ],
    kekurangan: [
      'Konstruksi lebih kompleks',
      'Biaya lebih tinggi',
      'Perlu ruang lebar',
    ],
    cocok: 'Rumah mewah minimalis, hotel, gedung, rumah dengan ruang lega',
  },
]

const tipsMemilih = [
  {
    icon: Ruler,
    title: 'Ukur Ruangan dengan Tepat',
    desc: 'Pastikan ukuran ruang tersedia sebelum memilih model tangga',
  },
  {
    icon: Home,
    title: 'Sesuaikan dengan Desain Rumah',
    desc: 'Pilih model tangga yang selaras dengan konsep interior',
  },
  {
    icon: Palette,
    title: 'Pilih Material yang Tepat',
    desc: 'Besi hollow, pipa, atau kombinasi dengan kayu/kaca',
  },
  {
    icon: Circle,
    title: 'Perhatikan Keamanan',
    desc: 'Anak tangga yang nyaman dan pegangan yang kokoh',
  },
]

const materialTangga = [
  { material: 'Besi Hollow', karakteristik: 'Kuat, modern, minimalis', finishing: 'Cat duco, powder coating' },
  { material: 'Besi Pipa', karakteristik: 'Klasik, artistik, kokoh', finishing: 'Cat, chrome, galvanis' },
  { material: 'Kombinasi Kayu', karakteristik: 'Hangat, natural, mewah', finishing: 'Laminating, varnish' },
  { material: 'Kombinasi Kaca', karakteristik: 'Modern, elegan, ringan', finishing: 'Tempered, laminated' },
]

export default function ArticleContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            PANDUAN PEMILIHAN
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Jenis-Jenis Tangga Besi untuk Rumah Minimalis
          </h1>
          <p className="text-white/80 text-sm sm:text-base mb-6">
            Dipublikasikan pada Maret 2024 | MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang tangga besi.')}
              className="bg-white text-orange-600 hover:bg-orange-50 min-h-[48px]"
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
              <strong>Tangga besi</strong> menjadi pilihan populer untuk rumah minimalis modern. 
              Selain kuat dan tahan lama, tangga besi juga memiliki berbagai model yang bisa disesuaikan 
              dengan desain interior rumah Anda. Artikel ini akan membahas jenis-jenis tangga besi 
              dan cara memilih yang tepat untuk rumah minimalis Anda.
            </p>
          </div>
        </ScrollAnimation>

        {/* Tips Quick */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Tips Memilih Tangga yang Tepat
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {tipsMemilih.map((item, index) => (
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

        {/* Jenis Tangga */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
          Jenis-Jenis Tangga Besi
        </h2>
        {jenisTangga.map((tangga, index) => (
          <ScrollAnimation key={index}>
            <Card className="mb-6 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4">
                  <h3 className="text-lg font-bold text-white font-brand flex items-center gap-2">
                    {index === 0 && <Circle className="w-5 h-5 text-orange-400" />}
                    {index === 1 && <ArrowDownUp className="w-5 h-5 text-orange-400" />}
                    {index === 2 && <ArrowRight className="w-5 h-5 text-orange-400 rotate-45" />}
                    {index === 3 && <RotateCcw className="w-5 h-5 text-orange-400" />}
                    {tangga.title}
                  </h3>
                  <p className="text-slate-300 text-sm">{tangga.desc}</p>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2 text-sm">✓ Kelebihan:</h4>
                      <ul className="space-y-1">
                        {tangga.kelebihan.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2 text-sm">✗ Kekurangan:</h4>
                      <ul className="space-y-1">
                        {tangga.kekurangan.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="text-red-500">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-slate-700 text-sm">
                      <strong>Cocok untuk:</strong> {tangga.cocok}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        ))}

        {/* Material Table */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Pilihan Material Tangga Besi
          </h2>
          <Card className="mb-8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-3 text-left text-sm">Material</th>
                    <th className="p-3 text-left text-sm">Karakteristik</th>
                    <th className="p-3 text-left text-sm">Finishing</th>
                  </tr>
                </thead>
                <tbody>
                  {materialTangga.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-3 text-sm font-medium text-slate-800">{item.material}</td>
                      <td className="p-3 text-sm text-slate-600">{item.karakteristik}</td>
                      <td className="p-3 text-sm text-slate-600">{item.finishing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-orange-500 to-amber-500 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                Butuh Tangga Besi Custom?
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Konsultasi gratis dengan tim ahli MBUZENK ZETRO. Kami bantu desain tangga sesuai kebutuhan rumah Anda!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg"
                  onClick={() => openWhatsApp('Halo, saya ingin pesan tangga besi custom.')}
                  className="bg-white text-orange-600 hover:bg-orange-50 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pesan Tangga Sekarang
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Related Articles */}
        <RelatedArticles currentSlug="jenis-tangga-besi-minimalis" />
        
        {/* Related Services */}
        <ScrollAnimation>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">
              Layanan Terkait:
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/layanan/tangga-besi">
                <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Tangga Besi</Badge>
              </Link>
              <Link href="/layanan/kanopi-minimalis">
                <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Kanopi Minimalis</Badge>
              </Link>
              <Link href="/layanan/pagar-besi">
                <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Pagar Besi</Badge>
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
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
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
