-- Add portfolio title, description, and CTA fields to custom_stands_page table
ALTER TABLE custom_stands_page 
ADD COLUMN portfolio_section_title TEXT,
ADD COLUMN portfolio_section_subtitle TEXT,
ADD COLUMN portfolio_section_cta_text TEXT,
ADD COLUMN portfolio_section_cta_link TEXT,
-- Add hero section button title field
ADD COLUMN hero_button_title TEXT;

-- Update existing custom stands record with default portfolio section values
UPDATE custom_stands_page 
SET 
  portfolio_section_title = 'OUR PORTFOLIO',
  portfolio_section_subtitle = 'Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project.',
  portfolio_section_cta_text = 'View All Projects',
  portfolio_section_cta_link = '/portfolio',
  hero_button_title = 'REQUEST FOR QUOTATION'
WHERE portfolio_section_title IS NULL;

-- Update the get_custom_stands_page_data function to include the new portfolio fields
CREATE OR REPLACE FUNCTION get_custom_stands_page_data()
RETURNS JSON AS $$
DECLARE
    custom_stands_record RECORD;
    result JSON;
BEGIN
    -- Get the single active custom stands page record
    SELECT * INTO custom_stands_record
    FROM custom_stands_page 
    WHERE is_active = true
    LIMIT 1;
    
    IF NOT FOUND THEN
        RETURN NULL;
    END IF;
    
    -- Structure the data according to TypeScript interfaces
    SELECT json_build_object(
        'meta', json_build_object(
            'title', custom_stands_record.meta_title,
            'description', custom_stands_record.meta_description
        ),
        'hero', json_build_object(
            'title', custom_stands_record.hero_title,
            'subtitle', custom_stands_record.hero_subtitle,
            'backgroundImage', custom_stands_record.hero_background_image,
            'buttonTitle', custom_stands_record.hero_button_title
        ),
        'benefits', json_build_object(
            'title', custom_stands_record.benefits_title,
            'image', custom_stands_record.benefits_image,
            'content', custom_stands_record.benefits_content
        ),
        'StandProjectText', json_build_object(
            'title', custom_stands_record.stand_project_title,
            'highlight', custom_stands_record.stand_project_highlight,
            'description', custom_stands_record.stand_project_description
        ),
        'exhibitionBenefits', json_build_object(
            'title', custom_stands_record.exhibition_benefits_title,
            'subtitle', custom_stands_record.exhibition_benefits_subtitle,
            'content', custom_stands_record.exhibition_benefits_content,
            'image', custom_stands_record.exhibition_benefits_image
        ),
        'bespoke', json_build_object(
            'title', custom_stands_record.bespoke_title,
            'subtitle', custom_stands_record.bespoke_subtitle,
            'description', custom_stands_record.bespoke_description
        ),
        'freshDesign', json_build_object(
            'title', custom_stands_record.fresh_design_title,
            'subtitle', custom_stands_record.fresh_design_subtitle,
            'description', custom_stands_record.fresh_design_description
        ),
        'costSection', json_build_object(
            'title', custom_stands_record.cost_section_title,
            'subtitle', custom_stands_record.cost_section_subtitle,
            'description', custom_stands_record.cost_section_description
        ),
        'pointsTable', json_build_object(
            'title', custom_stands_record.points_table_title,
            'content', custom_stands_record.points_table_content
        ),
        'portfolio', json_build_object(
            'title', custom_stands_record.portfolio_section_title,
            'subtitle', custom_stands_record.portfolio_section_subtitle,
            'ctaText', custom_stands_record.portfolio_section_cta_text,
            'ctaLink', custom_stands_record.portfolio_section_cta_link
        )
    ) INTO result;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Example of how to update the custom stands record with custom portfolio section data
/*
UPDATE custom_stands_page 
SET 
  portfolio_section_title = 'OUR CUSTOM STAND PORTFOLIO',
  portfolio_section_subtitle = 'Explore our extensive portfolio of custom exhibition stands and discover the quality and creativity we bring to every project.',
  portfolio_section_cta_text = 'View All Custom Stand Projects',
  portfolio_section_cta_link = '/portfolio/custom-booth-design-and-build',
  hero_button_title = 'GET CUSTOM QUOTE'
WHERE slug = 'custom-stands';
*/