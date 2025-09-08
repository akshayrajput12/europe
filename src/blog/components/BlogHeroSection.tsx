import { getBlogData } from "@/data/blog"

export default async function BlogHeroSection() {
  // Fetch blog data from the database
  const blogData = await getBlogData()
  
  // Use the hero image from blogData, with a fallback
  const heroImage = blogData?.heroImage || 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1920&h=800&fit=crop&crop=center'
  
  return (
    <section className="relative h-[400px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[0.2em] mb-4">
          {blogData?.title || "LATEST BLOGS"}
        </h1>
        <p className="text-white/90 max-w-3xl mx-auto px-4 text-sm md:text-base">
          {blogData?.subtitle || "Stay updated with the latest trends, insights, and innovations in exhibition stand design and construction across Europe."}
        </p>
      </div>
    </section>
  )
}