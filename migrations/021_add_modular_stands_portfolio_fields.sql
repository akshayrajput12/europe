-- Add portfolio title, description, and CTA fields to modular_stands_page table
ALTER TABLE modular_stands_page 
ADD COLUMN portfolio_section_title TEXT,
ADD COLUMN portfolio_section_subtitle TEXT,
ADD COLUMN portfolio_section_cta_text TEXT,
ADD COLUMN portfolio_section_cta_link TEXT,
-- Add hero section button title field
ADD COLUMN hero_button_title TEXT;

-- Update existing modular stands record with default portfolio section values
UPDATE modular_stands_page 
SET 
  portfolio_section_title = 'OUR PORTFOLIO',
  portfolio_section_subtitle = 'Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project.',
  portfolio_section_cta_text = 'View All Projects',
  portfolio_section_cta_link = '/portfolio',
  hero_button_title = 'REQUEST FOR QUOTATION'
WHERE portfolio_section_title IS NULL;

-- Create or replace function to get modular stands page data in structured format (single row)
CREATE OR REPLACE FUNCTION get_modular_stands_page_data()
RETURNS JSON AS $$
DECLARE
    modular_stands_record RECORD;
    result JSON;
BEGIN
    -- Get the single active modular stands page record
    SELECT * INTO modular_stands_record
    FROM modular_stands_page 
    WHERE is_active = true
    LIMIT 1;
    
    IF NOT FOUND THEN
        RETURN NULL;
    END IF;
    
    -- Structure the data according to TypeScript interfaces
    SELECT json_build_object(
        'meta', json_build_object(
            'title', modular_stands_record.meta_title,
            'description', modular_stands_record.meta_description
        ),
        'hero', json_build_object(
            'title', modular_stands_record.hero_title,
            'subtitle', modular_stands_record.hero_subtitle,
            'backgroundImage', modular_stands_record.hero_background_image,
            'buttonTitle', modular_stands_record.hero_button_title
        ),
        'benefits', json_build_object(
            'title', modular_stands_record.benefits_title,
            'content', modular_stands_record.benefits_content,
            'image', modular_stands_record.benefits_image
        ),
        'pointsTable', json_build_object(
            'title', modular_stands_record.points_table_title,
            'content', modular_stands_record.points_table_content
        ),
        'StandProjectText', json_build_object(
            'title', modular_stands_record.stand_project_title,
            'highlight', modular_stands_record.stand_project_highlight,
            'description', modular_stands_record.stand_project_description
        ),
        'exhibitionBenefits', json_build_object(
            'title', modular_stands_record.exhibition_benefits_title,
            'subtitle', modular_stands_record.exhibition_benefits_subtitle,
            'content', modular_stands_record.exhibition_benefits_content,
            'image', modular_stands_record.exhibition_benefits_image
        ),
        'modularDiversity', json_build_object(
            'title', modular_stands_record.modular_diversity_title,
            'subtitle', modular_stands_record.modular_diversity_subtitle,
            'content', modular_stands_record.modular_diversity_content
        ),
        'fastestConstruction', json_build_object(
            'title', modular_stands_record.fastest_construction_title,
            'subtitle', modular_stands_record.fastest_construction_subtitle,
            'description', modular_stands_record.fastest_construction_description
        ),
        'experts', json_build_object(
            'title', modular_stands_record.experts_title,
            'subtitle', modular_stands_record.experts_subtitle,
            'description', modular_stands_record.experts_description
        ),
        'portfolio', json_build_object(
            'title', modular_stands_record.portfolio_section_title,
            'subtitle', modular_stands_record.portfolio_section_subtitle,
            'ctaText', modular_stands_record.portfolio_section_cta_text,
            'ctaLink', modular_stands_record.portfolio_section_cta_link
        )
    ) INTO result;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Example of how to update the modular stands record with custom portfolio section data
/*
UPDATE modular_stands_page 
SET 
  portfolio_section_title = 'OUR MODULAR STAND PORTFOLIO',
  portfolio_section_subtitle = 'Explore our extensive portfolio of modular exhibition stands and discover the quality and creativity we bring to every project.',
  portfolio_section_cta_text = 'View All Modular Stand Projects',
  portfolio_section_cta_link = '/portfolio/modular-booth-design-and-build',
  hero_button_title = 'GET MODULAR QUOTE'
WHERE slug = 'modular-stands';
*/