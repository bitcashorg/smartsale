import { SiteHeader } from "./modules/site-header.component"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* <SiteHea  der /> */}
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}
