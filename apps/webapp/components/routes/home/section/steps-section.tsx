'use client'

import { Section } from '@/components/shared/section'
import { buttonVariants } from '@/components/ui/button'
import { IconDownRightArrow } from '@/components/ui/icons'
import type { Lang } from '@/dictionaries/locales'
import { useSession } from '@/hooks/use-session'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function StepsSection({ lang, dict, id }: StepsSectionProps) {
  const { createAccount } = useSession()

  return (
    <Section id={id} heading={dict.footer.stepsInfo}>
      <div className="flex flex-col items-center gap-[52px] lg:flex-row lg:justify-between">
        {dict.footer.step.map(
          (step: { title: string; description: string; href: string }, index: number) => (
            <div
              key={`${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }__step-content`}
              className="h-[274px] px-4 py-[1.484rem] bg-white/90 rounded-[27px] shadow backdrop-blur-xl flex-col justify-between items-start inline-flex lg:w-[284px] lg:h-[294px] xl:w-[500px]"
            >
              <div className="self-stretch h-[2.859rem] justify-start items-start text-start inline-flex mb-6">
                <div className="grow shrink basis-0 text-black/90 text-[2.113rem] font-bold leading-10 whitespace-pre-line">
                  {step.title}
                </div>
              </div>
              <div className="inline-flex items-start self-stretch justify-between py-6 whitespace-pre-line">
                <div className="w-[226.91px] px-[9.86px] py-[0.844rem] flex-col justify-start items-start inline-flex">
                  <div className="text-lg font-normal leading-snug text-start text-black/90">
                    {step.description}
                  </div>
                </div>
                <div className="w-[3.818rem] h-[4.5rem] pt-[0.938rem] flex-col justify-start items-start inline-flex">
                  <div className="w-[3.818rem] h-[3.938rem] px-[1.346rem] py-[1.406rem] bg-[#e728a9] rounded-full justify-center items-center inline-flex">
                    {index > 0 ? (
                      <Link
                        href={`/${lang}/${step.href}`}
                        className={cn(
                          buttonVariants({
                            variant: 'accent',
                            size: 'icon',
                          }),
                          'text-md group relative size-14 rounded-full p-0 font-bold hover:[&svg]:fill-card',
                        )}
                      >
                        <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white" />
                      </Link>
                    ) : (
                      // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                      <div
                        onClick={createAccount}
                        className={cn(
                          buttonVariants({
                            variant: 'accent',
                            size: 'icon',
                          }),
                          'text-md group relative size-14 rounded-full p-0 font-bold hover:[&svg]:fill-card',
                        )}
                      >
                        <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </Section>
  )
}

export interface StepsSectionProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  dict: any
  lang: Lang
  id?: string
}
