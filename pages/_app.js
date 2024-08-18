import '@/css/tailwind.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import { Analytics } from '@vercel/analytics/react'
// import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import StatzScript from '@/components/analytics/Statz'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
      <Analytics />
      <StatzScript />
    </ThemeProvider>
  )
}
