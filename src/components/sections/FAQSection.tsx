'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { openWhatsApp } from '@/lib/config'

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan kanopi minimalis?',
    answer: 'Waktu pengerjaan kanopi minimalis biasanya 3-7 hari kerja tergantung ukuran dan kompleksitas desain. Untuk kanopi carport standar (3x5 meter), pengerjaan membutuhkan waktu sekitar 4-5 hari kerja termasuk pengukuran, fabrikasi, dan instalasi.',
    category: 'Kanopi'
  },
  {
    question: 'Apakah ada garansi untuk hasil pekerjaan?',
    answer: 'Ya, kami memberikan garansi untuk setiap pekerjaan. Garansi konstruksi besi hingga 2 tahun, garansi finishing cat 6 bulan, dan garansi service gratis seumur hidup untuk pelanggan setia. Kerusakan akibat bencana alam tidak termasuk dalam garansi.',
    category: 'Garansi'
  },
  {
    question: 'Apa saja layanan renovasi rumah yang ditawarkan?',
    answer: 'Kami menyediakan layanan renovasi rumah lengkap meliputi: renovasi atap, renovasi kamar mandi, renovasi dapur, pembuatan kitchen set, pergola, teralis, tangga besi, dan konstruksi baja ringan. Tim kami siap mengerjakan proyek dari skala kecil hingga besar.',
    category: 'Renovasi'
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer: 'Sistem pembayaran kami fleksibel: DP 50% untuk memulai pengerjaan, pelunasan setelah pekerjaan selesai dan disetujui. Kami juga menerima pembayaran bertahap untuk proyek besar. Pembayaran bisa via transfer bank atau tunai di bengkel.',
    category: 'Pembayaran'
  },
  {
    question: 'Apakah melayani area di luar Magetan?',
    answer: 'Ya, kami melayani area Magetan, Madiun, Ngawi, Ponorogo, dan sekitarnya. Untuk lokasi di luar radius 30km dari bengkel, akan ada tambahan biaya transportasi yang akan diinformasikan saat survei lokasi gratis.',
    category: 'Lokasi'
  },
  {
    question: 'Berapa biaya survei lokasi?',
    answer: 'Survei lokasi GRATIS untuk area Magetan dan sekitarnya. Tim kami akan datang untuk pengukuran dan konsultasi langsung di lokasi Anda. Untuk lokasi yang jauh, silakan hubungi kami untuk konfirmasi ketersediaan.',
    category: 'Layanan'
  },
  {
    question: 'Material apa saja yang digunakan?',
    answer: 'Kami menggunakan material berkualitas tinggi seperti besi hollow galvanis, besi UNP, CNP, bahan atap spandek/polikarbonat merek terkenal (Sakura, SNI, dll), cat anti karat dan finishing dari merek ternama untuk hasil yang tahan lama.',
    category: 'Material'
  },
  {
    question: 'Apakah bisa request desain custom?',
    answer: 'Tentu! Kami menerima request desain custom sesuai keinginan Anda. Tim desainer kami akan membantu mewujudkan ide Anda. Konsultasi desain gratis bisa dilakukan langsung di bengkel atau via WhatsApp dengan mengirimkan referensi gambar.',
    category: 'Desain'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-10 sm:mb-16">
            <Badge variant="outline" className="border-orange-500 text-orange-600 mb-3 sm:mb-4">
              FAQ
            </Badge>
            <h2 className="font-brand text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              Pertanyaan <span className="text-orange-600">Umum</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan bengkel las dan renovasi kami
            </p>
          </div>
        </ScrollAnimation>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <Card className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg border-orange-200' : 'shadow-sm hover:shadow-md'}`}>
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left cursor-pointer"
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === index ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-orange-500 font-medium">{faq.category}</span>
                        <h3 className="text-sm sm:text-base font-semibold text-slate-800 mt-0.5">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-orange-500' : ''}`} />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pl-16 sm:pl-20">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation delay={400}>
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-slate-600 mb-4 text-sm sm:text-base">
              Masih punya pertanyaan lain?
            </p>
            <button 
              onClick={() => openWhatsApp('Halo, saya ingin bertanya tentang layanan bengkel las dan renovasi.')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg shadow-orange-500/25 transition-all hover:scale-105 cursor-pointer text-sm sm:text-base"
            >
              <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Tanya Langsung via WhatsApp
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
