'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Phone, MessageCircle, Award, Clock, Shield, ArrowRight, CheckCircle, PhoneCall } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import Link from 'next/link'

const pagarTypes = [
  {
    title: 'Pagar BRC',
    description: 'Pagar besi BRC (Bend Rigid Connection) adalah pagar siap pasang dengan desain modern dan praktis. Cocok untuk rumah minimalis, perumahan, dan area komersial. Keunggulan: cepat dipasang, kuat, dan ekonomis.',
    features: ['Pemasangan cepat', 'Ekonomis', 'Desain modern', 'Tersedia berbagai tinggi'],
    price: 'Mulai Rp 350.000/meter',
  },
  {
    title: 'Pagar Hollow Minimalis',
    description: 'Pagar besi hollow custom sesuai desain yang diinginkan. Dibuat dengan besi hollow berkualitas tinggi dengan finishing cat duco atau powder coating. Cocok untuk rumah dengan konsep modern minimalis.',
    features: ['Custom design', 'Cat duco/powder coating', 'Anti karat', 'Tahan lama'],
    price: 'Mulai Rp 500.000/meter',
  },
  {
    title: 'Pagar Besi Tempa',
    description: 'Pagar besi tempa dengan ornamen artistik untuk rumah dengan konsep klasik atau mewah. Dibuat oleh pengrajin berpengalaman dengan detail yang presisi dan elegan.',
    features: ['Ornamen artistik', 'Custom motif', 'Kesan mewah', 'Presisi tinggi'],
    price: 'Mulai Rp 800.000/meter',
  },
  {
    title: 'Pagar Sliding/Automatic',
    description: 'Pagar geser otomatis dengan sistem remote control. Cocok untuk rumah dengan lahan terbatas atau yang menginginkan kemudahan akses. Dilengkapi sensor keamanan.',
    features: ['Remote control', 'Sensor keamanan', 'Hemat tempat', 'Motor berkualitas'],
    price: 'Mulai Rp 3.500.000/set',
  },
]

const reasons = [
  { icon: Award, title: '19+ Tahun Pengalaman', desc: 'Sudah dipercaya ribuan pelanggan' },
  { icon: Clock, title: 'Pengerjaan Cepat', desc: '3-7 hari kerja tergantung model' },
  { icon: Shield, title: 'Garansi 2 Tahun', desc: 'Garansi konstruksi dan service' },
  { icon: CheckCircle2, title: 'Material SNI', desc: 'Hanya material berkualitas' },
]

const advantages = [
  'Besi hollow galvanis anti karat',
  'Pengelasan presisi dengan mesin MIG',
  'Cat dasar anti karat berkualitas',
  'Finishing cat duco atau powder coating',
  'Desain custom sesuai keinginan',
  'Tim pemasang berpengalaman',
  'Survei lokasi gratis',
  'Konsultasi desain tanpa biaya',
  'Garansi konstruksi 2 tahun',
  'After sales service responsif',
]

export function PagarBesiContent() {
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
              PAGAR BESI MAGETAN
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-brand">
              Jasa Pembuatan Pagar Besi Minimalis Magetan
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mb-8">
              Spesialis pagar besi BRC, pagar hollow minimalis, pagar custom untuk rumah dan bangunan Anda. 
              Pengalaman 19+ tahun dengan 500+ proyek pagar selesai. Melayani Magetan, Madiun, Ngawi, Ponorogo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp('Halo, saya ingin pesan pembuatan pagar besi minimalis. Mohon info harga dan estimasi.')}
                className="bg-white text-orange-600 hover:bg-white/90 shadow-lg min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Pesan Pagar Sekarang
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
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-4 font-brand">
              Bengkel Pagar Besi Terpercaya di Magetan
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Kami adalah bengkel las spesialis pembuatan pagar besi dengan pengalaman sejak 2005. 
              Melayani pembuatan pagar untuk rumah tinggal, perumahan, kantor, dan area komersial.
            </p>
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

      {/* Types of Pagar */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4 font-brand">
              Jenis Pagar Besi yang Kami Buat
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Berbagai model pagar besi untuk kebutuhan rumah dan bangunan Anda dengan kualitas terjamin
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {pagarTypes.map((type, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card 
                  className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-colors h-full cursor-pointer group"
                  onClick={() => openWhatsApp(`Halo, saya tertarik dengan ${type.title}. ${type.price}. Mohon info lebih lanjut.`)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">{type.title}</h3>
                      <span className="text-orange-400 text-sm font-medium">{type.price}</span>
                    </div>
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">{type.description}</p>
                    <ul className="space-y-2 mb-4">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-orange-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-orange-400 text-sm group-hover:translate-x-1 transition-transform">
                      Hubungi untuk pemesanan
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
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
                Keunggulan Pagar Besi Kami
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
                  Butuh Pagar Besi?
                </h3>
                <p className="text-slate-600 mb-6">
                  Hubungi kami untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan pagar besi Anda. 
                  Survei lokasi GRATIS untuk area Magetan dan sekitarnya!
                </p>
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang pembuatan pagar besi.')}
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

      {/* Service Areas */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-4 font-brand">
              Area Layanan Pagar Besi
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              Kami melayani pembuatan pagar besi di Magetan dan sekitarnya
            </p>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { area: 'Magetan', note: 'Survei gratis!' },
              { area: 'Madiun', note: 'Radius 30km' },
              { area: 'Ngawi', note: 'Radius 30km' },
              { area: 'Ponorogo', note: 'Radius 30km' },
            ].map((loc, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card 
                  className="hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1"
                  onClick={() => openWhatsApp(`Halo, saya dari ${loc.area} ingin pesan pagar besi.`)}
                >
                  <CardContent className="p-4 text-center">
                    <h3 className="font-bold text-orange-600">Pagar Besi {loc.area}</h3>
                    <p className="text-slate-500 text-sm">{loc.note}</p>
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
              Hubungi Kami Sekarang untuk Pagar Besi Minimalis!
            </h2>
            <p className="text-white/90 mb-8">
              Survei gratis untuk area Magetan. Konsultasi desain dan penawaran harga terbaik!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp('Halo, saya ingin pesan pagar besi minimalis. Survei bisa kapan?')}
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
