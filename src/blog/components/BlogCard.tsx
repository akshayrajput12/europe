import Image from "next/image"
import Link from "next/link"
import { BlogPost } from "@/data/blog"

interface BlogCardProps {
  post: BlogPost
}

// Helper function to strip HTML and limit to 3 lines (approximately 150 characters)
function getPreviewText(htmlContent: string, maxLength: number = 150): string {
  // Remove HTML tags
  const text = htmlContent.replace(/<[^>]*>/g, '');
  // Trim and limit to maxLength
  let preview = text.trim();
  if (preview.length > maxLength) {
    preview = preview.substring(0, maxLength) + '...';
  }
  return preview;
}

export default function BlogCard({ post }: BlogCardProps) {
  const previewText = getPreviewText(post.content);

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
      <div className="p-6 text-center">
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:text-[#A5CD39] transition-colors duration-300">
            {post.title}
          </Link>
        </h3>

        {/* Content Preview - limited to 3 lines */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {previewText}
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