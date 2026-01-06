import {createClient} from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID|| 'xfygvjo6'
const dataset = import.meta.env.VITE_SANITY_DATASET|| 'production'
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01'
const useCdn = import.meta.env.VITE_SANITY_USE_CDN !== 'false'

if (!projectId || !dataset) {
  throw new Error('Missing Sanity project configuration. Set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET.')
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
})
