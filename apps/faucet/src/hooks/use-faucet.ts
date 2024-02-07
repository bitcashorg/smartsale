import { useWriteContract } from 'wagmi';
import { TestnetUSDCred } from 'smartsale-contracts'; 
import { parseUnits } from 'viem';

export function useFaucet({ recipient, amount }:UseFaucetParams) {
  // Prepare the contract write operation
  const { writeContract } = useWriteContract()

  // Execute the contract write operation
  const callFaucet = () => {
    const result = writeContract({
      ...TestnetUSDCred,
      functionName: 'faucet',
      args: [recipient, parseUnits(amount, 6)]
    });
    console.log('result', result)
  }


  // Return the hook results
  return { data: [], isLoading:false, isSuccess:false, callFaucet };
}

type UseFaucetParams = {
  recipient: string;
  amount: string;
};