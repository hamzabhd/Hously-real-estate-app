import './globals.css'
import type { Metadata } from 'next'
import AuthProvider from 'context/AuthProvider'
import { roboto } from './fonts'
import GlobalProvider from 'context/GlobalProvider'

export const metadata: Metadata = {
  title: 'Hously-Project',
  description: 'Hously | Everyone deserves a nicer house',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} relative box-border`}>
        <AuthProvider>
          <GlobalProvider>{children}</GlobalProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
