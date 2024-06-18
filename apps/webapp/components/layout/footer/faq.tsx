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

const content = {
  questions: [
    {
      question: 'What is BitLauncher and how does it support AI startups?',
      answer:
        'BitLauncher is a platform designed to empower AI startups by addressing critical challenges such as funding, sustainability, and global reach. It provides a global platform for securing necessary funding through a community of global investors, promoting sustainable open-source models, and advocating for strategic growth among AI startups. The platform leverages Web3 infrastructure for tailored financial tools and payment rails, democratizing access to resources, funding, and markets.'
    },
    {
      question:
        'How does BitLauncher ensure fair price discovery for token auctions?',
      answer:
        'BitLauncher utilizes batch auctions, a mechanism that matches limit orders of buyers and sellers with the same clearing price for all participants. This method ensures fair price discovery by reducing frontrunning and gas bidding wars, providing a transparent and efficient auction process. Batch auctions are particularly important for decentralized teams needing fair token distributions.'
    },
    {
      question:
        'What makes BitLauncher different from other auction platforms?',
      answer:
        "Unlike some auction solutions that rely on a centralized curation process, BitLauncher is permissionless, allowing any Ethereum project or community to conduct decentralized batch auctions securely and efficiently. BitLauncher's open-source smart contract enables projects to quickly create their own fair auctions, ensuring transparent and fair price discovery."
    },
    {
      question: 'Can non-US investors participate in BitLauncher’s platform?',
      answer:
        'Yes, BitLauncher dismantles barriers for non-US investors by providing a global platform that brings high-quality AI projects to a diverse investor base. This inclusivity ensures that innovation is not geographically constrained, allowing a broader range of investors to participate in funding AI startups.'
    },
    {
      question:
        'What is an example of a project that has benefited from BitLauncher?',
      answer:
        "One example is Masterbots.ai, an initiative focused on crafting precise language and multimodal models for distinct regional dialects and specific industry needs. With the support of BitLauncher, Masterbots.ai has been able to secure funding and grow within the AI ecosystem, demonstrating the platform's effectiveness in fostering innovation and collaboration."
    }
  ]
}

export interface FAQProps extends LangProp {
  dict: any
}