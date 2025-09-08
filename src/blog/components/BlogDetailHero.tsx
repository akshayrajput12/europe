import { BlogPost } from "@/data/blog"

interface BlogDetailHeroProps {
  post: BlogPost
}

export default function BlogDetailHero({ post }: BlogDetailHeroProps) {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Category and Date */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              {post.author && (
                <span className="text-gray-300 font-medium">By {post.author}</span>
              )}
              <span className="text-gray-400">•</span>
              <time dateTime={post.publishedDate} className="text-gray-400">
                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {post.readTime && (
                <>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{post.readTime}</span>
                </>
              )}
            </div>
            
            {post.category && (
              <span className="inline-block px-3 py-1 bg-[#A5CD39] text-gray-900 rounded-full text-sm font-medium">
                {post.category}
              </span>
            )}
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="inline-block px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}