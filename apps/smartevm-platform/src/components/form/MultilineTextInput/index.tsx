import styled from 'styled-components'

import {
  FieldErrors,
  FieldPath,
  FormState,
  RegisterOptions,
  UseFormClearErrors,
  UseFormGetFieldState,
  UseFormRegister,
} from 'react-hook-form'

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`

const Input = styled.textarea`
  width: 32em;
  min-height: 2.4em;
  font-size: 16px;
  padding: 0.5em 0.5em;
  border-radius: 0.42rem;
  border: 1px solid ${({ theme }) => theme.text1};
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

export function MultilineTextInput<FormValues>({
  clearErrors,
  disabled,
  formState,
  name,
  placeholder,
  readOnly,
  register,
  rules = {},
}: {
  name: FieldPath<FormValues>
  formState: FormState<FormValues>
  readOnly?: boolean
  disabled?: boolean
  placeholder?: string
  rules?: RegisterOptions
  clearErrors: UseFormClearErrors<FormValues>
  register: UseFormRegister<FormValues>
}) {
  const { errors, isDirty } = formState
  const error = (errors[name] as FieldErrors)?.message
  const { onBlur, onChange, ref } = register(name, rules)

  const onChangeHandler = (val) => {
    onChange(val)
    clearErrors(name)
  }

  return (
    <TextInputWrapper>
      <Input
        autoComplete="off"
        autoCorrect="off"
        disabled={disabled}
        minLength={1}
        name={name}
        onBlur={onBlur}
        onChange={onChangeHandler}
        placeholder={placeholder || ''}
        readOnly={readOnly}
        ref={ref}
        rows={10}
        spellCheck="false"
      />
      {error?.message && isDirty && <Error>{error?.message}</Error>}
    </TextInputWrapper>
  )
}

export default MultilineTextInput
