'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Phone, MessageCircle, Award, Clock, Shield, ArrowRight, Fence, DoorOpen, Wrench, Combine, MapPin, Users, Star, ChevronDown, ChevronUp } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import Link from 'next/link'
import { useState } from 'react'

const lasServices = [
  {
    icon: Fence,
    title: 'Pagar Besi Minimalis',
    description: 'Pembuatan pagar besi minimalis, pagar BRC, pagar custom sesuai desain untuk rumah modern di Magetan dan sekitarnya.',
    features: ['Anti karat dengan cat duco', 'Desain custom gratis', 'Kuat dan tahan lama', 'Harga terjangkau'],
    keywords: ['pagar besi magetan', 'pagar minimalis', 'pagar BRC'],
  },
  {
    icon: Combine,
    title: 'Tangga Besi',
    description: 'Pembuatan tangga besi, tangga putar spiral, tangga minimalis untuk rumah dan bangunan dengan presisi tinggi.',
    features: ['Presisi tinggi', 'Berbagai model', 'Safety first', 'Finishing rapi'],
    keywords: ['tangga besi magetan', 'tangga spiral', 'tangga minimalis'],
  },
  {
    icon: DoorOpen,
    title: 'Teralis Jendela',
    description: 'Pembuatan teralis jendela dan pintu untuk keamanan rumah Anda dengan desain artistik dan modern.',
    features: ['Keamanan maksimal', 'Desain artistik', 'Harga terjangkau', 'Anti maling'],
    keywords: ['teralis jendela magetan', 'teralis minimalis', 'teralis artistik'],
  },
  {
    icon: Wrench,
    title: 'Konstruksi Baja',
    description: 'Konstruksi baja ringan untuk rangka atap, mezzanine, kanopi, dan struktur bangunan lainnya.',
    features: ['Ringan tapi kuat', 'Anti karat galvanis', 'Pemasangan cepat', 'Tahan gempa'],
    keywords: ['konstruksi baja magetan', 'baja ringan', 'rangka atap'],
  },
]

const reasons = [
  { icon: Award, title: '19+ Tahun Pengalaman', desc: 'Bengkel las terpercaya sejak 2005 di Magetan' },
  { icon: Users, title: '1000+ Proyek Selesai', desc: 'Dipercaya ribuan pelanggan di Jawa Timur' },
  { icon: Shield, title: 'Garansi Hingga 2 Tahun', desc: 'Garansi konstruksi dan finishing' },
  { icon: CheckCircle2, title: 'Material SNI', desc: 'Hanya menggunakan material berkualitas' },
]

const advantages = [
  'Tukang las bersertifikat dan berpengalaman sejak 2005',
  'Peralatan las modern dan lengkap',
  'Material besi berkualitas tinggi dari supplier terpercaya',
  'Desain custom sesuai keinginan pelanggan',
  'Harga kompetitif dan transparan tanpa biaya tersembunyi',
  'Garansi untuk setiap pekerjaan las',
  'Pengerjaan presisi dan rapi oleh tim profesional',
  'Melayani area Magetan, Madiun, Ngawi, Ponorogo, dan sekitarnya',
  'Survei lokasi gratis untuk area Magetan',
  'Konsultasi desain gratis sebelum pengerjaan',
]

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan di bengkel las MBUZENK ZETRO?',
    answer: 'Waktu pengerjaan tergantung jenis dan kompleksitas pekerjaan. Untuk pagar besi minimalis biasanya 3-5 hari kerja, kanopi 2-4 hari kerja, tangga besi 5-7 hari kerja, dan konstruksi baja 7-14 hari kerja. Kami selalu memberikan estimasi waktu yang jelas sebelum pengerjaan.',
  },
  {
    question: 'Apakah bengkel las MBUZENK ZETRO melayani area di luar Magetan?',
    answer: 'Ya, kami melayani area Magetan, Madiun, Ngawi, Ponorogo, Surabaya, dan seluruh Jawa Timur. Untuk lokasi di luar radius 50km dari Magetan, akan ada biaya transportasi yang diinformasikan saat survei gratis.',
  },
  {
    question: 'Berapa biaya survei lokasi untuk pengerjaan las?',
    answer: 'Survei lokasi GRATIS untuk area Magetan dan sekitarnya. Tim kami akan datang untuk pengukuran, konsultasi desain, dan memberikan penawaran harga langsung di lokasi Anda.',
  },
  {
    question: 'Apakah ada garansi untuk hasil pekerjaan las?',
    answer: 'Ya, kami memberikan garansi konstruksi besi hingga 2 tahun, garansi finishing cat 6 bulan, dan garansi service gratis seumur hidup untuk pelanggan setia. Kualitas adalah prioritas utama kami.',
  },
  {
    question: 'Bagaimana sistem pembayaran di bengkel las MBUZENK ZETRO?',
    answer: 'Sistem pembayaran fleksibel: DP 50% untuk memulai pengerjaan, pelunasan setelah pekerjaan selesai dan disetujui. Kami juga menerima pembayaran bertahap untuk proyek besar. Transfer bank dan tunai tersedia.',
  },
  {
    question: 'Material apa saja yang digunakan untuk pagar besi dan kanopi?',
    answer: 'Kami menggunakan material berkualitas tinggi seperti besi hollow galvanis, besi WF (Wide Flange), spandek, polikarbonat, alderon, dan baja ringan. Semua material memenuhi standar SNI dengan garansi anti karat.',
  },
]

const testimonials = [
  {
    name: 'Bpk. Ahmad Fauzi',
    location: 'Magetan',
    project: 'Kanopi Carport',
    rating: 5,
    text: 'Bengkel las MBUZENK ZETRO sangat profesional. Pengerjaan kanopi rapi dan tepat waktu. Recommended!',
  },
  {
    name: 'Ibu Siti Rahayu',
    location: 'Madiun',
    project: 'Pagar Minimalis',
    rating: 5,
    text: 'Pagar rumah sekarang terlihat lebih mewah. Desain minimalis sesuai keinginan. Terima kasih!',
  },
  {
    name: 'Bpk. Hendra Wijaya',
    location: 'Ngawi',
    project: 'Tangga Spiral',
    rating: 5,
    text: 'Tangga spiral yang dibuat sangat kokoh dan artistik. Harga reasonable untuk kualitas setinggi ini.',
  },
]

export function BengkelLasPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
              BENGKEL LAS MAGETAN TERPERCAYA
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-brand">
              Bengkel Las Magetan - Spesialis Las Besi & Konstruksi Baja
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mb-4">
              <strong>Bengkel las terpercaya di Magetan</strong> sejak 2005. Spesialis pembuatan pagar besi minimalis, 
              tangga besi, teralis jendela, konstruksi baja, dan berbagai produk las berkualitas. 
              Dengan pengalaman <strong>19+ tahun</strong> dan <strong>1000+ proyek selesai</strong>, 
              kami melayani Magetan, Madiun, Ngawi, Ponorogo, dan seluruh Jawa Timur.
            </p>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mb-8">
              Hubungi bengkel las kami untuk survei gratis dan konsultasi desain. 
              Telp/WhatsApp: <strong>0857-3860-2255</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp('Halo, saya ingin pesan pembuatan besi/las di bengkel las Magetan.')}
                className="bg-white text-orange-600 hover:bg-white/90 shadow-lg min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Pesan via WhatsApp
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

      {/* Location & Contact Info - Good for Local SEO */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Magetan, Jawa Timur</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-500" />
              <span>0857-3860-2255</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>Buka: Senin-Sabtu 08:00-17:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-orange-500" />
              <span>Rating: 4.9/5 (100+ Review)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-4 font-brand">
              Bengkel Las Terpercaya di Magetan Sejak 2005
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
              MBUZENK ZETRO adalah bengkel las di Magetan yang telah dipercaya ribuan pelanggan untuk 
              pembuatan pagar besi, kanopi, tangga, teralis, dan konstruksi baja. Dengan tim tukang las 
              berpengalaman dan peralatan modern, kami menghasilkan kualitas terbaik.
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

      {/* Services */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4 font-brand">
              Layanan Bengkel Las MBUZENK ZETRO
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Berbagai layanan las besi dan konstruksi baja untuk kebutuhan rumah dan bangunan Anda 
              di Magetan dan sekitarnya
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lasServices.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-colors h-full cursor-pointer group" onClick={() => openWhatsApp(`Halo, saya ingin pesan ${service.title.toLowerCase()} di bengkel las Magetan.`)}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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

      {/* About Content - Rich Text for SEO */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimation direction="left">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 font-brand">
                Mengapa Memilih Bengkel Las MBUZENK ZETRO di Magetan?
              </h2>
              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-slate-700 mb-4">
                  <strong>Bengkel las MBUZENK ZETRO</strong> adalah pilihan tepat untuk Anda yang mencari 
                  <strong> bengkel las di Magetan</strong> yang terpercaya dan profesional. Berdiri sejak tahun 2005, 
                  kami telah menyelesaikan lebih dari 1000 proyek las besi dan konstruksi baja untuk pelanggan 
                  di Magetan, Madiun, Ngawi, Ponorogo, dan seluruh Jawa Timur.
                </p>
                <p className="text-slate-700 mb-4">
                  Sebagai <strong>spesialis las besi</strong>, kami menyediakan layanan pembuatan 
                  <strong> pagar besi minimalis</strong>, <strong>kanopi carport</strong>, 
                  <strong> tangga besi</strong>, <strong>teralis jendela</strong>, dan 
                  <strong> konstruksi baja ringan</strong>. Setiap pekerjaan dikerjakan oleh tim tukang las 
                  berpengalaman dengan menggunakan material berkualitas SNI dan peralatan las modern.
                </p>
                <p className="text-slate-700">
                  Kami berkomitmen memberikan hasil terbaik dengan harga kompetitif, garansi pekerjaan, 
                  dan pelayanan yang memuaskan. Survei lokasi gratis untuk area Magetan dan sekitarnya!
                </p>
              </div>
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
                  Butuh Jasa Las di Magetan?
                </h3>
                <p className="text-slate-600 mb-6">
                  Hubungi bengkel las kami untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan 
                  las besi Anda. Survei lokasi gratis untuk area Magetan!
                </p>
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => openWhatsApp('Halo, saya ingin konsultasi tentang jasa las di bengkel las Magetan.')}
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
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-500 mb-2">Alamat Bengkel Las:</p>
                  <p className="text-slate-700 font-medium">{CONFIG.address}</p>
                  <p className="text-slate-700">{CONFIG.city}</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-4 font-brand">
              Testimoni Pelanggan Bengkel Las MBUZENK ZETRO
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Ribuan pelanggan telah mempercayakan proyek las mereka kepada kami
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-slate-800">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.location} • {testimonial.project}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Great for SEO */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-4 font-brand">
              Pertanyaan Umum tentang Bengkel Las MBUZENK ZETRO
            </h2>
            <p className="text-slate-600 text-center mb-12">
              Jawaban untuk pertanyaan yang sering diajukan tentang layanan bengkel las kami
            </p>
          </ScrollAnimation>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 50}>
                <Card className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-4 sm:p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-medium text-slate-800 pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-slate-600 border-t">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  )}
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
              Hubungi Bengkel Las MBUZENK ZETRO Sekarang!
            </h2>
            <p className="text-white/90 mb-4">
              Dapatkan penawaran terbaik untuk kebutuhan las besi dan konstruksi baja Anda
            </p>
            <p className="text-white/80 mb-8">
              <strong>Lokasi:</strong> {CONFIG.address}, {CONFIG.city}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp('Halo, saya ingin ke bengkel las MBUZENK ZETRO untuk konsultasi proyek las.')}
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
                Telepon: {CONFIG.phoneDisplay}
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
