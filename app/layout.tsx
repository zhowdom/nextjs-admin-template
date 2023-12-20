import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './main.css'
import './icon.css'

const inter = Inter({ subsets: ['latin'] })

import Sidebar from '../components/Sidebar/index.tsx'
import Myheader from '../components/Myheader/index.tsx'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <div>
        <Sidebar />
        <Myheader />
      </div>
      </body>
    </html>
  )
}
