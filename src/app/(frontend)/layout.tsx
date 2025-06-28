import React from 'react'
import './styles.css'

export const metadata = {
  description: 'A next Next.js app for Amha Mogus\' personal website.',
  title: 'Amha Mogus is a Product Design Leader in the payments industry',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
