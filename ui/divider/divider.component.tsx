import React, { memo } from 'react'
import { dividerStyle } from './divider.styles'

export const Divider: React.FC = memo(function Divider() {
  return <div className={dividerStyle} />
})
