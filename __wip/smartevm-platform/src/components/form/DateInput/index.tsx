import React from 'react'
import styled from 'styled-components'

import DatePicker from 'react-datepicker'
import { Controller, RegisterOptions } from 'react-hook-form'
import { useMediaLayout } from 'use-media'

import 'react-datepicker/dist/react-datepicker.css'

import Calendar from '../../../assets/images/calendar.svg'
import { useAuctionForm } from '../../../hooks/useAuctionForm'
import { FormKeys, LaunchAuctionFormValues } from '../../../pages/LaunchAuction/formConfig'

const DateInputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Input = styled(DatePicker)`
  width: 100%;
  max-width: 32em;
  height: 2.4em;
  font-size: 16px;
  padding: 0 0.5em;
  border-radius: 0.42rem;
  border: 1px solid ${({ theme }) => theme.text1};
  margin: 0 !important;
  display: flex !important;
  cursor: pointer;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    margin-right: 1em;
    flex-direction: column;
  `}
`

const Error = styled.span`
  color: ${({ theme }) => theme.red1};
  font-size: 12px;
  font-weight: 500;
  margin-top: 0.5em;
`

const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  z-index: 1;
  top: 0.8em;
  right: 3em;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    right: 1.2em;
    top: 4em;
  `}
`

interface Props {
  name: FormKeys
  value?: Date
  rules?: RegisterOptions
  placeholder?: string
}

const DateInput: React.FC<Props> = ({ name, rules }) => {
  const { clearErrors, control, getFieldState, setValue } = useAuctionForm()

  const onDateChange: (date: Date) => void = (date) => {
    clearErrors(name)
    setValue(name, date)
  }

  const { error, isTouched } = getFieldState(name)

  const isMobile = useMediaLayout({ maxWidth: '600px' })

  return (
    <Controller<LaunchAuctionFormValues>
      control={control}
      defaultValue={null}
      name={name}
      render={({ field: { value } }) => (
        <DateInputWrapper>
          <Input name={name} onChange={onDateChange} selected={value} showTimeSelect={!isMobile} />
          <Image alt={'Icon'} src={Calendar} />
          {error?.message && isTouched && <Error>{error?.message}</Error>}
        </DateInputWrapper>
      )}
      rules={rules}
    />
  )
}

export default DateInput
