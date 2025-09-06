import type { FreshDesignSection } from "@/data/custom-stands"

interface FreshDesignSectionProps {
  freshDesignData: FreshDesignSection
}

export default function FreshDesignSection({ freshDesignData }: FreshDesignSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">{freshDesignData.title}</h2>
        <h3 className="text-xl md:text-3xl font-bold mb-6 text-[#A5CD39]">{freshDesignData.subtitle}</h3>
        <div 
          className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: freshDesignData.description }}
        />
      </div>
    </section>
  )
}