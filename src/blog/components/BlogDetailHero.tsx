import { BlogPost, BlogData } from "@/data/blog"

interface BlogDetailHeroProps {
  post: BlogPost
  blogData?: BlogData
}

export default function BlogDetailHero({ post, blogData }: BlogDetailHeroProps) {
  // Use the blog page hero image if available, otherwise fallback to post featured image
  const heroImage = blogData?.heroImage 
  // const heroImageAlt = blogData?.heroImageAlt || post.featuredImageAlt || post.title

  return (
    <section className="relative  h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
          {post.title}
        </h1>
      </div>
    </section>
  )
}