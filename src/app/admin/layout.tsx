import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import AdminSidebar from "@/components/AdminSidebar"
import "../globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Admin Dashboard - Chronicles Exhibition Stands",
  description: "Administrative panel for managing Chronicles Exhibition Stands website content and settings.",
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased bg-gray-50`}>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <AdminSidebar />
          
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="h-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}