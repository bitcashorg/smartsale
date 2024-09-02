interface TextSegment {
  text: string
  isBold?: boolean
}

interface Paragraph {
  segments: TextSegment[]
}

interface HeroContentProps {
  paragraphs: Paragraph[]
}

export function HeroContentInfoPages({ paragraphs }: HeroContentProps) {
  return (
    <section className="text-gray-500 dark:text-gray-400 font-['Futura PT'] text-md font-normal leading-[145%] space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {paragraph.segments.map((segment, segmentIndex) => (
            <span key={segmentIndex} className={segment.isBold ? 'font-bold' : ''}>
              {segment.text}
            </span>
          ))}
        </p>
      ))}
    </section>
  )
}
