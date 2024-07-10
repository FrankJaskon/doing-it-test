import React, { FC } from 'react'
import { IInputProps } from './input.interfaces'
import { inputStyle } from './input.styles'

export const Input: FC<IInputProps> = ({
  value,
  onChange,
  placeholder,
  ...restProps
}) => {
  return (
    <input
      className={inputStyle}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...restProps}
    />
  )
}
