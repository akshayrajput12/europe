"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { adminNavigationData } from "@/data/admin-navigation"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { createSupabaseClient } from "@/lib/supabase"

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createSupabaseClient()

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      router.push('/auth')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div className="flex h-screen w-64 flex-col bg-slate-900 text-white">
      {/* Header */}
      <div className="flex h-16 items-center justify-center border-b border-slate-700 px-6">
        <div className="text-center">
          <h1 className="text-lg font-bold text-white">
            {adminNavigationData.branding.title}
          </h1>
          <p className="text-xs text-slate-400">
            {adminNavigationData.branding.subtitle}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <ul className="space-y-2">
          {adminNavigationData.menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-800",
                    isActive 
                      ? "bg-[#A5CD39] text-white shadow-lg" 
                      : "text-slate-300 hover:text-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <div className="flex flex-col">
                    <span>{item.label}</span>
                    {item.description && (
                      <span className={cn(
                        "text-xs",
                        isActive ? "text-white/80" : "text-slate-400"
                      )}>
                        {item.description}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-slate-700 px-4 py-4">
        <Separator className="mb-4 bg-slate-700" />
        <ul className="space-y-2">
          {adminNavigationData.bottomItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <li key={item.id}>
                {item.id === "logout" ? (
                  <button
                    onClick={handleLogout}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-red-600 hover:text-white w-full text-left",
                      "text-slate-300"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-800",
                      isActive 
                        ? "bg-[#A5CD39] text-white" 
                        : "text-slate-300 hover:text-white"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}