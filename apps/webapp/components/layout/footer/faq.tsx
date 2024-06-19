import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion
} from '@/components/ui/accordion'
import { LangProp } from '@/types/routing.type'

export function FAQ({ lang, dict }: FAQProps) {
  return (
    <section className="w-full py-12">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="text-center">
          <h2 className="tracking-tighter heading2">
            {dict.faq.frequentlyAsked}
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] md:text-xl">
           {dict.faq.text}
          </p>
        </div>
        <Accordion className="w-full" collapsible type="single">
          {dict.faq.questions.map((item:{ question: string; answer: string }, index:number) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="flex items-center justify-between w-full px-6 py-4 font-medium text-left transition-color focus:outline-none">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}


export interface FAQProps extends LangProp {
  dict: any
}