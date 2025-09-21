import { getAllSitemapEntries } from '@/lib/database';

export async function GET() {
  try {
    // Fetch all active sitemap entries from the database
    const sitemapEntries = await getAllSitemapEntries();
    
    if (!sitemapEntries) {
      return new Response('Error fetching sitemap data', { status: 500 });
    }

    // Get the base URL from environment variables or default to the current domain
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chronicleexhibits.com';
    
    // Generate the XML content
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `  <url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${new Date(entry.lastmod).toISOString()}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}