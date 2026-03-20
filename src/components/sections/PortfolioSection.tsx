'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { openWhatsApp } from '@/lib/config'

export function PortfolioSection() {
  return (
    <section id="portofolio" className="py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="outline" className="border-orange-500 text-orange-600 mb-3 sm:mb-4">
            PORTOFOLIO
          </Badge>
          <h2 className="font-brand text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Karya <span className="text-orange-600">Terbaik</span> Kami
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Beberapa proyek bengkel las dan renovasi rumah yang telah kami kerjakan dengan hasil memuaskan
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <button 
              key={index} 
              onClick={() => openWhatsApp(project.message)}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label={`Lihat detail proyek ${project.title}`}
            >
              <img
                src={project.image}
                alt={`Proyek ${project.title} - ${project.client}`}
                className="w-full h-56 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              {/* Category Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                <Badge className="bg-orange-500 text-white text-xs sm:text-sm">
                  {project.category}
                </Badge>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-base sm:text-xl font-bold text-white mb-1 font-brand flex items-center gap-2">
                  {project.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {project.client}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Button 
            size="lg" 
            onClick={() => openWhatsApp('Halo, saya ingin melihat lebih banyak portofolio proyek bengkel las dan renovasi.')}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-500/25 cursor-pointer min-h-[48px]"
          >
            Lihat Semua Proyek
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
