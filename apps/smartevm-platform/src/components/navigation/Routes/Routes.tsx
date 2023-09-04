import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import ReactTooltip from 'react-tooltip'

import Auction from '../../../pages/Auction'
import { Documentation } from '../../../pages/Documentation'
import { Landing } from '../../../pages/Landing'
import LaunchAuction from '../../../pages/LaunchAuction'
import { Licenses } from '../../../pages/Licenses'
import Overview from '../../../pages/Overview'
import PrivateAuctionSigner from '../../../pages/PrivateAuctionSigner'
import { Terms } from '../../../pages/Terms'
import { CookiesBanner } from '../../common/CookiesBanner'
import { TopDisclaimer } from '../../common/TopDisclaimer'
import { Footer } from '../../layout/Footer'
import { Header } from '../../layout/Header'
import Popups from '../../popups/Popups'
import { BaseCard } from '../../pureStyledComponents/BaseCard'
import { InnerContainer } from '../../pureStyledComponents/InnerContainer'
import { MainScroll } from '../../pureStyledComponents/MainScroll'
import { MainWrapper } from '../../pureStyledComponents/MainWrapper'
import Web3ReactManager from '../../web3/Web3ReactManager'

const Inner = styled(InnerContainer)`
  padding-top: 22px;
`

const AppRoutes: React.FC = () => {
  const location = useLocation()
  const [showCookiesBanner, setShowCookiesBanner] = React.useState(false)
  const [showTopWarning, setShowTopWarning] = React.useState(false)

  const tokenSupport = (bothTokensSupported: boolean) => {
    setShowTopWarning(bothTokensSupported)
  }

  React.useEffect(() => {
    if (!location.pathname.includes('/auction')) {
      setShowTopWarning(false)
    }
  }, [location])

  return (
    <MainWrapper>
      <Header />
      <MainScroll>
        <Popups />
        <ReactTooltip
          arrowColor="#001429"
          backgroundColor="#001429"
          border
          borderColor="#174172"
          className="customTooltip"
          delayHide={250}
          delayShow={50}
          effect="solid"
          textColor="#fff"
        />
        {/* <HeaderBanner /> */}
        {showTopWarning && <TopDisclaimer />}
        <span id="topAnchor" />
        <Inner>
          <Web3ReactManager>
            <Routes>
              <Route element={<Auction showTokenWarning={tokenSupport} />} path="/auction" />
              <Route element={<Overview />} path="/overview" />
              <Route element={<Landing />} path="/start" />
              <Route element={<LaunchAuction />} path="/launch-auction" />
              <Route element={<PrivateAuctionSigner />} path="/private-auction-signer" />
              <Route element={<Terms />} path="/terms-and-conditions" />
              <Route element={<Licenses />} path="/licenses" />
              <Route element={<Documentation />} path="/docs" />
              <Route element={<Documentation />} path="/docs/batch-auctions" />
              <Route element={<Documentation />} path="/docs/use-cases" />
              <Route element={<Documentation />} path="/docs/user-flow" />
              <Route element={<Documentation />} path="/docs/participate-as-a-bidder" />
              <Route element={<Documentation />} path="/docs/participate-as-auctioneer" />
              <Route element={<Documentation />} path="/docs/starting-an-auction-with-safe" />
              <Route element={<Documentation />} path="/docs/settle-an-auction" />
              <Route element={<Documentation />} path="/docs/Private-Auctions-And-KYC-solutions" />
              <Route element={<Documentation />} path="/docs/supported-networks" />
              <Route element={<Documentation />} path="/docs/vested-tokens" />
              <Route element={<Documentation />} path="/docs/media-kit" />
              <Route element={<Documentation />} path="/docs/faq" />
              <Route element={<Navigate to="/start" />} path="/" />
              <Route element={<BaseCard>Page not found Error 404</BaseCard>} path="*" />
            </Routes>
          </Web3ReactManager>
        </Inner>
        <Footer />
      </MainScroll>
      <CookiesBanner
        isBannerVisible={showCookiesBanner}
        onHide={() => {
          setShowCookiesBanner(false)
        }}
      />
    </MainWrapper>
  )
}

export default AppRoutes
