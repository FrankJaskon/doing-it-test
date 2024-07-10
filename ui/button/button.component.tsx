import React, { FC } from 'react'
import { IButtonProps } from './button.interfaces'
import { getButtonStyles } from './button.styles'

export const Button: FC<IButtonProps> = ({
  fullWidth = false,
  variant = 'primary',
  onClick,
  children,
  ...restProps
}) => {
  const className = getButtonStyles({ fullWidth, variant })
  return (
    <button className={className} onClick={onClick} {...restProps}>
      {children}
    </button>
  )
}
