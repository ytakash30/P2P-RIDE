import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: 'v1',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});
