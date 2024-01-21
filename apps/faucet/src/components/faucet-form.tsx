import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAccount } from "wagmi"
import { useState } from "react"
import { useFaucet } from "@/hooks/use-faucet"
import { TestnetUSDT } from 'usdt-abis'; 
import { AddTokenToWallet } from "./add-token-to-metamask"

export function FaucetForm() {
  const account = useAccount()
  const [address, setAddress] = useState<string|undefined>(account?.address ? account.address : undefined)
  const [quantity, setQuantity] = useState<string>('100') 
  const { callFaucet, isLoading, isSuccess, data } = useFaucet({
    recipient: address || TestnetUSDT.address, 
    amount: quantity 
  })
  

  return (
    <div className="flex flex-col w-full max-w-[1.5*md] items-start gap-4">
        <div className="flex items-center w-full gap-4">
          <Label className="w-1/3 mr-2 text-right" htmlFor="quantity">
            Quantity
          </Label>
          <Input 
            className="w-[225px]" 
            id="quantity" 
            max="1000" 
            min="1" 
            placeholder="Enter quantity" 
            type="number" 
            step="1"
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="flex items-center w-full gap-4">
          <Label className="w-1/3 mr-2 text-right" htmlFor="address">
            Address
          </Label>
          <Input 
            className="w-[500px]" 
            id="address" 
            placeholder="Enter address" 
            type="text" 
            value={address || ''} 
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex justify-center w-full">
          <Button className="w-1/4 mt-4" type="submit" disabled={isLoading} onClick={callFaucet}>
            Submit
          </Button>
        </div>

        <div className="flex justify-center w-full">
          <code>{JSON.stringify({isLoading, isSuccess})}</code>  
        </div>
          <div className="flex justify-center w-full">
            <code>{JSON.stringify({...data})}</code>   
        </div>
    </div>
  )
}
