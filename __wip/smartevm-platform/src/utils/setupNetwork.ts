import { ChainId, NETWORK_CONFIGS } from './networkConfig'

export const setupNetwork = async (chainId: ChainId) => {
  const provider = (window as Window)?.ethereum
  if (provider && provider.request) {
    try {
      if (chainId === ChainId.XDAI) {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: 'xDai',
              nativeCurrency: {
                name: 'xDai',
                symbol: 'xDai',
                decimals: 18,
              },
              rpcUrls: ['https://rpc.xdaichain.com/'],
              blockExplorerUrls: ['https://blockscout.com/xdai/mainnet'],
            },
          ],
        })
      }

      if (chainId === ChainId.MATIC) {
        const config = NETWORK_CONFIGS[ChainId.MATIC]
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: config.name,
              nativeCurrency: {
                name: config.name,
                symbol: config.nativeCurrency.symbol,
                decimals: 18,
              },
              rpcUrls: [config.rpcUrls.default.http],
              blockExplorerUrls: [config.blockExplorers?.default.url],
            },
          ],
        })
      }

      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error(
      `Can't setup the network with chainId: ${chainId} on metamask because window.ethereum is undefined`,
    )
    return false
  }
}
