interface Paragraph {
    text: string
    isBold?: boolean
  }
  
  interface HeroContentProps {
    paragraphs: Paragraph[]
  }
  
  export function HeroContent({ paragraphs }: HeroContentProps): JSX.Element {
    return (
      <section className="font-['Futura PT'] text-sm font-normal leading-snug text-[#9395af]">
        {paragraphs.map((paragraph, index) => (
          <span key={index} className={paragraph.isBold ? 'font-bold' : ''}>
            {paragraph.text}
          </span>
        ))}
      </section>
    )
  }