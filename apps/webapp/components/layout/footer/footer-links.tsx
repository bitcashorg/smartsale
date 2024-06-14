import { NavSection, NavItem, navStruct } from '../nav-struct'

export function FooterLinks() {
  return (
    <div className="container grid grid-cols-2 gap-10 p-10 mx-auto text-left bg-primary lg:grid-cols-6">
      {navStruct.sections.map((section, index) =>
        section.items ? (
          <SectionComponent key={index} section={section} />
        ) : null
      )}
    </div>
  )
}

const SectionComponent = ({ section }: { section: NavSection }) => (
  <div>
    <h5
      className={`font-bold ${section.label === 'Polkastarter' ? 'text-pink-600' : ''}`}
    >
      {section.label}
    </h5>
    {section.items && section.items.length > 0 ? (
      <LinksList links={section.items} />
    ) : (
      <p className="mt-4 text-sm">{section.description}</p>
    )}
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
