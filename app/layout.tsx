import './globals.css'
import Script from 'next/script'
import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Hon. Dr. Ghali Panda - Member, House of Representatives',
    template: '%s | Hon. Dr. Ghali Panda',
  },
  description: 'Official website of Hon. Dr. Ghali Panda, Member representing Gaya, Ajingi, and Albasu Federal Constituency in the House of Representatives under the All Progressives Congress (APC).',
  keywords: [
    'Hon. Dr. Ghali Mustapha Tijjani Panda',
    'Hon. Dr. Ghali Panda',
    'Gaya',
    'Ajingi',
    'Albasu',
    'Kano',
    'House of Representatives',
    'Nigeria Politics',
    'Community Development',
    'APC',
  ],
  authors: [{ name: 'Hon. Dr. Ghali Panda' }],
  creator: 'Hon. Dr. Ghali Panda Media Team',
  publisher: 'Hon. Dr. Ghali Panda Media',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://ghalipanda.com',
    siteName: 'Hon. Dr. Ghali Panda Official',
    title: 'Hon. Dr. Ghali Panda - Service to Humanity',
    description:
      'Celebrating the impactful service of Hon. Dr. Ghali Panda in Gaya, Ajingi, and Albasu Federal Constituency. Empowering communities through dedicated leadership.',
    images: [
      {
        url: '/ghaliphoto.jpg',
        width: 1200,
        height: 630,
        alt: 'Hon. Hassan Shehu Hussain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hon. Dr. Ghali Panda - Service to Humanity',
    description:
      'Championing development in Gaya, Ajingi, and Albasu Federal Constituency. Member, House of Representatives.',
    images: ['/ghaliphoto.jpg'],
    creator: '@HonHASH',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/assets/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/assets/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/assets/site.webmanifest', // Point to the manifest in assets
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#b91c1c', // Red-700
}

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})
const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
  // weight: ['500', '700', '800'],
})
const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

import { ThemeProvider } from '@/components/ThemeProvider'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <meta name="theme-color" content="#b91c1c" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PID}`}
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}
