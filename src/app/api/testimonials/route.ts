import { NextRequest, NextResponse } from 'next/server'
import { getTestimonials, addTestimonial, isRedisConfigured } from '@/lib/testimonials-db'

// Interface untuk testimoni
interface Testimonial {
  id: number
  name: string
  role: string
  location: string
  content: string
  rating: number
  date: string
  project: string
}

// GET - Ambil semua testimoni
export async function GET() {
  try {
    const testimonials = await getTestimonials()
    return NextResponse.json(testimonials)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return NextResponse.json({ error: 'Gagal mengambil data testimoni' }, { status: 500 })
  }
}

// POST - Tambah testimoni baru
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, role, location, content, rating, project } = body

    // Validasi input
    if (!name || !role || !location || !content || !rating) {
      return NextResponse.json({ error: 'Semua field harus diisi' }, { status: 400 })
    }

    // Validasi rating
    const ratingNum = parseInt(String(rating))
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return NextResponse.json({ error: 'Rating harus antara 1-5' }, { status: 400 })
    }

    // Sanitize input
    const sanitizedData = {
      name: String(name).trim().slice(0, 100),
      role: String(role).trim().slice(0, 100),
      location: String(location).trim().slice(0, 100),
      content: String(content).trim().slice(0, 1000),
      rating: ratingNum,
      project: project ? String(project).trim().slice(0, 100) : '',
    }

    const newTestimonial = await addTestimonial(sanitizedData)

    return NextResponse.json(newTestimonial)
  } catch (error) {
    console.error('Error saving testimonial:', error)
    return NextResponse.json({ error: 'Gagal menyimpan testimoni' }, { status: 500 })
  }
}
