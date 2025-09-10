import Image from "next/image"
import Link from "next/link"
import { BlogPost } from "@/data/blog"

interface RelatedPostsProps {
  posts: BlogPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-6">Related Blogs</h3>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              {/* Thumbnail */}
              <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div>
                {/* Title */}
                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-[#A5CD39] transition-colors duration-300 line-clamp-2 leading-tight mb-2">
                  {post.title}
                </h4>
                
                {/* Read More */}
                <div className="text-xs text-[#A5CD39] font-medium">
                  Read More
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}