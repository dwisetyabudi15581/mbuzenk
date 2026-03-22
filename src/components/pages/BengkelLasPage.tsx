'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Phone, MessageCircle, Award, Clock, Shield, ArrowRight, Fence, DoorOpen, Wrench, Combine } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import Link from 'next/link'

const lasServices = [
  {
    icon: Fence,
    title: 'Pagar Besi',
    description: 'Pembuatan pagar besi minimalis, pagar BRC, pagar custom sesuai desain.',
    features: ['Anti karat', 'Desain custom', 'Kuat dan tahan lama'],
  },
  {
    icon: Combine,
    title: 'Tangga Besi',
    description: 'Pembuatan tangga besi, tangga putar, tangga minimalis untuk rumah dan bangunan.',
    features: ['Presisi tinggi', 'Berbagai model', 'Safety first'],
  },
  {
    icon: DoorOpen,
    title: 'Teralis Jendela',
    description: 'Pembuatan teralis jendela dan pintu untuk keamanan rumah Anda.',
    features: ['Keamanan maksimal', 'Desain artistik', 'Harga terjangkau'],
  },
  {
    icon: Wrench,
    title: 'Konstruksi Baja',
    description: 'Konstruksi baja ringan untuk rangka atap, mezzanine, dan kanopi.',
    features: ['Ringan tapi kuat', 'Anti karat', 'Pemasangan cepat'],
  },
]

const reasons = [
  { icon: Award, title: '19+ Tahun Pengalaman', desc: 'Bengkel las terpercaya sejak 2005' },
  { icon: Clock, title: 'Pengerjaan Cepat', desc: 'Tim profesional dan peralatan modern' },
  { icon: Shield, title: 'Garansi Kerja', desc: 'Garansi konstruksi hingga 2 tahun' },
  { icon: CheckCircle2, title: 'Material SNI', desc: 'Hanya menggunakan material berkualitas' },
]

const advantages = [
  'Tukang las bersertifikat dan berpengalaman',
  'Peralatan las modern dan lengkap',
  'Material besi berkualitas tinggi',
  'Desain custom sesuai keinginan',
  'Harga kompetitif dan transparan',
  'Garansi untuk setiap pekerjaan',
  'Pengerjaan presisi dan rapi',
  'Melayani area Magetan dan sekitarnya',
]

export function BengkelLasPage() {
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
              BENGKEL LAS
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-brand">
              Bengkel Las Magetan - Spesialis Las Besi
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mb-8">
              Bengkel las terpercaya di Magetan untuk pembuatan pagar besi, tangga besi, teralis, 
              konstruksi baja, dan berbagai produk las lainnya. Pengalaman 19+ tahun dengan hasil berkualitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp('Halo, saya ingin pesan pembuatan besi/las.')}
                className="bg-white text-orange-600 hover:bg-white/90 shadow-lg min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Pesan Sekarang
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
              Bengkel Las Terpercaya di Magetan
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

      {/* Services */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4 font-brand">
              Layanan Bengkel Las Kami
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Berbagai layanan las besi untuk kebutuhan rumah dan bangunan Anda
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lasServices.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-colors h-full cursor-pointer" onClick={() => openWhatsApp(`Halo, saya ingin pesan ${service.title.toLowerCase()}.`)}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
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

      {/* Advantages */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 font-brand">
                Keunggulan Bengkel Las Kami
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="bg-slate-100 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 font-brand">
                  Butuh Jasa Las?
                </h3>
                <p className="text-slate-600 mb-6">
                  Hubungi kami untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan las besi Anda.
                </p>
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang jasa las.')}
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat WhatsApp
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => makeCall()}
                    className="border-orange-500 text-orange-600 hover:bg-orange-50"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Telepon: {CONFIG.phoneDisplay}
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-brand">
              Hubungi Bengkel Las Kami Sekarang!
            </h2>
            <p className="text-white/90 mb-8">
              Lokasi: {CONFIG.address}, {CONFIG.city}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp('Halo, saya ingin ke bengkel las untuk konsultasi.')}
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
