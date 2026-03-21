'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle, Phone, ArrowLeft, Eye, MapPin, Calendar } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { useState } from 'react'

// Data proyek yang lebih natural dan realistis - diperbanyak
const semuaProyek = [
  // KANOPI
  {
    id: 1,
    judul: 'Kanopi Carport Rumah Pak Budi',
    kategori: 'Kanopi',
    lokasi: 'Magetan Kota',
    tahun: '2024',
    deskripsi: 'Pemasangan kanopi carport ukuran 4x6 meter dengan rangka besi hollow 40x40 dan atap spandek. Cat warna hitam doff, pengerjaan 4 hari.',
    image: '/project-kanopi.png',
    highlight: true,
  },
  {
    id: 2,
    judul: 'Kanopi Teras Rumah Bu Siti',
    kategori: 'Kanopi',
    lokasi: 'Madiun',
    tahun: '2024',
    deskripsi: 'Kanopi teras ukuran 3x8 meter, rangka baja ringan dengan atap alderon. Warna coklat kayu, meng-cover area depan rumah.',
    image: '/project-pergola.png',
    highlight: false,
  },
  {
    id: 3,
    judul: 'Kanopi Pagar Rumah Pak Darmo',
    kategori: 'Kanopi',
    lokasi: 'Ngawi',
    tahun: '2023',
    deskripsi: 'Kanopi pagar ukuran 2x5 meter, rangka besi hollow dengan atap polikarbonat bening. Cocok untuk area parkir motor.',
    image: '/project-kanopi.png',
    highlight: false,
  },
  {
    id: 4,
    judul: 'Pergola Taman Bu Ratna',
    kategori: 'Kanopi',
    lokasi: 'Ponorogo',
    tahun: '2024',
    deskripsi: 'Pergola kayu besi ukuran 3x4 meter untuk area BBQ di taman belakang. Atap polikarbonat, finishing cat kayu natural.',
    image: '/project-pergola.png',
    highlight: false,
  },

  // PAGAR
  {
    id: 5,
    judul: 'Pagar Minimalis Rumah Pak Agus',
    kategori: 'Pagar',
    lokasi: 'Magetan',
    tahun: '2024',
    deskripsi: 'Pagar hollow minimalis tinggi 1.7m dengan pintu dorong lebar 3.5m. Finishing powder coating abu-abu, total panjang 15 meter.',
    image: '/project-pagar.png',
    highlight: true,
  },
  {
    id: 6,
    judul: 'Pagar BRC Perumahan Griya Asri',
    kategori: 'Pagar',
    lokasi: 'Madiun',
    tahun: '2024',
    deskripsi: 'Pagar BRC tinggi 1.5m untuk 6 unit rumah. Galvanis anti karat, pemasangan cepat 2 hari selesai semua.',
    image: '/project-pagar.png',
    highlight: false,
  },
  {
    id: 7,
    judul: 'Pagar Custom Rumah Bu Kartini',
    kategori: 'Pagar',
    lokasi: 'Ngawi',
    tahun: '2023',
    deskripsi: 'Pagar custom dengan ornamen minimalis, tinggi 1.8m. Motif kotak-kotak modern, cat duco hitam glossy.',
    image: '/project-pagar.png',
    highlight: false,
  },

  // TANGGA
  {
    id: 8,
    judul: 'Tangga Spiral Rumah Pak Hendro',
    kategori: 'Tangga',
    lokasi: 'Magetan',
    tahun: '2024',
    deskripsi: 'Tangga spiral besi hollow dengan diameter 1.2m, naik ke lantai 2. Pegangan stainless, anak tangga plat besi anti slip.',
    image: '/project-tangga.png',
    highlight: true,
  },
  {
    id: 9,
    judul: 'Tangga Lurus Rumah Bu Sri',
    kategori: 'Tangga',
    lokasi: 'Madiun',
    tahun: '2024',
    deskripsi: 'Tangga lurus besi hollow 14 anak tangga, pegangan kombinasi besi dan kayu. Lebar 90cm, finishing cat duco putih.',
    image: '/project-tangga.png',
    highlight: false,
  },
  {
    id: 10,
    judul: 'Tangga U Rumah Pak Widodo',
    kategori: 'Tangga',
    lokasi: 'Ponorogo',
    tahun: '2023',
    deskripsi: 'Tangga bentuk U dengan bordes di tengah. Rangka besi hollow tebal, anak tangga plat bording. Ukuran compact untuk rumah minimalis.',
    image: '/project-tangga.png',
    highlight: false,
  },

  // TERALIS
  {
    id: 11,
    judul: 'Teralis Jendela Rumah Pak Joko',
    kategori: 'Teralis',
    lokasi: 'Magetan',
    tahun: '2024',
    deskripsi: 'Teralis jendela minimalis untuk 6 jendela. Besi hollow 20x20, jarak antar besi 12cm. Cat duco putih, finishing rapi.',
    image: '/project-teralis.png',
    highlight: true,
  },
  {
    id: 12,
    judul: 'Teralis Security Rumah Bu Ani',
    kategori: 'Teralis',
    lokasi: 'Madiun',
    tahun: '2024',
    deskripsi: 'Teralis security dengan besi tebal 14mm untuk jendela depan. Model minimalis tapi kuat, dilengkapi kunci dari dalam.',
    image: '/project-teralis.png',
    highlight: false,
  },
  {
    id: 13,
    judul: 'Teralis Artistik Rumah Pak Slamet',
    kategori: 'Teralis',
    lokasi: 'Ngawi',
    tahun: '2023',
    deskripsi: 'Teralis dengan ornamen batik untuk 4 jendela. Desain custom sesuai permintaan pemilik, finishing powder coating hitam.',
    image: '/project-teralis.png',
    highlight: false,
  },
  {
    id: 14,
    judul: 'Teralis Pintu Belakang Bu Dewi',
    kategori: 'Teralis',
    lokasi: 'Ponorogo',
    tahun: '2024',
    deskripsi: 'Teralis pintu belakang dengan model minimalis. Besi hollow 20x20, dilengkapi engsel dan kunci, bisa dibuka untuk jalan keluar.',
    image: '/project-teralis.png',
    highlight: false,
  },

  // RENOVASI
  {
    id: 15,
    judul: 'Renovasi Dapur Bu Rina',
    kategori: 'Renovasi',
    lokasi: 'Magetan',
    tahun: '2024',
    deskripsi: 'Renovasi total dapur ukuran 3x4 meter. Kitchen set baru, instalasi air dan listrik, keramik backsplash, selesai 1 minggu.',
    image: '/project-kitchen.png',
    highlight: true,
  },
  {
    id: 16,
    judul: 'Renovasi Kamar Mandi Pak Eko',
    kategori: 'Renovasi',
    lokasi: 'Madiun',
    tahun: '2024',
    deskripsi: 'Renovasi 2 kamar mandi dengan desain modern. Shower area, closet duduk, wastafel, keramik full dinding 2 meter.',
    image: '/project-kamar-mandi.png',
    highlight: false,
  },
  {
    id: 17,
    judul: 'Renovasi Atap Rumah Bu Sarmi',
    kategori: 'Renovasi',
    lokasi: 'Ngawi',
    tahun: '2024',
    deskripsi: 'Penggantian atap genteng ke spandek rangka baja ringan. Ukuran 8x12 meter, perbaikan usuk yang lapuk, selesai 5 hari.',
    image: '/project-atap.png',
    highlight: true,
  },
  {
    id: 18,
    judul: 'Renovasi Total Rumah Pak Tono',
    kategori: 'Renovasi',
    lokasi: 'Ponorogo',
    tahun: '2023',
    deskripsi: 'Renovasi total rumah tinggal 60m2. Termasuk atap, plafon, lantai, kamar mandi, dan dapur. Durasi 6 minggu.',
    image: '/project-renovasi.png',
    highlight: true,
  },
  {
    id: 19,
    judul: 'Perluasan Rumah Bu Wati',
    kategori: 'Renovasi',
    lokasi: 'Magetan',
    tahun: '2024',
    deskripsi: 'Perluasan ruang tamu dan kamar tidur. Konstruksi baru 20m2, pondasi, dinding bata, plafon dan lantai keramik.',
    image: '/project-renovasi.png',
    highlight: false,
  },
  {
    id: 20,
    judul: 'Renovasi Teras Rumah Pak Surya',
    kategori: 'Renovasi',
    lokasi: 'Madiun',
    tahun: '2024',
    deskripsi: 'Renovasi teras dengan penambahan kanopi dan lantai keramik. Ukuran 2x6 meter, cat ulang tembok, finishing 3 hari.',
    image: '/project-kanopi.png',
    highlight: false,
  },
]

const kategoriList = [
  { nama: 'Semua', count: 20 },
  { nama: 'Kanopi', count: 4 },
  { nama: 'Pagar', count: 3 },
  { nama: 'Tangga', count: 3 },
  { nama: 'Teralis', count: 4 },
  { nama: 'Renovasi', count: 6 },
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
            Beberapa proyek yang sudah kami kerjakan untuk pelanggan di Magetan dan sekitarnya
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
              {CONFIG.phoneDisplay}
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
              <Card className={`overflow-hidden group hover:shadow-lg transition-all duration-300 ${
                proyek.highlight ? 'ring-2 ring-orange-200' : ''
              }`}>
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

                    {/* Highlight Badge */}
                    {proyek.highlight && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-orange-500 text-white text-xs">
                          Proyek Unggulan
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-800 text-sm sm:text-base mb-2 line-clamp-1">
                      {proyek.judul}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {proyek.lokasi}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {proyek.tahun}
                      </span>
                    </div>

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
          <p className="text-slate-500 text-sm mb-3">
            Foto-foto di atas adalah sebagian dari proyek yang sudah kami kerjakan
          </p>
          <p className="text-slate-400 text-xs">
            Mau lihat foto lebih banyak? Kunjungi workshop kami atau hubungi via WhatsApp
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
