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

export function HeroWhitepaper({ paragraphs }: HeroContentProps) {
  return (
    <section className="narrow-container">
      <div className="grid items-center justify-between gap-4 px-0 pb-[80px] md:px-6 lg:grid-cols-2">
        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base font-normal leading-normal text-infoForeground">
              {paragraph.segments.map((segment, segmentIndex) => (
                <span key={segmentIndex} className={segment.isBold ? 'font-bold' : ''}>
                  {segment.text}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
