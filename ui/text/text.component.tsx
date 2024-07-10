import React, { useMemo } from 'react'
import { ITextProps } from './text.interfaces'
import { getTextStyles } from './text.styles'

export const Text: React.FC<ITextProps> = ({
  variant = 'body',
  children,
  wrap = true,
}) => {
  const className = useMemo(
    () => getTextStyles({ variant, wrap }),
    [variant, wrap],
  )
  return <div className={className}>{children}</div>
}
