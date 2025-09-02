import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    nodeEnv: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development'
  })
}