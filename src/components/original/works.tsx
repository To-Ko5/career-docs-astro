import Work from '@/components/original/work'
import type { work } from 'types/data'

type Props = {
  works: work[]
}

// style at printing
const printStyle = 'print:[&:nth-of-type(2)]:break-inside-avoid'

const Works = ({ works }: Props) => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Works</h2>

      <div className="space-y-8">
        {works.map((work) => {
          return (
            <div key={work.case} className={`${printStyle}`}>
              <Work work={work} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Works
