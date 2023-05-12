import type { Metadata } from 'next'
import localFont from 'next/font/local'
import StyledComponentsRegistry from '@src/lib/register'
import Layout from '@components/layout'
import { ApolloWrapper } from '../apollo/apollo-wrapper'

// Static metadata
// export const metadata: Metadata = {
//   title: 'SickFits',
//   description: 'Next.js from WesBos Course and updated by Raphael Molinaro',
// }
// Dynamic metadata
function Head() {
  return (
    <>
      <title>SickFits</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Next.js from WesBos Course and updated by Raphael Molinaro" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
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
      <Head />
      <StyledComponentsRegistry>
        <ApolloWrapper>
          <Layout>{children}</Layout>
        </ApolloWrapper>
      </StyledComponentsRegistry>
    </html>
  )
}
