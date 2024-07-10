import { ReactNode } from 'react'

export interface IHeaderFragment {
  onClick: VoidFunction
  buttonContent: ReactNode
  value: number | null
}
