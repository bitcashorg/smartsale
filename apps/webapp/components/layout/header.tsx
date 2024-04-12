'use client'

import Link, { LinkProps } from 'next/link'
import * as React from 'react'

import { IconBitlauncher, IconDiscord } from '../ui/icons'
import { HeaderButtons } from './header-buttons'

import { buttonVariants } from '@/components/ui/button'
import { useSession } from '@/hooks/use-session'
import { cn } from '@/lib/utils'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion'
import { LucideChevronRight } from 'lucide-react'

export function Header({ className, containerRef }: { className?: string, containerRef: React.RefObject<HTMLDivElement> }) {
  const { session } = useSession()
  const { scrollYProgress } = useScroll({
    container: containerRef
  })
  const [visible, setVisible] = React.useState(true)
  const [largeHeader, setLargeHeader] = React.useState(true)
  const [domLoaded, setDomLoaded] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState('')

  useMotionValueEvent(scrollYProgress, 'change', current => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      if (!domLoaded) setDomLoaded(true)

      let direction = current! - scrollYProgress.getPrevious()!
      const isLargeHeader = scrollYProgress.get() <= 0.05

      if (isLargeHeader !== largeHeader) {
        setLargeHeader(isLargeHeader)
      }

      if (scrollYProgress.get() <= 0.05) {
        setVisible(true)
      } else {
        if (
          (direction === 1 && scrollYProgress.get() === 1) ||
          current === 1 ||
          direction <= 0.00
        ) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const menuDropdownContainerNode = document.getElementById(activeMenu)
      if (
        activeMenu &&
        menuDropdownContainerNode &&
        !menuDropdownContainerNode?.contains(e.target as Node)
      ) {
        setActiveMenu('')
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [activeMenu])

  const connectItem = session?.account || 'login'
  const motionHeaderAnimationProps = {
    initial: {
      opacity: 1,
      y: !visible || !domLoaded ? 0 : -100
    },
    animate: {
      y: visible ? 0 : -100,
      opacity: visible ? 1 : 0
    },
    transition: {
      duration: 0.2
    }
  }

  return (
    <React.Suspense
      fallback={
        <div className="fixed inset-x-0 top-0 z-[5000] mx-auto flex h-16 w-full shrink-0 bg-gradient-to-b from-transparent via-background/30 to-background/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-xl" />
      }
    >
      <AnimatePresence mode="wait">
        <motion.header
          className={cn(
            'fixed transition-all h-16 inset-x-0 top-0 z-[5000] mx-auto flex items-center w-full shrink-0 bg-gradient-to-b from-transparent via-background/30 to-background/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-xl',
            {
              'h-20 md:h-24': largeHeader
            },
            className
          )}
          {...motionHeaderAnimationProps}
        >
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center h-full">
              <HeaderLink
                href="/"
                text="home"
                onClick={() => setActiveMenu('')}
                largeHeader={largeHeader}
                mobileOnly
              />
              <HeaderLink
                href="/"
                text="bitlauncher"
                onClick={() => setActiveMenu('')}
                largeHeader={largeHeader}
                desktopOnly
              />
              {/* <HeaderLink href="https://bitcash-faucet.vercel.app/" text="usdcred faucet" />
              <HeaderLink href="https://faucet.testnet.evm.eosnetwork.com/" text="eos faucet" /> */}
            </div>

            <div className="inline-flex items-center gap-5 mx-auto h-full">
              {/* <HeaderLink
                href="/wallet"
                text="wallet"
                onClick={() => setActiveMenu('')}
                desktopOnly
              /> */}
              <MenuItem
                active={activeMenu}
                setActive={setActiveMenu}
                item="About"
              >
                <HeaderLink
                  href="/how-it-works"
                  text="How It Works"
                  onClick={() => setActiveMenu('')}
                />
                <HeaderLink
                  href="/security"
                  text="Security Tips"
                  onClick={() => setActiveMenu('')}
                />
              </MenuItem>
            </div>

            <div className="inline-flex items-center gap-5">
              <Link
                href="https://discord.gg/a4gwhT9G"
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  buttonVariants({
                    variant: 'outline', radius: 'full', size: largeHeader ? 'lg' : 'default', fontSize: largeHeader ? 'lg' : 'default'
                  }),
                  'px-2.5 border-transparent md:border-accent md:px-8 min-w-[32px] md:min-w-[120px] lg:min-w-[175px]',
                )}
              >
                <IconDiscord
                  className={cn(
                    'size-7 fill-accent block md:hidden',
                    { 'size-9': largeHeader }
                  )}
                />
                <span className="hidden md:block">
                  Discord
                </span>
              </Link>
              {!session?.account ? (
                <HeaderButtons largeHeader={largeHeader} />
              ) : (
                <MenuItem
                  active={activeMenu}
                  setActive={setActiveMenu}
                  item={connectItem}
                >
                  <React.Suspense fallback={<div />}>
                    <HeaderButtons />
                  </React.Suspense>
                </MenuItem>
              )}
            </div>
          </div>
        </motion.header>
      </AnimatePresence>
      {/* // ? header anchor */}
      <div className="h-[64px] w-full bg-transparent" id="header-anchor" />
    </React.Suspense>
  )
}

function HeaderLink({
  text,
  largeHeader,
  desktopOnly,
  mobileOnly,
  ...props
}: HeaderLinkProps) {
  return (
    <Link
      className={cn('text-semibold', {
        'hidden md:flex': desktopOnly,
        'flex md:hidden': mobileOnly
      })}
      {...props}
    >
      {text.match(/(bitlauncher|home)/) ? (
        <IconBitlauncher
          className={cn('transition-all', {
            'w-56 h-11': largeHeader,
            'w-40 h-8': !largeHeader,
            'size-10': largeHeader && mobileOnly,
            'size-8': !largeHeader && mobileOnly,
          }
          )}
          iconOnly={text === 'home'} />
      ) : text}
    </Link>
  )
}

function MenuItem({
  setActive,
  active,
  item,
  children
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col items-center text-semibold h-full" id={item} onMouseLeave={() => setActive('')}>
      <motion.button
        transition={{ duration: 0.3 }}
        className="relative group flex flex-nowrap items-center text-lg cursor-pointer whitespace-nowrap hover:opacity-90 focus-within:opacity-90 my-auto"
        onClick={() => setActive(active === item ? '' : item)}
        onMouseEnter={() => setActive(active === item ? '' : item)}
        layout
      >
        {item}
        <span
          className={cn(
            'transition-all ease-in-out group-hover:rotate-90 p-1',
            { 'rotate-90': active === item },
          )}
        >
          <LucideChevronRight size={16} />
        </span>
      </motion.button>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            key="menu-dropdown"
          >
            {active === item && (
              <div className="absolute left-0 top-[calc(100%_-_0.5rem)] -translate-x-1/2">
                <motion.div
                  key="menu-dropdown-container"
                  transition={transition}
                  layoutId="active" // layoutId ensures smooth animation
                  className="overflow-hidden rounded-2xl border border-muted/[0.2] bg-muted shadow-xl backdrop-blur-sm"
                >
                  <motion.div
                    layout // layout ensures smooth animation
                    transition={transition}
                    className="flex h-full w-max flex-col gap-2 p-4 [&_a:hover]:underline [&_a]:underline-offset-2"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001
}

interface HeaderLinkProps extends LinkProps {
  text: string
  largeHeader?: boolean
  desktopOnly?: boolean
  mobileOnly?: boolean
}
