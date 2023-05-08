import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import StyledComponentsRegistry from '@src/lib/register'
import './global.css'

// Importing external fonts
const inter = Inter({ subsets: ['latin'] })

// Static metadata
export const metadata: Metadata = {
  title: 'SickFits',
  description: 'Next.js from WesBos Course and updated by Raphael Molinaro',
}

type rootProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: rootProps) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
