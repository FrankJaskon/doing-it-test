import { memo } from 'react'
import { IBodyProps } from '@/fragments/body/body.interfaces'
import { Spacer } from '@/ui/spacer'

export const BodyFragment = memo(function BodyFragment({
  children,
}: IBodyProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Spacer vertical={20} />
      {children}
      <Spacer vertical={20} />
    </div>
  )
})
