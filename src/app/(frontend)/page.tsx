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
        {user && <h1>Amha Mogus</h1>}
        <h2>Product Design + Product Development + Innovation + AI</h2>
        <h3>Site coming soon...</h3>
      </div>
      <div className="footer">
        <p>Built with </p>
        <a className="codeLink" href={fileURL}>
          <code>NextJs</code> + <code>PayLoad</code> + <code>MongoDB</code>
        </a>
      </div>
    </div>
  )
}
