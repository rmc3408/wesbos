import type { Metadata } from 'next'
import localFont from 'next/font/local'
import StyledComponentsRegistry from '@src/lib/register'
import Layout from '@components/layout'

// Static metadata
export const metadata: Metadata = {
  title: 'SickFits',
  description: 'Next.js from WesBos Course and updated by Raphael Molinaro',
}

const myFont = localFont({
  src: '../../public/radnikanext-medium-webfont.woff2',
  display: 'fallback',
})

type rootProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: rootProps) {
  return (
    <html lang="en" className={myFont.className}>
      <StyledComponentsRegistry>
        <Layout>{children}</Layout>
      </StyledComponentsRegistry>
    </html>
  )
}
