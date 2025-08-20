import Image from "next/image"

export default function PortfolioSection() {
  const portfolioImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  ]

  return (
    <section className="py-16 md:py-20">
      <div className="mb-12 text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          OUR <span className="text-[#A5CD39]">PORTFOLIO</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to
          every project.
        </p>
      </div>

      {/* Full-width gallery with small gaps */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-4">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden aspect-[4/3] relative "
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Exhibition stand portfolio ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
