

export function AddTokenToWallet({ tokenAddress, tokenSymbol, tokenDecimals, tokenImage }: AddTokenProps){
  const addTokenToMetaMask = async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: tokenAddress,
              symbol: tokenSymbol,
              decimals: tokenDecimals,
              image: tokenImage || '',
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
      Add Token to MetaMask
    </button>
  );
}

interface AddTokenProps {
  tokenAddress: string;
  tokenSymbol: string;
  tokenDecimals: number;
  tokenImage?: string; // Optional token image URL
}

interface CustomWindow extends Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ethereum?: any;
}

declare let window: CustomWindow;