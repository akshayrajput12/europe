-- Add portfolio title, description, and CTA fields to countries table
ALTER TABLE countries 
ADD COLUMN portfolio_section_title TEXT,
ADD COLUMN portfolio_section_subtitle TEXT,
ADD COLUMN portfolio_section_cta_text TEXT,
ADD COLUMN portfolio_section_cta_link TEXT;

-- Update existing country records with default portfolio section values
UPDATE countries 
SET 
  portfolio_section_title = 'OUR PORTFOLIO',
  portfolio_section_subtitle = 'Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project.',
  portfolio_section_cta_text = 'View All Projects',
  portfolio_section_cta_link = '/portfolio'
WHERE portfolio_section_title IS NULL;

-- Update the get_country_by_slug function to include the new portfolio fields
CREATE OR REPLACE FUNCTION get_country_by_slug(
    slug_param TEXT
)
RETURNS SETOF countries
LANGUAGE sql
STABLE
AS $$
    SELECT * FROM countries
    WHERE slug = slug_param
    AND is_active = true
    LIMIT 1;
$$;

-- Update the get_available_countries function to maintain consistency
CREATE OR REPLACE FUNCTION get_available_countries()
RETURNS TABLE(slug TEXT)
LANGUAGE sql
STABLE
AS $$
    SELECT slug FROM countries WHERE is_active = true;
$$;

-- Example of how to update an existing country with custom portfolio section data
/*
UPDATE countries 
SET 
  portfolio_section_title = 'OUR PORTFOLIO IN FRANCE',
  portfolio_section_subtitle = 'Explore our extensive portfolio of exhibition stands in France and discover the quality and creativity we bring to every project.',
  portfolio_section_cta_text = 'View All French Projects',
  portfolio_section_cta_link = '/portfolio/france'
WHERE slug = 'france';
*/

-- Example of how to update another country with custom portfolio section data
/*
UPDATE countries 
SET 
  portfolio_section_title = 'OUR PORTFOLIO IN GERMANY',
  portfolio_section_subtitle = 'Explore our extensive portfolio of exhibition stands in Germany and discover the quality and creativity we bring to every project.',
  portfolio_section_cta_text = 'View All German Projects',
  portfolio_section_cta_link = '/portfolio/germany'
WHERE slug = 'germany';
*/