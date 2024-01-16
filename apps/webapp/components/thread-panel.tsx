import { Input } from '@/components/ui/input'
import { DateRangePicker } from '@/components/thread-date-range-picker'
import ThreadList from '@/components/thread-list'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { botNames } from '@/lib/bots-names'
import { getThreads } from '@/services/hasura'
import { Thread } from 'smartevm-genql'

export default async function ThreadPanel({
  chatbot,
  threads
}: {
  chatbot?: string
  threads: Thread[]
  search?: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="flex flex-col pb-[150px]">
      <div className="flex justify-between px-10 py-5">
        <Input
          placeholder={`Search your chats with ${
            chatbot ? botNames.get(chatbot) : 'all bots'
          }`}
          className="min-w-[150px] max-w-[600px]"
        />
        <SortBySelect />
        <DateRangePicker />
      </div>

      <div className="flex px-10 py-5">
        <ThreadList threads={threads} />
      </div>

      <div className="flex justify-between px-10 py-5">
        <Button variant="secondary">Previous</Button>
        <span>pagination goes here</span>
        <Button variant="secondary">Next</Button>
      </div>
    </div>
  )
}

export function SortBySelect() {
  return (
    <Select>
      <SelectTrigger className="min-w-[100px] w-[100px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="ASC">Oldest</SelectItem>
          <SelectItem value="DESC">Newest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
