import { date } from 'data/site_data'
import { format } from 'date-fns'
const Date = () => {
  return (
    <p className="text-right text-sm text-muted-foreground mb-4">
      <time>{format(date.lastUpdatedAt, 'yyyy/MM/dd')}</time>
    </p>
  )
}

export default Date
