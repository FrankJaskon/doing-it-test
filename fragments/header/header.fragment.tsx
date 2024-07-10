import { memo } from 'react'
import { IHeaderFragment } from '@/fragments/header/header.interfaces'
import { Button } from '@/ui/button'
import { Text } from '@/ui/text'

export const HeaderFragment = memo(function HeaderFragment({
  onClick,
  buttonContent,
  value,
}: IHeaderFragment) {
  return (
    <div className="flex items-center justify-between w-full">
      <Button onClick={onClick}>{buttonContent}</Button>
      {value !== null && <Text>{value} SOL</Text>}
    </div>
  )
})
