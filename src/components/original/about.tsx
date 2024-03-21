type Props = {
  content: string
}

const About = ({ content }: Props) => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2">About</h2>
      <p className="whitespace-pre-line text-muted-foreground leading-[1.6rem] print:text-sm">
        {content}
      </p>
    </section>
  )
}

export default About
