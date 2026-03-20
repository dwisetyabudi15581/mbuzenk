'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Star, Send, Plus, ArrowRight, AlertCircle } from 'lucide-react'
import { DEFAULT_TESTIMONIALS, TestimonialType } from '@/lib/data'
import { useToast } from '@/hooks/use-toast'

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>(DEFAULT_TESTIMONIALS)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    location: '',
    content: '',
    rating: 5,
    project: '',
  })
  const { toast } = useToast()

  // Fetch testimoni dari database
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setIsLoading(true)
        setError(null)
        const response = await fetch('/api/testimonials')
        if (response.ok) {
          const data = await response.json()
          if (data && data.length > 0) {
            const formattedData = data.map((t: TestimonialType) => ({
              id: t.id,
              name: t.name,
              role: t.role,
              location: t.location,
              content: t.content,
              rating: t.rating,
              date: new Date(t.date).toISOString().split('T')[0],
              project: t.project || '',
            }))
            setTestimonials(formattedData)
          }
        } else {
          throw new Error('Gagal memuat testimoni')
        }
      } catch (err) {
        console.error('Error fetching testimonials:', err)
        setError('Tidak dapat memuat testimoni. Menampilkan data default.')
        // Jika error, tetap gunakan default testimonials
      } finally {
        setIsLoading(false)
      }
    }
    fetchTestimonials()
  }, [])

  // Submit testimoni ke database
  const handleSubmitTestimonial = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTestimonial),
      })

      if (response.ok) {
        const savedTestimonial = await response.json()
        const formatted = {
          id: savedTestimonial.id,
          name: savedTestimonial.name,
          role: savedTestimonial.role,
          location: savedTestimonial.location,
          content: savedTestimonial.content,
          rating: savedTestimonial.rating,
          date: new Date(savedTestimonial.date).toISOString().split('T')[0],
          project: savedTestimonial.project || '',
        }
        setTestimonials(prev => [formatted, ...prev])
        
        // Reset form
        setNewTestimonial({
          name: '',
          role: '',
          location: '',
          content: '',
          rating: 5,
          project: '',
        })
        setIsFormOpen(false)
        
        toast({
          title: 'Berhasil!',
          description: 'Testimoni Anda telah berhasil dikirim.',
        })
      } else {
        throw new Error('Gagal menyimpan testimoni')
      }
    } catch (err) {
      console.error('Error submitting testimonial:', err)
      toast({
        title: 'Error',
        description: 'Gagal mengirim testimoni. Silakan coba lagi.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Display testimonials (show only 3 on homepage)
  const displayTestimonials = testimonials.slice(0, 3)

  return (
    <>
      <section id="testimoni" className="py-12 sm:py-20 lg:py-28 bg-gradient-to-br from-orange-500 to-red-600 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <Badge variant="outline" className="border-white text-white mb-3 sm:mb-4">
              TESTIMONI
            </Badge>
            <h2 className="font-brand text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Apa Kata <span className="text-yellow-300">Pelanggan</span> Kami
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
              Kepuasan pelanggan adalah bukti nyata kualitas layanan bengkel las dan renovasi kami
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="max-w-3xl mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-white flex-shrink-0" />
              <p className="text-white text-sm">{error}</p>
            </div>
          )}

          {/* Loading State */}
          {isLoading ? (
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border-white/20 rounded-lg p-4 sm:p-6 animate-pulse">
                  <div className="h-4 bg-white/20 rounded w-1/3 mb-4"></div>
                  <div className="h-4 bg-white/20 rounded w-full mb-2"></div>
                  <div className="h-4 bg-white/20 rounded w-full mb-2"></div>
                  <div className="h-4 bg-white/20 rounded w-2/3 mb-6"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full"></div>
                    <div>
                      <div className="h-4 bg-white/20 rounded w-24 mb-2"></div>
                      <div className="h-3 bg-white/20 rounded w-32"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Testimonials Grid */
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              {displayTestimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id || index} 
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <CardContent className="p-4 sm:p-6">
                    {/* Stars */}
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed line-clamp-4 text-sm sm:text-base">
                      &quot;{testimonial.content}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-white/70">{testimonial.role} - {testimonial.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 relative z-20">
            <Button 
              size="lg" 
              onClick={() => setIsDialogOpen(true)}
              className="bg-white text-orange-600 hover:bg-white/90 shadow-lg cursor-pointer min-h-[48px] sm:min-h-[52px] px-6 sm:px-8 text-base sm:text-lg font-semibold"
            >
              Lihat Semua Testimoni
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              onClick={() => setIsFormOpen(true)}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 cursor-pointer min-h-[48px] sm:min-h-[52px] px-6 sm:px-8 text-base sm:text-lg font-semibold bg-white/10 backdrop-blur-sm"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Berikan Testimoni
            </Button>
          </div>
        </div>
      </section>

      {/* Dialog: Semua Testimoni */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-800 font-brand">
              Semua Testimoni Pelanggan
            </DialogTitle>
            <DialogDescription>
              Testimoni nyata dari pelanggan yang telah menggunakan jasa bengkel las dan renovasi kami
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 sm:gap-6 mt-4">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id || index} className="bg-slate-50">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-semibold text-slate-800 text-sm sm:text-base">{testimonial.name}</span>
                        {testimonial.project && (
                          <Badge variant="secondary" className="text-xs">{testimonial.project}</Badge>
                        )}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 mb-2">
                        {testimonial.role} • {testimonial.location} • {new Date(testimonial.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        &quot;{testimonial.content}&quot;
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button 
              onClick={() => {
                setIsDialogOpen(false)
                setTimeout(() => setIsFormOpen(true), 100)
              }}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white cursor-pointer min-h-[48px]"
            >
              <Plus className="w-4 h-4 mr-2" />
              Berikan Testimoni Anda
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog: Form Testimoni */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-800 font-brand">
              Berikan Testimoni Anda
            </DialogTitle>
            <DialogDescription>
              Bagikan pengalaman Anda menggunakan jasa bengkel las dan renovasi kami
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmitTestimonial} className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Nama Lengkap *</label>
              <Input 
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                placeholder="Masukkan nama Anda"
                required
                className="min-h-[44px]"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1 block">Pekerjaan/Peran *</label>
                <Input 
                  value={newTestimonial.role}
                  onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                  placeholder="Contoh: Pemilik Rumah"
                  required
                  className="min-h-[44px]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1 block">Kota *</label>
                <Input 
                  value={newTestimonial.location}
                  onChange={(e) => setNewTestimonial({...newTestimonial, location: e.target.value})}
                  placeholder="Contoh: Magetan"
                  required
                  className="min-h-[44px]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Proyek yang Dikerjakan</label>
              <Input 
                value={newTestimonial.project}
                onChange={(e) => setNewTestimonial({...newTestimonial, project: e.target.value})}
                placeholder="Contoh: Kanopi Carport"
                className="min-h-[44px]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Rating *</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewTestimonial({...newTestimonial, rating: star})}
                    className="p-1 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label={`Beri rating ${star} bintang`}
                  >
                    <Star 
                      className={`w-8 h-8 transition-colors ${
                        star <= newTestimonial.rating 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-slate-300'
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Testimoni Anda *</label>
              <Textarea 
                value={newTestimonial.content}
                onChange={(e) => setNewTestimonial({...newTestimonial, content: e.target.value})}
                placeholder="Ceritakan pengalaman Anda menggunakan jasa kami..."
                rows={4}
                required
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsFormOpen(false)}
                className="flex-1 cursor-pointer min-h-[48px]"
                disabled={isSubmitting}
              >
                Batal
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white cursor-pointer min-h-[48px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span> Mengirim...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Testimoni
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
