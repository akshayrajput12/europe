import React from 'react';
import { getAllSitemapEntries } from '@/lib/database';
import Link from 'next/link';
import { SitemapEntry } from '@/lib/database';

export const metadata = {
  title: 'Sitemap - Chronicle Exhibitions',
  description: 'Complete sitemap of all pages on Chronicle Exhibitions website',
};

// Helper function to format URL titles
const formatUrlTitle = (url: string): string => {
  if (url === '/') return 'Home';
  if (url === '/sitemap') return 'Sitemap';
  
  // Remove leading slash and format
  let title = url.replace(/^\//, '');
  
  // Replace hyphens with spaces and capitalize words
  title = title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Special cases
  if (title === 'Top Trade Shows In Europe') return 'Trade Shows';
  if (title === 'Major Exhibiting Country') return 'Countries';
  
  return title;
};

export default async function SitemapPage() {
  const sitemapEntries = await getAllSitemapEntries();
  
  // Group entries by category for better organization
  const groupedEntries: Record<string, SitemapEntry[]> = {
    'Main Pages': [],
    'Services': [],
    'Locations': [],
    'Resources': [],
    'Other': []
  };

  if (sitemapEntries && sitemapEntries.length > 0) {
    sitemapEntries.forEach(entry => {
      if (entry.url === '/' || entry.url === '/about' || entry.url === '/contact-us' || entry.url === '/portfolio') {
        groupedEntries['Main Pages'].push(entry);
      } else if (entry.url.includes('booth') || entry.url.includes('stand') || entry.url.includes('pavilion') || entry.url.includes('services')) {
        groupedEntries['Services'].push(entry);
      } else if (entry.url.includes('country') || entry.url.includes('city')) {
        groupedEntries['Locations'].push(entry);
      } else if (entry.url.includes('blog') || entry.url.includes('review') || entry.url.includes('trade-show')) {
        groupedEntries['Resources'].push(entry);
      } else if (entry.url.includes('policy') || entry.url.includes('terms') || entry.url.includes('sitemap')) {
        groupedEntries['Other'].push(entry);
      } else {
        groupedEntries['Other'].push(entry);
      }
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
            Sitemap
          </h1>
          
          <p className="text-lg text-center text-gray-600 mb-8 sm:mb-12">
            Complete list of all pages on our website
          </p>
          
          <div className="space-y-8 sm:space-y-10">
            {Object.entries(groupedEntries).map(([category, entries]) => (
              entries && entries.length > 0 && (
                <div key={category} className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">
                    {category}
                  </h2>
                  <ul className="space-y-2 sm:space-y-3">
                    {entries
                      .sort((a, b) => a.url.localeCompare(b.url))
                      .map((entry) => (
                        <li key={entry.id}>
                          <Link 
                            href={entry.url} 
                            className="text-blue-600 hover:text-blue-800 transition-colors text-base sm:text-lg hover:underline"
                          >
                            {formatUrlTitle(entry.url)}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}