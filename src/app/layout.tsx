import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rafat Al-Maita - Full Stack Developer',
  description: 'Portfolio of Rafat Al-Maita, a passionate full stack developer specializing in modern web technologies.',
  keywords: ['portfolio', 'developer', 'full stack', 'web development', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Rafat Al-Maita' }],
  openGraph: {
    title: 'Rafat Al-Maita - Full Stack Developer',
    description: 'Portfolio of Rafat Al-Maita, a passionate full stack developer specializing in modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafat Al-Maita - Full Stack Developer',
    description: 'Portfolio of Rafat Al-Maita, a passionate full stack developer specializing in modern web technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

