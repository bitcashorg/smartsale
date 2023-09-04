import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import useInterval from '../../../hooks/useInterval'
import { useRemovePopup } from '../../../state/application/hooks'
import { TYPE } from '../../../theme'
import { CheckCircle } from '../../icons/CheckCircle'
import { CloseCircle } from '../../icons/CloseCircle'
import { AutoRow } from '../../swap/Row'

const Fader = styled.div<{ count: number }>`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: ${({ count }) => `calc(100% - (100% / ${150 / count}))`};
  height: 2px;
  background-color: ${({ theme }) => theme.bg3};
  transition: width 100ms linear;
`

const Wrap = styled.div`
  max-width: calc(100% - 80px);
  width: 100%;
`

const delay = 100

export default function SignerPopup({
  address,
  popKey,
  success,
  summary,
}: {
  address: string
  success?: boolean
  summary?: string
  popKey?: string
}) {
  const [count, setCount] = useState(1)

  const [isRunning, setIsRunning] = useState(true)
  const removePopup = useRemovePopup()

  const removeThisPopup = useCallback(() => removePopup(popKey), [popKey, removePopup])

  useInterval(
    () => {
      count > 150 ? removeThisPopup() : setCount(count + 1)
    },
    isRunning ? delay : null,
  )

  return (
    <AutoRow onMouseEnter={() => setIsRunning(false)} onMouseLeave={() => setIsRunning(true)}>
      {success ? (
        <CheckCircle color={'#27AE60'} style={{ marginRight: '15px' }} width="42" />
      ) : (
        <CloseCircle color={'#FF6871'} style={{ marginRight: '15px' }} width="42" />
      )}
      <Wrap>
        <TYPE.body fontWeight={500}>
          {summary ? summary : 'Address: ' + address.slice(0, 8) + '...' + address.slice(58, 65)}
        </TYPE.body>
      </Wrap>
      <Fader count={count} />
    </AutoRow>
  )
}
