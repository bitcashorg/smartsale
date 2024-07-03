import Link from 'next/link'
import { NavSection, NavItem, footerNavStruct } from '../nav-struct'
import { IconBitlauncher } from '@/components/ui/icons'

export function FooterLinks() {
  return (
    <div className="container grid grid-cols-2 gap-10 p-10 mx-auto text-left bg-primary lg:grid-cols-6">
      {footerNavStruct.sections.map((section, index) =>
        section.items ? (
          <SectionComponent key={index} section={section} />
        ) : null
      )}

      <Link href={`/`}>
        <IconBitlauncher className="w-full" />
        <p className="py-10 text-center paragraph">
          Be Part Of The Intelligent Future.
        </p>
      </Link>
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
