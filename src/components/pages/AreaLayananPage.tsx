'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Phone, MessageCircle, Award, Clock, Shield, ArrowRight, MapPin, Users, Building2 } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import Link from 'next/link'

const services = [
  'Kanopi Minimalis',
  'Pagar Besi',
  'Tangga Besi',
  'Teralis Jendela',
  'Konstruksi Baja',
  'Renovasi Rumah',
  'Kitchen Set',
  'Pergola',
]

interface AreaLayananContentProps {
  area: 'Magetan' | 'Madiun' | 'Ngawi' | 'Ponorogo'
}

const areaData = {
  Magetan: {
    description: 'Pusat bengkel las MBUZENK ZETRO berlokasi di Magetan. Kami melayani seluruh wilayah Kabupaten Magetan dengan pengerjaan berkualitas dan harga kompetitif.',
    districts: ['Barat', 'Maospati', 'Parang', 'Plaosan', 'Karas', 'Sukomoro', 'Kawedanan', 'Poncoruso'],
  },
  Madiun: {
    description: 'Melayani area Madiun dan sekitarnya dengan kualitas pengerjaan terbaik. Tim kami siap melakukan survei lokasi untuk proyek di Madiun.',
    districts: ['Madiun Kota', 'Kartoharjo', 'Manguharjo', 'Taman', 'Jiwan', 'Sawahan', 'Balerejo', 'Wungu'],
  },
  Ngawi: {
    description: 'Jasa bengkel las dan renovasi untuk wilayah Ngawi. Dengan pengalaman 19+ tahun, kami siap mengerjakan proyek Anda dengan hasil memuaskan.',
    districts: ['Ngawi Kota', 'Karangjati', 'Megaluh', 'Jogorogo', 'Padas', 'Kedunggalar', 'Paron', 'Gandu'],
  },
  Ponorogo: {
    description: 'Melayani area Ponorogo untuk kebutuhan las dan renovasi rumah. Tim profesional dengan peralatan modern siap membantu Anda.',
    districts: ['Ponorogo Kota', 'Babadan', 'Siman', 'Jetis', 'Balong', 'Sukorejo', 'Kauman', 'Pudak'],
  },
}

const reasons = [
  { icon: Award, title: '19+ Tahun Pengalaman', desc: 'Terpercaya sejak 2005' },
  { icon: Clock, title: 'Pengerjaan Cepat', desc: 'Sesuai jadwal' },
  { icon: Shield, title: 'Garansi 2 Tahun', desc: 'Kualitas terjamin' },
  { icon: Users, title: '1000+ Pelanggan Puas', desc: 'Dari berbagai kota' },
]

export function AreaLayananContent({ area }: AreaLayananContentProps) {
  const data = areaData[area]

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
              <MapPin className="w-3 h-3 mr-1" />
              AREA LAYANAN
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-brand">
              Bengkel Las {area} - MBUZENK ZETRO
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mb-8">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp(`Halo, saya dari ${area} ingin konsultasi.`)}
                className="bg-white text-orange-600 hover:bg-white/90 shadow-lg min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Button>
              <Button 
                size="lg" 
                onClick={() => makeCall()}
                className="bg-white/20 text-white border border-white/30 hover:bg-white/30 min-h-[52px]"
              >
                <Phone className="w-5 h-5 mr-2" />
                {CONFIG.phoneDisplay}
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-12 font-brand">
              Layanan Kami di {area}
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 50}>
                <Card 
                  className="hover:shadow-lg transition-shadow cursor-pointer h-full" 
                  onClick={() => openWhatsApp(`Halo, saya dari ${area} ingin tanya tentang ${service}.`)}
                >
                  <CardContent className="p-4 text-center">
                    <Building2 className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <span className="text-slate-700 font-medium text-sm">{service}</span>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12 font-brand">
              Mengapa Pilih Kami?
            </h2>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="bg-slate-800/50 border-slate-700 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-slate-400 text-sm">{reason.desc}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-4 font-brand">
              Area Jangkauan di {area}
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              Kami melayani seluruh kecamatan di {area} dengan survei lokasi gratis
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {data.districts.map((district, index) => (
              <ScrollAnimation key={index} delay={index * 50}>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{district}</span>
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
              Hubungi Kami di {area}!
            </h2>
            <p className="text-white/90 mb-8">
              Konsultasi gratis! Survei lokasi tanpa biaya untuk area {area} dan sekitarnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp(`Halo, saya dari ${area} ingin konsultasi.`)}
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
