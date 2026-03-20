'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import { CONFIG, openWhatsApp, makeCall, sendEmail } from '@/lib/config'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const waMessage = `*PESAN DARI WEBSITE*

*Nama:* ${formData.name}
*Telepon:* ${formData.phone}
*Email:* ${formData.email}
*Layanan:* ${formData.service}
*Pesan:*
${formData.message}

_Dikirim dari website MBUZENK ZETRO - Bengkel Las & Renovasi Rumah_

Lokasi: ${CONFIG.address}, ${CONFIG.city}`

    openWhatsApp(waMessage)
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    })
  }

  return (
    <section id="kontak" className="py-12 sm:py-20 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="outline" className="border-orange-500 text-orange-400 mb-3 sm:mb-4">
            HUBUNGI KAMI
          </Badge>
          <h2 className="font-brand text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Konsultasi <span className="text-orange-400">Gratis</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
            Hubungi bengkel las dan renovasi rumah kami untuk konsultasi gratis dan dapatkan penawaran terbaik
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Phone */}
              <Card 
                onClick={() => makeCall(CONFIG.phone)}
                className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 cursor-pointer transition-colors"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Telepon</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">{CONFIG.phoneDisplay}</p>
                  <p className="text-slate-400 text-xs sm:text-sm">{CONFIG.phone2Display}</p>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card 
                onClick={() => openWhatsApp('Halo, saya ingin bertanya tentang layanan bengkel las dan renovasi.')}
                className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 cursor-pointer transition-colors"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">WhatsApp</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">{CONFIG.phoneDisplay}</p>
                  <p className="text-green-400 text-xs sm:text-sm">Chat 24 Jam</p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card 
                onClick={() => sendEmail(CONFIG.email)}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 cursor-pointer transition-colors"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Email</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">{CONFIG.email}</p>
                  <p className="text-slate-400 text-xs sm:text-sm">{CONFIG.email2}</p>
                </CardContent>
              </Card>

              {/* Location */}
              <Card 
                onClick={() => window.open(`https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.address + ', ' + CONFIG.city)}`, '_blank')}
                className="bg-slate-800/50 border-slate-700 hover:border-red-500/50 cursor-pointer transition-colors"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Alamat Bengkel</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">{CONFIG.address}</p>
                  <p className="text-slate-400 text-xs sm:text-sm">{CONFIG.city}</p>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">Jam Operasional Bengkel</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-slate-400 text-xs sm:text-sm">
                    <span>Senin - Sabtu</span>
                    <span className="text-white">{CONFIG.openHours}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-xs sm:text-sm">
                    <span>Minggu</span>
                    <span className="text-orange-400">{CONFIG.closedDay}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-brand">
                Kirim Pesan
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-300 text-xs sm:text-sm mb-2 block">Nama Lengkap</label>
                    <Input 
                      placeholder="Masukkan nama Anda" 
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-orange-500 min-h-[44px]"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 text-xs sm:text-sm mb-2 block">No. Telepon</label>
                    <Input 
                      placeholder="08xx-xxxx-xxxx" 
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-orange-500 min-h-[44px]"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-slate-300 text-xs sm:text-sm mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-orange-500 min-h-[44px]"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-slate-300 text-xs sm:text-sm mb-2 block">Jenis Layanan</label>
                  <Input 
                    placeholder="Contoh: Kanopi, Pagar, Renovasi Rumah" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-orange-500 min-h-[44px]"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-slate-300 text-xs sm:text-sm mb-2 block">Pesan</label>
                  <Textarea 
                    rows={4} 
                    placeholder="Jelaskan kebutuhan proyek bengkel las atau renovasi Anda..." 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-orange-500 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-500/25 cursor-pointer min-h-[48px]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Kirim via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
