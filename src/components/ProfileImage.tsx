'use client'

import { useState } from 'react'
import Image from 'next/image'

const ProfileImage = () => {
  const [imageError, setImageError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState('/images/profile.jpg')

  const handleImageError = () => {
    console.log('Image failed to load:', currentSrc)
    if (currentSrc === '/images/profile.jpg') {
      console.log('Trying SVG placeholder...')
      setCurrentSrc('/images/placeholder.svg')
    } else {
      console.log('All images failed, showing fallback UI')
      setImageError(true)
    }
  }

  if (imageError) {
    return (
      <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-4xl font-bold">RA</span>
          </div>
          <p className="text-lg font-semibold">Rafat Al-Maita</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
      <Image
        src={currentSrc}
        alt="Rafat Al-Maita"
        fill
        className="object-cover"
        onError={handleImageError}
        onLoad={() => {
          console.log('Image loaded successfully:', currentSrc)
        }}
        priority
        unoptimized={true}
      />
    </div>
  )
}

export default ProfileImage
