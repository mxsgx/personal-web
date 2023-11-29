import type { Metadata } from 'next'
import { Montserrat, Shizuru } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Masga',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={[montserrat.className, 'bg-[#fefff3]'].join(' ')}>{children}</body>
    </html>
  )
}
