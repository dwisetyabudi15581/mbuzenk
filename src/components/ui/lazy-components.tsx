'use client'

import dynamic from 'next/dynamic'

// Lazy load non-critical components that only appear after user interaction
// These use ssr: false which is allowed in client components

export const LazyCookieConsent = dynamic(
  () => import('./cookie-consent').then((mod) => mod.CookieConsent),
  { 
    ssr: false,
    loading: () => null
  }
)

export const LazyFloatingWhatsApp = dynamic(
  () => import('./floating-whatsapp').then((mod) => mod.FloatingWhatsApp),
  { 
    ssr: false,
    loading: () => null
  }
)

export const LazyBackToTop = dynamic(
  () => import('./back-to-top').then((mod) => mod.BackToTop),
  { 
    ssr: false,
    loading: () => null
  }
)

export const LazyImageLightbox = dynamic(
  () => import('./image-lightbox').then((mod) => mod.ImageLightbox),
  { 
    ssr: false,
    loading: () => null
  }
)
