import ExternalLinkArea from '@/components/original/external-link-area'
import { urlLinks } from 'data/data'
import type { ReactNode } from 'react'

type Props = {
  name: string
  position: string
  children?: ReactNode
}

const Profile = ({ name, position, children }: Props) => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="max-w-[100px]">{children}</div>
        <div>
          <div className="mb-2">
            <h1 className="text-2xl mb-2 font-bold">{name}</h1>
            <p className="text-muted-foreground">{position}</p>
          </div>
          {urlLinks.length > 0 && (
            <div className="print:hidden">
              <ExternalLinkArea urlLinks={urlLinks} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Profile
