import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='es'>
      <body>
        <Header />
        <main className=''>{children}</main>{' '}
        {/* mt-16 para compensar el Header fijo */}
        <Footer />
      </body>
    </html>
  )
}
