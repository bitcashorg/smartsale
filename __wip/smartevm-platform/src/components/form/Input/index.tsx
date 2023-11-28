import { rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'

import { Tooltip } from '../../common/Tooltip'
import { Label } from '../FormLabel'

const FieldRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-direction: row;
  gap: 2em !important;
  width: 100% !important;
  margin-bottom: 2em !important;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
  `}
`

const FieldRowLabel = styled.div`
  color: ${({ theme }) => rgba(theme.text1, 0.8)};
  font-size: 8px;
  font-weight: 600;
  line-height: 1.2;
  margin-right: auto;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: ${({ theme }) => theme.themeBreakPoints.xxs};
`

const LabelText = styled(Label)`
  margin-right: 8px;
  font-size: 16px;
`

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    align-items: flex-start;
  `}
`

interface Props {
  label: string
  tooltip: string
  value?: string
  readOnly?: boolean
  placeholder?: string
  children: React.ReactNode
}

const FormInput: React.FC<Props> = ({ children, label, tooltip }) => {
  return (
    <FieldRow>
      <FieldRowLabel>
        <LabelText>{label}</LabelText>
        <Tooltip text={tooltip} />
      </FieldRowLabel>
      <InputWrapper>{children}</InputWrapper>
    </FieldRow>
  )
}

export default FormInput
