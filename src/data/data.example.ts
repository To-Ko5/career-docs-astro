import type { url_link } from '@/types/data'
import { Github, Link, BookText } from 'lucide-react'

export const site = {
  title: 'site description',
  description: 'site description'
}

export const date = {
  lastUpdatedAt: new Date()
}

export const urlLinks: url_link[] = [
  { icon: Github, href: 'http://localhost:3000/url', tooltip: 'Github' },
  { icon: Link, href: 'http://localhost:3000/url', tooltip: 'SNS' },
  { icon: BookText, href: 'http://localhost:3000/url', tooltip: 'Blog' }
]

export const photo = {
  profile_url: '/photo.jpg'
}

export const about = {
  name: 'Name',
  position: 'Engineer',
  content: 'lorem ipsum dolor sit amet consectetur adipisicing elitt totam'
}

export const works = [
  {
    case: 1,
    project: 'case1',
    date: {
      start: 2023,
      end: 2024
    },
    positions: ['Frontend'],
    skills: ['Next.js', 'MUI'],
    tools: ['GitHub', 'AWS'],
    description: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      list: ['List1', 'List2', 'List3']
    }
  },
  {
    case: 2,
    project: 'case2',
    date: {
      start: 2023,
      end: 2024
    },
    positions: ['Frontend'],
    skills: ['Nuxt.js', 'Vuetify'],
    tools: ['Adobe', 'Azure DevOps'],
    description: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      list: null
    }
  },
  {
    case: 3,
    project: 'case3',
    date: {
      start: 2023,
      end: 2024
    },
    positions: ['Frontend'],
    skills: ['Next.js', 'Tailwind'],
    tools: ['Docker', 'Figma'],
    description: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      list: ['List1', 'List2']
    }
  }
]
