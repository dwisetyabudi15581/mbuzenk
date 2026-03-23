'use client'

import Link from 'next/link'
import { Wrench, MapPin, Newspaper, ImageIcon, HelpCircle, ChevronRight } from 'lucide-react'
import { LAYANAN_LINKS, AREA_LAYANAN_LINKS } from '@/lib/config'
import { ARTICLES } from '@/lib/articles'

export function SitemapSection() {
  // Get first 6 articles for display
  const featuredArticles = ARTICLES.slice(0, 6)

  return (
    <section id="sitemap" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
            Jelajahi Website Kami
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Temukan berbagai layanan, artikel, dan informasi lengkap seputar bengkel las dan renovasi rumah
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Layanan */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Wrench className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-800">Layanan</h3>
            </div>
            <ul className="space-y-2">
              {LAYANAN_LINKS.map((link) => (
                <li key={link.slug}>
                  <Link 
                    href={`/layanan/${link.slug}`}
                    className="text-slate-600 hover:text-orange-600 transition-colors text-sm flex items-center gap-2 py-1 group"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-orange-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Area Layanan */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-800">Area Layanan</h3>
            </div>
            <ul className="space-y-2">
              {AREA_LAYANAN_LINKS.map((link) => (
                <li key={link.slug}>
                  <Link 
                    href={`/area-layanan/${link.slug}`}
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-2 py-1 group"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors" />
                    {link.description}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Artikel */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-800">Artikel</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/artikel"
                  className="text-orange-600 hover:text-orange-700 font-medium transition-colors text-sm flex items-center gap-2 py-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  Semua Artikel
                </Link>
              </li>
              {featuredArticles.map((article) => (
                <li key={article.slug}>
                  <Link 
                    href={`/artikel/${article.slug}`}
                    className="text-slate-600 hover:text-green-600 transition-colors text-sm flex items-center gap-2 py-1 group line-clamp-1"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-green-400 transition-colors flex-shrink-0" />
                    <span className="truncate">{article.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Halaman Lainnya */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-800">Halaman Lainnya</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/galeri"
                  className="text-slate-600 hover:text-purple-600 transition-colors text-sm flex items-center gap-2 py-1 group"
                >
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-purple-400 transition-colors" />
                  <ImageIcon className="w-4 h-4 text-slate-400" />
                  Galeri Proyek
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq-harga"
                  className="text-slate-600 hover:text-purple-600 transition-colors text-sm flex items-center gap-2 py-1 group"
                >
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-purple-400 transition-colors" />
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                  FAQ & Harga
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
