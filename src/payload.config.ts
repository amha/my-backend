// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical' 
import path from 'path'
import { buildConfig } from 'payload' 
import type { GlobalConfig } from 'payload'; // This line is correct
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import HomePage from './globals/HomePage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    // importMap: {
    //   baseDir: path.resolve(dirname),
    // },
  },
  collections: [Users, Media, Projects],
  globals: [HomePage],
  editor: lexicalEditor(),
  // IMPORTANT: You'll also need the 'secret' property here for Payload 3.x
  // Make sure you have this line in your buildConfig:
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})