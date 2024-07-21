import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, Handshake, DollarSign, Users } from 'lucide-react'

export function ProjectPresaleData() {
  return (
    <div className="grid gap-4 pt-5 md:grid-cols-3 md:gap-8">
      <Card className="bg-muted" x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">BL Price</CardTitle>
          <DollarSign className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$1.23</div>
          {/* <p className="text-xs text-muted-foreground">+20.1% from last hour</p> */}
        </CardContent>
      </Card>

      <Card className="bg-muted" x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Raised</CardTitle>
          <Handshake className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$12,234</div>
          {/* <p className="text-xs text-muted-foreground">+19% from last hour</p> */}
        </CardContent>
      </Card>

      <Card className="bg-muted" x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Contributors</CardTitle>
          <Users className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+23</div>
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
