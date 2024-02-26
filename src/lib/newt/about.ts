import { newtClient } from '@/lib/newt-client'
import type { about as about_type } from 'types/data'

export const getAbout = async () => {
  const { items: about } = await newtClient.getContents<about_type>({
    appUid: 'document-site',
    modelUid: 'about',
    query: {
      select: ['name', 'position', 'content']
    }
  })
  return about
}
