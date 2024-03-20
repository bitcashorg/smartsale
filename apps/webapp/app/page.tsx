import Participate from '@/components/participate'
import { Upcoming } from '@/components/upcoming'

// console.log(_.groupBy(TestnetEasyAuction.abi.map(o => _.omit(o, ['inputs','outputs'])), 'type'))

export default async function IndexPage() {
  return (
    <>
      <Participate />
      <Upcoming />
    </>
  )
}
