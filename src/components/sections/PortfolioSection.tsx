'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, ZoomIn } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { openWhatsApp } from '@/lib/config'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { LazyImageLightbox } from '@/components/ui/lazy-components'

export function PortfolioSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const lightboxImages = PROJECTS.map(project => ({
    src: project.image,
    alt: `Proyek ${project.title} - ${project.client}`,
    title: `${project.title} - ${project.client}`
  }))

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <section id="portofolio" className="py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollAnimation>
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
          </ScrollAnimation>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PROJECTS.map((project, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div 
                  className="group relative rounded-2xl overflow-hidden shadow-lg text-left w-full aspect-[4/3]"
                >
                  <Image
                    src={project.image}
                    alt={`Proyek ${project.title} - ${project.client}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <Badge className="bg-orange-500 text-white text-xs sm:text-sm">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Zoom Button */}
                  <button
                    onClick={() => handleImageClick(index)}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-white/30"
                    aria-label="Perbesar gambar"
                  >
                    <ZoomIn className="w-5 h-5 text-white" />
                  </button>

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

                  {/* Hover overlay with action */}
                  <button
                    onClick={() => openWhatsApp(project.message)}
                    className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    aria-label={`Pesan layanan ${project.title}`}
                  />
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* CTA */}
          <ScrollAnimation delay={400}>
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
          </ScrollAnimation>
        </div>
      </section>

      {/* Image Lightbox */}
      <LazyImageLightbox
        images={lightboxImages}
        initialIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
