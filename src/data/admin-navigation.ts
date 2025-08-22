import { 
  Home, 
  FileText, 
  Image, 
  Users, 
  MessageSquare, 
  Settings, 
  Building, 
  Mail, 
  BarChart3,
  LogOut 
} from "lucide-react"

export interface AdminMenuItem {
  id: string
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  description?: string
  isActive?: boolean
}

export interface AdminNavigationData {
  branding: {
    title: string
    subtitle: string
  }
  menuItems: AdminMenuItem[]
  bottomItems: AdminMenuItem[]
}

export const adminNavigationData: AdminNavigationData = {
  branding: {
    title: "CHRONICLES",
    subtitle: "Admin Dashboard",
  },
  menuItems: [
    {
      id: "dashboard",
      label: "Dashboard",
      href: "/admin",
      icon: Home,
      description: "Overview and analytics",
    },
    {
      id: "home-management",
      label: "Home Page",
      href: "/admin/home",
      icon: FileText,
      description: "Manage home page content",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      href: "/admin/portfolio",
      icon: Image,
      description: "Manage portfolio items",
    },
    {
      id: "services",
      label: "Services", 
      href: "/admin/services",
      icon: Building,
      description: "Manage service pages",
    },
    {
      id: "testimonials",
      label: "Testimonials",
      href: "/admin/testimonials", 
      icon: MessageSquare,
      description: "Manage customer reviews",
    },
    {
      id: "countries",
      label: "Countries",
      href: "/admin/countries",
      icon: Users,
      description: "Manage country-specific content",
    },
    {
      id: "contacts",
      label: "Contact Requests",
      href: "/admin/contacts",
      icon: Mail,
      description: "View and manage contact submissions",
    },
    {
      id: "analytics",
      label: "Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
      description: "Site performance and metrics",
    },
  ],
  bottomItems: [
    {
      id: "settings",
      label: "Settings",
      href: "/admin/settings",
      icon: Settings,
      description: "System settings and preferences",
    },
    {
      id: "logout",
      label: "Logout",
      href: "/auth/logout",
      icon: LogOut,
      description: "Sign out of admin panel",
    },
  ],
}