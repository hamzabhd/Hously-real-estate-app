import './globals.css'
import type { Metadata } from 'next'
import AuthProvider from 'context/AuthProvider'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Hously-Project',
  description: 'Hously | Everyone deserves a nicer house',
}

export const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative box-border`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
