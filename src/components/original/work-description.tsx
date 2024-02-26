type Props = {
  content: string
}
const WorkDescription = ({ content }: Props) => {
  return (
    <div
      className="[&_li]:list-disc [&_li]:ml-4 [&_li:not(:last-child)]:mb-1"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default WorkDescription
