import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="home">
      <div className="content">
        <h1>Amha Mogus</h1>
        <h2>Product Design + Product Development + Innovation + AI</h2>
        <p>This site is being rebuild with a modern stack and AI.</p>
        <h4>#noMoreWordPress</h4>
      </div>
      <div className="footer">
        <p>© 2025 Amha Mogus</p>
        
      </div>
    </div>
  )
}
