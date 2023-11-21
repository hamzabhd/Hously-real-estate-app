import './globals.css'
import type { Metadata } from 'next'
import AuthProvider from 'context/AuthProvider'
import { Poppins } from 'next/font/google'
import NotificationContainer from '@/components/custom/NotificationContainer'

export const metadata: Metadata = {
  title: 'Hously-Project',
  description: 'Hously | Everyone deserves a nicer house',
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
      </body>
    </html>
  )
}
