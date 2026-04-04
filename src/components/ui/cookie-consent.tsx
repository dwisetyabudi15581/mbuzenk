'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Cookie, X, Settings, Check } from 'lucide-react'

type ConsentLevel = 'all' | 'necessary' | null

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const CONSENT_KEY = 'mbuzenk-cookie-consent'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if consent already given
    const storedConsent = localStorage.getItem(CONSENT_KEY)
    if (!storedConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    } else {
      // Apply stored preferences
      try {
        const parsed = JSON.parse(storedConsent)
        applyConsent(parsed)
      } catch (e) {
        console.error('Error parsing consent:', e)
      }
    }
  }, [])

  const applyConsent = (prefs: CookiePreferences) => {
    // Update Google Analytics consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
      })
    }
  }

  const saveConsent = (level: ConsentLevel) => {
    let prefs: CookiePreferences

    if (level === 'all') {
      prefs = {
        necessary: true,
        analytics: true,
        marketing: true,
      }
    } else if (level === 'necessary') {
      prefs = {
        necessary: true,
        analytics: false,
        marketing: false,
      }
    } else {
      prefs = preferences
    }

    // Save to localStorage
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs))
    
    // Apply consent
    applyConsent(prefs)
    
    // Hide banner
    setIsVisible(false)
  }

  const handleAcceptAll = () => {
    saveConsent('all')
  }

  const handleAcceptNecessary = () => {
    saveConsent('necessary')
  }

  const handleSavePreferences = () => {
    saveConsent(null)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {!showSettings ? (
          // Main Banner
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Icon & Text */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">
                    Izin Penggunaan Cookie
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Kami menggunakan cookie untuk meningkatkan pengalaman Anda di website kami. 
                    Dengan melanjutkan, Anda menyetujui penggunaan cookie sesuai dengan{' '}
                    <button 
                      onClick={() => window.open('https://wa.me/6285738602255?text=Halo, saya ingin bertanya tentang kebijakan privasi.', '_blank')}
                      className="text-orange-600 hover:underline"
                    >
                      Kebijakan Privasi
                    </button>{' '}
                    kami.
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 p-1 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button
                onClick={handleAcceptAll}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white flex-1 sm:flex-none min-h-[44px]"
              >
                <Check className="w-4 h-4 mr-2" />
                Terima Semua
              </Button>
              <Button
                onClick={handleAcceptNecessary}
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 min-h-[44px]"
              >
                Cookie Esensial Saja
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="ghost"
                className="text-slate-600 hover:bg-slate-100 min-h-[44px]"
              >
                <Settings className="w-4 h-4 mr-2" />
                Pengaturan
              </Button>
            </div>
          </div>
        ) : (
          // Settings Panel
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-800 text-lg">
                Pengaturan Cookie
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Kembali"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-800">Cookie Esensial</h4>
                    <p className="text-slate-500 text-sm">Diperlukan untuk fungsi dasar website</p>
                  </div>
                  <div className="w-12 h-6 bg-orange-500 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full shadow" />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-800">Cookie Analitik</h4>
                    <p className="text-slate-500 text-sm">Membantu kami memahami pengunjung website</p>
                  </div>
                  <button
                    onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics ? 'bg-orange-500 justify-end' : 'bg-slate-300 justify-start'
                    } px-1`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow" />
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-800">Cookie Pemasaran</h4>
                    <p className="text-slate-500 text-sm">Untuk menampilkan iklan yang relevan</p>
                  </div>
                  <button
                    onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing ? 'bg-orange-500 justify-end' : 'bg-slate-300 justify-start'
                    } px-1`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow" />
                  </button>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex gap-3 mt-6">
              <Button
                onClick={() => setShowSettings(false)}
                variant="outline"
                className="flex-1 min-h-[44px]"
              >
                Kembali
              </Button>
              <Button
                onClick={handleSavePreferences}
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white min-h-[44px]"
              >
                Simpan Preferensi
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
