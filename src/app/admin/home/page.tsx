"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Save, 
  Eye, 
  Plus, 
  Trash2, 
  Image, 
  FileText,
  ArrowLeft,
  Edit3,
  Upload
} from "lucide-react"
import { homeData, type SolutionItem } from "@/data/home"

export default function AdminHomePage() {
  const [formData, setFormData] = useState({
    // Hero Section
    heroImage: homeData.hero.backgroundImage,
    
    // Main Section
    mainTitle: homeData.mainSection.title,
    mainSubtitle: homeData.mainSection.subtitle,
    mainDescription: homeData.mainSection.description,
    
    // Solutions Section
    solutionsTitle: homeData.solutions.title,
    solutionsSubtitle: homeData.solutions.subtitle,
    solutions: [...homeData.solutions.items],
    
    // Why Best Section
    whyBestTitle: homeData.whyBest.title,
    whyBestSubtitle: homeData.whyBest.subtitle,
    whyBestContent: [...homeData.whyBest.content],
    
    // Exhibition Data
    europeTitle: homeData.exhibitionData.europe.title,
    europeSubtitle: homeData.exhibitionData.europe.subtitle || "",
    europeBoothImage: homeData.exhibitionData.europe.boothImage || "",
    europeParagraphs: [...homeData.exhibitionData.europe.paragraphs],
    usaTitle: homeData.exhibitionData.usa.title,
    usaParagraphs: [...homeData.exhibitionData.usa.paragraphs],
  })

  const [isEditing, setIsEditing] = useState({
    hero: false,
    main: false,
    solutions: false,
    whyBest: false,
    exhibition: false,
  })

  const handleSave = (section: string) => {
    console.log(`Saving ${section} section:`, formData)
    setIsEditing(prev => ({ ...prev, [section]: false }))
  }

  const toggleEdit = (section: keyof typeof isEditing) => {
    setIsEditing(prev => ({ ...prev, [section]: !prev[section] }))
  }

  // Solution management functions
  const addSolution = () => {
    const newSolution: SolutionItem = {
      title: "New Solution",
      description: "Enter description...",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
    setFormData(prev => ({
      ...prev,
      solutions: [...prev.solutions, newSolution]
    }))
  }

  const deleteSolution = (index: number) => {
    setFormData(prev => ({
      ...prev,
      solutions: prev.solutions.filter((_, i) => i !== index)
    }))
  }

  const updateSolution = (index: number, field: keyof SolutionItem, value: string) => {
    setFormData(prev => ({
      ...prev,
      solutions: prev.solutions.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  // Why Best content management
  const addWhyBestPoint = () => {
    setFormData(prev => ({
      ...prev,
      whyBestContent: [...prev.whyBestContent, "New content point..."]
    }))
  }

  const deleteWhyBestPoint = (index: number) => {
    setFormData(prev => ({
      ...prev,
      whyBestContent: prev.whyBestContent.filter((_, i) => i !== index)
    }))
  }

  const updateWhyBestPoint = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      whyBestContent: prev.whyBestContent.map((item, i) => 
        i === index ? value : item
      )
    }))
  }

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Home Page Management</h1>
          <p className="text-gray-600">Manage all sections of your home page content</p>
        </div>
      </div>

      {/* Hero Section */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Image className="h-5 w-5" />
            Hero Section
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => toggleEdit('hero')}>
              <Edit3 className="h-4 w-4 mr-2" />
              {isEditing.hero ? 'Cancel' : 'Edit'}
            </Button>
            {isEditing.hero && (
              <Button size="sm" onClick={() => handleSave('hero')}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            )}
          </div>
        </div>
        
        {isEditing.hero ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Background Image URL</label>
              <Input
                value={formData.heroImage}
                onChange={(e) => setFormData(prev => ({ ...prev, heroImage: e.target.value }))}
                placeholder="Enter image URL..."
              />
            </div>
          </div>
        ) : (
          <div className="h-48 rounded-lg overflow-hidden bg-cover bg-center relative" 
               style={{ backgroundImage: `url('${formData.heroImage}')` }}>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <p className="text-white text-lg font-medium">Hero Background</p>
            </div>
          </div>
        )}
      </Card>

      {/* Main Section */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Main Section
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => toggleEdit('main')}>
              <Edit3 className="h-4 w-4 mr-2" />
              {isEditing.main ? 'Cancel' : 'Edit'}
            </Button>
            {isEditing.main && (
              <Button size="sm" onClick={() => handleSave('main')}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            )}
          </div>
        </div>

        {isEditing.main ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Title</label>
              <Input
                value={formData.mainTitle}
                onChange={(e) => setFormData(prev => ({ ...prev, mainTitle: e.target.value }))}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Subtitle</label>
              <Input
                value={formData.mainSubtitle}
                onChange={(e) => setFormData(prev => ({ ...prev, mainSubtitle: e.target.value }))}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Description</label>
              <Textarea
                rows={4}
                value={formData.mainDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, mainDescription: e.target.value }))}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div>
              <Badge variant="secondary" className="mb-2">Title</Badge>
              <h3 className="text-2xl font-bold">{formData.mainTitle}</h3>
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">Subtitle</Badge>
              <h4 className="text-xl text-gray-700">{formData.mainSubtitle}</h4>
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">Description</Badge>
              <p className="text-gray-600">{formData.mainDescription}</p>
            </div>
          </div>
        )}
      </Card>

      {/* Solutions Section */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Solutions Section
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => toggleEdit('solutions')}>
              <Edit3 className="h-4 w-4 mr-2" />
              {isEditing.solutions ? 'Cancel' : 'Edit'}
            </Button>
            {isEditing.solutions && (
              <Button size="sm" onClick={() => handleSave('solutions')}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            )}
          </div>
        </div>

        {isEditing.solutions ? (
          <div className="space-y-6">
            {/* Section Headers */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Section Title</label>
                <Input
                  value={formData.solutionsTitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, solutionsTitle: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Section Subtitle</label>
                <Textarea
                  rows={3}
                  value={formData.solutionsSubtitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, solutionsSubtitle: e.target.value }))}
                />
              </div>
            </div>

            <Separator />

            {/* Solutions Items */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Solution Items</h3>
                <Button onClick={addSolution} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Solution
                </Button>
              </div>

              {formData.solutions.map((solution, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Solution {index + 1}</h4>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => deleteSolution(index)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Title</label>
                        <Input
                          value={solution.title}
                          onChange={(e) => updateSolution(index, 'title', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Description</label>
                        <Textarea
                          rows={3}
                          value={solution.description}
                          onChange={(e) => updateSolution(index, 'description', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Image URL</label>
                        <Input
                          value={solution.image}
                          onChange={(e) => updateSolution(index, 'image', e.target.value)}
                          placeholder="Enter image URL..."
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium block">Preview</label>
                      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={solution.image} 
                          alt={solution.title} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <Badge variant="secondary" className="mb-2">Title</Badge>
              <h3 className="text-xl font-bold">{formData.solutionsTitle}</h3>
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">Description</Badge>
              <p className="text-gray-600">{formData.solutionsSubtitle}</p>
            </div>
            <Separator />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {formData.solutions.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-200 rounded mb-3 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-medium text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-500 line-clamp-3">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* Why Best Section */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Why We Are The Best Section
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => toggleEdit('whyBest')}>
              <Edit3 className="h-4 w-4 mr-2" />
              {isEditing.whyBest ? 'Cancel' : 'Edit'}
            </Button>
            {isEditing.whyBest && (
              <Button size="sm" onClick={() => handleSave('whyBest')}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            )}
          </div>
        </div>

        {isEditing.whyBest ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Title</label>
              <Input
                value={formData.whyBestTitle}
                onChange={(e) => setFormData(prev => ({ ...prev, whyBestTitle: e.target.value }))}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Subtitle</label>
              <Input
                value={formData.whyBestSubtitle}
                onChange={(e) => setFormData(prev => ({ ...prev, whyBestSubtitle: e.target.value }))}
              />
            </div>
            <Separator />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Content Points</h3>
                <Button onClick={addWhyBestPoint} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Point
                </Button>
              </div>
              {formData.whyBestContent.map((content, index) => (
                <div key={index} className="flex gap-2">
                  <Textarea
                    value={content}
                    onChange={(e) => updateWhyBestPoint(index, e.target.value)}
                    rows={3}
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteWhyBestPoint(index)}
                    className="text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <Badge variant="secondary" className="mb-2">Title</Badge>
              <h3 className="text-xl font-bold">{formData.whyBestTitle}</h3>
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">Subtitle</Badge>
              <h4 className="text-lg text-gray-700">{formData.whyBestSubtitle}</h4>
            </div>
            <Separator />
            <div className="space-y-3">
              <Badge variant="secondary">Content ({formData.whyBestContent.length} points)</Badge>
              <div className="max-h-48 overflow-y-auto space-y-2">
                {formData.whyBestContent.map((content, index) => (
                  <p key={index} className="text-sm text-gray-600 p-3 bg-gray-50 rounded">
                    {content}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-6">
        <Button variant="outline">
          <Eye className="h-4 w-4 mr-2" />
          Preview Changes
        </Button>
        <Button className="bg-[#A5CD39] hover:bg-[#94b832]">
          <Save className="h-4 w-4 mr-2" />
          Publish All Changes
        </Button>
      </div>
    </div>
  )
}