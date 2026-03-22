'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { openWhatsApp } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

export function ServicesSection() {
  return (
    <section id="layanan" className="py-12 sm:py-20 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-10 sm:mb-16">
            <Badge variant="outline" className="border-orange-500 text-orange-400 mb-3 sm:mb-4">
              LAYANAN KAMI
            </Badge>
            <h2 className="font-brand text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Layanan <span className="text-orange-400">Bengkel Las & Renovasi</span> Lengkap
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
              Spesialis las besi dan renovasi rumah profesional dengan standar kualitas tertinggi. 
              Melayani Magetan, Madiun, Ngawi, Ponorogo.
            </p>
          </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <Card 
                onClick={() => openWhatsApp(service.message)}
                className="group bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer hover:-translate-y-1"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Jasa ${service.category} MBUZENK ZETRO`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-brand flex items-center gap-2">
                    {service.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-slate-700 text-slate-300 text-[10px] sm:text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
