import React from 'react'
import styled from 'styled-components'

import { InnerContainer } from '../../pureStyledComponents/InnerContainer'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.primary1};
  flex-shrink: 0;
  min-height: 30px;
  padding: 5px 0;
  width: 100%;
`

const Inner = styled(InnerContainer)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  color: ${({ theme }) => theme.text1};
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

interface Props {
  Icon?: JSX.Element | null
  className?: string
  text: string
}

export const TopBanner: React.FC<Props> = ({ Icon, className, text }) => {
  return (
    <Wrapper className={className}>
      <Inner>
        {Icon}
        <Text>{text}</Text>
      </Inner>
    </Wrapper>
  )
}
