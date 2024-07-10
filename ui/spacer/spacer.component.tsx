import React, { FC, memo } from 'react'
import { ISpacerProps } from './spacer.interfaces'
import { getSpacerStyles } from './spacer.styles'

export const Spacer: FC<ISpacerProps> = memo(function Spacer(props) {
  const className = getSpacerStyles(props)
  return <div style={className} />
})
