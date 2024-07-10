import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  fullWidth?: boolean
}
