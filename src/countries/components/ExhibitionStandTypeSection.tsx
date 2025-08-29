import Link from "next/link";
import Image from "next/image";
import { ExhibitionStandType } from "@/data/maincountries";

interface ExhibitionStandTypeSectionProps {
  data: ExhibitionStandType;
}

export default function ExhibitionStandTypeSection({ data }: ExhibitionStandTypeSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-[#A5CD39]">{data.title.split(" ")[0]}</span>
          <span className="text-slate-800"> {data.title.split(" ").slice(1).join(" ")}</span>
        </h2>
        
        <p className="text-slate-600 mb-10 max-w-4xl text-base md:text-lg leading-relaxed">
          {data.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          {/* Display first 3 images */}
          {data.images.slice(0, 3).map((image, index) => (
            <div key={index} className="group relative aspect-[4/3] bg-gray-100 overflow-hidden rounded-md shadow-md hover:shadow-xl transition-all duration-500">
              <Image
                src={image}
                alt={`${data.title} showcase ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
          
          {/* Enhanced CTA Card */}
          <Link
            href={data.ctaLink}
            className="group bg-gradient-to-br from-[#A5CD39] to-[#8fb32e] flex items-center justify-center p-6 text-center aspect-[4/3] rounded-md shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="text-white">
              <div className="font-bold text-lg mb-2 leading-tight">
                {data.ctaText}
              </div>
              <div className="w-8 h-0.5 bg-white/80 mx-auto group-hover:w-12 transition-all duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}