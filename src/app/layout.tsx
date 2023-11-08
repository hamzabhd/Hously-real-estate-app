import './globals.css'
import type { Metadata } from 'next'
import AuthProvider from 'context/AuthProvider'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Hously-Project',
  description: 'Hously | Everyone deserves a nicer house',
}

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['devanagari'],
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
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
