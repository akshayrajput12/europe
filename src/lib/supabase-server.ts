import { createClient } from '@supabase/supabase-js'

// Simple server-side Supabase client for data operations
export function createServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

// Alias for consistency
export const createServerComponentClient = createServerClient
export const createRouteHandlerClient = createServerClient