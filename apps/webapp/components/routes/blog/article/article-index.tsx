'use client'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

export function ArticleIndex({ articleHeaders }: ArticleIndexProps) {
  const [activeSection, setActiveSection] = useState<any>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentSection = articleHeaders?.find(
            ({ anchor }) => anchor === entry.target.id
          )
          if (currentSection) {
            setActiveSection(currentSection)
          }
        }
      })
    }

    // Initialize IntersectionObserver
    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust as needed

      //why is this not working well when content is too close to each other ?
      rootMargin: '0px 0px -80% 0px'
    })

    // Observe each section
    articleHeaders?.forEach(({ anchor }) => {
      const section = document.getElementById(anchor)
      if (section) {
        observer.current?.observe(section)
      }
    })

    // Cleanup on unmount
    return () => {
      observer.current?.disconnect()
    }
  }, [articleHeaders])

  return (
    <Card className="p-5">
      <div className="w-full pb-2 border-b border-muted">
        <span>Content:</span>
      </div>

      <div className="flex flex-col w-full space-y-4 mt-space-10">
        {articleHeaders?.map((header, index) => {
          const HeadingTag = `h${header.level}` as any
          return (
            <HeadingTag
              // className={cn(
              //   'font-bold',
              //   header.level == 3 ? 'ml-3 text-h-text' : 'text-footer-text'
              // )}
              key={index}
            >
              <a
                href={`#${header.anchor}`}
                className={cn(
                  'transition-all hover:text-primary-200 hover:underline focus:text-primary-200 focus:underline active:text-primary-200 active:underline',
                  activeSection?.anchor === header.anchor
                    ? 'text-primary-200'
                    : ''
                )}
              >
                {header.text}
              </a>
            </HeadingTag>
          )
        })}
      </div>
    </Card>
  )
}

type ArticleIndexProps = {
  articleHeaders: { anchor: string; text: string; level: number }[] | undefined
}
