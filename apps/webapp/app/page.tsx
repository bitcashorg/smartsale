import { Newsletter } from "@/components/newletter";
import {Upcoming} from "@/components/upcoming";
import _ from "lodash";
import { TestnetEasyAuction } from "smartevm-abis";

console.log(_.groupBy(TestnetEasyAuction.abi.map(o => _.omit(o, ['inputs','outputs'])), 'type'))


export default async function IndexPage() {
  return <div className="container">
    <Upcoming/>
    <Newsletter/>
  </div>
}
