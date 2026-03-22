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

// Data proyek dengan gambar sesuai judul
const semuaProyek = [
  // KANOPI
  {
    id: 1,
    judul: 'Kanopi Carport Spandek',
    kategori: 'Kanopi',
    deskripsi: 'Kanopi carport dengan rangka besi galvanis dan atap spandek biru anti karat. Cocok untuk 1-2 mobil.',
    image: '/gallery/kanopi-1.png',
  },
  {
    id: 2,
    judul: 'Kanopi Teras Alderon',
    kategori: 'Kanopi',
    deskripsi: 'Kanopi teras dengan atap alderon coklat yang kedap suara dan tahan panas. Rangka besi kokoh.',
    image: '/gallery/kanopi-2.png',
  },
  {
    id: 3,
    judul: 'Kanopi Polikarbonat',
    kategori: 'Kanopi',
    deskripsi: 'Kanopi dengan atap polikarbonat bening, tembus cahaya. Rangka aluminium minimalis modern.',
    image: '/gallery/kanopi-3.png',
  },
  {
    id: 4,
    judul: 'Kanopi Pagar',
    kategori: 'Kanopi',
    deskripsi: 'Kanopi untuk area depan rumah dan pagar, melindungi dari hujan dan panas.',
    image: '/gallery/kanopi-4.png',
  },

  // PAGAR
  {
    id: 5,
    judul: 'Pagar Hollow Minimalis',
    kategori: 'Pagar',
    deskripsi: 'Pagar minimalis model horizontal dari besi hollow. Cat hitam, cocok untuk rumah modern.',
    image: '/gallery/pagar-1.png',
  },
  {
    id: 6,
    judul: 'Pagar BRC Galvanis',
    kategori: 'Pagar',
    deskripsi: 'Pagar BRC wire mesh galvanis anti karat. Ekonomis, praktis, dan tahan lama.',
    image: '/gallery/pagar-2.png',
  },
  {
    id: 7,
    judul: 'Pagar Custom Proses',
    kategori: 'Pagar',
    deskripsi: 'Proses pembuatan pagar custom di workshop. Pengelasan dan finishing oleh tukang las.',
    image: '/gallery/pagar-3.png',
  },

  // TANGGA
  {
    id: 8,
    judul: 'Tangga Spiral Minimalis',
    kategori: 'Tangga',
    deskripsi: 'Tangga spiral besi dengan anak tangga kayu. Hemat ruang untuk rumah minimalis.',
    image: '/gallery/tangga-1.png',
  },
  {
    id: 9,
    judul: 'Tangga Lurus Besi',
    kategori: 'Tangga',
    deskripsi: 'Tangga lurus dengan rangka besi dan anak tangga papan kayu. Pegangan besi minimalis.',
    image: '/gallery/tangga-2.png',
  },
  {
    id: 10,
    judul: 'Tangga Proses Pengerjaan',
    kategori: 'Tangga',
    deskripsi: 'Tangga besi dalam proses pemasangan. Rangka hollow belum dicat, tampak bekas las.',
    image: '/gallery/tangga-3.png',
  },

  // TERALIS
  {
    id: 11,
    judul: 'Teralis Jendela Minimalis',
    kategori: 'Teralis',
    deskripsi: 'Teralis jendela model minimalis horizontal. Besi hollow 20x20, cat hitam.',
    image: '/gallery/teralis-1.png',
  },
  {
    id: 12,
    judul: 'Teralis Proses Las',
    kategori: 'Teralis',
    deskripsi: 'Proses pengelasan teralis di workshop. Api las dan sparks visible.',
    image: '/gallery/teralis-2.png',
  },

  // RENOVASI
  {
    id: 13,
    judul: 'Renovasi Dapur',
    kategori: 'Renovasi',
    deskripsi: 'Renovasi dapur: kitchen set baru, countertop, dan backsplash keramik.',
    image: '/gallery/renovasi-1.png',
  },
  {
    id: 14,
    judul: 'Renovasi Kamar Mandi',
    kategori: 'Renovasi',
    deskripsi: 'Renovasi kamar mandi: keramik dinding, lantai baru, closet jongkok.',
    image: '/gallery/renovasi-2.png',
  },
  {
    id: 15,
    judul: 'Renovasi Atap Rumah',
    kategori: 'Renovasi',
    deskripsi: 'Penggantian atap lama ke spandek atau alderon. Tampak genteng sudah dibongkar.',
    image: '/gallery/renovasi-3.png',
  },
  {
    id: 16,
    judul: 'Perbaikan Struktur Atap',
    kategori: 'Renovasi',
    deskripsi: 'Perbaikan rangka usuk dan reng kayu yang rusak. Ganti kayu lapuk.',
    image: '/gallery/renovasi-4.png',
  },
  {
    id: 17,
    judul: 'Pembuatan Kitchen Set',
    kategori: 'Renovasi',
    deskripsi: 'Pembuatan kitchen set custom dari kayu multiplek. Sesuai ukuran dapur.',
    image: '/gallery/renovasi-5.png',
  },
]

const kategoriList = [
  { nama: 'Semua', count: 17 },
  { nama: 'Kanopi', count: 4 },
  { nama: 'Pagar', count: 3 },
  { nama: 'Tangga', count: 3 },
  { nama: 'Teralis', count: 2 },
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
              onClick={() => makeCall()}
              className="bg-slate-700/50 text-white border border-slate-500 hover:bg-slate-700 min-h-[48px]"
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
                  onClick={() => makeCall()}
                  className="bg-white/20 text-white border border-white/30 hover:bg-white/30 min-h-[48px]"
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
