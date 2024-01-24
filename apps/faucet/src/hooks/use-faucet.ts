import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { TestnetUSDCred } from 'erc20-abis'; 
import { parseUnits } from 'viem';

export function useFaucet({ recipient, amount }:UseFaucetParams) {
  // Prepare the contract write operation
  const { config } = usePrepareContractWrite({
    ...TestnetUSDCred,
    functionName: 'faucet',
    args: [recipient, parseUnits(amount, 6)]
  });

  // Execute the contract write operation
  const { data, write, isLoading, isSuccess } = useContractWrite(config);

  // Return the hook results
  return { data, isLoading, isSuccess, callFaucet: write! };
}

type UseFaucetParams = {
  recipient: string;
  amount: string;
};