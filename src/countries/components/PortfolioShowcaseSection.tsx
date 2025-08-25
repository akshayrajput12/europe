import PortfolioSection from "@/components/PortfolioSection";
import { portfolioShowcase } from "@/data/maincountries";

export default function PortfolioShowcaseSection() {
  return (
    <PortfolioSection
      title={portfolioShowcase.title}
      subtitle={portfolioShowcase.description}
    />
  );
}