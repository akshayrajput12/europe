import { mainCountriesData } from "@/data/maincountries";

export default function ExhibitionHeroSection() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${mainCountriesData.heroBackground}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-white">{mainCountriesData.title}</span>{" "}
          <span className="text-[#A5CD39]">{mainCountriesData.subtitle}</span>
        </h1>
        <p className="text-white/90 text-sm md:text-base leading-relaxed mt-4">
          {mainCountriesData.description}
        </p>
      </div>
    </section>
  );
}