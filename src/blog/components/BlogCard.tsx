import Image from "next/image"
import Link from "next/link"
import { BlogPost } from "@/data/blog"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      {/* Featured Image */}
      <div className="relative h-[240px] overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-[#A5CD39] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:text-[#A5CD39] transition-colors duration-300">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {post.excerpt}
        </p>

        {/* Learn More Button */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block bg-[#A5CD39] hover:bg-[#94b832] text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}