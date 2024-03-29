import { site } from 'data/site_data'

const Footer = () => {
  return (
    <footer className="p-3 border-t print:hidden">
      <p className="text-center text-sm text-muted-foreground">
        <a href="/">{site.title}</a>
      </p>
    </footer>
  )
}

export default Footer
