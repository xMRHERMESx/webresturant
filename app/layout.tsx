import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lumiere — Pizza • Fire • Company',
  description: 'Extraordinary pizza. Meaningful moments. A brighter table awaits at Lumiere.',
  keywords: ['pizza', 'restaurant', 'Italian', 'Neapolitan', 'Warsaw', 'fine dining', 'wood-fired'],
  openGraph: {
    title: 'Lumiere — Pizza • Fire • Company',
    description: 'Extraordinary pizza. Meaningful moments. A brighter table awaits.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Lumiere',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Lumiere',
  servesCuisine: ['Pizza', 'Italian', 'Neapolitan'],
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Mokotowska 12',
    addressLocality: 'Warsaw',
    addressCountry: 'PL',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '12:00',
    closes: '23:00',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="bg-cream text-charcoal font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
