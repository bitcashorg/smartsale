import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Gift, Mail, MessageCircle, Share } from 'lucide-react'

export default function ReferralDashboard() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">
        Earn Rewards by Referring Friends!
      </h1>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Your Referral Link</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2 bg-blue-100 p-3 rounded-lg">
            <Gift className="h-6 w-6 text-blue-600" />
            <p className="text-blue-800 font-medium">
              Earn 20% of your referrals' contributions!
            </p>
          </div>
          <div className="flex space-x-2">
            <Input value="https://bitlauncher.io/ref/andlerz52254" readOnly />
            <Button>Copy Link</Button>
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Your Referral Summary</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-purple-100 p-4 rounded-lg">
              <p className="text-2xl font-bold text-purple-800">12</p>
              <p className="text-sm text-purple-600">Total Referrals</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-2xl font-bold text-green-800">1,000 BLPL</p>
              <p className="text-sm text-green-600">Total Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center space-x-4">
        <Button size="lg">Refer Now</Button>
        <Button size="lg" variant="outline">
          Start Earning
        </Button>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Referral Stats</h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Total Referrals</TableCell>
                <TableCell>12</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Contributions</TableCell>
                <TableCell>5,000 USDT</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rewards Earned</TableCell>
                <TableCell>1,000 BLPL</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible>
        <AccordionItem value="details">
          <AccordionTrigger>Additional Referral Details</AccordionTrigger>
          <AccordionContent>
            <p>
              View detailed information about your referrals, including
              individual contributions and reward breakdowns.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
