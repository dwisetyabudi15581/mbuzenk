'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Info } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const hargaPagar = [
  { model: 'Pagar BRC Standard', ukuran: 'Tinggi 1.5m', harga: 'Rp 350.000 - 450.000 /meter', catatan: 'Untuk panjang min. 10 meter' },
  { model: 'Pagar BRC Medium', ukuran: 'Tinggi 1.8m', harga: 'Rp 450.000 - 550.000 /meter', catatan: 'Lebih tinggi, lebih aman' },
  { model: 'Pagar Hollow Minimalis', ukuran: 'Standar 1.5m', harga: 'Rp 500.000 - 700.000 /meter', catatan: 'Desain custom tersedia' },
  { model: 'Pagar Custom Premium', ukuran: 'Sesuai pesanan', harga: 'Rp 700.000 - 1.200.000 /meter', catatan: 'Desain eksklusif' },
  { model: 'Pagar Dorong/Swing', ukuran: 'Lebar 3-4m', harga: 'Rp 3.500.000 - 6.000.000 /unit', catatan: 'Termasuk instalasi' },
]

const faktorHarga = [
  'Panjang total pagar yang akan dipasang',
  'Tinggi pagar yang diinginkan',
  'Jenis dan ketebalan material besi',
  'Kompleksitas desain pagar',
  'Jenis finishing cat (duco/powder coating)',
  'Lokasi pemasangan (biaya transport)',
]

const keuntungan = [
  'Material besi berkualitas SNI',
  'Garansi konstruksi 2 tahun',
  'Desain custom sesuai keinginan',
  'Pemasangan oleh tim profesional',
  'Harga transparan tanpa biaya tersembunyi',
  'Konsultasi dan survei lokasi gratis',
]

export default function HargaPagarPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
            INFO HARGA 2024
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
            Harga Pagar Besi Minimalis 2024
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Update harga terbaru dari MBUZENK ZETRO - Bengkel Las Magetan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => openWhatsApp('Halo, saya ingin tanya harga pagar besi.')}
              className="bg-orange-500 text-white hover:bg-orange-600 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Minta Penawaran
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

      {/* Daftar Harga */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 font-brand">
            Daftar Harga Pagar Besi
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left text-sm">Model Pagar</th>
                  <th className="p-3 text-left text-sm hidden sm:table-cell">Ukuran</th>
                  <th className="p-3 text-left text-sm">Estimasi Harga</th>
                </tr>
              </thead>
              <tbody>
                {hargaPagar.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="p-3 text-sm">
                      <p className="font-medium text-slate-800">{item.model}</p>
                      <p className="text-slate-500 text-xs sm:hidden">{item.ukuran}</p>
                    </td>
                    <td className="p-3 text-slate-600 text-sm hidden sm:table-cell">{item.ukuran}</td>
                    <td className="p-3 text-sm">
                      <p className="font-semibold text-orange-600">{item.harga}</p>
                      <p className="text-slate-400 text-xs">{item.catatan}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-4 flex items-center gap-2">
            <Info className="w-4 h-4" />
            * Harga dapat berubah sewaktu-waktu. Hubungi kami untuk penawaran terbaru.
          </p>
        </ScrollAnimation>

        {/* Faktor Harga */}
        <ScrollAnimation>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 mt-8 font-brand">
            Faktor yang Mempengaruhi Harga
          </h2>
          <Card>
            <CardContent className="p-4 sm:p-6">
              <ul className="grid sm:grid-cols-2 gap-3">
                {faktorHarga.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Keuntungan */}
        <ScrollAnimation>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 mt-8 font-brand">
            Mengapa Pilih MBUZENK ZETRO?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {keuntungan.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <Card className="bg-gradient-to-r from-orange-500 to-red-600 mt-8 overflow-hidden">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3 font-brand">
                Dapatkan Penawaran Terbaik!
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Hubungi kami untuk survei gratis dan penawaran sesuai kebutuhan Anda
              </p>
              <Button 
                size="lg"
                onClick={() => openWhatsApp('Halo, saya ingin penawaran harga pagar besi dari website.')}
                className="bg-white text-orange-600 hover:bg-white/90 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Minta Penawaran Sekarang
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Related */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">Layanan Terkait:</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/layanan/pagar-besi"><Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Pagar Besi</Badge></Link>
            <Link href="/layanan/kanopi-minimalis"><Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Kanopi Minimalis</Badge></Link>
            <Link href="/layanan/teralis-jendela"><Badge variant="outline" className="cursor-pointer hover:bg-orange-50">Teralis Jendela</Badge></Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}
