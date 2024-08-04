import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { IconBitlauncher } from '../../ui/icons'
import { NavLinks } from './nav-links'

import { appConfig } from '@/lib/config'
import { LangProp } from '@/types/routing.type'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { SessionButtonLoader } from '../session/session-button'
import { LangSelector } from './lang-selector'
import { MobileNavLoader } from './mobile-nav'
import { Navigation } from './new-nav'

export function Header({ lang, dict }: HeaderProps) {
  return (
    <div className="sticky top-0 z-50 flex h-16 bg-background">
      <div className="container flex flex-row items-center justify-between md:px-4 bg-background py-11">
        <div className="flex h-full items-center lg:min-w-[100px]">
          <Link href={`/${lang}`}>
            <IconBitlauncher className="w-[152px]" />
          </Link>
        </div>

        <div className="hidden md:flex md:gap-3 md:pl-4 lg:ml-[-1px] lg:gap-10">
          {/* // ? Development only */}
          {appConfig.features.newNavStruct ? (
            <Navigation lang={lang} />
          ) : (
            // ? Production only until development of newNavStruct is complete (UI/UX + content upt)
            <NavLinks lang={lang} dict={dict} />
          )}
        </div>

        {/* Desktop action buttons */}
        <div className="flex justify-end lg:min-w-[300px] lg:gap-5">
          <div className="items-center hidden gap-5 lg:flex">
            {/* <DiscordButton /> */}
            <Suspense fallback={<Button>Login</Button>}>
              <DynamicSessionButton />
            </Suspense>
          </div>
          {appConfig.features.i18n ? <LangSelector lang={lang} /> : null}
          <div className="flex lg:hidden">
            <DynamicMobileNav lang={lang} dict={dict} />
          </div>
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

interface HeaderProps extends LangProp {
  dict: any
}
