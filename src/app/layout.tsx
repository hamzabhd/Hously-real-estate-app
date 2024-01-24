import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Poppins } from 'next/font/google'
import AuthProvider from 'context/AuthProvider'
import NotificationContainer from '@/components/shared/NotificationContainer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hously-Project',
  description: 'Hously | Everyone deserves a nicer house',
  icons: {
    icon: '/logo/hously-logo.png',
  },
}

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="relative box-border">
        <NotificationContainer />
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
