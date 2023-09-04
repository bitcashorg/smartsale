import React, { Suspense } from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import Routes from '../components/navigation/Routes/Routes'
import { PUBLIC_URL } from '../constants/config'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'

const Router = PUBLIC_URL === '.' ? HashRouter : BrowserRouter

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <DarkModeQueryParamReader />
        <Routes />
      </Router>
    </Suspense>
  )
}

export default App
