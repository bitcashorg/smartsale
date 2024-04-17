import { Suspense } from 'react'

export function MobileNav() {
  return (
    <div className="flex md:hidden">
      <Suspense fallback={<div className="flex">Mobile nav</div>}>
        <MobileNav />
      </Suspense>
    </div>
  )
}
