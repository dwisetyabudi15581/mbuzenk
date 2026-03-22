'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Phone, MessageCircle, Award, Clock, Shield, ArrowRight, Home, Bath, ChefHat, Warehouse } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import Link from 'next/link'

const renovasiTypes = [
  {
    icon: Bath,
    title: 'Renovasi Kamar Mandi',
    description: 'Renovasi kamar mandi lengkap dari lantai, dinding, sanitari, hingga plumbing.',
    features: ['Desain modern', 'Waterproofing', 'Sanitari berkualitas'],
  },
  {
    icon: ChefHat,
    title: 'Renovasi Dapur',
    description: 'Renovasi dapur dengan kitchen set, wastafel, dan penataan yang fungsional.',
    features: ['Kitchen set custom', 'Material tahan air', 'Desain ergonomis'],
  },
  {
    icon: Warehouse,
    title: 'Renovasi Atap',
    description: 'Perbaikan dan penggantian atap, rangka atap, dan talang air hujan.',
    features: ['Anti bocor', 'Material SNI', 'Garansi kerja'],
  },
  {
    icon: Home,
    title: 'Renovasi Total',
    description: 'Renovasi menyeluruh untuk transformasi rumah Anda menjadi lebih baik.',
    features: ['Perencanaan matang', 'Tim berpengalaman', 'Hasil memuaskan'],
  },
]

const reasons = [
  { icon: Award, title: '19+ Tahun Pengalaman', desc: 'Sudah dipercaya ribuan pelanggan' },
  { icon: Clock, title: 'Tepat Waktu', desc: 'Pengerjaan sesuai jadwal yang disepakati' },
  { icon: Shield, title: 'Garansi Kerja', desc: 'Garansi untuk setiap pekerjaan' },
  { icon: CheckCircle2, title: 'Harga Transparan', desc: 'Tidak ada biaya tersembunyi' },
]

const process = [
  { step: '1', title: 'Konsultasi', desc: 'Diskusi kebutuhan dan budget' },
  { step: '2', title: 'Survei Lokasi', desc: 'Pengukuran dan pengecekan kondisi' },
  { step: '3', title: 'Penawaran', desc: 'Rincian biaya dan timeline' },
  { step: '4', title: 'Pengerjaan', desc: 'Eksekusi dengan tim profesional' },
  { step: '5', title: 'Serah Terima', desc: 'Pengecekan dan garansi' },
]

export function RenovasiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-br from-orange-500 to-red-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              LAYANAN RENOVASI
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-brand">
              Jasa Renovasi Rumah Magetan
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mb-8">
              Spesialis renovasi rumah profesional untuk kamar mandi, dapur, atap, hingga renovasi total. 
              Pengalaman 19+ tahun dengan 1000+ proyek selesai. Melayani Magetan, Madiun, Ngawi, Ponorogo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp('Halo, saya ingin konsultasi renovasi rumah.')}
                className="bg-white text-orange-600 hover:bg-white/90 shadow-lg min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
              <Button 
                size="lg" 
                onClick={() => makeCall()}
                className="bg-white/20 text-white border border-white/30 hover:bg-white/30 min-h-[52px]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hubungi: {CONFIG.phoneDisplay}
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-12 font-brand">
              Mengapa Pilih Kami?
            </h2>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">{reason.title}</h3>
                    <p className="text-slate-600 text-sm">{reason.desc}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Renovasi */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4 font-brand">
              Jenis Renovasi yang Kami Kerjakan
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Berbagai layanan renovasi untuk kebutuhan rumah Anda
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {renovasiTypes.map((type, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-colors h-full cursor-pointer" onClick={() => openWhatsApp(`Halo, saya ingin tanya tentang ${type.title.toLowerCase()}.`)}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{type.description}</p>
                    <ul className="space-y-1">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-xs">
                          <CheckCircle2 className="w-3 h-3 text-orange-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-12 font-brand">
              Proses Kerja Kami
            </h2>
          </ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-0">
            {process.map((item, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="flex items-center">
                  <div className="text-center px-4 sm:px-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm">{item.title}</h3>
                    <p className="text-slate-600 text-xs">{item.desc}</p>
                  </div>
                  {index < process.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-300 hidden sm:block" />
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-brand">
              Siap Merenovasi Rumah Anda?
            </h2>
            <p className="text-white/90 mb-8">
              Konsultasi gratis! Hubungi kami untuk survei lokasi dan penawaran terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp('Halo, saya ingin konsultasi renovasi rumah.')}
                className="bg-white text-orange-600 hover:bg-white/90 min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </Button>
              <Button 
                size="lg" 
                onClick={() => makeCall()}
                className="bg-white/20 text-white border border-white/30 hover:bg-white/30 min-h-[52px]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Telepon Sekarang
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
