'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Download, Sparkles, Zap } from 'lucide-react'
import ProfileImage from './ProfileImage'
import { cvData } from '@/data/cvData'

const Hero = () => {
  // Rotating text effect
  const titles = ['Full-Stack Web Developer', 'Software Engineer']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [titles.length])

  const scrollToNext = () => {
    const sections = ['#about', '#skills', '#education', '#experience', '#projects', '#contact']
    const currentScrollY = window.scrollY
    const windowHeight = window.innerHeight
    
    // Find the current section based on scroll position
    let currentSectionIndex = 0
    sections.forEach((sectionId, index) => {
      const element = document.querySelector(sectionId)
    if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= windowHeight / 2 && rect.bottom > windowHeight / 2) {
          currentSectionIndex = index
        }
      }
    })
    
    // Scroll to next section
    const nextSectionIndex = (currentSectionIndex + 1) % sections.length
    const nextElement = document.querySelector(sections[nextSectionIndex])
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800 mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Available for work</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in-up animate-delay-100">
              Hi, I&apos;m{' '}
              <span className="text-blue-600 dark:text-blue-400">{cvData.personalInfo.name}</span>
            </h1>
            
            <div className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 mb-8 flex items-center gap-2 animate-fade-in-up animate-delay-200 min-h-[2rem]">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span 
                key={currentIndex}
                className="text-blue-600 dark:text-blue-400 font-semibold animate-fade-in-up"
              >
                {titles[currentIndex]}
              </span>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl animate-fade-in-up animate-delay-300">
              {cvData.personalInfo.summary}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-400">
              <button
                type="button"
                onClick={scrollToNext}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-smooth hover-scale cursor-pointer"
              >
                Learn More About Me
              </button>
              
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-semibold transition-smooth hover-scale flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right animate-delay-200">
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl hover-scale transition-smooth">
              <ProfileImage />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up animate-delay-500">
        <button
          type="button"
          onClick={scrollToNext}
          className="p-4 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-smooth hover-scale cursor-pointer"
        >
          <ChevronDown className="w-6 h-6 text-slate-600 dark:text-slate-400" />
        </button>
      </div>
    </section>
  )
}

export default Hero

