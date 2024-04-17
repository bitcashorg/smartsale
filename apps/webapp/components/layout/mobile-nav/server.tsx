import { Suspense } from 'react'
import { MobileNavClient } from './client'

export function MobileNav() {
  return (
    <div className="flex md:hidden">
      <Suspense fallback={<div className="flex">Mobile nav</div>}>
        <MobileNavClient />
      </Suspense>
    </div>
  )
}
