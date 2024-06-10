'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/Studio.tsx` route
 */
import { assist } from '@sanity/assist'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { documentInternationalization } from '@sanity/document-internationalization'
import {
  apiVersion,
  dataset,
  projectId,
  studioUrl
} from '@/services/sanity/lib/api'
import * as resolve from '@/services/sanity/plugins/resolve'
import {
  pageStructure,
  singletonPlugin
} from '@/services/sanity/plugins/settings'
import page from '@/services/sanity/schemas/documents/page'
import project from '@/services/sanity/schemas/documents/project'
import post from '@/services/sanity/schemas/documents/post'
import duration from '@/services/sanity/schemas/objects/duration'
import milestone from '@/services/sanity/schemas/objects/milestone'
import content from '@/services/sanity/schemas/objects/content'
import author from '@/services/sanity/schemas/objects/author'
import category from '@/services/sanity/schemas/objects/category'
import home from '@/services/sanity/schemas/singletons/home'
import settings from '@/services/sanity/schemas/singletons/settings'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Bitlauncher Blog'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      // Documents
      page,
      project,
      post,
      // Objects
      author,
      category,
      duration,
      milestone,
      content
    ]
  },
  plugins: [
    structureTool({
      structure: pageStructure([home, settings])
    }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft'
        }
      }
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        { id: 'es', title: 'Spanish' },
        { id: 'en', title: 'English' },
        { id: 'pt', title: 'Portuguese' },
        { id: 'cn', title: 'Chinese' }
      ],
      schemaTypes: ['post']
    }),
    assist()
  ]
})
