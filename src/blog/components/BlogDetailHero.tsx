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
          src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1920&h=800&fit=crop&crop=center"
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            

          </div>
        </div>
      </div>
    </section>
  )
}