// =============================================
// KONFIGURASI BISNIS - UBAH DATA DI BAWAH INI
// =============================================
export const CONFIG = {
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

  // SEO Keywords untuk H1 dan konten
  seoKeywords: {
    primary: 'bengkel las, renovasi rumah, las magetan',
    secondary: 'kanopi minimalis, pagar besi, tangga besi, konstruksi baja, kitchen set',
    location: 'Magetan, Madiun, Ngawi, Ponorogo'
  }
} as const;

// =============================================
// NAVIGATION LINKS
// =============================================
export const NAV_LINKS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang Kami' },
  { id: 'layanan', label: 'Layanan' },
  { id: 'portofolio', label: 'Portofolio' },
  { id: 'testimoni', label: 'Testimoni' },
  { id: 'kontak', label: 'Kontak' },
] as const;

// =============================================
// HELPER FUNCTIONS
// =============================================
export const openWhatsApp = (message = '') => {
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodedMessage}`, '_blank')
}

export const makeCall = (number = CONFIG.phone) => {
  window.open(`tel:+${number}`, '_self')
}

export const sendEmail = (email = CONFIG.email) => {
  window.open(`mailto:${email}`, '_self')
}

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
