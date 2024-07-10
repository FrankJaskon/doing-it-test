import { ITextProps } from '@/ui/text/text.interfaces'

const variantStyles = {
  title: 'text-2xl font-bold',
  body: 'text-base',
}

export const getTextStyles = ({
  wrap,
  variant,
}: Omit<ITextProps, 'children'>) => `
  ${variantStyles[variant!]} max-w-full ${wrap ? 'break-words' : 'w-full truncate whitespace-nowrap overflow-hidden'}`
