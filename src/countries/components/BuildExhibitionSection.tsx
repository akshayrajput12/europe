import { buildSection } from "@/data/maincountries";

export default function BuildExhibitionSection() {
  return (
    <section className="py-8 mb-4">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          <span className="text-black">{buildSection.title} </span>
          <span className="text-[#A5CD39]">{buildSection.highlight}</span>
        </h2>
        
        <p className="text-gray-700 max-w-5xl mx-auto text-sm text-center">
          {buildSection.description}
        </p>
      </div>
    </section>
  );
}