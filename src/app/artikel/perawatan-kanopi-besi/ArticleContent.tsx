'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Droplets, Shield, Clock, Wrench, Sun } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const tipsPerawatan = [
  {
    title: 'Bersihkan Secara Rutin',
    points: [
      'Gunakan air dan sabun untuk membersihkan debu',
      'Hindari deterjen keras yang bisa merusak cat',
      'Bersihkan minimal 1-2 bulan sekali',
      'Perhatikan bagian sudut yang sulit dijangkau',
    ],
  },
  {
    title: 'Cegah Karat Sejak Dini',
    points: [
      'Periksa bagian yang rawan karat secara berkala',
      'Segera cat ulang bagian yang tergores',
      'Gunakan cat anti karat untuk perbaikan',
      'Pastikan drainase air hujan berjalan baik',
    ],
  },
  {
    title: 'Perhatikan Material Atap',
    points: [
      'Spandek: bersihkan dengan air, hindari benda tajam',
      'Polikarbonat: gunakan cleaner khusus, hindari amonia',
      'Alderon: cukup air dan sabun, lap hingga kering',
      'Kaca: gunakan pembersih kaca, lap dengan kain lembut',
    ],
  },
  {
    title: 'Periksa Struktur Rangka',
    points: [
      'Cek kekencangan baut dan sekrup',
      'Pastikan tidak ada bagian yang goyah',
      'Periksa sambungan las untuk retak',
      'Kencangkan jika ada bagian longgar',
    ],
  },
  {
    title: 'Perawatan Musiman',
    points: [
      'Sebelum musim hujan: periksa semua sambungan',
      'Setelah musim hujan: cek kerusakan akibat air',
      'Musim kemarau: bersihkan debu dan kotoran',
      'Lakukan pengecatan ulang setiap 2-3 tahun',
    ],
  },
]

const jadwalPerawatan = [
  { periode: 'Mingguan', aktivitas: 'Bersihkan dedaunan dan kotoran ringan' },
  { periode: 'Bulanan', aktivitas: 'Cuci dengan air dan sabun' },
  { periode: '3 Bulan', aktivitas: 'Periksa baut dan sambungan' },
  { periode: '6 Bulan', aktivitas: 'Cek cat dan lapisi jika perlu' },
  { periode: 'Tahunan', aktivitas: 'Inspeksi menyeluruh oleh profesional' },
]

const iconPerawatan = [
  { icon: Droplets, title: 'Bersih', desc: 'Bebas debu dan kotoran' },
  { icon: Shield, title: 'Anti Karat', desc: 'Terlindung dari korosi' },
  { icon: Clock, title: 'Awet', desc: 'Umur pakai maksimal' },
  { icon: Sun, title: 'Tahan Cuaca', desc: 'Panas dan hujan' },
]

export default function ArticleContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            TIPS PERAWATAN
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Cara Merawat Kanopi Besi Agar Awet dan Tahan Lama
          </h1>
          <p className="text-white/80 text-sm sm:text-base mb-6">
            Dipublikasikan pada Maret 2024 | MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang perawatan kanopi.')}
              className="bg-white text-indigo-600 hover:bg-indigo-50 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Konsultasi Gratis
            </Button>
            <Button 
              variant="outline"
              onClick={() => makeCall()}
              className="border-white text-white hover:bg-white/10 min-h-[48px]"
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
              <strong>Perawatan kanopi</strong> yang rutin dan tepat akan membuat investasi Anda lebih berharga. 
              Kanopi yang dirawat dengan baik bisa bertahan hingga 20-30 tahun tanpa masalah berarti. 
              Artikel ini akan memberikan panduan lengkap cara merawat kanopi besi agar tetap awet.
            </p>
          </div>
        </ScrollAnimation>

        {/* Quick Benefits */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Manfaat Perawatan Rutin
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {iconPerawatan.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* Tips Detail */}
        {tipsPerawatan.map((tip, tipIndex) => (
          <ScrollAnimation key={tipIndex}>
            <div className="mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 font-brand flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm">
                  {tipIndex + 1}
                </span>
                {tip.title}
              </h2>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-3">
                    {tip.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        ))}

        {/* Jadwal Perawatan */}
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Jadwal Perawatan Kanopi
          </h2>
          <Card className="mb-8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="p-3 text-left text-sm">Periode</th>
                    <th className="p-3 text-left text-sm">Aktivitas</th>
                  </tr>
                </thead>
                <tbody>
                  {jadwalPerawatan.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="p-3 text-sm font-medium text-indigo-600">{item.periode}</td>
                      <td className="p-3 text-sm text-slate-600">{item.aktivitas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </ScrollAnimation>

        {/* Service Info */}
        <ScrollAnimation>
          <Card className="bg-indigo-50 border-indigo-200 mb-8">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg font-bold text-indigo-800 mb-3 font-brand flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                Butuh Perawatan Profesional?
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                MBUZENK ZETRO menyediakan layanan perawatan dan perbaikan kanopi. 
                Tim kami siap membantu Anda menjaga kanopi tetap dalam kondisi prima.
              </p>
              <Button 
                onClick={() => openWhatsApp('Halo, saya butuh jasa perawatan kanopi.')}
                className="bg-indigo-500 text-white hover:bg-indigo-600"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                Butuh Kanopi Baru?
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Konsultasi gratis dengan tim ahli MBUZENK ZETRO untuk kanopi berkualitas dan tahan lama!
              </p>
              <Button 
                size="lg"
                onClick={() => openWhatsApp('Halo, saya ingin pesan kanopi baru.')}
                className="bg-white text-indigo-600 hover:bg-indigo-50 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Pesan Kanopi Sekarang
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Related */}
        <ScrollAnimation>
          <div className="mt-12">
            <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">Layanan Terkait:</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/layanan/kanopi-minimalis"><Badge variant="outline" className="cursor-pointer hover:bg-indigo-50">Kanopi Minimalis</Badge></Link>
              <Link href="/layanan/pagar-besi"><Badge variant="outline" className="cursor-pointer hover:bg-indigo-50">Pagar Besi</Badge></Link>
              <Link href="/layanan/teralis-jendela"><Badge variant="outline" className="cursor-pointer hover:bg-indigo-50">Teralis Jendela</Badge></Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Author */}
        <ScrollAnimation>
          <Card className="mt-8">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">MZ</div>
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
          <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
