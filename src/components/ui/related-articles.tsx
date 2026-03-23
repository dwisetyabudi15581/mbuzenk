'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getRelatedArticles, ARTICLE_CATEGORIES, type ArticleType } from '@/lib/articles'
import { ArrowRight } from 'lucide-react'

interface RelatedArticlesProps {
  currentSlug: string
  title?: string
  limit?: number
}

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'hover:border-blue-300' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'hover:border-orange-300' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'hover:border-teal-300' },
  red: { bg: 'bg-red-100', text: 'text-red-600', border: 'hover:border-red-300' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'hover:border-indigo-300' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-600', border: 'hover:border-slate-300' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'hover:border-rose-300' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'hover:border-amber-300' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'hover:border-purple-300' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'hover:border-cyan-300' },
  violet: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'hover:border-violet-300' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'hover:border-emerald-300' },
}

export function RelatedArticles({ currentSlug, title = 'Artikel Terkait', limit = 4 }: RelatedArticlesProps) {
  const relatedArticles = getRelatedArticles(currentSlug, limit)

  if (relatedArticles.length === 0) return null

  return (
    <div className="mt-10">
      <h3 className="text-lg font-bold text-slate-800 mb-4 font-brand">{title}</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {relatedArticles.map((article) => {
          const colors = colorClasses[article.color] || colorClasses.blue
          const categoryLabel = ARTICLE_CATEGORIES.find(c => c.id === article.category)?.label || article.category
          
          return (
            <Link key={article.slug} href={`/artikel/${article.slug}`}>
              <Card className={`h-full transition-all duration-300 hover:shadow-lg cursor-pointer border-2 border-transparent ${colors.border}`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <ArrowRight className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge variant="outline" className={`text-xs mb-2 ${colors.text} border-current`}>
                        {categoryLabel}
                      </Badge>
                      <h4 className="font-semibold text-slate-800 text-sm mb-1 line-clamp-2 font-brand">
                        {article.title}
                      </h4>
                      <p className="text-slate-500 text-xs line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

// Komponen untuk menampilkan kartu artikel di halaman utama artikel
export function ArticleCard({ article }: { article: ArticleType }) {
  const colors = colorClasses[article.color] || colorClasses.blue
  const categoryLabel = ARTICLE_CATEGORIES.find(c => c.id === article.category)?.label || article.category

  return (
    <Link href={`/artikel/${article.slug}`}>
      <Card className={`h-full transition-all duration-300 hover:shadow-xl cursor-pointer border-2 border-transparent ${colors.border} group overflow-hidden`}>
        <CardContent className="p-0">
          {/* Image */}
          <div className="h-48 relative overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <Badge className={`absolute top-3 left-3 ${colors.bg} ${colors.text} border-current`}>
              {categoryLabel}
            </Badge>
          </div>
          
          <div className="p-4">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
              <span>{new Date(article.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            
            <h3 className="font-bold text-slate-800 text-base mb-2 line-clamp-2 font-brand group-hover:text-orange-600 transition-colors">
              {article.title}
            </h3>
            
            <p className="text-slate-500 text-sm line-clamp-2">
              {article.excerpt}
            </p>
            
            <div className={`mt-3 flex items-center gap-1 ${colors.text} text-sm font-medium`}>
              Baca Selengkapnya
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
