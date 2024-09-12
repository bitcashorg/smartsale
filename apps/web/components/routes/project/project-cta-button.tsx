'use client'

import { Button } from '@/components/ui/button'
import type { Project } from '@/lib/projects'
import { useSupabaseClient } from '@/services/supabase'
import { isAddressRegisteredForPresale } from '@/services/supabase/service'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useAccount } from 'wagmi'
import { WhitelistAddressButton } from './whitelist-address-button'

export function ProjectCtaButton({
  isPresaleActive,
  isAuctionActive,
  project,
}: { isPresaleActive: boolean; isAuctionActive: boolean; project: Project }) {
  const supabase = useSupabaseClient()
  const { address } = useAccount()

  const { data: isUserWhitelisted } = useQuery({
    queryKey: ['project-cta-whitelist', address, project.id],
    enabled: Boolean(address),
    queryFn: () => isAddressRegisteredForPresale(address as string, project.id, supabase),
  })

  return !isUserWhitelisted ? (
    <WhitelistAddressButton projectId={project.id} />
  ) : isPresaleActive ? (
    <Link href={`/${project.slug}/presale`}>
      <Button variant="tertiary">Join Presale Now</Button>
    </Link>
  ) : isAuctionActive ? (
    <Link href={`/${project.slug}/auction`}>
      <Button variant="tertiary">Join Auction Now</Button>
    </Link>
  ) : null
}
