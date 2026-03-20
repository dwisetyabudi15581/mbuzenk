// Upstash Redis client for permanent testimonial storage
// Setup: Get free Redis at https://upstash.com and add env vars to Vercel

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

// Default testimonials
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    role: "Pemilik Rumah",
    location: "Magetan",
    content: "Pengerjaan kanopi sangat rapi dan tepat waktu. Tim MBUZENK ZETRO sangat profesional dari survey hingga pemasangan. Sangat recommended!",
    rating: 5,
    date: "2024-01-15",
    project: "Kanopi Carport"
  },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Ibu Rumah Tangga",
    location: "Madiun",
    content: "Pagar rumah saya sekarang terlihat lebih mewah berkat MBUZENK ZETRO. Desainnya minimalis sesuai yang saya inginkan. Terima kasih!",
    rating: 5,
    date: "2024-02-20",
    project: "Pagar Minimalis"
  },
  {
    id: 3,
    name: "Hendra Wijaya",
    role: "Pengusaha",
    location: "Ngawi",
    content: "Tangga spiral yang dibuat sangat kokoh dan artistik. Harga juga sangat reasonable untuk kualitas setinggi ini. Top markotop!",
    rating: 5,
    date: "2024-03-10",
    project: "Tangga Spiral"
  }
]

// Simple fetch-based Redis client (no external dependencies needed)
class RedisClient {
  private url: string
  private token: string

  constructor(url: string, token: string) {
    this.url = url
    this.token = token
  }

  async get(key: string): Promise<string | null> {
    const response = await fetch(`${this.url}/get/${key}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
    
    if (!response.ok) return null
    
    const data = await response.json()
    return data.result
  }

  async set(key: string, value: string): Promise<boolean> {
    const response = await fetch(`${this.url}/set/${key}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    })
    
    return response.ok
  }
}

// Get Redis client (returns null if not configured)
function getRedisClient(): RedisClient | null {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  
  if (!url || !token) {
    console.log('Redis not configured, using in-memory storage')
    return null
  }
  
  return new RedisClient(url, token)
}

// In-memory fallback storage
let memoryStore: Testimonial[] = [...defaultTestimonials]
let nextId = 4
const REDIS_KEY = 'mbuzenkzetro:testimonials'

// Get all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  const redis = getRedisClient()
  
  if (redis) {
    try {
      const data = await redis.get(REDIS_KEY)
      if (data) {
        return JSON.parse(data)
      }
      // Initialize with defaults if empty
      await redis.set(REDIS_KEY, JSON.stringify(defaultTestimonials))
      return defaultTestimonials
    } catch (error) {
      console.error('Redis error:', error)
      return memoryStore
    }
  }
  
  return memoryStore
}

// Add new testimonial
export async function addTestimonial(testimonial: Omit<Testimonial, 'id' | 'date'>): Promise<Testimonial> {
  const redis = getRedisClient()
  
  const newTestimonial: Testimonial = {
    id: nextId++,
    ...testimonial,
    rating: parseInt(String(testimonial.rating)),
    date: new Date().toISOString().split('T')[0],
  }
  
  if (redis) {
    try {
      const current = await getTestimonials()
      const updated = [newTestimonial, ...current]
      await redis.set(REDIS_KEY, JSON.stringify(updated))
      return newTestimonial
    } catch (error) {
      console.error('Redis error:', error)
    }
  }
  
  memoryStore = [newTestimonial, ...memoryStore]
  return newTestimonial
}
