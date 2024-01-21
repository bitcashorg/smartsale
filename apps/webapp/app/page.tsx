import { Newsletter } from "@/components/newletter";
import {Upcoming} from "@/components/upcoming";

export default async function IndexPage() {
  return <div className="container">
    <Upcoming/>
    <Newsletter/>
  </div>
}
