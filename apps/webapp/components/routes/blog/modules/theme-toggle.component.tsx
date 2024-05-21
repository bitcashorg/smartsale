'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils.lib'
import { Button } from '@/components/routes/blog/base'
import { LucideIcons } from '@/components/icons/blog'

export function ThemeToggle({ blog }: { blog?: boolean }) {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="tertiary"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <LucideIcons.sun
        className={cn(
          'rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0',
          blog ? 'stroke-white' : ''
        )}
      />
      <LucideIcons.moon
        className={cn(
          'absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100',
          blog ? 'dark:stroke-black' : 'dark:stroke-white'
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
