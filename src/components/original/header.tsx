import ThemeButton from '@/components/original/theme-button'
import { site } from 'data/data'
import Sidebar from '@/components/original/sidebar'
import type { work } from 'types/data'

type Props = {
  works: work[]
}

const Header = ({ works }: Props) => {
  return (
    <header className="mt-5 mb-4">
      <div className="container max-w-4xl flex justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <Sidebar works={works} />
          </div>
          <div className="flex-1">
            <div>
              <a href="/">{site.title}</a>
            </div>
          </div>
        </div>

        <ThemeButton />
      </div>
    </header>
  )
}

export default Header
