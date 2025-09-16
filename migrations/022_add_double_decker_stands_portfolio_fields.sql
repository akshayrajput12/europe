-- Add portfolio title, description, and CTA fields to double_decker_stands_page table
ALTER TABLE double_decker_stands_page 
ADD COLUMN portfolio_section_title TEXT,
ADD COLUMN portfolio_section_subtitle TEXT,
ADD COLUMN portfolio_section_cta_text TEXT,
ADD COLUMN portfolio_section_cta_link TEXT,
-- Add hero section button title field
ADD COLUMN hero_button_title TEXT;

-- Update existing double decker stands record with default portfolio section values
UPDATE double_decker_stands_page 
SET 
  portfolio_section_title = 'OUR PORTFOLIO',
  portfolio_section_subtitle = 'Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project.',
  portfolio_section_cta_text = 'View All Projects',
  portfolio_section_cta_link = '/portfolio',
  hero_button_title = 'REQUEST FOR QUOTATION'
WHERE portfolio_section_title IS NULL;

-- Create or replace function to get double decker stands page data in structured format (single row)
CREATE OR REPLACE FUNCTION get_double_decker_stands_page_data()
RETURNS JSON AS $$
DECLARE
    double_decker_stands_record RECORD;
    result JSON;
BEGIN
    -- Get the single active double decker stands page record
    SELECT * INTO double_decker_stands_record
    FROM double_decker_stands_page 
    WHERE is_active = true
    LIMIT 1;
    
    IF NOT FOUND THEN
        RETURN NULL;
    END IF;
    
    -- Structure the data according to TypeScript interfaces
    SELECT json_build_object(
        'meta', json_build_object(
            'title', double_decker_stands_record.meta_title,
            'description', double_decker_stands_record.meta_description
        ),
        'hero', json_build_object(
            'title', double_decker_stands_record.hero_title,
            'subtitle', double_decker_stands_record.hero_subtitle,
            'backgroundImage', double_decker_stands_record.hero_background_image,
            'buttonTitle', double_decker_stands_record.hero_button_title
        ),
        'benefits', json_build_object(
            'title', double_decker_stands_record.benefits_title,
            'image', double_decker_stands_record.benefits_image,
            'content', double_decker_stands_record.benefits_content
        ),
        'pointsTable', json_build_object(
            'title', double_decker_stands_record.points_table_title,
            'content', double_decker_stands_record.points_table_content
        ),
        'StandProjectText', json_build_object(
            'title', double_decker_stands_record.stand_project_title,
            'highlight', double_decker_stands_record.stand_project_highlight,
            'description', double_decker_stands_record.stand_project_description
        ),
        'exhibitionBenefits', json_build_object(
            'title', double_decker_stands_record.exhibition_benefits_title,
            'subtitle', double_decker_stands_record.exhibition_benefits_subtitle,
            'content', double_decker_stands_record.exhibition_benefits_content,
            'image', double_decker_stands_record.exhibition_benefits_image
        ),
        'boothPartner', json_build_object(
            'title', double_decker_stands_record.booth_partner_title,
            'subtitle', double_decker_stands_record.booth_partner_subtitle,
            'description', double_decker_stands_record.booth_partner_description
        ),
        'boldStatement', json_build_object(
            'title', double_decker_stands_record.bold_statement_title,
            'subtitle', double_decker_stands_record.bold_statement_subtitle,
            'description', double_decker_stands_record.bold_statement_description
        ),
        'portfolio', json_build_object(
            'title', double_decker_stands_record.portfolio_section_title,
            'subtitle', double_decker_stands_record.portfolio_section_subtitle,
            'ctaText', double_decker_stands_record.portfolio_section_cta_text,
            'ctaLink', double_decker_stands_record.portfolio_section_cta_link
        )
    ) INTO result;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Example of how to update the double decker stands record with custom portfolio section data
/*
UPDATE double_decker_stands_page 
SET 
  portfolio_section_title = 'OUR DOUBLE DECKER STAND PORTFOLIO',
  portfolio_section_subtitle = 'Explore our extensive portfolio of double decker exhibition stands and discover the quality and creativity we bring to every project.',
  portfolio_section_cta_text = 'View All Double Decker Stand Projects',
  portfolio_section_cta_link = '/portfolio/double-decker-exhibition-stands',
  hero_button_title = 'GET DOUBLE DECKER QUOTE'
WHERE slug = 'double-decker-stands';
*/