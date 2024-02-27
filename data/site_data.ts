import { Github, Link } from 'lucide-react'
import type { url_link } from 'types/data'

export const site = {
  title: 'Skill Sheet',
  description: 'Engineer Skill Sheet'
}

export const date = {
  lastUpdatedAt: new Date()
}

export const urlLinks: url_link[] = [
  { icon: Github, href: import.meta.env.LINK_URL_1 || '#', tooltip: 'Github' },
  { icon: Link, href: import.meta.env.LINK_URL_2 || '#', tooltip: 'SNS' }
]
