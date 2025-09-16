import PortfolioSection from "@/components/PortfolioSection";
import { portfolioShowcase } from "@/data/maincountries";

interface PortfolioShowcaseSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function PortfolioShowcaseSection({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink 
}: PortfolioShowcaseSectionProps) {
  // Use provided props or fall back to default data
  const sectionTitle = title ?? portfolioShowcase.title;
  const sectionSubtitle = subtitle ?? portfolioShowcase.description;
  const sectionCtaText = ctaText ?? portfolioShowcase.ctaText;
  const sectionCtaLink = ctaLink ?? portfolioShowcase.ctaLink;

  return (
    <PortfolioSection
      title={sectionTitle}
      subtitle={sectionSubtitle}
      ctaText={sectionCtaText}
      ctaLink={sectionCtaLink}
    />
  );
}