import Link from "next/link";
import Image from "next/image";
import { ExhibitionStandType } from "@/data/maincountries";

interface ExhibitionStandTypeSectionProps {
  data: ExhibitionStandType;
}

export default function ExhibitionStandTypeSection({ data }: ExhibitionStandTypeSectionProps) {
  return (
    <section className="py-8 mb-4">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="text-[#A5CD39]">{data.title.split(" ")[0]}</span>
          <span className="text-black"> {data.title.split(" ").slice(1).join(" ")}</span>
        </h2>
        
        <p className="text-gray-700 mb-8 max-w-4xl text-sm">
          {data.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Display first 3 images */}
          {data.images.slice(0, 3).map((image, index) => (
            <div key={index} className="relative aspect-[4/3] bg-gray-200 overflow-hidden rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
              <Image
                src={image}
                alt={`${data.title} image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
          
          {/* CTA Card */}
          <Link
            href={data.ctaLink}
            className="bg-[#A5CD39] flex items-center justify-center p-4 text-center aspect-[4/3] rounded-lg hover:bg-[#94b832] transition-all duration-300 hover:shadow-md"
          >
            <div className="text-white font-semibold">
              {data.ctaText}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}