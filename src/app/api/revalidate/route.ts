import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * API endpoint for revalidating Next.js ISR pages
 * Called by the admin panel when content is updated
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const { path, paths, token } = body

    // Determine if we're in production mode
    const isProduction = process.env.NODE_ENV === 'production'
    
    // Log for debugging
    console.log(`Revalidation request - Production mode: ${isProduction}`)
    console.log(`Token provided: ${token !== undefined}`)
    
    // Authentication logic
    if (isProduction) {
      // In production, a token is required
      if (token === undefined || token === null) {
        console.log('Token missing in production - returning 401')
        return NextResponse.json(
          { message: 'Token is required in production' },
          { status: 401 }
        )
      }
      
      // Token must match our secret
      if (token !== process.env.REVALIDATION_TOKEN) {
        console.log('Invalid token provided - returning 401')
        return NextResponse.json(
          { message: 'Unauthorized' },
          { status: 401 }
        )
      }
    } else {
      // In development, if a token is provided, validate it
      // But if no token is provided, allow the request (for easier testing)
      if (token !== undefined && token !== null) {
        if (token !== process.env.REVALIDATION_TOKEN) {
          console.log('Invalid token provided in development - returning 401')
          return NextResponse.json(
            { message: 'Unauthorized' },
            { status: 401 }
          )
        }
      }
      console.log('No token provided in development - allowing request')
    }

    // Handle single path revalidation
    if (path) {
      // Validate the path parameter
      if (typeof path !== 'string') {
        return NextResponse.json(
          { message: 'Path must be a string' },
          { status: 400 }
        )
      }

      // Revalidate the specified path
      console.log(`Revalidating path: ${path}`)
      revalidatePath(path)
      
      return NextResponse.json({ revalidated: true, path })
    }

    // Handle multiple paths revalidation
    if (paths && Array.isArray(paths)) {
      // Validate all paths
      for (const p of paths) {
        if (typeof p !== 'string') {
          return NextResponse.json(
            { message: 'All paths must be strings' },
            { status: 400 }
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
          results.push({ path: p, success: false, error: (err as Error).message })
        }
      }
      
      return NextResponse.json({ revalidated: true, results })
    }

    // If neither path nor paths provided
    return NextResponse.json(
      { message: 'Either path (string) or paths (array) is required' },
      { status: 400 }
    )
  } catch (err) {
    // If there was an error, return a 500 status
    console.error('Error revalidating:', err)
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    )
  }
}

// Only allow POST requests
export async function GET() {
  return NextResponse.json(
    { message: 'Method Not Allowed' },
    { status: 405 }
  )
}