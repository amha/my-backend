import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */

const INTERNAL_PAYLOAD_URL_FALLBACK = `http://localhost:${process.env.PORT || 3000}`;
const PAYLOAD_URL = process.env.PAYLOAD_PUBLIC_URL || INTERNAL_PAYLOAD_URL_FALLBACK;

//const PAYLOAD_URL = process.env.PAYLOAD_PUBLIC_URL || 'http://localhost:3000'
console.log(`[next.config.mjs] PAYLOAD_PUBLIC_URL: ${PAYLOAD_URL}`)
console.log(`[next.config.mjs] Final PAYLOAD_URL (resolved): ${PAYLOAD_URL}`);
console.log(`[next.config.mjs] process.env.PAYLOAD_PUBLIC_URL (from Railway env): ${process.env.PAYLOAD_PUBLIC_URL}`);
console.log(`[next.config.mjs] process.env.PORT (from Railway env): ${process.env.PORT}`);
console.log(`[next.config.mjs] process.env.RAILWAY_PUBLIC_DOMAIN (from Railway env): ${process.env.RAILWAY_PUBLIC_DOMAIN}`);


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