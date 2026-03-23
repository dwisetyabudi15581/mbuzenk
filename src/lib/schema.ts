// =============================================
// SCHEMA MARKUP - Structured Data untuk SEO
// =============================================

const BASE_URL = 'https://www.mbuzenkzetro.com'

// Data bisnis dasar
const BUSINESS_DATA = {
  name: 'MBUZENK ZETRO',
  alternateName: 'Bengkel Las MBUZENK ZETRO',
  description: 'Bengkel las dan renovasi profesional di Magetan. Spesialis kanopi minimalis, pagar besi, teralis jendela, tangga besi, dan renovasi rumah.',
  url: BASE_URL,
  telephone: '+6285738602255',
  email: 'info@mbuzenkzetro.com',
  address: {
    streetAddress: 'CFR3+5JQ, Setro, Tebon, Kec. Barat',
    addressLocality: 'Magetan',
    addressRegion: 'Jawa Timur',
    postalCode: '63395',
    addressCountry: 'ID',
  },
  geo: {
    latitude: '-7.6545',
    longitude: '111.3644',
  },
  priceRange: '$$',
  openingHours: ['Mo-Sa 08:00-17:00', 'Su By Appointment'],
  image: `${BASE_URL}/logo.png`,
  logo: `${BASE_URL}/logo.png`,
}

// LocalBusiness Schema - untuk halaman utama
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BASE_URL,
  name: BUSINESS_DATA.name,
  alternateName: BUSINESS_DATA.alternateName,
  description: BUSINESS_DATA.description,
  url: BUSINESS_DATA.url,
  telephone: BUSINESS_DATA.telephone,
  email: BUSINESS_DATA.email,
  address: {
    '@type': 'PostalAddress',
    ...BUSINESS_DATA.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS_DATA.geo.latitude,
    longitude: BUSINESS_DATA.geo.longitude,
  },
  priceRange: BUSINESS_DATA.priceRange,
  image: BUSINESS_DATA.image,
  logo: BUSINESS_DATA.logo,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: 'By Appointment',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Magetan' },
    { '@type': 'City', name: 'Madiun' },
    { '@type': 'City', name: 'Ngawi' },
    { '@type': 'City', name: 'Ponorogo' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Bengkel Las & Renovasi',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kanopi & Carport',
          description: 'Pembuatan kanopi minimalis untuk carport dan teras dengan bahan spandek, polikarbonat, dan alderon.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pagar Besi',
          description: 'Pembuatan pagar besi minimalis dengan berbagai model dari klasik hingga modern.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Teralis Jendela',
          description: 'Pembuatan teralis jendela untuk keamanan rumah dengan desain minimalis atau artistik.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tangga Besi',
          description: 'Pembuatan tangga besi internal dan eksternal dengan berbagai model spiral, L-shape, atau straight.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Renovasi Rumah',
          description: 'Layanan renovasi rumah lengkap dari perbaikan struktur hingga pembaruan total.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Konstruksi Baja',
          description: 'Pembuatan rangka atap baja ringan, mezzanine, dan struktur baja.',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '100',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.facebook.com/mbuzenk.zetro',
    'https://www.tiktok.com/@mbah.tro.mbuzenk',
  ],
}

// Service Schema - untuk halaman layanan
export interface ServiceSchemaParams {
  serviceName: string
  serviceDescription: string
  serviceUrl: string
  serviceImage?: string
  priceRange?: string
  areaServed?: string[]
}

export function createServiceSchema(params: ServiceSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.serviceName,
    description: params.serviceDescription,
    url: params.serviceUrl,
    image: params.serviceImage || `${BASE_URL}/project-kanopi.png`,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_DATA.name,
      telephone: BUSINESS_DATA.telephone,
      address: {
        '@type': 'PostalAddress',
        ...BUSINESS_DATA.address,
      },
    },
    areaServed: (params.areaServed || ['Magetan', 'Madiun', 'Ngawi', 'Ponorogo']).map(city => ({
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
}

// Article Schema - untuk halaman artikel
export interface ArticleSchemaParams {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
  author?: string
  keywords?: string[]
}

export function createArticleSchema(params: ArticleSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    image: params.image || `${BASE_URL}/project-kanopi.png`,
    author: {
      '@type': 'Organization',
      name: params.author || BUSINESS_DATA.name,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_DATA.name,
      logo: {
        '@type': 'ImageObject',
        url: BUSINESS_DATA.logo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url,
    },
    keywords: params.keywords?.join(', '),
  }
}

// BreadcrumbList Schema
export interface BreadcrumbItem {
  name: string
  url: string
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// FAQ Schema
export interface FAQItem {
  question: string
  answer: string
}

export function createFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

// Local Business Schema untuk Area Layanan
export function createAreaServiceSchema(city: string, cityName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `MBUZENK ZETRO ${cityName}`,
    description: `Bengkel las dan renovasi profesional di ${cityName}. Spesialis kanopi minimalis, pagar besi, teralis jendela, tangga besi, dan renovasi rumah.`,
    url: `${BASE_URL}/area-layanan/${city}`,
    telephone: BUSINESS_DATA.telephone,
    email: BUSINESS_DATA.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityName,
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
    areaServed: {
      '@type': 'City',
      name: cityName,
    },
    priceRange: BUSINESS_DATA.priceRange,
    image: BUSINESS_DATA.image,
    logo: BUSINESS_DATA.logo,
    parentOrganization: {
      '@type': 'LocalBusiness',
      name: BUSINESS_DATA.name,
      url: BASE_URL,
    },
  }
}

// Combined Schema untuk halaman
export function combineSchemas(...schemas: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  }
}

// WebSite Schema untuk homepage
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BUSINESS_DATA.name,
  url: BASE_URL,
  description: BUSINESS_DATA.description,
  publisher: {
    '@type': 'Organization',
    name: BUSINESS_DATA.name,
    logo: {
      '@type': 'ImageObject',
      url: BUSINESS_DATA.logo,
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/artikel?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS_DATA.name,
  url: BASE_URL,
  logo: BUSINESS_DATA.logo,
  description: BUSINESS_DATA.description,
  telephone: BUSINESS_DATA.telephone,
  email: BUSINESS_DATA.email,
  address: {
    '@type': 'PostalAddress',
    ...BUSINESS_DATA.address,
  },
  sameAs: [
    'https://www.facebook.com/mbuzenk.zetro',
    'https://www.tiktok.com/@mbah.tro.mbuzenk',
  ],
}
