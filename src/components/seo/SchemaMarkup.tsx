import Script from 'next/script'

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
      name: 'MBUZENK ZETRO',
      telephone: '+6285738602255',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'CFR3+5JQ, Setro, Tebon, Kec. Barat',
        addressLocality: 'Magetan',
        addressRegion: 'Jawa Timur',
        postalCode: '63395',
        addressCountry: 'ID',
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
