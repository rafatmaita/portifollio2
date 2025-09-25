import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    const imagePath = path.join(process.cwd(), 'public', 'images', 'rafat.jpg')
    console.log('Looking for image at:', imagePath)
    console.log('Current working directory:', process.cwd())
    
    if (!fs.existsSync(imagePath)) {
      console.log('Image file does not exist at:', imagePath)
      return new NextResponse('Image not found', { status: 404 })
    }
    
    console.log('Image file found, reading...')
    const imageBuffer = fs.readFileSync(imagePath)
    console.log('Image buffer size:', imageBuffer.length)
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000',
      },
    })
  } catch (error) {
    console.error('Error serving image:', error)
    return new NextResponse('Error serving image', { status: 500 })
  }
}
