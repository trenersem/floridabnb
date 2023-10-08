import Nav from '@/components/Nav';
import '@/styles/globals.css';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Xioa',
  description: 'PreDev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <div className='main'>
            <div className='gradient'/>
          </div>
          <main>
            <Nav/>
            <div className='app'>
                {children}
            </div>
          </main>
      </body>
    </html>
  )
}
