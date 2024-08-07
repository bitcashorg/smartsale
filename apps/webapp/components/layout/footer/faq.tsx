import { Section } from '@/components/shared/section'
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion
} from '@/components/ui/accordion'
import { LangProp } from '@/types/routing.type'

export function FAQ({ lang, dict }: FAQProps) {
  return (
    <Section heading={dict.faq.frequentlyAsked} subheading={dict.faq.text}>
      <div className="grid gap-8 px-4 md:px-6">
        <Accordion
          className="mx-auto w-full max-w-[1000px]"
          collapsible
          type="single"
        >
          {dict.faq.questions.map(
            (item: { question: string; answer: string }, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="flex w-full items-center justify-between rounded-b px-6 py-4 text-left font-sans text-base font-medium focus:outline-none data-[state=open]:bg-muted data-[state=open]:opacity-70 data-[state=open]:decoration-none">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-5 text-base text-justify">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            )
          )}
        </Accordion>
      </div>
    </Section>
  )
}

export interface FAQProps extends LangProp {
  dict: any
}
