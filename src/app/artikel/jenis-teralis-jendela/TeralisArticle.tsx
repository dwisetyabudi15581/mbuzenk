'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Shield, Sparkles, Minus, Eye } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const jenisTeralis = [
  {
    icon: Minus,
    nama: 'Teralis Minimalis',
    deskripsi: 'Desain simpel dengan garis-garis lurus yang clean dan modern. Cocok untuk rumah minimalis masa kini.',
    kelebihan: ['Tampilan modern', 'Perawatan mudah', 'Harga terjangkau'],
    cocok: 'Rumah minimalis, apartemen',
  },
  {
    icon: Sparkles,
    nama: 'Teralis Artistik',
    deskripsi: 'Dengan ornamen dan ukiran yang indah. Menambah nilai estetika rumah Anda.',
    kelebihan: ['Desain unik', 'Nilai seni tinggi', 'Custom motif'],
    cocok: 'Rumah klasik, mewah',
  },
  {
    icon: Shield,
    nama: 'Teralis Security',
    deskripsi: 'Fokus pada keamanan maksimal dengan besi tebal dan lock system.',
    kelebihan: ['Keamanan tinggi', 'Besi tebal', 'Anti curat'],
    cocok: 'Rumah di daerah rawan',
  },
  {
    icon: Eye,
    nama: 'Teralis Transparan',
    deskripsi: 'Kombinasi besi dengan kaca atau polikarbonat. Tetap bisa melihat keluar.',
    kelebihan: ['View tetap bagus', 'Cahaya masuk', 'Modern'],
    cocok: 'Rumah dengan view bagus',
  },
]

export default function TeralisArticle() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">ARTIKEL</Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Jenis-jenis Teralis Jendela yang Populer
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Panduan lengkap memilih teralis jendela untuk rumah Anda
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <ScrollAnimation>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>Teralis jendela</strong> tidak hanya berfungsi sebagai keamanan, tapi juga menambah estetika rumah. 
            Di artikel ini, kami akan membahas jenis-jenis teralis yang populer beserta kelebihannya.
          </p>
        </ScrollAnimation>

        {jenisTeralis.map((jenis, index) => (
          <ScrollAnimation key={index}>
            <Card className="mb-6">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <jenis.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-slate-800 mb-2 font-brand">{jenis.nama}</h2>
                    <p className="text-slate-600 text-sm mb-4">{jenis.deskripsi}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-slate-500 mb-2">Kelebihan:</p>
                        <ul className="space-y-1">
                          {jenis.kelebihan.map((k, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                              <CheckCircle2 className="w-3 h-3 text-green-500" />
                              {k}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-2">Cocok untuk:</p>
                        <p className="text-slate-700 text-sm font-medium">{jenis.cocok}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        ))}

        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-orange-500 to-red-600 overflow-hidden mt-8">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-3 font-brand">Butuh Teralis Jendela?</h3>
              <p className="text-white/80 mb-4 text-sm">Konsultasi gratis dengan tim ahli kami!</p>
              <Button 
                onClick={() => openWhatsApp('Halo, saya ingin pesan teralis jendela.')}
                className="bg-white text-orange-600 hover:bg-white/90 min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">Layanan Terkait:</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/layanan/teralis-jendela"><Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Teralis Jendela</Badge></Link>
            <Link href="/layanan/pagar-besi"><Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Pagar Besi</Badge></Link>
            <Link href="/layanan/kanopi-minimalis"><Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Kanopi Minimalis</Badge></Link>
          </div>
        </div>
      </article>

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
