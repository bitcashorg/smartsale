// Export env vars
export const PUBLIC_URL = process.env.PUBLIC_URL

// API endpoints for several environments
export const API_URL_PRODUCTION_GOERLI =
  process.env.REACT_APP_ADDITIONAL_SERVICES_API_URL_PROD_GOERLI
export const GRAPH_API_URL_DEVELOP_GOERLI = process.env.REACT_APP_GRAPH_API_URL_GOERLI
export const GRAPH_API_URL_PRODUCTION_GOERLI = process.env.REACT_APP_GRAPH_API_URL_GOERLI
// export const GRAPH_API_URL_DEVELOP_MAINNET =
//   'https://api.thegraph.com/subgraphs/id/QmZUuKovJZbKRFADGFGWoh3LHcQSBuqCL2yTJU5gY7cL7h'
export const GRAPH_API_URL_DEVELOP_MAINNET = process.env.REACT_APP_GRAPH_API_URL_MAINNET
export const GRAPH_API_URL_PRODUCTION_MAINNET = process.env.REACT_APP_GRAPH_API_URL_MAINNET
export const GRAPH_API_URL_DEVELOP_POLYGON = process.env.REACT_APP_GRAPH_API_URL_POLYGON
export const GRAPH_API_URL_PRODUCTION_POLYGON = process.env.REACT_APP_GRAPH_API_URL_POLYGON
export const GRAPH_API_URL_DEVELOP_XDAI = process.env.REACT_APP_GRAPH_API_URL_XDAI
export const GRAPH_API_URL_PRODUCTION_XDAI = process.env.REACT_APP_GRAPH_API_URL_XDAI
export const GRAPH_API_URL_DEVELOP_MUMBAI = process.env.REACT_APP_GRAPH_API_URL_MUMBAI
export const GRAPH_API_URL_PRODUCTION_MUMBAI = process.env.REACT_APP_GRAPH_API_URL_MUMBAI
export const GRAPH_API_URL_DEVELOP_AVALANCHE = process.env.REACT_APP_GRAPH_API_URL_AVALANCHE
export const GRAPH_API_URL_PRODUCTION_AVALANCHE = process.env.REACT_APP_GRAPH_API_URL_AVALANCHE
export const GRAPH_API_URL_DEVELOP_FUJI = process.env.REACT_APP_GRAPH_API_URL_FUJI
export const GRAPH_API_URL_PRODUCTION_FUJI = process.env.REACT_APP_GRAPH_API_URL_FUJI
export const GRAPH_API_URL_DEVELOP_BSC = process.env.REACT_APP_GRAPH_API_URL_BSC
export const GRAPH_API_URL_PRODUCTION_BSC = process.env.REACT_APP_GRAPH_API_URL_BSC
export const GRAPH_API_URL_DEVELOP_BSC_TESTNET = process.env.REACT_APP_GRAPH_API_URL_BSC_TESTNET
export const GRAPH_API_URL_PRODUCTION_BSC_TESTNET = process.env.REACT_APP_GRAPH_API_URL_BSC_TESTNET
export const GRAPH_API_URL_DEVELOP_EOS_EVM_TESTNET =
  process.env.REACT_APP_GRAPH_API_URL_EOS_EVM_TESTNET ||
  'http://localhost:8000/subgraphs/name/eosevm-testnet/easyauction'
export const GRAPH_API_URL_PRODUCTION_EOS_EVM_TESTNET =
  process.env.REACT_APP_GRAPH_API_URL_EOS_EVM_TESTNET ||
  'http://localhost:8000/subgraphs/name/eosevm-testnet/easyauction'
// Infura bridges like 'https://mainnet.infura.io/v3/...'
export const NETWORK_URL_GOERLI = process.env.REACT_APP_NETWORK_URL_GOERLI || ''
export const NETWORK_URL_MAINNET = process.env.REACT_APP_NETWORK_URL_MAINNET || ''
export const NETWORK_URL_POLYGON =
  process.env.REACT_APP_NETWORK_URL_POLYGON || 'https://polygon-rpc.com'
export const NETWORK_URL_XDAI =
  process.env.REACT_APP_NETWORK_URL_XDAI || 'https://rpc.xdaichain.com/'
export const NETWORK_URL_MUMBAI =
  process.env.REACT_APP_NETWORK_URL_MUMBAI || 'https://rpc-mumbai.maticvigil.com/'
export const NETWORK_URL_AVALANCHE =
  process.env.REACT_APP_NETWORK_URL_AVALANCHE || 'https://rpc.ankr.com/avalanche'
export const NETWORK_URL_FUJI =
  process.env.REACT_APP_NETWORK_URL_FUJI || 'https://rpc.ankr.com/avalanche_fuji'
export const NETWORK_URL_BSC =
  process.env.REACT_APP_NETWORK_URL_BSC || 'https://bsc-dataseed.binance.org/'
export const NETWORK_URL_BSC_TESTNET =
  process.env.REACT_APP_NETWORK_URL_BSC_TESTNET || 'https://data-seed-prebsc-1-s1.binance.org:8545/'
export const NETWORK_URL_EOS_EVM_TESTNET =
  process.env.REACT_APP_NETWORK_URL_EOS_EVM_TESTNET || 'https://api.testnet.evm.eosnetwork.com/'

export const INFURA_KEY = process.env.REACT_APP_INFURA_PROJECT_KEY || ''
export const WALLET_CONNECT_PROJECT_ID = process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID || ''

// Wallet connect keys
export const FORTMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY || ''
export const PORTIS_ID = process.env.REACT_APP_PORTIS_ID || ''

// Other stuff
export const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID || ''
export const GIT_COMMIT_HASH = process.env.REACT_APP_GIT_COMMIT_HASH || ''

// Pinata keys
export const PINATA_API_KEY = process.env.REACT_APP_PINATA_KEY || ''
export const PINATA_SECRET_API_KEY = process.env.REACT_APP_PINATA_SECRET || ''

export const MAX_DECIMALS_PRICE_FORMAT = 12
export const NUMBER_OF_DIGITS_FOR_INVERSION = 6

export const PINATA_BASE_URL = 'https://api.pinata.cloud/'
export const PINATA_QUERY_URL = 'https://gateway.pinata.cloud/ipfs/'
export const PINATA_PIN_JSON_URL = `${PINATA_BASE_URL}pinning/pinJSONToIPFS`

export const isDev = process.env.NODE_ENV === 'development'

export const STABLE_TOKENS_FOR_INVERTED_CHARTS = [
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  '0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa',
]
