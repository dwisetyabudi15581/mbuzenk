'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Award, Users, Shield, CheckCircle2, Quote } from 'lucide-react'
import { CONFIG, scrollToSection } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const features = [
  { icon: Award, title: 'Berpengalaman', desc: `Lebih dari ${CONFIG.yearsExperience} tahun` },
  { icon: Users, title: 'Tim Profesional', desc: 'Tukang las bersertifikat' },
  { icon: Shield, title: 'Garansi Kerja', desc: 'Jaminan kualitas' },
  { icon: CheckCircle2, title: 'Tepat Waktu', desc: 'Sesuai jadwal' },
]

export function AboutSection() {
  return (
    <section id="tentang" className="py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-10 sm:mb-16">
            <Badge variant="outline" className="border-orange-500 text-orange-600 mb-3 sm:mb-4">
              TENTANG KAMI
            </Badge>
            <h2 className="font-brand text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              Kenali <span className="text-orange-600">{CONFIG.businessName}</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Bengkel las dan jasa renovasi rumah terpercaya telah dipercaya ratusan pelanggan
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image */}
          <ScrollAnimation direction="left" className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/service-las.webp"
                alt="Tim bengkel las MBUZENK ZETRO sedang bekerja"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
            {/* Floating Card */}
            <button 
              onClick={() => scrollToSection('portofolio')}
              className="absolute -bottom-4 sm:-bottom-6 right-4 sm:-right-6 bg-white rounded-xl shadow-xl p-4 sm:p-6 cursor-pointer hover:shadow-2xl transition-shadow z-10 hover:-translate-y-1"
              aria-label="Lihat semua proyek"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold text-slate-800">{CONFIG.projectsCompleted}</div>
                  <div className="text-slate-500 text-sm">Proyek Sukses</div>
                </div>
              </div>
            </button>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation direction="right" className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 font-brand">
              Bengkel Las & Renovasi Rumah Terpercaya dengan Kualitas Premium
            </h3>
            <p className="text-slate-600 leading-rel text-sm sm:text-base">
              <strong>{CONFIG.businessName}</strong> adalah bengkel las dan jasa renovasi rumah yang 
              berdiri sejak tahun {CONFIG.yearEstablished}. Kami berfokus pada penggunaan material berkualitas tinggi dengan 
              pengerjaan yang presisi dan detail. Setiap proyek kami tangani dengan standar keamanan tinggi 
              dan hasil akhir yang memuaskan.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Dengan tim tukang las bersertifikat dan peralatan modern, kami siap mengerjakan berbagai 
              proyek mulai dari kanopi minimalis, pagar besi elegan, tangga besi artistik, hingga renovasi 
              total rumah Anda. Melayani area Magetan, Madiun, Ngawi, Ponorogo dan sekitarnya. 
              Kepuasan pelanggan adalah prioritas utama kami.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <button 
                    onClick={() => scrollToSection('layanan')}
                    className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-slate-50 hover:bg-orange-50 transition-colors text-left cursor-pointer group min-h-[80px] w-full hover:shadow-md"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-orange-600 text-sm sm:text-base">
                        {feature.title}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500">{feature.desc}</div>
                    </div>
                  </button>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        {/* Owner Section */}
        <ScrollAnimation className="mt-16 sm:mt-24">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl" />
            
            <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
              {/* Owner Photo */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-orange-500/30 shadow-2xl">
                    <Image
                      src="/owner.jpg"
                      alt="Pemilik MBUZENK ZETRO"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 160px, 192px"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Owner Quote */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <Quote className="w-10 h-10 text-orange-500/30 mb-4 mx-auto lg:mx-0" />
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-white font-medium leading-relaxed mb-6">
                  &ldquo;Kami berkomitmen memberikan hasil terbaik dengan standar kualitas tertinggi. 
                  Setiap proyek adalah tanggung jawab kami untuk memastikan kepuasan pelanggan.&rdquo;
                </blockquote>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <div className="text-center sm:text-left">
                    <div className="text-white font-bold text-lg">Mbah Tro</div>
                    <div className="text-slate-400 text-sm">Pemilik & Pendiri MBUZENK ZETRO</div>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-slate-700" />
                  <div className="text-center sm:text-left">
                    <div className="text-orange-400 font-semibold">{CONFIG.yearsExperience} Pengalaman</div>
                    <div className="text-slate-400 text-sm">Sejak {CONFIG.yearEstablished}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
