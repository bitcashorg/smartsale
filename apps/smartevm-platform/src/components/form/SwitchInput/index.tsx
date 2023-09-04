import React, { useEffect } from 'react'
import styled from 'styled-components'

import { Controller, RegisterOptions, useWatch } from 'react-hook-form'

import { useAuctionForm } from '../../../hooks/useAuctionForm'
import { FormKeys, LaunchAuctionFormValues } from '../../../pages/LaunchAuction/formConfig'
import { Switch } from '../Switch'

const SwitchInputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Error = styled.span`
  color: ${({ theme }) => theme.red1};
  font-size: 12px;
  font-weight: 500;
  margin-top: 0.5em;
`

interface Props {
  name: FormKeys
  rules?: RegisterOptions
  placeholder?: string
  triggerOnChange?: FormKeys
}

const SwitchInput: React.FC<Props> = ({ name, rules, triggerOnChange }) => {
  const { control, getFieldState, setValue, trigger } = useAuctionForm()

  const { error } = getFieldState(name)

  const watch = useWatch({ control, name: triggerOnChange, disabled: !triggerOnChange })

  useEffect(() => {
    trigger()
  }, [watch, trigger])

  return (
    <Controller<LaunchAuctionFormValues>
      control={control}
      defaultValue={null}
      name={name}
      render={({ field: { value } }) => (
        <SwitchInputWrapper>
          <Switch active={!!value} disabled={false} onClick={() => setValue(name, !value)} />
          {error?.message && <Error>{error?.message}</Error>}
        </SwitchInputWrapper>
      )}
      rules={rules}
    />
  )
}

export default SwitchInput
