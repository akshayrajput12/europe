import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { getAvailableCountriesFromDB } from '@/data/countries'
import { getAvailableCitiesFromDB } from '@/data/cities'

/**
 * Simplified API endpoint for revalidating Next.js ISR pages
 * Called by external systems when content is updated
 * No authentication required for easier implementation
 */
export async function POST(request: NextRequest) {
  try {
    // Log the incoming request
    console.log('Revalidation request received')
    
    // Parse the request body
    let body
    try {
      body = await request.json()
      console.log('Request body:', body)
    } catch (parseErr) {
      console.error('Error parsing request body:', parseErr)
      return NextResponse.json(
        { 
          message: 'Error parsing request body',
          error: parseErr instanceof Error ? parseErr.message : 'Unknown error'
        },
        { 
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        }
      )
    }
    
    const { path, paths, revalidateAllLocations, revalidateType, countrySlug } = body

    // Handle revalidation of all location pages (countries and cities)
    if (revalidateAllLocations) {
      try {
        console.log('Revalidating all location pages')
        const revalidatedPaths: string[] = [];
        
        // Revalidate the main countries page
        revalidatePath('/major-exhibiting-country')
        revalidatedPaths.push('/major-exhibiting-country')
        console.log('Revalidated: /major-exhibiting-country')
        
        // Get all available countries and revalidate their pages
        const availableCountries = await getAvailableCountriesFromDB()
        for (const countrySlug of availableCountries) {
          revalidatePath(`/${countrySlug}`)
          revalidatedPaths.push(`/${countrySlug}`)
          console.log(`Revalidated: /${countrySlug}`)
        }
        
        // Get all available cities and revalidate their pages
        const availableCities = await getAvailableCitiesFromDB()
        for (const city of availableCities) {
          revalidatePath(`/${city.citySlug}`)
          revalidatedPaths.push(`/${city.citySlug}`)
          console.log(`Revalidated: /${city.citySlug}`)
        }
        
        // Also revalidate the home page since it shows featured countries
        revalidatePath('/')
        revalidatedPaths.push('/')
        console.log('Revalidated: /')
        
        // Revalidate the footer by revalidating the main layout
        revalidatePath('/layout')
        revalidatedPaths.push('/layout')
        console.log('Revalidated: /layout')
        
        // Revalidate trade shows page
        revalidatePath('/top-trade-shows-in-europe')
        revalidatedPaths.push('/top-trade-shows-in-europe')
        console.log('Revalidated: /top-trade-shows-in-europe')
        
        return NextResponse.json(
          { 
            revalidated: true, 
            message: 'All location pages revalidated successfully',
            revalidatedPaths
          },
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type',
            }
          }
        )
      } catch (err) {
        console.error('Error revalidating all location pages:', err)
        return NextResponse.json(
          { 
            message: 'Error revalidating all location pages',
            error: err instanceof Error ? err.message : 'Unknown error'
          },
          { 
            status: 500,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type',
            }
          }
        )
      }
    }

    // Handle specific type revalidation
    if (revalidateType) {
      try {
        console.log(`Revalidating by type: ${revalidateType}`)
        const revalidatedPaths: string[] = [];
        
        switch (revalidateType) {
          case 'countries':
            // Revalidate the main countries page
            revalidatePath('/major-exhibiting-country')
            revalidatedPaths.push('/major-exhibiting-country')
            console.log('Revalidated: /major-exhibiting-country')
            
            // Get all available countries and revalidate their pages
            const availableCountries = await getAvailableCountriesFromDB()
            for (const countrySlug of availableCountries) {
              revalidatePath(`/${countrySlug}`)
              revalidatedPaths.push(`/${countrySlug}`)
              console.log(`Revalidated: /${countrySlug}`)
            }
            
            // Also revalidate components that display country data:
            // 1. Home page (shows featured countries)
            revalidatePath('/')
            revalidatedPaths.push('/')
            console.log('Revalidated: /')
            
            // 2. Layout (contains footer and header that show country data)
            revalidatePath('/layout')
            revalidatedPaths.push('/layout')
            console.log('Revalidated: /layout')
            break;
            
          case 'country':
            // Handle specific country update
            if (countrySlug) {
              // Revalidate the specific country page
              revalidatePath(`/${countrySlug}`)
              revalidatedPaths.push(`/${countrySlug}`)
              console.log(`Revalidated: /${countrySlug}`)
              
              // Also revalidate components that display country data:
              // 1. Home page (shows featured countries)
              revalidatePath('/')
              revalidatedPaths.push('/')
              console.log('Revalidated: /')
              
              // 2. Layout (contains footer and header that show country data)
              revalidatePath('/layout')
              revalidatedPaths.push('/layout')
              console.log('Revalidated: /layout')
              
              // 3. Main countries page
              revalidatePath('/major-exhibiting-country')
              revalidatedPaths.push('/major-exhibiting-country')
              console.log('Revalidated: /major-exhibiting-country')
            }
            break;
            
          case 'cities':
            // Get all available cities and revalidate their pages
            const availableCities = await getAvailableCitiesFromDB()
            for (const city of availableCities) {
              revalidatePath(`/${city.citySlug}`)
              revalidatedPaths.push(`/${city.citySlug}`)
              console.log(`Revalidated: /${city.citySlug}`)
            }
            break;
            
          case 'trade-shows':
            // Revalidate trade shows page
            revalidatePath('/top-trade-shows-in-europe')
            revalidatedPaths.push('/top-trade-shows-in-europe')
            console.log('Revalidated: /top-trade-shows-in-europe')
            break;
            
          case 'stand-pages':
            // Revalidate all stand pages
            const standPages = [
              '/custom-booth-design-and-build',
              '/modular-booth-design-and-build',
              '/pavilion-design-build',
              '/double-decker-exhibition-stands'
            ];
            
            for (const page of standPages) {
              revalidatePath(page)
              revalidatedPaths.push(page)
              console.log(`Revalidated: ${page}`)
            }
            break;
            
          case 'home':
            // Revalidate home page and related sections
            revalidatePath('/')
            revalidatedPaths.push('/')
            console.log('Revalidated: /')
            
            // Revalidate the footer by revalidating the main layout
            revalidatePath('/layout')
            revalidatedPaths.push('/layout')
            console.log('Revalidated: /layout')
            break;
            
          default:
            return NextResponse.json(
              { message: `Invalid revalidateType: ${revalidateType}. Valid types are: countries, country, cities, trade-shows, home, stand-pages` },
              { 
                status: 400,
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'POST',
                  'Access-Control-Allow-Headers': 'Content-Type',
                }
              }
            )
        }
        
        return NextResponse.json(
          { 
            revalidated: true, 
            message: `${revalidateType} pages revalidated successfully`,
            revalidatedPaths
          },
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type',
            }
          }
        )
      } catch (err) {
        console.error(`Error revalidating ${revalidateType} pages:`, err)
        return NextResponse.json(
          { 
            message: `Error revalidating ${revalidateType} pages`,
            error: err instanceof Error ? err.message : 'Unknown error'
          },
          { 
            status: 500,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type',
            }
          }
        )
      }
    }

    // Handle single path revalidation
    if (path) {
      // Validate the path parameter
      if (typeof path !== 'string') {
        return NextResponse.json(
          { message: 'Path must be a string' },
          { 
            status: 400,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type',
            }
          }
        )
      }

      // Validate that path starts with a slash
      if (!path.startsWith('/')) {
        return NextResponse.json(
          { message: 'Path must start with a forward slash' },
          { 
            status: 400,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type',
            }
          }
        )
      }

      // Revalidate the specified path
      console.log(`Revalidating path: ${path}`)
      try {
        revalidatePath(path)
      } catch (revalidateErr) {
        console.error(`Error revalidating path ${path}:`, revalidateErr)
        return NextResponse.json(
          { 
            message: 'Error revalidating path',
            error: revalidateErr instanceof Error ? revalidateErr.message : 'Unknown error',
            path
          },
          { 
            status: 500,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type',
            }
          }
        )
      }
      
      return NextResponse.json(
        { revalidated: true, path },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        }
      )
    }

    // Handle multiple paths revalidation
    if (paths && Array.isArray(paths)) {
      // Validate all paths
      for (const p of paths) {
        if (typeof p !== 'string') {
          return NextResponse.json(
            { message: 'All paths must be strings' },
            { 
              status: 400,
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type',
              }
            }
          )
        }
        
        // Validate that each path starts with a slash
        if (!p.startsWith('/')) {
          return NextResponse.json(
            { message: `Path "${p}" must start with a forward slash` },
            { 
              status: 400,
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type',
              }
            }
          )
        }
      }

      // Revalidate all specified paths
      const results = []
      for (const p of paths) {
        try {
          console.log(`Revalidating path: ${p}`)
          revalidatePath(p)
          results.push({ path: p, success: true })
        } catch (err) {
          console.error(`Error revalidating path ${p}:`, err)
          results.push({ 
            path: p, 
            success: false, 
            error: err instanceof Error ? err.message : 'Unknown error' 
          })
        }
      }
      
      return NextResponse.json(
        { revalidated: true, results },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        }
      )
    }

    // If neither path nor paths provided
    return NextResponse.json(
      { message: 'Either path (string), paths (array), revalidateAllLocations (boolean), or revalidateType (string) is required' },
      { 
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    )
  } catch (err) {
    // If there was an error parsing the request, return a 500 status
    console.error('Unexpected error in revalidation API:', err)
    return NextResponse.json(
      { 
        message: 'Unexpected error processing revalidation request',
        error: err instanceof Error ? err.message : 'Unknown error'
      },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    )
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  })
}

// Only allow POST requests
export async function GET() {
  return NextResponse.json(
    { message: 'Method Not Allowed' },
    { 
      status: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    }
  )
}