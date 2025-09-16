-- Add portfolio title, description, and CTA fields to cities table
ALTER TABLE cities 
ADD COLUMN portfolio_section_title TEXT,
ADD COLUMN portfolio_section_subtitle TEXT,
ADD COLUMN portfolio_section_cta_text TEXT,
ADD COLUMN portfolio_section_cta_link TEXT;

-- Update existing city records with default portfolio section values
UPDATE cities 
SET 
  portfolio_section_title = 'OUR PORTFOLIO',
  portfolio_section_subtitle = 'Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project.',
  portfolio_section_cta_text = 'View All Projects',
  portfolio_section_cta_link = '/portfolio'
WHERE portfolio_section_title IS NULL;

-- Update the get_city_by_country_and_slug function to include the new portfolio fields
CREATE OR REPLACE FUNCTION get_city_by_country_and_slug(
    country_slug_param TEXT,
    city_slug_param TEXT
)
RETURNS SETOF cities
LANGUAGE sql
STABLE
AS $$
    SELECT * FROM cities
    WHERE country_slug = country_slug_param
    AND city_slug = city_slug_param
    LIMIT 1;
$$;

-- Update the get_available_cities function to maintain consistency
CREATE OR REPLACE FUNCTION get_available_cities()
RETURNS TABLE(country_slug TEXT, city_slug TEXT)
LANGUAGE sql
STABLE
AS $$
    SELECT country_slug, city_slug FROM cities;
$$;

-- Example of how to update an existing city with custom portfolio section data
/*
UPDATE cities 
SET 
  portfolio_section_title = 'OUR PORTFOLIO IN PARIS',
  portfolio_section_subtitle = 'Explore our extensive portfolio of exhibition stands in Paris and discover the quality and creativity we bring to every project.',
  portfolio_section_cta_text = 'View All Paris Projects',
  portfolio_section_cta_link = '/portfolio/paris'
WHERE city_slug = 'paris';
*/

-- Example of how to update another city with custom portfolio section data
/*
UPDATE cities 
SET 
  portfolio_section_title = 'OUR PORTFOLIO IN REIMS',
  portfolio_section_subtitle = 'Explore our extensive portfolio of exhibition stands in Reims and discover the quality and creativity we bring to every project.',
  portfolio_section_cta_text = 'View All Reims Projects',
  portfolio_section_cta_link = '/portfolio/reims'
WHERE city_slug = 'reims';
*/