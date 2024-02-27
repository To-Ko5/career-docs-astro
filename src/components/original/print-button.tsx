import { Button } from '@/components/ui/button'
import { PrinterIcon } from 'lucide-react'

const PrintButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        window.print()
      }}
    >
      <PrinterIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      <span className="sr-only">Print</span>
    </Button>
  )
}

export default PrintButton
