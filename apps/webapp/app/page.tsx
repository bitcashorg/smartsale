import Participate from '@/components/pages/home/participate'
import { Upcoming } from '@/components/pages/home/upcoming'

// console.log(_.groupBy(TestnetEasyAuction.abi.map(o => _.omit(o, ['inputs','outputs'])), 'type'))

export default async function IndexPage() {
  return (
    <>
      <Participate />
      <Upcoming />
    </>
  )
}
