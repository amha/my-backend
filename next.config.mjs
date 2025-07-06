import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
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
    NEXT_PUBLIC_PAYLOAD_API_URL: process.env.RAILWAY_PUBLIC_DOMAIN || 'http://localhost:3000',
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })