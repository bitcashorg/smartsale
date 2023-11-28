import { useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { loadTokenListFromAPI } from './actions'
import { AppDispatch, AppState } from '..'

export function useTokenListState(): AppState['tokenList'] {
  return useSelector<AppState, AppState['tokenList']>((state) => state.tokenList)
}

export function useTokenListActionHandlers(): {
  onLoadTokenList: (tokenList: { [key: string]: string }) => void
} {
  const dispatch = useDispatch<AppDispatch>()

  const onLoadTokenList = useCallback(
    (tokenList: { [key: string]: string }) => {
      dispatch(loadTokenListFromAPI({ tokenList }))
    },
    [dispatch],
  )

  return { onLoadTokenList }
}
