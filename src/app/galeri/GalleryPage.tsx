'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle, Phone, ArrowLeft, Eye } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { useState } from 'react'

// Data proyek - simpel tanpa nama pelanggan
const semuaProyek = [
  // KANOPI
  {
    id: 1,
    judul: 'Kanopi Carport Spandek',
    kategori: 'Kanopi',
    deskripsi: 'Kanopi carport ukuran 4x6 meter, rangka besi hollow galvanis dengan atap spandek anti karat. Cocok untuk 1-2 mobil.',
    image: '/gallery/kanopi-1.png',
  },
  {
    id: 2,
    judul: 'Kanopi Teras Alderon',
    kategori: 'Kanopi',
    deskripsi: 'Kanopi teras dengan atap alderon yang kedap suara dan panas. Rangka baja ringan, pemasangan cepat.',
    image: '/gallery/kanopi-2.png',
  },
  {
    id: 3,
    judul: 'Kanopi Pagar Polikarbonat',
    kategori: 'Kanopi',
    deskripsi: 'Kanopi area depan rumah dengan atap polikarbonat bening. Tembus cahaya, tidak pengap.',
    image: '/gallery/kanopi-3.png',
  },
  {
    id: 4,
    judul: 'Pergola Taman',
    kategori: 'Kanopi',
    deskripsi: 'Pergola untuk area taman atau BBQ. Konstruksi baja dengan finishing cat kayu natural.',
    image: '/project-pergola.png',
  },

  // PAGAR
  {
    id: 5,
    judul: 'Pagar Hollow Minimalis',
    kategori: 'Pagar',
    deskripsi: 'Pagar minimalis model horizontal, besi hollow 40x40 dengan finishing powder coating. Tahan cuaca dan anti karat.',
    image: '/gallery/pagar-1.png',
  },
  {
    id: 6,
    judul: 'Pagar BRC Standard',
    kategori: 'Pagar',
    deskripsi: 'Pagar BRC tinggi 1.5 meter, galvanis anti karat. Ekonomis dan praktis untuk perumahan.',
    image: '/gallery/pagar-2.png',
  },
  {
    id: 7,
    judul: 'Pagar Custom Artistik',
    kategori: 'Pagar',
    deskripsi: 'Pagar custom dengan ornamen minimalis. Desain eksklusif sesuai keinginan, finishing duco premium.',
    image: '/gallery/pagar-3.png',
  },

  // TANGGA
  {
    id: 8,
    judul: 'Tangga Spiral',
    kategori: 'Tangga',
    deskripsi: 'Tangga spiral untuk rumah minimalis. Hemat ruang dengan diameter 1.2m, pegangan stainless steel.',
    image: '/gallery/tangga-1.png',
  },
  {
    id: 9,
    judul: 'Tangga Lurus Minimalis',
    kategori: 'Tangga',
    deskripsi: 'Tangga lurus dengan pegangan kombinasi besi dan kayu. Lebar 90cm, anak tangga plat anti slip.',
    image: '/gallery/tangga-2.png',
  },
  {
    id: 10,
    judul: 'Tangga Model U',
    kategori: 'Tangga',
    deskripsi: 'Tangga bentuk U dengan bordes di tengah. Ideal untuk rumah dua lantai dengan ruang terbatas.',
    image: '/gallery/tangga-3.png',
  },

  // TERALIS
  {
    id: 11,
    judul: 'Teralis Jendela Minimalis',
    kategori: 'Teralis',
    deskripsi: 'Teralis jendela model minimalis, besi hollow 20x20. Jarak antar besi 12cm untuk keamanan optimal.',
    image: '/gallery/teralis-1.png',
  },
  {
    id: 12,
    judul: 'Teralis Security',
    kategori: 'Teralis',
    deskripsi: 'Teralis security dengan besi tebal, dilengkapi sistem kunci dari dalam. Keamanan maksimal.',
    image: '/gallery/teralis-2.png',
  },
  {
    id: 13,
    judul: 'Teralis Artistik',
    kategori: 'Teralis',
    deskripsi: 'Teralis dengan ornamen batik atau custom design. Finishing powder coating tahan lama.',
    image: '/project-teralis.png',
  },

  // RENOVASI
  {
    id: 14,
    judul: 'Renovasi Dapur',
    kategori: 'Renovasi',
    deskripsi: 'Renovasi dapur lengkap: kitchen set baru, instalasi plumbing dan listrik, keramik backsplash.',
    image: '/gallery/renovasi-1.png',
  },
  {
    id: 15,
    judul: 'Renovasi Kamar Mandi',
    kategori: 'Renovasi',
    deskripsi: 'Renovasi kamar mandi modern: shower area, closet duduk, wastafel, keramik full dinding.',
    image: '/gallery/renovasi-2.png',
  },
  {
    id: 16,
    judul: 'Renovasi Atap',
    kategori: 'Renovasi',
    deskripsi: 'Penggantian atap genteng ke spandek atau alderon. Termasuk perbaikan rangka usuk yang rusak.',
    image: '/gallery/renovasi-3.png',
  },
  {
    id: 17,
    judul: 'Renovasi Total Rumah',
    kategori: 'Renovasi',
    deskripsi: 'Renovasi menyeluruh: atap, plafon, lantai, kamar mandi, dapur, dan interior. Satu paket lengkap.',
    image: '/project-renovasi.png',
  },
  {
    id: 18,
    judul: 'Perluasan Rumah',
    kategori: 'Renovasi',
    deskripsi: 'Penambahan ruang tamu, kamar tidur, atau dapur. Konstruksi baru dengan pondasi yang kuat.',
    image: '/project-atap.png',
  },
]

const kategoriList = [
  { nama: 'Semua', count: 18 },
  { nama: 'Kanopi', count: 4 },
  { nama: 'Pagar', count: 3 },
  { nama: 'Tangga', count: 3 },
  { nama: 'Teralis', count: 3 },
  { nama: 'Renovasi', count: 5 },
]

const stats = [
  { angka: '1000+', label: 'Proyek Selesai' },
  { angka: '19+', label: 'Tahun Pengalaman' },
  { angka: '500+', label: 'Pelanggan Puas' },
  { angka: '4', label: 'Kota Layanan' },
]

export default function GalleryPage() {
  const [kategoriAktif, setKategoriAktif] = useState('Semua')
  const [imageLoaded, setImageLoaded] = useState<{[key: number]: boolean}>({})

  const filteredProyek = kategoriAktif === 'Semua' 
    ? semuaProyek 
    : semuaProyek.filter(p => p.kategori === kategoriAktif)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-orange-400 text-sm font-medium mb-2">PORTOFOLIO KAMI</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 font-brand">
            Galeri Hasil Pekerjaan
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Beberapa proyek yang sudah kami kerjakan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya lihat galeri di website dan mau tanya-tanya.')}
              className="bg-orange-500 text-white hover:bg-orange-600 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Tanya via WhatsApp
            </Button>
            <Button 
              variant="outline"
              onClick={() => makeCall()}
              className="border-slate-500 text-white hover:bg-slate-700 min-h-[48px]"
            >
              <Phone className="w-4 h-4 mr-2" />
              +62 857-3860-2255
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-2 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-xl sm:text-2xl font-bold text-orange-500">{stat.angka}</p>
                <p className="text-slate-500 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Kategori */}
      <section className="py-4 bg-slate-50 sticky top-0 z-10 border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {kategoriList.map((kat) => (
              <button
                key={kat.nama}
                onClick={() => setKategoriAktif(kat.nama)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  kategoriAktif === kat.nama
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-slate-600 border hover:bg-slate-100'
                }`}
              >
                {kat.nama} ({kat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {filteredProyek.map((proyek) => (
            <ScrollAnimation key={proyek.id}>
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <Image
                      src={proyek.image}
                      alt={proyek.judul}
                      fill
                      className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                        imageLoaded[proyek.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => setImageLoaded(prev => ({...prev, [proyek.id]: true}))}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    {!imageLoaded[proyek.id] && (
                      <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                    )}
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-8 h-8 text-white" />
                      </span>
                    </div>

                    {/* Badge Kategori */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 text-slate-700 text-xs">
                        {proyek.kategori}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base mb-2">
                      {proyek.judul}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">
                      {proyek.deskripsi}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Info tambahan */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Mau lihat foto lebih banyak? Hubungi kami via WhatsApp
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-gradient-to-r from-orange-500 to-red-600 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-brand">
                Punya Proyek Serupa?
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Konsultasi gratis, survei lokasi gratis untuk area Magetan dan sekitarnya
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg"
                  onClick={() => openWhatsApp('Halo, saya mau konsultasi soal proyek saya.')}
                  className="bg-white text-orange-600 hover:bg-orange-50 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Konsultasi Gratis
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => makeCall()}
                  className="border-white text-white hover:bg-white/10 min-h-[48px]"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Telepon Langsung
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
