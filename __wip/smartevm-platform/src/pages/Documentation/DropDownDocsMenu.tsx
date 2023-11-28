import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { NavHashLink } from 'react-router-hash-link'

import { ChevronDown } from '../../components/icons/ChevronDown'

const IndexLink = styled(NavHashLink)`
  color: ${({ theme }) => theme.text1};
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 8px;
  text-decoration: none;

  &.isActive {
    color: ${({ theme }) => theme.primary1};
  }
`
const DropDownButton = styled.button`
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.primary1};
  padding: 10px 20px;
  width: 300px;
  flex: 1;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  border: 0.3px solid #919191;
`

const DocOptions = styled.div`
  align-items: center;
  display: flex;
  @media (min-width: ${({ theme }) => theme.themeBreakPoints.md}) {
    margin-top: 10px;
  }
`
const DocsText = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.2;
  margin-right: 20px;
`

const DropDownList = styled.ul`
  min-width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px;
  list-style: none;
`

const DropDownListItem = styled.li`
  padding: 5px 20px;
  cursor: pointer;
  transition: background-color ease 1s;
`

function DropDownDocsMenu() {
  const location = useLocation()
  const [selectDocs, setSelectDocs] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const handleDropDownFocus = (state: boolean) => {
    setOpen(!state)
  }
  const handleClickOutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      setOpen(false)
    }
  }
  window.addEventListener('click', handleClickOutsideDropdown)

  React.useEffect(() => {
    if (location.pathname === '/docs') setSelectDocs('Overview')
    if (location.pathname === '/docs/batch-auctions') setSelectDocs('How do Batch Auctions work?')
    if (location.pathname === '/docs/use-cases') setSelectDocs('Use Cases')
    if (location.pathname === '/docs/user-flow') setSelectDocs('User flow')
    if (location.pathname === '/docs/participate-as-a-bidder')
      setSelectDocs('Participate as a bidder')
    if (location.pathname === '/docs/participate-as-auctioneer')
      setSelectDocs('Start an auction via scripts')
    if (location.pathname === '/docs/starting-an-auction-with-safe')
      setSelectDocs('Start an auction via UI')
    if (location.pathname === '/docs/settle-an-auction') setSelectDocs('Settle an auction')
    if (location.pathname === '/docs/private-auctions-and-KYC-solutions')
      setSelectDocs('Private auctions/KYC solutions')
    if (location.pathname === '/docs/supported-networks') setSelectDocs('Supported Networks')
    if (location.pathname === '/docs/media-kit') setSelectDocs('Media kit')
    if (location.pathname === '/docs/vested-tokens') setSelectDocs('Vested Tokens')
    if (location.pathname === '/docs/faq') setSelectDocs('FAQ')
  }, [location, setSelectDocs])

  return (
    <>
      <div className="New">
        <div ref={dropdownRef}>
          <DropDownButton onClick={() => handleDropDownFocus(open)}>
            <DocOptions>
              <DocsText>{selectDocs}</DocsText>
              <ChevronDown></ChevronDown>
            </DocOptions>
          </DropDownButton>
          {open && (
            <DropDownList>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs#topAnchor"
                >
                  Overview
                </IndexLink>
              </DropDownListItem>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs/batch-auctions#topAnchor"
                >
                  How do Batch Auctions work?
                </IndexLink>
              </DropDownListItem>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs/use-cases#topAnchor"
                >
                  Use Cases
                </IndexLink>
              </DropDownListItem>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs/user-flow#topAnchor"
                >
                  User flow
                </IndexLink>
              </DropDownListItem>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs/participate-as-a-bidder#topAnchor"
                >
                  Participate as a bidder
                </IndexLink>
              </DropDownListItem>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs/participate-as-auctioneer#topAnchor"
                >
                  Start an auction via scripts
                </IndexLink>
              </DropDownListItem>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs/starting-an-auction-with-safe#topAnchor"
                >
                  Start an auction via UI
                </IndexLink>
              </DropDownListItem>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs/settle-an-auction#topAnchor"
                >
                  Settle an auction
                </IndexLink>
              </DropDownListItem>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs/private-auctions-and-KYC-solutions"
                >
                  Private auctions/KYC solutions
                </IndexLink>
              </DropDownListItem>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs/supported-networks"
                >
                  Supported Networks
                </IndexLink>
              </DropDownListItem>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs/vested-tokens"
                >
                  Vested tokens
                </IndexLink>
              </DropDownListItem>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs/media-kit"
                >
                  Media kit
                </IndexLink>
              </DropDownListItem>
              <DropDownListItem onClick={() => handleDropDownFocus(open)}>
                <IndexLink
                  className={({ isActive }) => (isActive ? 'isActive' : '')}
                  to="/docs/faq#topAnchor"
                >
                  FAQ
                </IndexLink>
              </DropDownListItem>
            </DropDownList>
          )}
        </div>
      </div>
    </>
  )
}

export default DropDownDocsMenu
