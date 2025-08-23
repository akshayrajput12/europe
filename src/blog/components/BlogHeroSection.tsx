import { blogData } from "@/data/blog"

export default function BlogHeroSection() {
  return (
    <section className="relative h-[400px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=800&fit=crop&crop=center')`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[0.2em] mb-4">
          {blogData.title}
        </h1>
        <p className="text-white/90 max-w-3xl mx-auto px-4 text-sm md:text-base">
          {blogData.subtitle}
        </p>
      </div>
    </section>
  )
}