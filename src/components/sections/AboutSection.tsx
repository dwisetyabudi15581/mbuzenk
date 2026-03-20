'use client'

import { Badge } from '@/components/ui/badge'
import { Award, Users, Shield, CheckCircle2 } from 'lucide-react'
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/service-las.png"
                alt="Tim bengkel las MBUZENK ZETRO sedang bekerja"
                className="w-full h-[280px] sm:h-[400px] object-cover"
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
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
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
      </div>
    </section>
  )
}
