'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Phone, MessageCircle, Award, Clock, Shield, ArrowRight, Grid3X3, Sparkles, Lock } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import Link from 'next/link'

const teralisTypes = [
  {
    icon: Grid3X3,
    title: 'Teralis Minimalis',
    description: 'Teralis dengan desain minimalis modern yang tidak mengurangi estetika rumah.',
    features: ['Desain clean', 'Tampilan modern', 'Perawatan mudah'],
  },
  {
    icon: Sparkles,
    title: 'Teralis Artistik',
    description: 'Teralis dengan ornamen dan ukiran untuk tampilan lebih mewah dan klasik.',
    features: ['Motif custom', 'Ukiran detail', 'Nilai seni tinggi'],
  },
  {
    icon: Lock,
    title: 'Teralis Security',
    description: 'Teralis dengan fokus keamanan maksimal untuk jendela dan pintu.',
    features: ['Keamanan tinggi', 'Besi tebal', 'Lock system'],
  },
]

const reasons = [
  { icon: Award, title: '19+ Tahun Pengalaman', desc: 'Spesialis teralis berpengalaman' },
  { icon: Clock, title: 'Pengerjaan Cepat', desc: '1-3 hari untuk standar' },
  { icon: Shield, title: 'Garansi 2 Tahun', desc: 'Garansi konstruksi' },
  { icon: CheckCircle2, title: 'Material SNI', desc: 'Besi berkualitas tinggi' },
]

const specifications = [
  { spec: 'Besi Hollow', size: '20x20mm - 40x40mm' },
  { spec: 'Ketebalan', size: '0.8mm - 1.2mm' },
  { spec: 'Finishing', size: 'Cat duco / Powder coating' },
  { spec: 'Garansi', size: '2 Tahun Konstruksi' },
]

export function TeralisContent() {
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
              LAYANAN TERALIS
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-brand">
              Jasa Pembuatan Teralis Jendela Magetan
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mb-8">
              Teralis jendela dan pintu dengan desain minimalis hingga artistik. 
              Melindungi rumah tanpa mengurangi keindahan. Garansi 2 tahun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp('Halo, saya ingin pesan teralis jendela.')}
                className="bg-white text-orange-600 hover:bg-white/90 shadow-lg min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Pesan Teralis
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
              Mengapa Pilih Teralis Kami?
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

      {/* Types */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4 font-brand">
              Jenis Teralis yang Kami Buat
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Berbagai model teralis sesuai kebutuhan keamanan dan estetika rumah Anda
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {teralisTypes.map((type, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-colors h-full cursor-pointer" onClick={() => openWhatsApp(`Halo, saya tertarik dengan ${type.title}.`)}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
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

      {/* Specifications */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 font-brand">
                Spesifikasi Teralis
              </h2>
              <div className="space-y-4">
                {specifications.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <span className="font-medium text-slate-700">{item.spec}</span>
                    <span className="text-orange-600 font-semibold">{item.size}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="bg-slate-100 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 font-brand">
                  Butuh Teralis Custom?
                </h3>
                <p className="text-slate-600 mb-6">
                  Hubungi kami untuk konsultasi gratis dan penawaran terbaik untuk teralis jendela dan pintu Anda.
                </p>
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang teralis.')}
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
              Amankan Rumah Anda dengan Teralis!
            </h2>
            <p className="text-white/90 mb-8">
              Konsultasi gratis! Hubungi kami untuk survei lokasi dan estimasi harga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp('Halo, saya ingin pesan teralis jendela.')}
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
