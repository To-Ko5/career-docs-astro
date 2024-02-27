import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

type Props = {
  total: number
  currentPage: number
  url: {
    current: string | undefined
    next: string | undefined
    prev: string | undefined
  }
}

const WorkPagination = ({ total, currentPage, url }: Props) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem hidden={!url.prev}>
          <PaginationPrevious href={url.prev} />
        </PaginationItem>
        <PaginationItem hidden={!url.prev}>
          <PaginationLink href={url.prev}>{currentPage - 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>{currentPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem hidden={!url.next}>
          <PaginationLink href={url.next}>{currentPage + 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem hidden={currentPage + 1 >= total}>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem hidden={!url.next}>
          <PaginationNext href={url.next} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default WorkPagination
