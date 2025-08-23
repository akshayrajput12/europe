import { getBlogPosts } from "@/data/blog"
import BlogCard from "./BlogCard"

export default function BlogGrid() {
  const posts = getBlogPosts()

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            FEATURED ARTICLES
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-sm md:text-base">
            Discover insights, trends, and expert advice from the world of exhibition design and trade show marketing.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}