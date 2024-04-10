import { LayoutContainer } from '@/components/layout-container'
import { Upcoming } from '@/components/pages/home/upcoming'

// console.log(_.groupBy(TestnetEasyAuction.abi.map(o => _.omit(o, ['inputs','outputs'])), 'type'))

export default async function IndexPage() {
  return (
    <LayoutContainer>
      <Upcoming />
    </LayoutContainer>
  )
}
