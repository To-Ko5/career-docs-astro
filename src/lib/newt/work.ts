import { newtClient } from '@/lib/newt-client'
import type { work } from 'types/data'

export const getWorks = async () => {
  const { items: works } = await newtClient.getContents<work>({
    appUid: 'document-site',
    modelUid: 'work',
    query: {
      order: ['case']
    }
  })
  return works
}
