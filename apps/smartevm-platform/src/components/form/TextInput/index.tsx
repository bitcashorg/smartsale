import styled from 'styled-components'

import {
  FieldErrors,
  FieldPath,
  FormState,
  RegisterOptions,
  UseFormClearErrors,
  UseFormGetFieldState,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form'

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`

const Input = styled.input`
  width: 32em;
  height: 2.4em;
  font-size: 16px;
  padding: 0 0.5em;
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

export function TextInput<FormValues>({
  clearErrors,
  formState,
  getFieldState,
  name,
  placeholder,
  readOnly,
  register,
  rules = {},
  showError = true,
  watch,
}: {
  formState: FormState<FormValues>
  name: FieldPath<FormValues>
  readOnly?: boolean
  placeholder?: string
  rules?: RegisterOptions
  showError?: boolean
  getFieldState: UseFormGetFieldState<FormValues>
  clearErrors?: UseFormClearErrors<FormValues>
  register: UseFormRegister<FormValues>
  watch?: UseFormWatch<FormValues>
}) {
  const { errors } = formState
  // const { isDirty } = getFieldState(name)
  const error = errors[name] as FieldErrors
  const { onBlur, onChange, ref } = register(name, rules)

  const onChangeHandler = (val) => {
    onChange(val)
    if (clearErrors) clearErrors(name)
  }
  if (watch) watch(name)

  return (
    <TextInputWrapper>
      <Input
        autoComplete="off"
        autoCorrect="off"
        maxLength={79}
        minLength={1}
        name={name}
        onBlur={onBlur}
        onChange={onChangeHandler}
        placeholder={placeholder || ''}
        readOnly={readOnly}
        ref={ref}
        spellCheck="false"
        type="text"
      />
      {error?.message && showError && <Error>{error?.message}</Error>}
    </TextInputWrapper>
  )
}

export default TextInput
