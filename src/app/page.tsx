'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  Wrench,
  Home as HomeIcon,
  Hammer,
  Building2,
  Shield,
  Award,
  Users,
  CheckCircle2,
  Star,
  Send,
  Facebook,
  MessageCircle,
  ArrowRight,
  Plus,
} from 'lucide-react'

// =============================================
// TYPE DEFINITIONS
// =============================================
interface TestimonialType {
  id: number
  name: string
  role: string
  location: string
  content: string
  rating: number
  date: string
  project: string
}

// =============================================
// KONFIGURASI - UBAH DATA DI BAWAH INI
// =============================================
const CONFIG = {
  // Data Bisnis
  businessName: 'MBUZENK ZETRO',
  tagline: 'Spesialis Las & Renovasi',
  yearEstablished: '2005',
  yearsExperience: '19+',
  projectsCompleted: '1000+++',
  
  // Kontak
  phone: '6285738602255',
  phoneDisplay: '+62 857-3860-2255',
  phone2: '6285738602255',
  phone2Display: '+62 857-3860-2255',
  whatsapp: '6285738602255',
  email: 'info@mbuzenkzetro.com',
  email2: 'sales@mbuzenkzetro.com',
  address: 'CFR3+5JQ, Setro, Tebon, Kec. Bar.',
  city: 'Kabupaten Magetan, Jawa Timur 63395', 
  
  // Social Media
  facebook: 'https://www.facebook.com/mbuzenk.zetro',
  tiktok: 'https://www.tiktok.com/@mbah.tro.mbuzenk',
  
  // Jam Operasional
  openHours: '08:00 - 17:00',
  closedDay: 'Minggu (Dengan Perjanjian)',
}

// Testimoni default - Lokasi disesuaikan dengan area Magetan dan sekitarnya
const defaultTestimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'Ahmad Fauzi',
    role: 'Pemilik Rumah',
    location: 'Magetan',
    content: 'Pengerjaan kanopi sangat rapi dan tepat waktu. Tim MBUZENK ZETRO sangat profesional dari survey hingga pemasangan. Sangat recommended!',
    rating: 5,
    date: '2024-01-15',
    project: 'Kanopi Carport',
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    role: 'Ibu Rumah Tangga',
    location: 'Madiun',
    content: 'Pagar rumah saya sekarang terlihat lebih mewah berkat MBUZENK ZETRO. Desainnya minimalis sesuai yang saya inginkan. Terima kasih!',
    rating: 5,
    date: '2024-02-20',
    project: 'Pagar Minimalis',
  },
  {
    id: 3,
    name: 'Hendra Wijaya',
    role: 'Pengusaha',
    location: 'Ngawi',
    content: 'Tangga spiral yang dibuat sangat kokoh dan artistik. Harga juga sangat reasonable untuk kualitas setinggi ini. Top markotop!',
    rating: 5,
    date: '2024-03-10',
    project: 'Tangga Spiral',
  },
]

// Fungsi untuk buka WhatsApp
const openWhatsApp = (message = '') => {
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodedMessage}`, '_blank')
}

// Fungsi untuk telepon
const makeCall = (number = CONFIG.phone) => {
  window.open(`tel:+${number}`, '_self')
}

// Fungsi untuk kirim email
const sendEmail = (email = CONFIG.email) => {
  window.open(`mailto:${email}`, '_self')
}

// Fungsi scroll ke section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// =============================================
// KOMPONEN NAVBAR
// =============================================
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'portofolio', label: 'Portofolio' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'kontak', label: 'Kontak' },
  ]

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('beranda')} 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
              <Wrench className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-lg text-slate-800 leading-tight font-[family-name:var(--font-montserrat)]">MBUZENK ZETRO</span>
              <span className="text-[10px] sm:text-xs text-orange-600 font-medium hidden sm:block">{CONFIG.tagline}</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-slate-600 hover:text-orange-600 font-medium transition-colors duration-200 relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
            <Button 
              onClick={() => makeCall()}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-500/25 cursor-pointer min-h-[44px]"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-orange-600 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 bg-white">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-slate-600 hover:text-orange-600 font-medium py-3 px-4 transition-colors text-left cursor-pointer rounded-lg hover:bg-orange-50 min-h-[44px]"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => makeCall()}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white mt-2 cursor-pointer min-h-[44px]"
              >
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// =============================================
// HERO SECTION
// =============================================
function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-16 sm:pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
            <span className="text-orange-400 text-xs sm:text-sm font-medium">Terpercaya Sejak {CONFIG.yearEstablished}</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              MBUZENK ZETRO
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-slate-300 mt-2">
              Spesialis Las & Renovasi
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
            Spesialis konstruksi baja, kanopi, pagar, tangga besi, dan renovasi rumah profesional. 
            Dengan pengalaman lebih dari <strong className="text-orange-400">{CONFIG.yearsExperience} tahun</strong>, kami berkomitmen 
            memberikan hasil terbaik dengan kualitas premium dan harga bersaing.
          </p>

          {/* CTA Buttons - Fixed for mobile visibility */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button 
              size="lg" 
              onClick={() => openWhatsApp('Halo, saya ingin konsultasi gratis untuk proyek renovasi.')}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-xl shadow-orange-500/30 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 cursor-pointer min-h-[52px] sm:min-h-[56px] w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Konsultasi Gratis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('portofolio')}
              className="border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 cursor-pointer min-h-[52px] sm:min-h-[56px] w-full sm:w-auto bg-white/5 backdrop-blur-sm"
            >
              <Hammer className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Lihat Portofolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            <button onClick={() => scrollToSection('portofolio')} className="text-center sm:text-left cursor-pointer hover:opacity-80 transition-opacity p-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 font-[family-name:var(--font-montserrat)]">{CONFIG.projectsCompleted}</div>
              <div className="text-slate-400 text-xs sm:text-sm">Proyek Selesai</div>
            </button>
            <div className="text-center sm:text-left p-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 font-[family-name:var(--font-montserrat)]">{CONFIG.yearsExperience}</div>
              <div className="text-slate-400 text-xs sm:text-sm">Tahun Pengalaman</div>
            </div>
            <button onClick={() => scrollToSection('testimoni')} className="text-center sm:text-left cursor-pointer hover:opacity-80 transition-opacity p-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 font-[family-name:var(--font-montserrat)]">100%</div>
              <div className="text-slate-400 text-xs sm:text-sm">Kepuasan Klien</div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('tentang')} 
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer p-2"
        aria-label="Scroll ke bawah"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-orange-400 rounded-full" />
        </div>
      </button>
    </section>
  )
}

// =============================================
// ABOUT SECTION
// =============================================
function AboutSection() {
  const features = [
    { icon: Award, title: 'Berpengalaman', desc: `Lebih dari ${CONFIG.yearsExperience} tahun` },
    { icon: Users, title: 'Tim Profesional', desc: 'Tukang las bersertifikat' },
    { icon: Shield, title: 'Garansi Kerja', desc: 'Jaminan kualitas' },
    { icon: CheckCircle2, title: 'Tepat Waktu', desc: 'Sesuai jadwal' },
  ]

  return (
    <section id="tentang" className="py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="outline" className="border-orange-500 text-orange-600 mb-3 sm:mb-4">
            TENTANG KAMI
          </Badge>
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Kenali <span className="text-orange-600">MBUZENK ZETRO</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Telah dipercaya ratusan pelanggan untuk mewujudkan hunian impian mereka
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/service-las.png"
                alt="Tim MBUZENK ZETRO"
                className="w-full h-[280px] sm:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
            {/* Floating Card */}
            <button 
              onClick={() => scrollToSection('portofolio')}
              className="absolute -bottom-4 sm:-bottom-6 right-4 sm:-right-6 bg-white rounded-xl shadow-xl p-4 sm:p-6 cursor-pointer hover:shadow-2xl transition-shadow z-10"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold text-slate-800">{CONFIG.projectsCompleted}</div>
                  <div className="text-slate-500 text-sm">Proyek Sukses</div>
                </div>
              </div>
            </button>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 font-[family-name:var(--font-montserrat)]">
              Spesialis Las & Renovasi Terpercaya dengan Kualitas Premium
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              <strong>{CONFIG.businessName}</strong> adalah perusahaan jasa konstruksi dan renovasi yang 
              berdiri sejak tahun {CONFIG.yearEstablished}. Kami berfokus pada penggunaan material berkualitas tinggi dengan 
              pengerjaan yang presisi dan detail. Setiap proyek kami tangani dengan standar keamanan tinggi 
              dan hasil akhir yang memuaskan.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Dengan tim tukang las bersertifikat dan peralatan modern, kami siap mengerjakan berbagai 
              proyek mulai dari kanopi minimalis, pagar elegan, tangga besi artistik, hingga renovasi 
              total rumah Anda. Kepuasan pelanggan adalah prioritas utama kami.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {features.map((feature, index) => (
                <button 
                  key={index} 
                  onClick={() => scrollToSection('layanan')}
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-slate-50 hover:bg-orange-50 transition-colors text-left cursor-pointer group min-h-[80px]"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 group-hover:text-orange-600 text-sm sm:text-base">{feature.title}</div>
                    <div className="text-xs sm:text-sm text-slate-500">{feature.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// =============================================
// SERVICES SECTION
// =============================================
function ServicesSection() {
  const services = [
    // Layanan Las
    {
      icon: Building2,
      title: 'Kanopi & Carport',
      description: 'Kanopi baja ringan dan besi hollow dengan desain modern untuk carport, teras, dan area outdoor rumah Anda.',
      features: ['Bahan berkualitas', 'Anti karat', 'Desain custom'],
      image: '/project-kanopi.png',
      message: 'Halo, saya tertarik dengan layanan Kanopi & Carport. Mohon informasi lebih lanjut.',
      category: 'Las',
    },
    {
      icon: Shield,
      title: 'Pagar & Gerbang',
      description: 'Pagar besi dengan berbagai model dari klasik hingga minimalis. Tersedia finishing cat duco atau galvanis.',
      features: ['Kuat & awet', 'Berbagai model', 'Harga terjangkau'],
      image: '/project-pagar.png',
      message: 'Halo, saya tertarik dengan layanan Pagar & Gerbang. Mohon informasi lebih lanjut.',
      category: 'Las',
    },
    {
      icon: HomeIcon,
      title: 'Tangga Besi',
      description: 'Tangga besi internal dan eksternal dengan desain elegan. Pilihan model spiral, L-shape, atau straight.',
      features: ['Presisi tinggi', 'Anti slip', 'Desain modern'],
      image: '/project-tangga.png',
      message: 'Halo, saya tertarik dengan layanan Tangga Besi. Mohon informasi lebih lanjut.',
      category: 'Las',
    },
    {
      icon: Hammer,
      title: 'Konstruksi Baja',
      description: 'Pembuatan rangka atap baja ringan, mezzanine, dan struktur baja untuk kebutuhan konstruksi Anda.',
      features: ['Tahan gempa', 'Ringan tapi kuat', 'Pemasangan cepat'],
      image: '/project-atap.png',
      message: 'Halo, saya tertarik dengan layanan Konstruksi Baja. Mohon informasi lebih lanjut.',
      category: 'Las',
    },
    // Layanan Renovasi
    {
      icon: Wrench,
      title: 'Renovasi Total Rumah',
      description: 'Layanan renovasi lengkap dari perbaikan struktur hingga pembaruan total interior dan eksterior rumah.',
      features: ['Survey gratis', 'Tim lengkap', 'Hasil memuaskan'],
      image: '/project-renovasi.png',
      message: 'Halo, saya tertarik dengan layanan Renovasi Total Rumah. Mohon informasi lebih lanjut.',
      category: 'Renovasi',
    },
    {
      icon: Building2,
      title: 'Kitchen Set',
      description: 'Pembuatan dan pemasangan kitchen set custom sesuai kebutuhan dapur Anda dengan material premium.',
      features: ['Desain custom', 'Material premium', 'Pemasangan rapi'],
      image: '/project-kitchen.png',
      message: 'Halo, saya tertarik dengan layanan Kitchen Set. Mohon informasi lebih lanjut.',
      category: 'Renovasi',
    },
    {
      icon: HomeIcon,
      title: 'Renovasi Kamar Mandi',
      description: 'Renovasi kamar mandi dari desain modern hingga klasik dengan finishing berkualitas tinggi.',
      features: ['Waterproof', 'Desain modern', 'Peralatan premium'],
      image: '/project-kamar-mandi.png',
      message: 'Halo, saya tertarik dengan layanan Renovasi Kamar Mandi. Mohon informasi lebih lanjut.',
      category: 'Renovasi',
    },
    {
      icon: Building2,
      title: 'Pergola & Teralis',
      description: 'Pergola kayu-besi kombinasi dan teralis jendela dengan desain artistik untuk mempercantik rumah.',
      features: ['Desain artistik', 'Tahan lama', 'Maintenance mudah'],
      image: '/project-pergola.png',
      message: 'Halo, saya tertarik dengan layanan Pergola & Teralis. Mohon informasi lebih lanjut.',
      category: 'Las',
    },
  ]

  return (
    <section id="layanan" className="py-12 sm:py-20 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="outline" className="border-orange-500 text-orange-400 mb-3 sm:mb-4">
            LAYANAN KAMI
          </Badge>
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Layanan <span className="text-orange-400">Las & Renovasi</span> Lengkap
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
            Spesialis las besi dan renovasi rumah profesional dengan standar kualitas tertinggi
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              onClick={() => openWhatsApp(service.message)}
              className="group bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-[family-name:var(--font-montserrat)] flex items-center gap-2">
                  {service.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-slate-700 text-slate-300 text-[10px] sm:text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================
// PORTFOLIO SECTION
// =============================================
function PortfolioSection() {
  const projects = [
    // Proyek Las
    {
      title: 'Kanopi Carport Modern',
      category: 'Las - Kanopi',
      image: '/project-kanopi.png',
      client: 'Bpk. Ahmad - Magetan',
      message: 'Halo, saya tertarik dengan proyek Kanopi Carport Modern. Mohon informasi lebih lanjut.',
    },
    {
      title: 'Pagar Minimalis Elegan',
      category: 'Las - Pagar',
      image: '/project-pagar.png',
      client: 'Ibu Sari - Magetan',
      message: 'Halo, saya tertarik dengan proyek Pagar Minimalis Elegan. Mohon informasi lebih lanjut.',
    },
    {
      title: 'Tangga Spiral Premium',
      category: 'Las - Tangga',
      image: '/project-tangga.png',
      client: 'Bpk. Hendra - Madiun',
      message: 'Halo, saya tertarik dengan proyek Tangga Spiral Premium. Mohon informasi lebih lanjut.',
    },
    {
      title: 'Rangka Atap Baja',
      category: 'Las - Konstruksi',
      image: '/project-atap.png',
      client: 'CV. Maju Jaya - Magetan',
      message: 'Halo, saya tertarik dengan proyek Rangka Atap Baja. Mohon informasi lebih lanjut.',
    },
    {
      title: 'Pergola Taman',
      category: 'Las - Pergola',
      image: '/project-pergola.png',
      client: 'Ibu Dewi - Ngawi',
      message: 'Halo, saya tertarik dengan proyek Pergola Taman. Mohon informasi lebih lanjut.',
    },
    // Proyek Renovasi
    {
      title: 'Renovasi Total Rumah',
      category: 'Renovasi',
      image: '/project-renovasi.png',
      client: 'Bpk. Budi - Magetan',
      message: 'Halo, saya tertarik dengan proyek Renovasi Total Rumah. Mohon informasi lebih lanjut.',
    },
    {
      title: 'Kitchen Set Modern',
      category: 'Renovasi - Interior',
      image: '/project-kitchen.png',
      client: 'Ibu Ratna - Magetan',
      message: 'Halo, saya tertarik dengan proyek Kitchen Set Modern. Mohon informasi lebih lanjut.',
    },
    {
      title: 'Renovasi Kamar Mandi',
      category: 'Renovasi - Kamar Mandi',
      image: '/project-kamar-mandi.png',
      client: 'Bpk. Joko - Madiun',
      message: 'Halo, saya tertarik dengan proyek Renovasi Kamar Mandi. Mohon informasi lebih lanjut.',
    },
    {
      title: 'Teralis Jendela Artistik',
      category: 'Las - Teralis',
      image: '/project-teralis.png',
      client: 'Ibu Ani - Ponorogo',
      message: 'Halo, saya tertarik dengan proyek Teralis Jendela Artistik. Mohon informasi lebih lanjut.',
    },
  ]

  return (
    <section id="portofolio" className="py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <Badge variant="outline" className="border-orange-500 text-orange-600 mb-3 sm:mb-4">
            PORTOFOLIO
          </Badge>
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Karya <span className="text-orange-600">Terbaik</span> Kami
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Beberapa proyek yang telah kami kerjakan dengan hasil memuaskan
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <button 
              key={index} 
              onClick={() => openWhatsApp(project.message)}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer text-left w-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              {/* Category Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                <Badge className="bg-orange-500 text-white text-xs sm:text-sm">
                  {project.category}
                </Badge>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-base sm:text-xl font-bold text-white mb-1 font-[family-name:var(--font-montserrat)] flex items-center gap-2">
                  {project.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {project.client}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Button 
            size="lg" 
            onClick={() => openWhatsApp('Halo, saya ingin melihat lebih banyak portofolio proyek.')}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-500/25 cursor-pointer min-h-[48px]"
          >
            Lihat Semua Proyek
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

// =============================================
// TESTIMONIALS SECTION - FIXED BUTTONS VISIBILITY
// =============================================
function TestimonialsSection() {
  // Initialize testimonials with a lazy initializer to avoid the effect
  const [testimonials, setTestimonials] = useState<TestimonialType[]>(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('testimonials')
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as TestimonialType[]
          return [...defaultTestimonials, ...parsed]
        } catch {
          return defaultTestimonials
        }
      }
    }
    return defaultTestimonials
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    location: '',
    content: '',
    rating: 5,
    project: '',
  })

  // Save new testimonial
  const handleSubmitTestimonial = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newT: TestimonialType = {
      id: Date.now(),
      ...newTestimonial,
      date: new Date().toISOString().split('T')[0],
    }
    
    const updated = [...testimonials, newT]
    setTestimonials(updated)
    
    // Save only custom testimonials to localStorage
    const customTestimonials = updated.filter(t => !defaultTestimonials.find(d => d.id === t.id))
    localStorage.setItem('testimonials', JSON.stringify(customTestimonials))
    
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
  }

  // Display testimonials (show only 3 on homepage)
  const displayTestimonials = testimonials.slice(0, 3)

  return (
    <>
      <section id="testimoni" className="py-12 sm:py-20 lg:py-28 bg-gradient-to-br from-orange-500 to-red-600 relative">
        {/* Background Pattern - removed overflow-hidden to prevent button clipping */}
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
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Apa Kata <span className="text-yellow-300">Pelanggan</span> Kami
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
              Kepuasan pelanggan adalah bukti nyata kualitas layanan kami
            </p>
          </div>

          {/* Testimonials Grid */}
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

          {/* CTA Buttons - FIXED: Better visibility and touch targets */}
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
            <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-800 font-[family-name:var(--font-montserrat)]">
              Semua Testimoni Pelanggan
            </DialogTitle>
            <DialogDescription>
              Testimoni nyata dari pelanggan yang telah menggunakan jasa kami
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
            <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-800 font-[family-name:var(--font-montserrat)]">
              Berikan Testimoni Anda
            </DialogTitle>
            <DialogDescription>
              Bagikan pengalaman Anda menggunakan jasa kami
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
                  placeholder="Contoh: Surabaya"
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
              >
                Batal
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white cursor-pointer min-h-[48px]"
              >
                <Send className="w-4 h-4 mr-2" />
                Kirim Testimoni
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

// =============================================
// CONTACT SECTION
// =============================================
function ContactSection() {
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

_Dikirim dari website MBUZENK ZETRO_`

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
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Konsultasi <span className="text-orange-400">Gratis</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk proyek Anda
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
                onClick={() => openWhatsApp('Halo, saya ingin bertanya tentang layanan Anda.')}
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
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Alamat</h3>
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
                  <h3 className="font-semibold text-white text-sm sm:text-base">Jam Operasional</h3>
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
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-[family-name:var(--font-montserrat)]">
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
                    placeholder="Contoh: Kanopi, Pagar, Renovasi" 
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
                    placeholder="Jelaskan kebutuhan proyek Anda..." 
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

// =============================================
// FOOTER
// =============================================
function Footer() {
  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'portofolio', label: 'Portofolio' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'kontak', label: 'Kontak' },
  ]

  const services = [
    { name: 'Kanopi Minimalis', message: 'Halo, saya tertarik dengan layanan Kanopi Minimalis.' },
    { name: 'Pagar Besi', message: 'Halo, saya tertarik dengan layanan Pagar Besi.' },
    { name: 'Tangga Besi', message: 'Halo, saya tertarik dengan layanan Tangga Besi.' },
    { name: 'Konstruksi Baja', message: 'Halo, saya tertarik dengan layanan Konstruksi Baja.' },
    { name: 'Renovasi Rumah', message: 'Halo, saya tertarik dengan layanan Renovasi Rumah.' },
    { name: 'Pergola & Teralis', message: 'Halo, saya tertarik dengan layanan Pergola & Teralis.' },
  ]

  return (
    <footer className="bg-slate-950 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button 
              onClick={() => scrollToSection('beranda')}
              className="flex items-center gap-2 sm:gap-3 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                <Wrench className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <span className="font-bold text-base sm:text-xl text-white font-[family-name:var(--font-montserrat)]">MBUZENK ZETRO</span>
                <span className="block text-[10px] sm:text-xs text-orange-400">{CONFIG.tagline}</span>
              </div>
            </button>
            <p className="text-slate-400 mb-4 sm:mb-6 max-w-md leading-relaxed text-xs sm:text-sm">
              {CONFIG.businessName} adalah mitra terpercaya untuk semua kebutuhan konstruksi 
              baja dan renovasi rumah Anda. Dengan pengalaman lebih dari {CONFIG.yearsExperience} tahun, kami berkomitmen 
              memberikan hasil terbaik dengan standar kualitas tertinggi.
            </p>
            {/* Social Media */}
            <div className="flex gap-3 sm:gap-4">
              <a 
                href={CONFIG.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-white" />
              </a>
              <a 
                href={CONFIG.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 hover:bg-black rounded-lg flex items-center justify-center transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <button 
                onClick={() => openWhatsApp('Halo, saya menghubungi dari website.')}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Menu Cepat</h4>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-xs sm:text-sm py-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Layanan Kami</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => openWhatsApp(service.message)}
                    className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer text-xs sm:text-sm py-1"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs sm:text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} {CONFIG.businessName}. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <button 
                onClick={() => openWhatsApp('Halo, saya ingin bertanya tentang kebijakan privasi.')}
                className="text-slate-500 hover:text-orange-400 transition-colors cursor-pointer"
              >
                Kebijakan Privasi
              </button>
              <button 
                onClick={() => openWhatsApp('Halo, saya ingin bertanya tentang syarat dan ketentuan.')}
                className="text-slate-500 hover:text-orange-400 transition-colors cursor-pointer"
              >
                Syarat & Ketentuan
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// =============================================
// MAIN PAGE COMPONENT
// =============================================
export default function MainPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
