'use client'

import Link, { LinkProps } from 'next/link'
import * as React from 'react'

import { IconBitlauncher } from '../ui/icons'
import { HeaderButtons } from './header-buttons'

import { useSession } from '@/hooks/use-session'
import { cn } from '@/lib/utils'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion'

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
      if (scrollYProgress.get() <= 0.05) {
        setVisible(true)
      } else {
        if (
          (direction === 1 && scrollYProgress.get() === 1) ||
          current === 1 ||
          direction <= 0
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

    scrollYProgress.on('change', () => {
      const yProgress = scrollYProgress.get()

      setLargeHeader(yProgress <= 0.1)
    })

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
            'fixed transition-all px-4 h-16 md:px-6 lg:px-12 inset-x-0 top-0 z-[5000] mx-auto flex items-center w-full shrink-0 bg-gradient-to-b from-transparent via-background/30 to-background/60 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-xl',
            {
              'h-20 md:h-24': largeHeader
            },
            className
          )}
          {...motionHeaderAnimationProps}
        >
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center">
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

            <div className="inline-flex gap-5 mx-auto">
              <HeaderLink
                href="/wallet"
                text="wallet"
                onClick={() => setActiveMenu('')}
                desktopOnly
              />
              <MenuItem
                active={activeMenu}
                setActive={setActiveMenu}
                item="about"
              >
                <HeaderLink
                  href="/how-it-works"
                  text="how it works"
                  onClick={() => setActiveMenu('')}
                />
                <HeaderLink
                  href="/security"
                  text="security tips"
                  onClick={() => setActiveMenu('')}
                />
              </MenuItem>
            </div>

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
      className={cn('px-4 text-semibold', {
        'hidden md:flex': desktopOnly,
        'flex md:hidden': mobileOnly
      })}
      shallow
      prefetch
      {...props}
    >
      {text.match(/(bitlauncher|home)/) ? (
        <IconBitlauncher
          className={cn('transition-all', {
            'w-56 h-11': largeHeader,
            'w-40 h-8': !largeHeader,
            'size-12': largeHeader && mobileOnly,
            'size-9': !largeHeader && mobileOnly,
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
    <div className="relative text-semibold" id={item}>
      <motion.button
        transition={{ duration: 0.3 }}
        className="md:text-md cursor-pointer whitespace-nowrap text-sm text-black hover:opacity-90 dark:text-white"
        onClick={() => setActive(active === item ? '' : item)}
        layout
      >
        {item} {active === item ? '-' : '+'}
      </motion.button>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-0 top-[calc(100%_+_1.7rem)] -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="flex h-full w-max flex-col gap-2 p-4 text-black dark:text-white"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
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
