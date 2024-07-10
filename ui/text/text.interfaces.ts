import { ReactNode } from 'react'

type TextVariant = 'title' | 'body'

export interface ITextProps {
  variant?: TextVariant
  children: ReactNode
  wrap?: boolean
}
