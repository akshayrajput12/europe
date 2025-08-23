import Image from "next/image"
import { BlogPost } from "@/data/blog"

interface BlogDetailHeroProps {
  post: BlogPost
}

export default function BlogDetailHero({ post }: BlogDetailHeroProps) {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Title */}
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex items-center gap-6 text-white/90">
              <span>{new Date(post.publishedDate).toLocaleDateString("en-US", { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}