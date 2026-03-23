'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ARTICLES, type ArticleType } from '@/lib/articles'
import { ArticleCard } from '@/components/ui/related-articles'
import { ArrowRight, MessageCircle, BookOpen } from 'lucide-react'
import { openWhatsApp } from '@/lib/config'

export function ArticleGrid({ articles }: { articles: ArticleType[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  )
}

export function ArticleHeader() {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
          <BookOpen className="w-3 h-3 mr-1" />
          PUSAT INFORMASI
        </Badge>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 font-brand">
          Artikel Tips & Panduan
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
          Kumpulan artikel informatif seputar kanopi, pagar, teralis, tangga besi, dan renovasi rumah. 
          Dapatkan tips dan panduan dari ahli MBUZENK ZETRO.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={() => openWhatsApp('Halo, saya ingin konsultasi dari halaman artikel.')}
            className="bg-orange-500 text-white hover:bg-orange-600 min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Konsultasi Gratis
          </Button>
          <Link href="/">
            <Button variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 min-h-[48px]">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ArticleCTA() {
  return (
    <section className="py-12 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Card className="bg-gradient-to-r from-orange-500 to-red-600 overflow-hidden">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-brand">
              Butuh Konsultasi Lebih Lanjut?
            </h3>
            <p className="text-white/80 mb-6 text-sm sm:text-base">
              Tim ahli MBUZENK ZETRO siap membantu Anda. Konsultasi gratis untuk semua kebutuhan las dan renovasi!
            </p>
            <Button 
              size="lg"
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi lebih lanjut dari halaman artikel.')}
              className="bg-white text-orange-600 hover:bg-orange-50 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hubungi Kami Sekarang
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export function ArticleContent() {
  // Group articles by category
  const kanopiArticles = ARTICLES.filter(a => a.category === 'kanopi')
  const pagarArticles = ARTICLES.filter(a => a.category === 'pagar')
  const teralisArticles = ARTICLES.filter(a => a.category === 'teralis')
  const tanggaArticles = ARTICLES.filter(a => a.category === 'tangga')
  const renovasiArticles = ARTICLES.filter(a => a.category === 'renovasi')
  const bengkelLasArticles = ARTICLES.filter(a => a.category === 'bengkel-las')

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Total Articles */}
        <div className="text-center mb-8">
          <p className="text-slate-500 text-sm">
            Menampilkan <span className="font-semibold text-slate-700">{ARTICLES.length}</span> artikel
          </p>
        </div>

        {/* Kanopi Articles */}
        {kanopiArticles.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">K</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 font-brand">Artikel Kanopi</h2>
                <p className="text-slate-500 text-sm">Tips dan panduan seputar kanopi minimalis</p>
              </div>
            </div>
            <ArticleGrid articles={kanopiArticles} />
          </div>
        )}

        {/* Pagar Articles */}
        {pagarArticles.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <span className="text-teal-600 font-bold text-lg">P</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 font-brand">Artikel Pagar</h2>
                <p className="text-slate-500 text-sm">Tips dan panduan seputar pagar besi minimalis</p>
              </div>
            </div>
            <ArticleGrid articles={pagarArticles} />
          </div>
        )}

        {/* Teralis Articles */}
        {teralisArticles.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">T</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 font-brand">Artikel Teralis</h2>
                <p className="text-slate-500 text-sm">Tips dan panduan seputar teralis jendela</p>
              </div>
            </div>
            <ArticleGrid articles={teralisArticles} />
          </div>
        )}

        {/* Tangga Articles */}
        {tanggaArticles.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-amber-600 font-bold text-lg">TG</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 font-brand">Artikel Tangga</h2>
                <p className="text-slate-500 text-sm">Tips dan panduan seputar tangga besi minimalis</p>
              </div>
            </div>
            <ArticleGrid articles={tanggaArticles} />
          </div>
        )}

        {/* Renovasi Articles */}
        {renovasiArticles.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">R</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 font-brand">Artikel Renovasi</h2>
                <p className="text-slate-500 text-sm">Tips dan panduan seputar renovasi rumah</p>
              </div>
            </div>
            <ArticleGrid articles={renovasiArticles} />
          </div>
        )}

        {/* Bengkel Las Articles */}
        {bengkelLasArticles.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">B</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 font-brand">Artikel Bengkel Las</h2>
                <p className="text-slate-500 text-sm">Tips memilih bengkel las terpercaya</p>
              </div>
            </div>
            <ArticleGrid articles={bengkelLasArticles} />
          </div>
        )}
      </div>
    </section>
  )
}
