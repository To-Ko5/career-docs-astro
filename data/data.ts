import type { url_link } from 'types/data'
import { Github, Link, BookText } from 'lucide-react'

export const site = {
  title: 'Skill Sheet',
  description: 'portfolio'
}

export const date = {
  lastUpdatedAt: new Date()
}

export const urlLinks: url_link[] = [
  { icon: Github, href: import.meta.env.LINK_URL_1 || '#', tooltip: 'Github' },
  { icon: Link, href: import.meta.env.LINK_URL_2 || '#', tooltip: 'SNS' }
]

export const photo = {
  profile_url: '/photo.jpg'
}

export const about = {
  name: 'TK',
  position: 'Frontend Engineer',
  content:
    'フロントエンド・マークアップエンジニアとして3年間ほど勤務しております。主にNuxt.jsでの実装を担当していました。\n業務に付随する勉強はプライベートでも積極的に励むように心掛けています。\n業務で学んだ知見や個人で学習した内容についてはQiitaやZenn等に継続してアウトプットするように意識しています。\n継続して投稿していたので、1400Contributions以上を獲得することができました。'
}

export const works = [
  {
    case: 1,
    project: 'ECサイト開発',
    date: {
      start: '2023-04',
      end: '2024-02'
    },
    positions: ['業務委託', 'Frontend'],
    skills: ['Next.js', 'React', 'TypeScript', 'MUI', 'Supabase'],
    tools: ['Github', 'Docker', 'Figma'],
    description: {
      text: 'フロントエンドエンジニアとして、Next.jsでの実装を担当していました。\n主な業務は下記です。',
      list: [
        'Next.jsの実装',
        'デザイン・レイアウト考案',
        'Supabaseとの連携',
        'コードレビュー'
      ]
    }
  },
  {
    case: 2,
    project: '入退場管理システムのリプレイス',
    date: {
      start: '2023-01',
      end: '2023-12'
    },
    positions: ['業務委託', 'Frontend'],
    skills: ['Next.js', 'React.js', 'TypeScript', 'Vue.js', 'Laravel'],
    tools: ['Github', 'Docker', 'Figma'],
    description: {
      text: '業務内容： Vue2系×Laravelの構成をNext.js×Laravelにリプレイス。\nフロントエンドエンジニアとして、Next.jsでの実装を担当していました。\n主な業務は下記です。',
      list: [
        'Next.js上でのMaterialUIを用いたコーディング業務',
        'デザイン・レイアウト考案',
        'Laravelとの連携',
        'Docker環境化での開発',
        'コードレビュー'
      ]
    }
  },

  {
    case: 3,
    project: '動画配信アプリケーションの開発・保守',
    date: {
      start: '2020-04',
      end: '2022-08'
    },
    positions: ['正社員', 'Frontend', 'Markup'],
    skills: [
      'Nuxt.js(2.12.0)',
      'Vue.js(ver.2)',
      'TypeScript',
      'Laravel',
      'PHP',
      'Azure'
    ],
    tools: ['Azure DevOps', 'Docker', 'Adobe XD', 'Slack'],
    description: {
      text: 'フロントエンド・マークアップエンジニアとして、主にNuxt.jsでの実装を担当していました。',
      list: [
        'Nuxt.jsでのHTML・CSS(SCSS)のコーディング',
        'componentsの作成',
        'APIとの一部連携',
        'ExpressとLaravelの連携',
        'Laravel Echoを利用したWebsoketのクライ アント側の実装',
        'PWAの実装',
        'Docker環境化での開発経験',
        '動作テスト、総合テスト',
        'デザイン・レイアウト考案',
        'XD・Photoshopでモックやチャットで使うアイテムの作成'
      ]
    }
  },
  {
    case: 4,
    project: '企業のアンケートサイトの開発',
    date: {
      start: '2021-10',
      end: '2022-01'
    },
    positions: ['業務委託', 'Frontend', 'Markup'],
    skills: ['Next.js', 'TypeScript', 'MUI', 'Firebase'],
    tools: ['GitHub', 'Trello', 'Slack', 'Vercel', 'Mac'],
    description: {
      text: 'Next.js（React.js）でのフロントエンドを担当しました。\n主な業務は下記です',
      list: [
        'Next.js上でのMaterialUIを用いたコーディング業務',
        'componentsの設計',
        '一部HTML・CSS(SCSS)でのコーディング',
        'デザイン・レイアウト考案',
        'Firebaseとの連携'
      ]
    }
  }
]
