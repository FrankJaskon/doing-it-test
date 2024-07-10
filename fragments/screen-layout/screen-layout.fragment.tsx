import React, { FC } from 'react'
import { IScreenLayoutProps } from './screen-layout.interfaces'
import { screenLayoutStyles } from './screen-layout.styles'
import { Spacer } from '@/ui/spacer'
import { Divider } from '@/ui/divider'
import { FooterFragment } from '@/fragments/footer'

export const ScreenLayout: FC<IScreenLayoutProps> = ({ header, body }) => {
  return (
    <main className={screenLayoutStyles}>
      {header}
      <Spacer vertical={20} />
      <Divider />
      {body}
      <Spacer vertical={100} />
      <Divider />
      <Spacer vertical={20} />
      <FooterFragment />
    </main>
  )
}
