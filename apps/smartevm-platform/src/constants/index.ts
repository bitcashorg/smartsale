import { JSBI, Percent } from '@josojo/honeyswap-sdk'

import ArrowRightIcon from '../assets/images/arrow-right.svg'
import CoinbaseWalletIcon from '../assets/images/coinbaseWalletIcon.svg'
import GnosisSafeIcon from '../assets/images/gnosis-safe.svg'
import MetamaskIcon from '../assets/images/metamask.svg'
import PortisIcon from '../assets/images/portisIcon.png'
import TrustWalletIcon from '../assets/images/trustWallet.png'
import WalletConnectIcon from '../assets/images/wallet-connect.svg'
import { injected, portis, walletConnectConnector } from '../connectors'

export const chainNames = {
  1: 'Mainnet',
  5: 'Goerli',
  56: 'Binance Smart Chain',
  97: 'Binance Smart Chain Testnet',
  100: 'Gnosis',
  137: 'Polygon',
  80001: 'Mumbai',
  43114: 'Avalanche',
  43113: 'Fuji',
  15557: 'EOS EVM Testnet',
}

export const explorerNames = {
  1: 'Etherscan',
  5: 'Etherscan',
  56: 'Bscscan',
  97: 'Bscscan',
  100: 'Blockscout',
  137: 'Polyscan',
  80001: 'Polygscan',
  43114: 'Snowtrace',
  43113: 'Snowtrace',
  15557: 'EOS EVM Testnet Scan',
}

export const unwrapMessage = {
  1: `Unwrap WETH to ETH on Uniswap`,
  5: `Unwrap WETH to ETH on Uniswap`,
  56: `Unwrap WBNB to BNB on Pancakeswap`,
  97: `Unwrap WBNB to BNB on Pancakeswap`,
  100: `Unwrap WXDAI to XDAI on Honeyswap`,
  137: `Unwrap WMATIC to MATIC on Quickswap`,
  80001: `Unwrap WMATIC to MATIC on Quickswap`,
  43114: `Unwrap WAVAX to AVAX on Quickswap`,
  43113: `Unwrap WAVAX to AVAX on Quickswap`,
  15557: `Unwrap WEOS to EOS on Quickswap`,
}

const MAINNET_WALLETS = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    icon: ArrowRightIcon,
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    icon: MetamaskIcon,
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    icon: CoinbaseWalletIcon,
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true,
  },
  SAFE: {
    name: 'Gnosis Safe',
    icon: GnosisSafeIcon,
    description: 'Use the Gnosis Safe wallet to manage your auctions',
    href: null,
    color: '#3c8974',
  },
  WALLET_CONNECT: {
    connector: walletConnectConnector,
    name: 'WalletConnect',
    icon: WalletConnectIcon,
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
  },
}

// TODO This wallets are unsupported temporarily.
// Add again as SUPPORTED_WALLETS = [...EXTRA_WALLETS, ...MAIN_WALLETS]
// When the times comes.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EXTRA_WALLETS = {
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    icon: CoinbaseWalletIcon,
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true,
  },
  TRUST_WALLET_LINK: {
    name: 'Open in Trust Wallet',
    icon: TrustWalletIcon,
    description: 'iOS and Android app.',
    href: 'https://link.trustwallet.com/open_url?coin_id=60&url=https://uniswap.exchange/swap',
    color: '#1C74CC',
    mobile: true,
    mobileOnly: true,
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    icon: PortisIcon,
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true,
  },
}
export const WALLET_ICONS = {
  metaMask: MetamaskIcon,
  injected: ArrowRightIcon,
  walletConnect: WalletConnectIcon,
  coinbaseWallet: CoinbaseWalletIcon,
  safe: GnosisSafeIcon,
}
export const SUPPORTED_WALLETS = MAINNET_WALLETS

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%

// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(
  JSBI.BigInt(2500),
  BIPS_BASE,
) // 25%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const V1_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))
