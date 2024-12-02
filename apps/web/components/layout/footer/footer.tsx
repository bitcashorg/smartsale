import dynamic from 'next/dynamic'

const DynamicNewsletter = dynamic(
  () => import('./newsletter').then((c) => c.default),
  {
    ssr: false,
  },
)

export default async function Footer() {
  return (
    <footer className="flex flex-col w-full">
      <DynamicNewsletter />
    </footer>
  )
}
