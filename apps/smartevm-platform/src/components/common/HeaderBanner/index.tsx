import React from 'react'
import styled from 'styled-components'

import { WarningIcon } from '../../icons/WarningIcon'
import { InnerContainer } from '../../pureStyledComponents/InnerContainer'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.primary2};
  flex-shrink: 0;
  min-height: 30px;
  padding: 5px 0;
  width: 100%;
`

const Inner = styled(InnerContainer)`
  flex-direction: row;
  justify-content: flex-start;
`
const Icon = styled(WarningIcon)`
  height: 22px;
  flex-shrink: 0;
  position: relative;
`
const Text = styled.div`
  color: ${({ theme }) => theme.text2};
  font-size: 15px;
  font-weight: 700;
  hyphens: auto;
  line-height: 1.3;
  margin-left: 5px;
  max-width: 100%;
  overflow-wrap: break-word;
  text-align: left;
  white-space: normal;
  word-wrap: break-word;
`

export const HeaderBanner: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <Icon />
        <Text>
          Our database service will be under maintenance on 22 May 2023 from 05:00 - 06:00 UTC.
          There might be slight delays with auction interactions.
        </Text>
      </Inner>
    </Wrapper>
  )
}
