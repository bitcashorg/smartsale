'use client'

import { SiteLocale } from '@/services/datocms/graphql/generated/cms'
import { buttonVariants } from '@/components/ui/button'
import { IconDownRightArrow } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { BitcashAccessButton } from '@/components/layout/header/bitcash-access'

export default function Participate({ lang, dict }: ParticipateProps) {
  return (
    <section className="align-center relative z-10 flex flex-col pb-10">
      <h2 className="h-32 w-full pb-10 pt-6 text-center text-3xl font-extrabold leading-loose sm:text-4xl">
        {dict.footer.stepsInfo}
      </h2>

      <div
        key="steps-info-title"
        className="flex flex-col items-center gap-14 lg:flex-row lg:items-stretch lg:justify-between"
      >
        {dict.footer.step.map(
          (
            step: { title: string; description: string; href: string },
            index: number
          ) => (
            <div
              key={`${index}__step-content`}
              className="flex min-h-[260px] w-full max-w-[450px] flex-col items-center justify-between rounded-3xl bg-white/90 px-8 py-9 text-black/90 shadow-md backdrop-blur-xl lg:w-1/3 lg:items-start"
            >
              <h3 className="flex h-10 w-full whitespace-pre-line text-left text-3xl font-bold lg:text-left">
                {step.title}
              </h3>
              <div className="flex w-full items-center justify-between gap-4">
                <p className="w-[calc(100%-72px)] py-3 text-sm">
                  {step.description}
                </p>
                {!step.title.includes('Complete KYC') ? (
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
    </section>
  )
}

export interface ParticipateProps {
  dict: any
  lang: SiteLocale
}
