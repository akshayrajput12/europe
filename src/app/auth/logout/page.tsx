"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Only create Supabase client if environment variables are available
        if (typeof window !== 'undefined' && 
            process.env.NEXT_PUBLIC_SUPABASE_URL && 
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
          const { createSupabaseClient } = await import('@/lib/supabase')
          const supabase = createSupabaseClient()
          await supabase.auth.signOut()
        }
        router.push('/auth')
      } catch (error) {
        console.error('Error signing out:', error)
        router.push('/auth')
      }
    }

    handleLogout()
  }, [router])

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#A5CD39] mx-auto mb-4" />
        <p className="text-white">Signing you out...</p>
      </div>
    </div>
  )
}