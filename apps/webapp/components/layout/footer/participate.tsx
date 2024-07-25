'use client'

import { buttonVariants } from '@/components/ui/button'
import { IconDownRightArrow } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { BitcashAccessButton } from '@/components/layout/header/bitcash-access'
import { Section } from '@/components/shared/section'
import { Lang } from '@/dictionaries/locales'

export default function Participate({ lang, dict }: ParticipateProps) {
  return (
    <Section heading={dict.footer.stepsInfo}>
      <div
        key="steps-info-title"
        className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:justify-between"
      >
        {dict.footer.step.map(
          (
            step: { title: string; description: string; href: string },
            index: number
          ) => (
            <div
              key={`${index}__step-content`}
              className="flex min-h-[260px] flex-col items-center justify-between rounded-3xl bg-white/90 px-8 py-9 text-justify text-black/90 shadow-md backdrop-blur-xl lg:w-1/3 lg:max-w-[450px] lg:items-start"
            >
              <h3 className="flex justify-center w-full h-10 font-sans text-3xl font-bold whitespace-pre-line lg:justify-start lg:text-left">
                {' '}
                {step.title}
              </h3>

              <div className="flex items-center justify-between w-full gap-4">
                <p className="w-[calc(100%-72px)] py-3 text-sm">
                  {step.description}
                </p>
                {index > 0 ? (
                  <Link
                    href={`/${lang}/${step.href}`}
                    className={cn(
                      buttonVariants({
                        variant: 'accent',
                        size: 'icon'
                      }),
                      'text-md group relative size-14 rounded-full p-0 font-bold hover:[&svg]:fill-card'
                    )}
                  >
                    <IconDownRightArrow className="size-4 transition-all group-focus-within:-rotate-45 group-hover:-rotate-45 [&_path]:stroke-white" />
                  </Link>
                ) : (
                  <BitcashAccessButton
                    buttonLabel="down-right-icon"
                    buttonStyle={{ size: 'icon', variant: 'accent' }}
                    defaultContent="register"
                  />
                )}
              </div>
            </div>
          )
        )}
      </div>
    </Section>
  )
}

export interface ParticipateProps {
  dict: any
  lang: Lang
}
