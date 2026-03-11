import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  title: 'Advait Bhagwat | Developer Portfolio',
  description: 'Computer Science Student | Web & App Developer. Passionate about solving real-world problems through technology.',
  keywords: ['developer', 'portfolio', 'web development', 'react', 'next.js', 'python', 'machine learning'],
  authors: [{ name: 'Advait Bhagwat' }],
  openGraph: {
    title: 'Advait Bhagwat | Developer Portfolio',
    description: 'Computer Science Student | Web & App Developer',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
