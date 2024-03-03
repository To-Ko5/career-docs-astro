import WorkDescription from '@/components/original/work-description'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { MenuIcon, MoreHorizontalIcon } from 'lucide-react'
import type { work } from 'types/data'

type Props = {
  works: work[]
}

const Sidebar = ({ works }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        {works.map((work: any) => {
          return (
            <SheetHeader className="mb-4" key={work.case}>
              <SheetTitle className="text-md">
                <a className="hover:underline" href={`/case/${work.case}`}>
                  {work.title}
                </a>
              </SheetTitle>
              <div className="flex gap-x-2">
                <SheetDescription className="line-clamp-2 mb-2">
                  <WorkDescription content={work.description || ''} />
                </SheetDescription>
                <div className="text-right">
                  <Button variant="outline" size="icon" asChild>
                    <a href={`/case/${work.case}`}>
                      <MoreHorizontalIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    </a>
                  </Button>
                </div>
              </div>
            </SheetHeader>
          )
        })}
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
