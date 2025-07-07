import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */

const PAYLOAD_URL = process.env.RAILWAY_PUBLIC_DOMAIN || 'http://localhost:3000'
console.log(`[next.config.mjs] PAYLOAD_PUBLIC_URL: ${PAYLOAD_URL}`)

const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: [
    'mongoose',
    'mongodb',
    '@payloadcms/db-mongodb',   
    '@payloadcms/payload-cloud' 
  ],
  
  transpilePackages: [
    '@payloadcms/richtext-lexical', // This is mostly frontend/build-time related
    '@payloadcms/next',            // This is a core Next.js integration package
    '@payloadcms/ui',              // This contains UI components that need transpilation
    
  ],


  env: {
    NEXT_PUBLIC_PAYLOAD_API_URL: PAYLOAD_URL,
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })