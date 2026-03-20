'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Phone, MessageCircle, Award, Clock, Shield, ArrowRight } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import Link from 'next/link'

const kanopiTypes = [
  {
    title: 'Kanopi Carport',
    description: 'Kanopi untuk tempat parkir mobil/motor, melindungi kendaraan dari hujan dan panas.',
    features: ['Tahan cuaca', 'Desain modern', 'Perawatan mudah'],
  },
  {
    title: 'Kanopi Teras',
    description: 'Kanopi untuk teras rumah, memperluas area teduh dan menambah estetika.',
    features: ['Nilai tambah rumah', 'Berbagai model', 'Material premium'],
  },
  {
    title: 'Kanopi Pagar',
    description: 'Kanopi di atas pagar, memberikan perlindungan dan tampilan mewah.',
    features: ['Kombinasi pagar', 'Custom design', 'Tahan lama'],
  },
]

const materials = [
  { name: 'Spandek', desc: 'Ringan, ekonomis, berbagai pilihan warna' },
  { name: 'Polikarbonat', desc: 'Transparan, modern, tahan UV' },
  { name: 'Alderon', desc: 'Kedap suara, kuat, isolasi baik' },
  { name: 'Baja Ringan', desc: 'Anti karat, ringan, presisi' },
]

const reasons = [
  { icon: Award, title: '19+ Tahun Pengalaman', desc: 'Sudah dipercaya ribuan pelanggan' },
  { icon: Clock, title: 'Pengerjaan Cepat', desc: '3-7 hari kerja tergantung ukuran' },
  { icon: Shield, title: 'Garansi Kerja', desc: 'Garansi konstruksi hingga 2 tahun' },
  { icon: CheckCircle2, title: 'Material Berkualitas', desc: 'Hanya menggunakan material SNI' },
]

export function KanopiPage() {
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
              LAYANAN KANOPI
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-brand">
              Jasa Pembuatan Kanopi Minimalis Magetan
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mb-8">
              Spesialis kanopi carport, kanopi teras, dan kanopi pagar dengan berbagai pilihan material. 
              Pengerjaan profesional dengan garansi kerja untuk area Magetan, Madiun, Ngawi, Ponorogo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp('Halo, saya ingin pesan kanopi minimalis. Mohon info harga dan estimasi.')}
                className="bg-white text-orange-600 hover:bg-white/90 shadow-lg min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Pesan Kanopi Sekarang
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => makeCall()}
                className="border-white text-white hover:bg-white/10 min-h-[52px]"
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

      {/* Types of Kanopi */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4 font-brand">
              Jenis Kanopi yang Kami Buat
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Berbagai model kanopi minimalis sesuai kebutuhan dan budget Anda
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {kanopiTypes.map((type, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                    <p className="text-slate-400 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-orange-400" />
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

      {/* Materials */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-12 font-brand">
              Pilihan Material Atap
            </h2>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer" onClick={() => openWhatsApp(`Halo, saya ingin tanya tentang kanopi dengan material ${material.name}.`)}>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-orange-600 mb-2">{material.name}</h3>
                    <p className="text-slate-600 text-sm">{material.desc}</p>
                  </CardContent>
                </Card>
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
              Siap Memasang Kanopi Minimalis?
            </h2>
            <p className="text-white/90 mb-8">
              Konsultasi gratis! Hubungi kami untuk survei lokasi dan estimasi harga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang pemasangan kanopi minimalis.')}
                className="bg-white text-orange-600 hover:bg-white/90 min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => makeCall()}
                className="border-white text-white hover:bg-white/10 min-h-[52px]"
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
