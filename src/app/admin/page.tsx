"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Image, 
  Users, 
  MessageSquare, 
  TrendingUp,
  Calendar,
  Activity
} from "lucide-react"

export default function AdminDashboard() {
  // Mock data - in a real implementation, this would come from your backend/database
  const stats = [
    {
      title: "Portfolio Items",
      value: "45",
      change: "+3",
      trend: "up", 
      icon: Image,
    },
    {
      title: "Contact Requests",
      value: "89", 
      change: "+8",
      trend: "up",
      icon: Users,
    },
    {
      title: "Testimonials",
      value: "23",
      change: "+2",
      trend: "up",
      icon: MessageSquare,
    },
  ]

  const recentActivities = [
    {
      action: "New contact form submission",
      details: "From John Doe - Custom Stand Inquiry",
      time: "2 hours ago",
      type: "contact"
    },
    {
      action: "Portfolio item updated",
      details: "Custom Stand - Tech Expo 2024",
      time: "5 hours ago", 
      type: "portfolio"
    },
    {
      action: "New testimonial added",
      details: "5-star review from ABC Company",
      time: "1 day ago",
      type: "testimonial"
    },
    {
      action: "Home page content modified",
      details: "Hero section text updated",
      time: "2 days ago",
      type: "content"
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your site.</p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <Badge 
                      variant="secondary" 
                      className="bg-green-100 text-green-800 hover:bg-green-100"
                    >
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.change}
                    </Badge>
                  </div>
                </div>
                <Icon className="h-8 w-8 text-[#A5CD39]" />
              </div>
            </Card>
          )
        })}
      </div>

      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                <div className="w-2 h-2 bg-[#A5CD39] rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600 truncate">{activity.details}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid gap-3">
            <Button className="justify-start h-auto p-4 bg-white border-2 border-gray-200 text-gray-700 hover:border-[#A5CD39] hover:bg-[#A5CD39]/5" variant="outline">
              <FileText className="h-4 w-4 mr-3" />
              <div className="text-left">
                <p className="font-medium">Manage Home Page</p>
                <p className="text-xs text-gray-500">Update hero, sections, and content</p>
              </div>
            </Button>
            <Button className="justify-start h-auto p-4 bg-white border-2 border-gray-200 text-gray-700 hover:border-[#A5CD39] hover:bg-[#A5CD39]/5" variant="outline">
              <Image className="h-4 w-4 mr-3" />
              <div className="text-left">
                <p className="font-medium">Add Portfolio Item</p>
                <p className="text-xs text-gray-500">Upload new project showcase</p>
              </div>
            </Button>
            <Button className="justify-start h-auto p-4 bg-white border-2 border-gray-200 text-gray-700 hover:border-[#A5CD39] hover:bg-[#A5CD39]/5" variant="outline">
              <Users className="h-4 w-4 mr-3" />
              <div className="text-left">
                <p className="font-medium">View Contact Requests</p>
                <p className="text-xs text-gray-500">Respond to customer inquiries</p>
              </div>
            </Button>
            <Button className="justify-start h-auto p-4 bg-white border-2 border-gray-200 text-gray-700 hover:border-[#A5CD39] hover:bg-[#A5CD39]/5" variant="outline">
              <MessageSquare className="h-4 w-4 mr-3" />
              <div className="text-left">
                <p className="font-medium">Manage Testimonials</p>
                <p className="text-xs text-gray-500">Add or moderate reviews</p>
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}