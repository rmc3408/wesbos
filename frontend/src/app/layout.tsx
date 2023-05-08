import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

// Importing external fonts
const inter = Inter({ subsets: ['latin'] })

// Static metadata
export const metadata: Metadata = {
  title: 'Sick-fits Raphael Molinaro',
  description: 'Next.js from wesBos course',
}

type rootProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: rootProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
