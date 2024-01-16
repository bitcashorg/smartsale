import { getCategories } from '@/services/hasura'
import { Input } from '@/components/ui/input'

export const revalidate = 3600 // revalidate the data at most every hour

export default async function BrowsePage() {
  const categories = await getCategories()
  return (
    <div className="flex flex-col h-[calc(100vh-theme(spacing.16))] py-10">
      <div className="flex justify-center w-full pb-10">
        <Input placeholder="Search" className="max-w-[500px]" />
      </div>

      <div className="flex justify-center w-full">
        {categories.map((category, key) => (
          <span key={key} className="pl-8">
            {category.name}
          </span>
        ))}
      </div>
    </div>
  )
}
