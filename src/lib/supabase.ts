import { createClient } from '@supabase/supabase-js'
import { createBrowserClient } from '@supabase/ssr'

// Environment variables for Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Client for server-side operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client for client-side operations (React components)
export const createSupabaseClient = () => createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

// Types for authentication
export type AuthUser = {
  id: string
  email?: string
  user_metadata?: {
    full_name?: string
    avatar_url?: string
  }
}

export type AuthSession = {
  access_token: string
  refresh_token: string
  expires_in: number
  user: AuthUser
}