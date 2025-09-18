// src/data/blog.ts
import { supabase } from '@/lib/supabase'
import { createServerClient } from '@/lib/supabase-server'

export interface BlogPost {
  id: string
  slug: string
  title: string
  content: string
  publishedDate: string
  featuredImage: string
  featuredImageAlt?: string
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
}

export interface BlogData {
  title: string
  subtitle: string
  description: string
  heroImage: string
  heroImageAlt?: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
  posts: BlogPost[]
}

// Database interfaces for raw data
interface BlogPageDB {
  id: string
  meta_title: string
  meta_description: string
  meta_keywords: string
  hero_title: string
  hero_subtitle: string
  hero_background_image: string
  hero_background_image_alt: string
  hero_image: string
  description: string
  is_active: boolean
  created_at?: string
  updated_at?: string
}

interface BlogPostDB {
  id: string
  slug: string
  title: string
  content: string
  published_date: string
  featured_image: string
  featured_image_alt: string
  meta_title: string
  meta_description: string
  meta_keywords: string
  sort_order: number
  is_active: boolean
  created_at?: string
  updated_at?: string
}

// Database functions
export async function getBlogPageData(): Promise<BlogPageDB | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('blog_page')
      .select('*')
      .eq('is_active', true)
      .single()
    
    if (error) {
      console.error('Error fetching blog page data:', error)
      return null
    }
    
    return data as BlogPageDB
  } catch (error) {
    console.error('Unexpected error fetching blog page data:', error)
    return null
  }
}

export async function getAllActiveBlogPosts(): Promise<BlogPostDB[] | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('blog_posts')
      .select('*')
      .eq('is_active', true)
      .order('sort_order')
    
    if (error) {
      console.error('Error fetching blog posts:', error)
      return null
    }
    
    return data as BlogPostDB[]
  } catch (error) {
    console.error('Unexpected error fetching blog posts:', error)
    return null
  }
}

export async function getBlogPostBySlugFromDB(slug: string): Promise<BlogPostDB | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single()
    
    if (error) {
      console.error(`Error fetching blog post with slug ${slug}:`, error)
      return null
    }
    
    return data as BlogPostDB
  } catch (error) {
    console.error(`Unexpected error fetching blog post with slug ${slug}:`, error)
    return null
  }
}

export async function getRelatedBlogPostsFromDB(currentSlug: string, limit: number = 3): Promise<BlogPostDB[] | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    // First, get all active posts except the current one
    const { data: allPosts, error: allPostsError } = await client
      .from('blog_posts')
      .select('*')
      .neq('slug', currentSlug)
      .eq('is_active', true)
    
    if (allPostsError) {
      console.error('Error fetching all blog posts:', allPostsError)
      return null
    }
    
    // Shuffle the posts array to get random posts
    const shuffledPosts = allPosts.sort(() => 0.5 - Math.random())
    
    // Return only the requested limit
    return shuffledPosts.slice(0, limit)
  } catch (error) {
    console.error('Unexpected error fetching related blog posts:', error)
    return null
  }
}

export async function getBlogPostsByCategoryFromDB(category: string): Promise<BlogPostDB[] | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('blog_posts')
      .select('*')
      .eq('category', category)
      .eq('is_active', true)
      .order('sort_order')
    
    if (error) {
      console.error(`Error fetching blog posts by category ${category}:`, error)
      return null
    }
    
    return data as BlogPostDB[]
  } catch (error) {
    console.error(`Unexpected error fetching blog posts by category ${category}:`, error)
    return null
  }
}

// Dynamic data fetching functions
export async function getBlogData(): Promise<BlogData | null> {
  try {
    // Fetch page data
    const pageData = await getBlogPageData()
    if (!pageData) {
      console.error('Failed to fetch blog page data')
      return null
    }

    // Fetch all blog posts
    const postsData = await getAllActiveBlogPosts()
    if (!postsData) {
      console.error('Failed to fetch blog posts data')
      return null
    }

    // Transform database data to match the interface
    const posts: BlogPost[] = postsData.map(post => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      content: post.content,
      publishedDate: post.published_date,
      featuredImage: post.featured_image,
      featuredImageAlt: post.featured_image_alt,
      metaTitle: post.meta_title,
      metaDescription: post.meta_description,
      metaKeywords: post.meta_keywords
    }))

    return {
      title: pageData.hero_title,
      subtitle: pageData.hero_subtitle,
      description: pageData.description,
      heroImage: pageData.hero_background_image,
      heroImageAlt: pageData.hero_background_image_alt,
      metaTitle: pageData.meta_title,
      metaDescription: pageData.meta_description,
      metaKeywords: pageData.meta_keywords,
      posts
    }
  } catch (error) {
    console.error('Error fetching blog data:', error)
    return null
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const postsData = await getAllActiveBlogPosts()
    if (!postsData) return []

    return postsData.map(post => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      content: post.content,
      publishedDate: post.published_date,
      featuredImage: post.featured_image,
      featuredImageAlt: post.featured_image_alt,
      metaTitle: post.meta_title,
      metaDescription: post.meta_description,
      metaKeywords: post.meta_keywords
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await getBlogPostBySlugFromDB(slug)
    if (!post) return null

    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      content: post.content,
      publishedDate: post.published_date,
      featuredImage: post.featured_image,
      featuredImageAlt: post.featured_image_alt,
      metaTitle: post.meta_title,
      metaDescription: post.meta_description,
      metaKeywords: post.meta_keywords
    }
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error)
    return null
  }
}

export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPost[]> {
  try {
    const postsData = await getRelatedBlogPostsFromDB(currentSlug, limit)
    if (!postsData) return []

    return postsData.map(post => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      content: post.content,
      publishedDate: post.published_date,
      featuredImage: post.featured_image,
      featuredImageAlt: post.featured_image_alt,
      metaTitle: post.meta_title,
      metaDescription: post.meta_description,
      metaKeywords: post.meta_keywords
    }))
  } catch (error) {
    console.error('Error fetching related blog posts:', error)
    return []
  }
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  try {
    const postsData = await getBlogPostsByCategoryFromDB(category)
    if (!postsData) return []

    return postsData.map(post => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      content: post.content,
      publishedDate: post.published_date,
      featuredImage: post.featured_image,
      featuredImageAlt: post.featured_image_alt,
      metaTitle: post.meta_title,
      metaDescription: post.meta_description,
      metaKeywords: post.meta_keywords
    }))
  } catch (error) {
    console.error(`Error fetching blog posts by category ${category}:`, error)
    return []
  }
}

// Add a new function to get paginated blog posts
export async function getPaginatedBlogPosts(page: number = 1, limit: number = 6): Promise<{ posts: BlogPost[]; total: number } | null> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    // Calculate offset
    const offset = (page - 1) * limit

    // Get total count and paginated posts in parallel for better performance
    const [countResult, postsResult] = await Promise.all([
      client
        .from('blog_posts')
        .select('*', { count: 'exact', head: true })
        .eq('is_active', true),
      client
        .from('blog_posts')
        .select('*')
        .eq('is_active', true)
        .order('sort_order')
        .range(offset, offset + limit - 1)
    ])

    const { count, error: countError } = countResult
    const { data, error } = postsResult

    if (countError) {
      console.error('Error fetching blog posts count:', countError)
      return null
    }

    if (error) {
      console.error('Error fetching paginated blog posts:', error)
      return null
    }

    // Transform database data to match the interface
    const posts: BlogPost[] = data.map(post => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      content: post.content,
      publishedDate: post.published_date,
      featuredImage: post.featured_image,
      featuredImageAlt: post.featured_image_alt,
      metaTitle: post.meta_title,
      metaDescription: post.meta_description,
      metaKeywords: post.meta_keywords
    }))

    return {
      posts,
      total: count || 0
    }
  } catch (error) {
    console.error('Unexpected error fetching paginated blog posts:', error)
    return null
  }
}

// Export the hero image from the database
export async function getBlogHeroImage(): Promise<{ url: string; alt: string } | null> {
  try {
    const pageData = await getBlogPageData()
    if (!pageData) return null

    return {
      url: pageData.hero_background_image,
      alt: pageData.hero_background_image_alt
    }
  } catch (error) {
    console.error('Error fetching blog hero image:', error)
    return null
  }
}