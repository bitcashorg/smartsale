import { ERC20ContractData } from "smartsale-abis";


export function AddTokenToWallet({ address, symbol, decimals, image, name }: ERC20ContractData){
  // console.log({ address, symbol, decimals, image, name })
  const addTokenToMetaMask = async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address,
              symbol,
              decimals,
              image
            },
          },
        });
        alert('Token added to MetaMask');
      } else {
        alert('MetaMask is not installed');
      }
    } catch (error) {
      console.error('Error adding token to MetaMask', error);
      alert('Error adding token to MetaMask');
    }
  };

  return (
    <button
      onClick={addTokenToMetaMask}
      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring"
    >
      Add {name} to MetaMask
    </button>
  );
}

interface CustomWindow extends Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ethereum?: any;
}

declare let window: CustomWindow;