'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// Google Analytics 4 Component
export function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  // Skip jika tidak ada GA_ID
  if (!GA_ID) return null

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Default consent - akan diupdate oleh Cookie Consent
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'wait_for_update': 500
          });
          
          gtag('config', '${GA_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}

// Hook untuk tracking page views
export function usePageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    if (!GA_ID || typeof window.gtag === 'undefined') return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    
    window.gtag('config', GA_ID, {
      page_path: url,
      page_title: document.title,
    })
  }, [pathname, searchParams, GA_ID])
}

// Hook untuk tracking events
export function useAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  const trackEvent = (action: string, category: string, label: string, value?: number) => {
    if (!GA_ID || typeof window.gtag === 'undefined') return

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }

  const trackWhatsAppClick = (source: string) => {
    trackEvent('click', 'whatsapp', source)
  }

  const trackPhoneClick = () => {
    trackEvent('click', 'phone', 'call_button')
  }

  const trackFormSubmit = (formType: string) => {
    trackEvent('submit', 'form', formType)
  }

  const trackServiceView = (serviceName: string) => {
    trackEvent('view', 'service', serviceName)
  }

  const trackArticleView = (articleTitle: string) => {
    trackEvent('view', 'article', articleTitle)
  }

  return {
    trackEvent,
    trackWhatsAppClick,
    trackPhoneClick,
    trackFormSubmit,
    trackServiceView,
    trackArticleView,
  }
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent' | 'set',
      targetIdOrDateOrAction: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer: unknown[]
  }
}
