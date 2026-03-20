// Supabase client for permanent testimonial storage
// Setup: Create free account at https://supabase.com

import { createClient } from '@supabase/supabase-js'
import { DEFAULT_TESTIMONIALS, TestimonialType } from './data'

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create Supabase client
const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Table name
const TABLE_NAME = 'testimonials'

// In-memory fallback storage (only used when Supabase is not configured)
let memoryStore: TestimonialType[] = [...DEFAULT_TESTIMONIALS]
let nextId = DEFAULT_TESTIMONIALS.length + 1

/**
 * Initialize database with default testimonials if empty
 */
async function initializeDatabase(): Promise<void> {
  if (!supabase) return
  
  try {
    // Check if table is empty
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('id')
      .limit(1)
    
    if (error) {
      console.error('Error checking testimonials:', error)
      return
    }
    
    // If empty, insert default testimonials
    if (!data || data.length === 0) {
      console.log('Initializing database with default testimonials...')
      
      const { error: insertError } = await supabase
        .from(TABLE_NAME)
        .insert(DEFAULT_TESTIMONIALS.map(t => ({
          name: t.name,
          role: t.role,
          location: t.location,
          content: t.content,
          rating: t.rating,
          date: t.date,
          project: t.project,
        })))
      
      if (insertError) {
        console.error('Error inserting default testimonials:', insertError)
      } else {
        console.log('Default testimonials inserted successfully')
      }
    }
  } catch (err) {
    console.error('Error initializing database:', err)
  }
}

// Initialize on first load
let initialized = false

/**
 * Get all testimonials from database
 */
export async function getTestimonials(): Promise<TestimonialType[]> {
  // Initialize database if using Supabase
  if (supabase && !initialized) {
    await initializeDatabase()
    initialized = true
  }
  
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from(TABLE_NAME)
        .select('*')
        .order('date', { ascending: false })
      
      if (error) {
        console.error('Error fetching testimonials:', error)
        return memoryStore
      }
      
      if (data && data.length > 0) {
        return data.map((t: Record<string, unknown>) => ({
          id: t.id as number,
          name: t.name as string,
          role: t.role as string,
          location: t.location as string,
          content: t.content as string,
          rating: t.rating as number,
          date: t.date as string,
          project: (t.project as string) || '',
        }))
      }
      
      return []
    } catch (err) {
      console.error('Error fetching testimonials:', err)
      return memoryStore
    }
  }
  
  console.log('Supabase not configured, using in-memory storage')
  return memoryStore
}

/**
 * Add new testimonial to database
 */
export async function addTestimonial(
  testimonial: Omit<TestimonialType, 'id' | 'date'>
): Promise<TestimonialType> {
  const newTestimonial = {
    ...testimonial,
    rating: parseInt(String(testimonial.rating)),
    date: new Date().toISOString().split('T')[0],
  }
  
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from(TABLE_NAME)
        .insert([newTestimonial])
        .select()
        .single()
      
      if (error) {
        console.error('Error saving testimonial:', error)
        throw new Error('Gagal menyimpan testimoni ke database')
      }
      
      return {
        id: data.id as number,
        name: data.name as string,
        role: data.role as string,
        location: data.location as string,
        content: data.content as string,
        rating: data.rating as number,
        date: data.date as string,
        project: (data.project as string) || '',
      }
    } catch (err) {
      console.error('Error saving testimonial:', err)
      throw err
    }
  }
  
  // Fallback to memory storage
  const id = nextId++
  const memoryTestimonial: TestimonialType = {
    id,
    ...newTestimonial,
  }
  
  memoryStore = [memoryTestimonial, ...memoryStore]
  
  console.warn('Using in-memory storage - testimonials will be lost on restart!')
  
  return memoryTestimonial
}

/**
 * Check if Supabase is configured
 */
export function isSupabaseConfigured(): boolean {
  return !!(supabaseUrl && supabaseAnonKey)
}
