import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: [
    'mongoose',
    'mongodb',
    '@payloadcms/db-mongodb',
    '@payloadcms/payload-cloud',
  ],
  transpilePackages: [
    '@payloadcms/richtext-lexical',
    '@payloadcms/next',
    '@payloadcms/ui',
  ],
  env: {
    NEXT_PUBLIC_PAYLOAD_API_URL:
      process.env.PAYLOAD_PUBLIC_URL || 'http://localhost:3000',
  },
}

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
})
