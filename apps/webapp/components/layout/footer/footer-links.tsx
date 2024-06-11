export function FooterLinks() {
  return (
    <div className="container grid grid-cols-2 gap-10 p-10 mx-auto text-left bg-primary lg:grid-cols-6">
      {content.sections.map((section, index) => (
        <SectionComponent key={index} section={section} />
      ))}
    </div>
  )
}

const SectionComponent = ({ section }: { section: Section }) => (
  <div>
    <h5
      className={`font-bold ${section.title === 'Polkastarter' ? 'text-pink-600' : ''}`}
    >
      {section.title}
    </h5>
    {section.links ? (
      <LinksList links={section.links} />
    ) : (
      <p className="mt-4 text-sm">{section.description}</p>
    )}
  </div>
)

const LinksList = ({ links }: { links: Link[] }) => (
  <ul className="mt-4 space-y-2">
    {links.map((link, index) => (
      <li key={index}>
        <a href={link.href} className="hover:underline">
          {link.text}
        </a>
      </li>
    ))}
  </ul>
)

const content = {
  sections: [
    {
      title: 'Company',
      links: [
        { text: 'Careers', href: '#' },
        { text: 'About us', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Council', href: '#' },
        { text: 'Press kit', href: '#' },
        { text: 'POLS Dashboard', href: '#' }
      ]
    },
    {
      title: 'Help',
      links: [
        { text: 'Support', href: '#' },
        { text: 'Terms & Conditions', href: '#' },
        { text: 'Privacy Policy', href: '#' }
      ]
    },
    {
      title: 'Information',
      links: [
        { text: 'Apply for IDO', href: '#' },
        { text: 'Forum', href: '#' }
      ]
    },
    {
      title: 'Products',
      links: [
        { text: 'Gaming', href: '#' },
        { text: 'Poolside Podcast', href: '#' },
        { text: 'Poolside Accelerator', href: '#' },
        { text: 'Poolside Hub', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Projects', href: '#' },
        { text: 'Portfolio', href: '#' },
        { text: 'Dashboard', href: '#' },
        { text: 'Quests', href: '#' }
      ]
    },
    {
      title: 'Bitlauncher',
      description: 'Be Part Of The Intelligent Future.'
    }
  ]
}

interface Link {
  text: string
  href: string
}

interface Section {
  title: string
  links?: Link[]
  description?: string
}
