import Script from 'next/script'

// =============================================
// GEO COORDINATES - Magetan, Jawa Timur
// =============================================
const GEO_COORDINATES = {
  latitude: '-7.6516',
  longitude: '111.3619',
}

// =============================================
// BUSINESS INFO - Used across all schemas
// =============================================
const BUSINESS_INFO = {
  name: 'MBUZENK ZETRO',
  telephone: '+6285738602255',
  email: 'mbuzenkzetro@gmail.com',
  address: {
    streetAddress: 'CFR3+5JQ, Setro, Tebon, Kec. Barat',
    addressLocality: 'Magetan',
    addressRegion: 'Jawa Timur',
    postalCode: '63395',
    addressCountry: 'ID',
  },
  geo: GEO_COORDINATES,
  url: 'https://www.mbuzenkzetro.com',
  logo: 'https://www.mbuzenkzetro.com/logo.png',
}

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
  keywords?: string[]
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image = '/project-kanopi.png',
  keywords,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: `https://www.mbuzenkzetro.com${image}`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'MBUZENK ZETRO',
      url: 'https://www.mbuzenkzetro.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MBUZENK ZETRO',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.mbuzenkzetro.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: keywords?.join(', '),
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ServiceSchemaProps {
  serviceName: string
  serviceDescription: string
  serviceUrl: string
  serviceImage?: string
  areaServed?: string[]
}

export function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
  serviceImage = '/service-las.png',
  areaServed = ['Magetan', 'Madiun', 'Ngawi', 'Ponorogo'],
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    image: `https://www.mbuzenkzetro.com${serviceImage}`,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.telephone,
      email: BUSINESS_INFO.email,
      address: {
        '@type': 'PostalAddress',
        ...BUSINESS_INFO.address,
      },
      geo: {
        '@type': 'GeoCoordinates',
        ...BUSINESS_INFO.geo,
      },
      url: BUSINESS_INFO.url,
      logo: BUSINESS_INFO.logo,
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '100',
        bestRating: '5',
      },
    },
    areaServed: areaServed.map(city => ({
      '@type': 'City',
      name: city,
    })),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'IDR',
      },
    },
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// =============================================
// LOCAL BUSINESS SCHEMA - For Google Business Profile
// =============================================
interface LocalBusinessSchemaProps {
  name?: string
  description?: string
}

export function LocalBusinessSchema({
  name = 'MBUZENK ZETRO - Bengkel Las Magetan',
  description = 'Bengkel las dan jasa renovasi rumah terpercaya sejak 2005. Spesialis kanopi minimalis, pagar besi, tangga besi, teralis jendela, konstruksi baja, kitchen set, dan renovasi rumah lengkap.',
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.mbuzenkzetro.com/#business',
    name: name,
    alternateName: 'Bengkel Las MBUZENK ZETRO',
    description: description,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS_INFO.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...BUSINESS_INFO.geo,
    },
    logo: BUSINESS_INFO.logo,
    image: 'https://www.mbuzenkzetro.com/hero-image.png',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '100',
      bestRating: '5',
    },
    sameAs: [
      'https://www.facebook.com/mbuzenk.zetro',
      'https://www.tiktok.com/@mbah.tro.mbuzenk',
    ],
    hasMap: 'https://maps.google.com/?q=-7.6516,111.3619',
    areaServed: [
      { '@type': 'City', name: 'Magetan' },
      { '@type': 'City', name: 'Madiun' },
      { '@type': 'City', name: 'Ngawi' },
      { '@type': 'City', name: 'Ponorogo' },
      { '@type': 'State', name: 'Jawa Timur' },
      { '@type': 'Country', name: 'Indonesia' },
    ],
    knowsAbout: [
      'bengkel las',
      'kanopi minimalis',
      'pagar besi',
      'tangga besi',
      'teralis jendela',
      'konstruksi baja',
      'renovasi rumah',
      'kitchen set',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Bengkel Las & Renovasi',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kanopi Minimalis',
            description: 'Pembuatan kanopi carport, kanopi teras, kanopi minimalis berbagai model',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pagar Besi',
            description: 'Pembuatan pagar besi minimalis, pagar BRC, pagar custom',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tangga Besi',
            description: 'Pembuatan tangga besi, tangga putar, tangga minimalis',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Teralis Jendela',
            description: 'Pembuatan teralis jendela, teralis keamanan, teralis artistik',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Renovasi Rumah',
            description: 'Jasa renovasi rumah lengkap, renovasi kamar mandi, dapur, atap',
          },
        },
      ],
    },
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// =============================================
// FAQ SCHEMA - For FAQ Pages
// =============================================
interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
