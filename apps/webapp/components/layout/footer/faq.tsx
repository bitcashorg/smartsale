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
      {/* <div className="grid pt-8 text-left gap-y-10 md:grid-cols-2 md:gap-x-16 md:gap-y-8">
        {dict.faq.questions.map(
          (
            item: { question: string; answer: string; additionalInfo?: string },
            index: number
          ) => (
            <div key={index}>
              <h3 className="flex mb-4 text-lg font-medium">
                <svg
                  className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                {item.question}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{item.answer}</p>
              {item.additionalInfo && (
                <p className="text-gray-500 dark:text-gray-400">
                  {item.additionalInfo}
                </p>
              )}
            </div>
          )
        )}
      </div> */}
    </Section>
  )
}

export interface FAQProps extends LangProp {
  dict: any
}
