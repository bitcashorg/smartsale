import Link from 'next/link'
import * as React from 'react'
import { IconBitlauncher, IconDiscord } from '../../ui/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { NavLinks } from './nav-links'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { SessionButtonLoader } from '../session/session-button'
import { MobileNavLoader } from './mobile-nav'
import { LangSelector } from './lang-selector/lang-selector'
import { LangProp } from '@/types/routing.type'
import { Navigation } from './new-nav'
import { appConfig } from '@/lib/config'

export function Header({ lang, dict }: HeaderProps) {
  return (
    <div className="sticky top-0 z-50 flex h-16 bg-background">
      <div className="container flex flex-row items-center justify-between px-4 bg-background">
        <div className="flex h-full items-center md:min-w-[300px]">
          <Link href={`/${lang}`}>
            <IconBitlauncher />
          </Link>
        </div>

        <div className="hidden md:flex md:gap-3 md:pl-4 lg:ml-[-1px] lg:gap-10">
          {appConfig.features.newNavStruct ? (
            <Navigation lang={lang} />
          ) : (
            <NavLinks lang={lang} dict={dict} />
          )}
        </div>

        {/* Desktop action buttons */}
        <div className="flex justify-end gap-5 md:min-w-[300px]">
          <div className="items-center hidden md:flex md:gap-3 lg:gap-5">
            {/* <DiscordButton /> */}
            <Suspense fallback={<Button>Login</Button>}>
              <DynamicSessionButton />
            </Suspense>
          </div>
          {appConfig.features.i18n ? <LangSelector lang={lang} /> : null}
        </div>

        <div className="flex md:hidden">
          <DynamicMobileNav lang={lang} dict={dict} />
        </div>
      </div>
    </div>
  )
}

const DynamicMobileNav = dynamic(
  () => import('./mobile-nav').then(c => c.MobileNav),
  {
    loading: MobileNavLoader,
    ssr: false
  }
)

const DynamicSessionButton = dynamic(
  () => import('../session/session-button').then(c => c.SessionButton),
  {
    loading: SessionButtonLoader,
    ssr: false
  }
)

function DiscordButton() {
  return (
    <Link
      href="https://discord.gg/KuR48XUxnG"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({
          variant: 'outline',
          radius: 'full'
        }),
        'border-transparent md:border-accent-secondary md:px-3 lg:px-10'
      )}
    >
      <IconDiscord className={'block size-7 fill-accent-secondary md:hidden'} />
      <span className="hidden md:block">Discord</span>
    </Link>
  )
}

interface HeaderProps extends LangProp {
  dict: any
}
