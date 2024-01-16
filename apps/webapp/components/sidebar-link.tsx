'use client'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Chatbot } from 'smartevm-genql'
import { useParams } from 'next/navigation'

export default function SidebarLink({ bot }: { bot: Chatbot }) {
  const { chatbot } = useParams<{ chatbot: string }>()
  return (
    <Link
      href={`/${bot.name.toLowerCase()}`}
      className={cn(
        'flex items-center smartevm-2 py-3 cursor-pointer',
        bot?.name.toLowerCase().trim() === chatbot?.trim() && 'bg-slate-800'
      )}
      shallow={true}
    >
      <Image
        src={bot.avatar || '/path/to/default/avatar.png'}
        alt={bot.name}
        width={50} // replace with your desired width
        height={50} // replace with your desired height
        className="object-cover rounded-full"
      />
      <span className="pl-3">{bot.name}</span>
    </Link>
  )
}
