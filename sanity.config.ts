/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\backend\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schemaTypes} from './sanity/schemas/schema'
import { documentInternationalization } from '@sanity/document-internationalization'

export default defineConfig({
  basePath: '/backend',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schemaTypes,
  plugins: [
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        {id: 'fr', title: 'Francais'},
      ],
      schemaTypes: ['lesson'],
    }),
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
