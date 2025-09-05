import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

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
    
    const { path, paths } = body

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
      { message: 'Either path (string) or paths (array) is required' },
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