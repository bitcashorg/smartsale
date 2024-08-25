'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useSupabaseClient } from '@/services/supabase'
import type { Tables } from '@repo/supabase'
import type { SupabaseClient } from '@supabase/supabase-js'
import { Handshake, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { formatUnits } from 'viem'
export function ProjectPresaleData({
  presaleData,
}: {
  presaleData: Tables<'presale'>
}) {
  const [contributors, setContributors] = useState<string[]>([])
  const [totalRaised, setTotalRaised] = useState<bigint>(
    BigInt(presaleData.total_raised),
  )
  const supabase = useSupabaseClient()

  useEffect(() => {
    const fetchInitialData = async () => {
      const { data: contributorsData } = await getPresaleContributors(
        supabase,
        presaleData.id,
      )
      setContributors(contributorsData || [])
    }

    fetchInitialData()

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
            setContributors((prev) =>
              Array.from(
                new Set(
                  [...prev, payload.new.from].filter(
                    (from): from is string => from !== null,
                  ),
                ),
              ),
            )
            setTotalRaised((prev) => prev + BigInt(payload.new.amount || 0))
          } else if (payload.eventType === 'DELETE') {
            setTotalRaised((prev) => prev - BigInt(payload.old.amount || 0))
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
          <div className="text-2xl font-bold">
            {contributors.length ? `+${contributors.length}` : '0'}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

async function getPresaleContributors(
  supabase: SupabaseClient,
  presaleId: number,
): Promise<PresaleContributorsResult> {
  try {
    const { data, error } = await supabase
      .from('transfer')
      .select('from')
      .eq('presale_id', presaleId)
      .returns<{ from: string | null }[]>()

    if (error) throw error

    if (!data) {
      return {
        success: true,
        data: [],
        message: 'No data found',
      }
    }

    const uniqueContributors = Array.from(
      new Set(
        data
          .map((item) => item.from)
          .filter((from): from is string => from !== null),
      ),
    )
    return {
      success: true,
      data: uniqueContributors,
      message: 'Data fetched successfully',
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      success: false,
      error,
      message: 'An unexpected error occurred',
    }
  }
}

interface PresaleContributorsResult {
  success: boolean
  data?: string[]
  error?: unknown
  message: string
}
