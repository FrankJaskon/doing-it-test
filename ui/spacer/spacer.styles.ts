import { CSSProperties } from 'react'
import { ISpacerProps } from './spacer.interfaces'

export const getSpacerStyles = ({
  vertical,
  horizontal,
}: ISpacerProps): CSSProperties => ({
  height: vertical && `${vertical}px`,
  width: horizontal && `${horizontal}px`,
})
