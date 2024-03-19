'use client'

import Link, { LinkProps } from 'next/link'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { HeaderButtons } from './header-buttons'
import { IconSeparator } from './ui/icons'

import { useSession } from '@/hooks/use-session'
import { cn } from '@/lib/utils'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion'

export function Header({ className }: { className?: string }) {
  const { session } = useSession()
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = React.useState(true)
  const [domLoaded, setDomLoaded] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState('')
  const headerRef = React.useRef<HTMLElement>(null)

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
      if (headerRef.current && (e.target as Node).contains(headerRef.current)) {
        setActiveMenu('')
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [headerRef])

  const connectItem = session?.account || 'login'
  const motionHeaderAnimationProps = {
    initial: {
      opacity: 1,
      y: !visible || !domLoaded ? 0 : -100,
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
        <div className="fixed inset-x-0 top-0 z-[5000] mx-auto flex h-16 w-full shrink-0 border-b border-transparent bg-gradient-to-b from-background/10 via-background/50 to-background/80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-xl dark:border-white/[0.2]" />
      }
    >
      <AnimatePresence mode="wait">
        <motion.header
          className={cn(
            'fixed inset-x-0 top-0 z-[5000] mx-auto flex h-16 w-full shrink-0 border-b border-transparent bg-gradient-to-b from-background/10 via-background/50 to-background/80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-xl dark:border-white/[0.2]',
            className
          )}
          ref={headerRef}
          {...motionHeaderAnimationProps}
        >
          <div className="container flex items-center justify-between h-16 px-4 max-w-screen-2xl">
            <div className="flex items-center">
              <HeaderLink
                href="/"
                text="home"
                onClick={() => setActiveMenu('')}
                mobileOnly
              />
              <HeaderLink
                href="/"
                text="bitLauncher"
                onClick={() => setActiveMenu('')}
                desktopOnly
              />
              <IconSeparator className="size-3 text-muted-foreground/50 md:size-6" />
              <HeaderLink
                href="/wallet"
                text="wallet"
                onClick={() => setActiveMenu('')}
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
              {/* <HeaderLink href="https://bitcash-faucet.vercel.app/" text="usdcred faucet" />
              <HeaderLink href="https://faucet.testnet.evm.eosnetwork.com/" text="eos faucet" /> */}
            </div>

            <MenuItem
              active={activeMenu}
              setActive={setActiveMenu}
              item={connectItem}
            >
              <React.Suspense fallback={<div />}>
                <HeaderButtons />
              </React.Suspense>
            </MenuItem>
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
  desktopOnly,
  mobileOnly,
  ...props
}: HeaderLinkProps) {
  return (
    <Button
      asChild
      className={cn('-ml-2', {
        'hidden md:block': desktopOnly,
        'block md:hidden': mobileOnly
      })}
      variant="link"
    >
      <Link shallow={true} {...props}>
        {text}
      </Link>
    </Button>
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
    <div className="relative">
      <motion.button
        transition={{ duration: 0.3 }}
        className="text-sm text-black cursor-pointer md:text-md whitespace-nowrap hover:opacity-90 dark:text-white"
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
                  className="flex flex-col h-full gap-2 p-4 text-black w-max dark:text-white"
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
  desktopOnly?: boolean
  mobileOnly?: boolean
}
