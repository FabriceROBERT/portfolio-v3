import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from '../../sanity/schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'brown-fly',

  projectId: 'cp02ul2x',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
