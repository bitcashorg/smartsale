'use client'

import { Button } from '@/components/routes/blog/base'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './dropdown-menu.component'

export function AppBarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary">Menu</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-red-500">Item 1</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// TODO: Implement AppBarDropdown along with user session feature
/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
<DropdownMenuSeparator />
<DropdownMenuGroup>
  <DropdownMenuItem>
    <User className="w-4 h-4 mr-2" />
    <span>Profile</span>
    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
  </DropdownMenuItem>
  <DropdownMenuItem>
    <Settings className="w-4 h-4 mr-2" />
    <span>Settings</span>
    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
  </DropdownMenuItem>
</DropdownMenuGroup>
<DropdownMenuSeparator />
<DropdownMenuGroup>
  <DropdownMenuItem>
    <Users className="w-4 h-4 mr-2" />
    <span>Team</span>
  </DropdownMenuItem>
  <DropdownMenuSub>
    <DropdownMenuSubTrigger>
      <UserPlus className="w-4 h-4 mr-2" />
      <span>Invite users</span>
    </DropdownMenuSubTrigger>
    <DropdownMenuPortal>
      <DropdownMenuSubContent>
        <DropdownMenuItem>
          <Mail className="w-4 h-4 mr-2" />
          <span>Email</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageSquare className="w-4 h-4 mr-2" />
          <span>Message</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PlusCircle className="w-4 h-4 mr-2" />
          <span>More...</span>
        </DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuPortal>
  </DropdownMenuSub>
  <DropdownMenuItem>
    <Plus className="w-4 h-4 mr-2" />
    <span>New Team</span>
    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
  </DropdownMenuItem>
</DropdownMenuGroup>
<DropdownMenuSeparator />
<DropdownMenuItem>
  <Github className="w-4 h-4 mr-2" />
  <span>GitHub</span>
</DropdownMenuItem>
<DropdownMenuItem>
  <LifeBuoy className="w-4 h-4 mr-2" />
  <span>Support</span>
</DropdownMenuItem>
<DropdownMenuItem disabled>
  <Cloud className="w-4 h-4 mr-2" />
  <span>API</span>
</DropdownMenuItem>
<DropdownMenuSeparator />
<DropdownMenuItem onClick={signOut}>
  <LogOut className="w-4 h-4 mr-2" />
  <span>Log out</span>
  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
</DropdownMenuItem> */
