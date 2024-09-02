'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useSupabaseClient } from '@/services/supabase'
import type { Tables } from '@repo/supabase'
import { Handshake, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { formatUnits } from 'viem'

export function ProjectPresaleData({
  presaleData,
  numberOfContributors,
}: {
  presaleData: Tables<'presale'>
  numberOfContributors: number
}) {
  const [contributors, setContributors] = useState<number>(numberOfContributors)
  const [totalRaised, setTotalRaised] = useState<bigint>(
    BigInt(presaleData.total_raised),
  )
  const supabase = useSupabaseClient()

  useEffect(() => {
    // TODO: subscribe to presale contributors
    const subscription = supabase
      .channel(`presale_contributions_${presaleData.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'transfer',
          filter: `presale_id=eq.${presaleData.id}`,
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setTotalRaised(BigInt(payload.new.total_raised))
          } else if (payload.eventType === 'DELETE') {
            setTotalRaised(BigInt(payload.old.total_raised))
          }
        },
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, presaleData.id])

  return (
    <div className="grid gap-4 pt-5 md:grid-cols-2 md:gap-8">
      <Card className="bg-muted" x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Raised</CardTitle>
          <Handshake className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${formatUnits(totalRaised, 6)}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted" x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Contributors</CardTitle>
          <Users className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{contributors || '0'}</div>
        </CardContent>
      </Card>
    </div>
  )
}
