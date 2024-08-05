import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Handshake, Users } from 'lucide-react'
import { createSupabaseServerClient } from '@/services/supabase'
import { formatUnits } from 'viem'

export async function ProjectPresaleData() {
  const { data: contributors } = await getPresaleContributors()
  const { data: totalRaised } = await getTotalPresaleAmount()
  return (
    <div className="grid gap-4 pt-5 md:grid-cols-2 md:gap-8">
      <Card className="bg-muted" x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Raised</CardTitle>
          <Handshake className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${totalRaised ? formatUnits(BigInt(totalRaised), 6) : '0'}
          </div>
          {/* <p className="text-xs text-muted-foreground">+19% from last hour</p> */}
        </CardContent>
      </Card>

      <Card className="bg-muted" x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Contributors</CardTitle>
          <Users className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {contributors?.length ? `+${contributors.length}` : '0'}
          </div>
          {/* <p className="text-xs text-muted-foreground">
            +180.1% from last hour
          </p> */}
        </CardContent>
      </Card>
      {/* <Card className="bg-muted" x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Active</CardTitle>
          <Activity className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+17</div>
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </CardContent>
      </Card> */}
    </div>
  )
}
async function getPresaleContributors(): Promise<PresaleContributorsResult> {
  try {
    const supabase = await createSupabaseServerClient()
    const { data, error } = await supabase.from('transfer').select('from')

    if (error) throw error

    if (!data) {
      return {
        success: true,
        data: [],
        message: 'No data found'
      }
    }

    const uniqueContributors = Array.from(
      new Set(
        data
          .map(item => item.from)
          .filter((from): from is string => from !== null)
      )
    )
    return {
      success: true,
      data: uniqueContributors,
      message: 'Data fetched successfully'
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      success: false,
      error,
      message: 'An unexpected error occurred'
    }
  }
}

async function getTotalPresaleAmount(): Promise<PresaleTotalAmountResult> {
  try {
    const supabase = await createSupabaseServerClient()
    const { data, error } = await supabase
      .from('transfer')
      .select('amount')
      .throwOnError()

    if (!data || data.length === 0) {
      return {
        success: true,
        data: 0,
        message: 'No data found'
      }
    }

    const totalAmount = data.reduce((sum, item) => sum + (item.amount || 0), 0)

    return {
      success: true,
      data: totalAmount,
      message: 'Total amount fetched successfully'
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      success: false,
      error,
      message: 'An unexpected error occurred'
    }
  }
}

interface PresaleContributorsResult {
  success: boolean
  data?: string[]
  error?: unknown
  message: string
}

interface PresaleTotalAmountResult {
  success: boolean
  data?: number
  error?: unknown
  message: string
}
