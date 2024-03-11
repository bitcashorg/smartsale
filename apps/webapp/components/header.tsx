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
  const [activeMenu, setActiveMenu] = React.useState('')
  const headerRef = React.useRef<HTMLElement>(null)

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

  useMotionValueEvent(scrollYProgress, 'change', current => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        if (
          (direction === 1 && scrollYProgress.get() === 1) ||
          direction <= 0
        ) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  const connectItem = session?.account || 'login'

  return (
    <React.Suspense
      fallback={
        <div className="flex w-full fixed top-0 inset-x-0 mx-auto border-b border-transparent dark:border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] h-16 shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl" />
      }
    >
      <AnimatePresence mode="wait">
        <motion.header
          initial={{
            opacity: 1,
            y: -100
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0
          }}
          transition={{
            duration: 0.2
          }}
          className={cn(
            'flex w-full fixed top-0 inset-x-0 mx-auto border-b border-transparent dark:border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] h-16 shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl',
            className
          )}
          ref={headerRef}
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
              <IconSeparator className="size-3 md:size-6 text-muted-foreground/50" />
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
            <React.Suspense fallback={<div />}>
              <MenuItem
                active={activeMenu}
                setActive={setActiveMenu}
                item={connectItem}
              >
                <HeaderButtons />
              </MenuItem>
            </React.Suspense>
          </div>
        </motion.header>
      </AnimatePresence>
      {/* // ? header anchor */}
      <div className="w-full h-[64px] bg-transparent" id="header-anchor" />
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
        className="cursor-pointer text-sm md:text-md whitespace-nowrap text-black hover:opacity-[0.9] dark:text-white"
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
            <div className="absolute top-[calc(100%_+_1.7rem)] left-0 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4 flex flex-col gap-2 dark:text-white text-black"
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
