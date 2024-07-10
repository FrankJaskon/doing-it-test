import { IButtonProps } from '@/ui/button/button.interfaces'

const buttonVariantStyles = {
  primary:
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  secondary:
    'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200 ease-in-out',
}

export const getButtonStyles = ({ variant, fullWidth }: IButtonProps) => `
  ${buttonVariantStyles[variant!]} ${fullWidth ? 'w-full' : ''}
`
