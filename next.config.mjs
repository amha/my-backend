import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */

const PAYLOAD_URL = process.env.PAYLOAD_PUBLIC_URL || 'http://localhost:3000'
console.log(`[next.config.mjs] PAYLOAD_PUBLIC_URL: ${PAYLOAD_URL}`)

const nextConfig = {
  reactStrictMode: true,

  experimental: {
    serverComponentsExternalPackages: ['mongoose', 'mongodb'],
  },

  // Essential for Payload CMS packages to be correctly processed by Next.js
  transpilePackages: [
    '@payloadcms/richtext-lexical',
    '@payloadcms/db-mongodb',
    '@payloadcms/payload-cloud',
    '@payloadcms/next', 
    '@payloadcms/ui',  
  ],

  env: {
    NEXT_PUBLIC_PAYLOAD_API_URL: PAYLOAD_URL,
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })