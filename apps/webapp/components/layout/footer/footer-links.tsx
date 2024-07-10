import Link from 'next/link'
import { NavSection, NavItem, footerNavStruct } from '../nav-struct'
import { IconBitlauncher } from '@/components/ui/icons'

export function FooterLinks() {
  return (
    <div className="container flex flex-col p-10 text-left bg-primary lg:flex-row">
      <Link href={`/`} className="min-w-80 lg:mr-[10%] lg:text-left">
        <IconBitlauncher className="w-full" />
        <p className="w-full py-5 pb-10 pl-2 paragraph lg:py-10">
          Be Part Of The Intelligent Future.
        </p>
      </Link>
      <div className="grid w-full grid-cols-2 gap-5 mx-auto lg:grid-cols-3">
        {footerNavStruct.sections.map((section, index) =>
          section.items ? (
            <SectionComponent key={index} section={section} />
          ) : null
        )}
      </div>
    </div>
  )
}

const SectionComponent = ({ section }: { section: NavSection }) => (
  <div>
    <h5 className={`font-bold`}>{section.label}</h5>
    {section.items && section.items.length > 0 ? (
      <LinksList links={section.items} />
    ) : null}
  </div>
)

const LinksList = ({ links }: { links: NavItem[] }) => (
  <ul className="mt-4 space-y-2">
    {links.map((link, index) => (
      <li key={index}>
        <a href={link.href} className="hover:underline">
          {link.label}
        </a>
      </li>
    ))}
  </ul>
)
