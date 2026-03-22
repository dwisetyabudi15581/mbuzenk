// Upstash Redis client for permanent testimonial storage
// Using @upstash/redis package

import { Redis } from '@upstash/redis'
import { DEFAULT_TESTIMONIALS, TestimonialType } from './data'

// Initialize Redis client
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null

// Redis key for testimonials
const REDIS_KEY = 'mbuzenkzetro:testimonials'

// In-memory fallback storage
let memoryStore: TestimonialType[] = [...DEFAULT_TESTIMONIALS]
let nextId = DEFAULT_TESTIMONIALS.length + 1

/**
 * Get all testimonials from Redis
 */
export async function getTestimonials(): Promise<TestimonialType[]> {
  if (!redis) {
    console.log('Upstash Redis not configured, using in-memory storage')
    return memoryStore
  }

  try {
    const data = await redis.get<TestimonialType[]>(REDIS_KEY)
    
    if (data && Array.isArray(data) && data.length > 0) {
      return data
    }
    
    // Initialize with default testimonials if empty
    await redis.set(REDIS_KEY, DEFAULT_TESTIMONIALS)
    console.log('Initialized Redis with default testimonials')
    return DEFAULT_TESTIMONIALS
  } catch (error) {
    console.error('Redis error:', error)
    return memoryStore
  }
}

/**
 * Add new testimonial to Redis
 */
export async function addTestimonial(
  testimonial: Omit<TestimonialType, 'id' | 'date'>
): Promise<TestimonialType> {
  const newTestimonial: TestimonialType = {
    id: nextId++,
    ...testimonial,
    rating: parseInt(String(testimonial.rating)),
    date: new Date().toISOString().split('T')[0],
  }

  if (!redis) {
    console.log('Upstash Redis not configured, using in-memory storage')
    memoryStore = [newTestimonial, ...memoryStore]
    return newTestimonial
  }

  try {
    // Get current testimonials
    const current = await getTestimonials()
    
    // Add new testimonial at the beginning
    const updated = [newTestimonial, ...current]
    
    // Save to Redis
    await redis.set(REDIS_KEY, updated)
    
    console.log('Testimonial saved to Redis successfully')
    return newTestimonial
  } catch (error) {
    console.error('Redis error:', error)
    memoryStore = [newTestimonial, ...memoryStore]
    return newTestimonial
  }
}

/**
 * Check if Redis is configured
 */
export function isRedisConfigured(): boolean {
  return !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
}
