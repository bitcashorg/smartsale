
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { FaucetForm } from './components/faucet-form';
import { useUsdtBalance } from './hooks/use-usdt-balance';
import { TestnetUSDT } from 'usdt-abis';
import { AddTokenToWallet } from './components/add-token-to-metamask';


export default function Component() {
  const balance = useUsdtBalance()
  return (
        <div className="min-h-screen bg-[#f0f0f0]">
      <nav className="flex items-center justify-between p-6 bg-white shadow-md">
        <div className="flex items-center">
          <span className="text-xl font-semibold">Bitcash USDT Faucet</span>
        </div>
        <div className='flex'>
          <div className='flex items-center justify-center h-10 pr-5 font-bold'>
              USDT Balance ${balance}
          </div>

          <ConnectButton/>
        </div>

      </nav>
     <main className="flex flex-col items-center justify-center py-12">
   
      <FaucetForm/>
      
      <div className='p-10'>
        <AddTokenToWallet tokenAddress={TestnetUSDT.address} tokenSymbol="USDT"tokenDecimals={18}/>
      </div>

      </main>
    </div>
  )
}

