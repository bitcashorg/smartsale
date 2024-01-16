import { Sidebar } from '@/components/sidebar'
import { auth } from '@/auth'
// import { ChatHistory } from '@/components/chat-history'
import { getChatbots } from '@/services/hasura'
import SidebarLink from './sidebar-link'

export async function SidebarDesktop() {
  const session = await auth()
  if (!session) return null
  const chatbots = await getChatbots()

  return (
    <Sidebar className="peer absolute inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
      {/* @ts-ignore */}
      <ul className="p-5">
        {chatbots.map((bot, key) => (
          <li key={key}>
            <SidebarLink bot={bot} />
          </li>
        ))}
      </ul>

      {/* <h3>Chat history</h3>

      <ChatHistory userId={session.user.id} /> */}
    </Sidebar>
  )
}
