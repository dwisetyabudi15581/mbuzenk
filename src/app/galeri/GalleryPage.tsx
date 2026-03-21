'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, MessageCircle, Phone, Image, Construction, Home, Car, Shield, ArrowLeft } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const categories = [
  {
    title: 'Kanopi Minimalis',
    icon: Car,
    count: '50+ Proyek',
    desc: 'Kanopi carport, kanopi teras, kanopi pagar dengan berbagai model',
    images: ['/project-kanopi.png', '/project-kanopi2.png'],
  },
  {
    title: 'Pagar Besi',
    icon: Shield,
    count: '80+ Proyek',
    desc: 'Pagar BRC, pagar hollow, pagar custom minimalis dan artistik',
    images: ['/project-pagar.png', '/project-pagar2.png'],
  },
  {
    title: 'Tangga Besi',
    icon: Home,
    count: '30+ Proyek',
    desc: 'Tangga spiral, tangga lurus, tangga L, tangga U minimalis',
    images: ['/project-tangga.png'],
  },
  {
    title: 'Renovasi Rumah',
    icon: Construction,
    count: '100+ Proyek',
    desc: 'Renovasi total, renovasi bagian, perluasan rumah',
    images: ['/project-renovasi.png'],
  },
]

const featuredProjects = [
  {
    title: 'Kanopi Carport Minimalis Spandek',
    location: 'Magetan',
    category: 'Kanopi',
    desc: 'Kanopi carport 4x6 meter dengan rangka besi hollow dan atap spandek anti karat.',
  },
  {
    title: 'Pagar BRC Premium',
    location: 'Madiun',
    category: 'Pagar',
    desc: 'Pagar BRC tinggi 1.8 meter dengan finishing powder coating tahan lama.',
  },
  {
    title: 'Tangga Spiral Modern',
    location: 'Ngawi',
    category: 'Tangga',
    desc: 'Tangga spiral besi hollow dengan pegangan stainless steel.',
  },
  {
    title: 'Renovasi Rumah Total',
    location: 'Ponorogo',
    category: 'Renovasi',
    desc: 'Renovasi total rumah termasuk atap, dinding, dan interior.',
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
            PORTOFOLIO
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Galeri Proyek MBUZENK ZETRO
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Lihat hasil pekerjaan kami selama 19+ tahun melayani wilayah Magetan dan sekitarnya
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya melihat galeri dan tertarik dengan hasil kerja MBUZENK ZETRO.')}
              className="bg-orange-500 text-white hover:bg-orange-600 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Konsultasi Gratis
            </Button>
            <Button 
              variant="outline"
              onClick={() => makeCall()}
              className="border-slate-600 text-white hover:bg-slate-800 min-h-[48px]"
            >
              <Phone className="w-4 h-4 mr-2" />
              {CONFIG.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-orange-500">1000+</p>
              <p className="text-slate-600 text-sm">Proyek Selesai</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-orange-500">19+</p>
              <p className="text-slate-600 text-sm">Tahun Pengalaman</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-orange-500">500+</p>
              <p className="text-slate-600 text-sm">Pelanggan Puas</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-orange-500">4</p>
              <p className="text-slate-600 text-sm">Kota Terjangkau</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand text-center">
            Kategori Proyek
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white font-brand">{category.title}</h3>
                          <p className="text-orange-400 text-sm">{category.count}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-slate-600 text-sm">{category.desc}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="bg-slate-100 rounded-lg h-24 flex items-center justify-center">
                        <Image className="w-8 h-8 text-slate-300" />
                      </div>
                      <div className="bg-slate-100 rounded-lg h-24 flex items-center justify-center">
                        <Image className="w-8 h-8 text-slate-300" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>
      </section>

      {/* Featured Projects */}
      <section className="bg-slate-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand text-center">
              Proyek Unggulan
            </h2>
            <div className="grid gap-4">
              {featuredProjects.map((project, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Image className="w-8 h-8 text-slate-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-slate-800">{project.title}</h3>
                          <Badge variant="outline" className="text-xs">{project.category}</Badge>
                        </div>
                        <p className="text-slate-500 text-xs mb-2">📍 {project.location}</p>
                        <p className="text-slate-600 text-sm">{project.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-orange-500 to-red-600 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
                Ingin Hasil Serupa untuk Rumah Anda?
              </h3>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Konsultasi gratis! Tim MBUZENK ZETRO siap membantu mewujudkan proyek impian Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg"
                  onClick={() => openWhatsApp('Halo, saya tertarik dengan proyek di galeri dan ingin konsultasi.')}
                  className="bg-white text-orange-600 hover:bg-orange-50 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Konsultasi Sekarang
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => makeCall()}
                  className="border-white text-white hover:bg-white/10 min-h-[48px]"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Telepon
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </section>

      {/* Back Link */}
      <section className="bg-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
