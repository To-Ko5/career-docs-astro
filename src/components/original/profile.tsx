import ExternalLinkArea from '@/components/original/external-link-area'
import { urlLinks } from '@/data/data'

type Props = {
  name: string
  position: string
}

const Profile = ({ name, position }: Props) => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="max-w-[100px]">
          <picture>
            <source srcSet="https://placehold.jp/500x500.png" />
            <img src="https://placehold.jp/500x500.png" alt="profile" />
          </picture>
        </div>
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
