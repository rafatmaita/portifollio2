'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-in-down ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="text-2xl font-bold gradient-text text-shimmer animate-bounce-in"
          >
            Rafat Al-Maita
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-elastic hover-bounce font-medium animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/rafatmaita"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-elastic hover-bounce animate-bounce-in"
              style={{ animationDelay: '0.3s' }}
            >
              <Github className="w-5 h-5 text-slate-600 dark:text-slate-400 animate-heartbeat" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafat-maita/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-elastic hover-rotate animate-bounce-in"
              style={{ animationDelay: '0.4s' }}
            >
              <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400 animate-heartbeat" />
            </a>
            <a
              href="mailto:rafatmaita2030@gmail.com"
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-elastic hover-wiggle animate-bounce-in"
              style={{ animationDelay: '0.5s' }}
            >
              <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400 animate-heartbeat" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-elastic hover-bounce animate-bounce-in"
              style={{ animationDelay: '0.6s' }}
            >
              {isOpen ? <X className="w-6 h-6 animate-heartbeat" /> : <Menu className="w-6 h-6 animate-heartbeat" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden bg-white dark:bg-slate-900 rounded-lg shadow-lg mt-2 overflow-hidden animate-slide-in-down glass-effect"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-elastic hover-bounce animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <a
                  href="https://github.com/rafatmaita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-elastic hover-bounce animate-bounce-in"
                  style={{ animationDelay: '0.3s' }}
                >
                  <Github className="w-5 h-5 text-slate-600 dark:text-slate-400 animate-heartbeat" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rafat-maita/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-elastic hover-rotate animate-bounce-in"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400 animate-heartbeat" />
                </a>
                <a
                  href="mailto:rafatmaita2030@gmail.com"
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-elastic hover-wiggle animate-bounce-in"
                  style={{ animationDelay: '0.5s' }}
                >
                  <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400 animate-heartbeat" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

