import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectProps } from "@radix-ui/react-select"
import { ERC20ContractData } from "smartsale-contracts"

export function TokenSelect({options, ...props}:TokenSelectParams) {
  return (
    <Select {...props}>
      <SelectTrigger className="w-[260px]">
        <SelectValue placeholder="Select a token" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Token</SelectLabel>
          {options.map((o,i)=> <SelectItem key={i} value={i.toString()}>{o.symbol} on {o.chainId? 'Sepolia' : 'EOSEVM'}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

interface TokenSelectParams extends SelectProps {
  options: ERC20ContractData[]
}