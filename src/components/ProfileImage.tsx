'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const ProfileImage = () => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
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
    <img
      src="/api/image"
      alt="Rafat Al-Maita"
      className="w-full h-full object-cover"
      onError={handleImageError}
      onLoad={() => console.log('Image loaded successfully!')}
    />
  )
}

export default ProfileImage
