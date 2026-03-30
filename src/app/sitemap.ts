import { MetadataRoute } from 'next'
import { ARTICLES } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mbuzenkzetro.com'
  const currentDate = new Date().toISOString()
  
  // Generate article URLs from data
  const articleUrls = ARTICLES.map(article => ({
    url: `${baseUrl}/artikel/${article.slug}/`,
    lastModified: article.date,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  return [
    // Main Page
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Article List Page
    {
      url: `${baseUrl}/artikel/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Gallery Page
    {
      url: `${baseUrl}/galeri/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // FAQ Page
    {
      url: `${baseUrl}/faq-harga/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // SEO Landing Pages - HIGH PRIORITY
    {
      url: `${baseUrl}/layanan/bengkel-las/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/layanan/renovasi-rumah/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/layanan/kanopi-minimalis/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/layanan/pagar-besi/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/layanan/tangga-besi/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/layanan/teralis-jendela/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Area Layanan Pages - HIGH PRIORITY for Local SEO
    {
      url: `${baseUrl}/area-layanan/magetan/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/area-layanan/madiun/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/area-layanan/ngawi/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/area-layanan/ponorogo/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Article Pages - Dynamic from data
    ...articleUrls,
  ]
}
