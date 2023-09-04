import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { WagmiConfig } from 'wagmi'

import { wagmiClient } from './connectors/index'
import './i18n'
import App from './pages/App'
import store from './state'
import ApplicationUpdater from './state/application/updater'
import TransactionUpdater from './state/transactions/updater'
import UserUpdater from './state/user/updater'
import ThemeProvider from './theme'
import { GlobalStyle, ThemedGlobalStyle } from './theme/globalStyle'
import 'sanitize.css'

const Updaters = () => {
  return (
    <>
      <UserUpdater />
      <ApplicationUpdater />
      <TransactionUpdater />
    </>
  )
}

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
  <>
    <WagmiConfig config={wagmiClient}>
      <Provider store={store}>
        <Updaters />
        <ThemeProvider>
          <GlobalStyle />
          <ThemedGlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </WagmiConfig>
  </>,
)
