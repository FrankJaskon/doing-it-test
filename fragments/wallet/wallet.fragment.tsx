'use client'

import { memo, useCallback } from 'react'
import { HeaderFragment } from '@/fragments/header'
import { Text } from '@/ui/text'
import { ScreenLayout } from '@/fragments/screen-layout'
import { Spacer } from '@/ui/spacer'
import { BodyFragment } from '@/fragments/body'
import { useWallet } from '@/core/services/wallet'
import { useBalancePolling } from '@/core/services/wallet/hooks/use-balance-polling.hook'

export const WalletFragment = memo(function WalletFragment() {
  const { privateKey, publicKey, balance, createWallet } = useWallet()

  const handleWalletCreate = useCallback(() => {
    createWallet()
  }, [createWallet])

  useBalancePolling()

  return (
    <ScreenLayout
      header={
        <HeaderFragment
          onClick={handleWalletCreate}
          value={balance}
          buttonContent={<Text variant="body">Create new wallet</Text>}
        />
      }
      body={
        <BodyFragment>
          {publicKey ? (
            <>
              <Text wrap={false}>Address: {publicKey}</Text>
              <Spacer vertical={20} />
              <Text wrap={false}>
                Private Key: {Buffer.from(privateKey!).toString('hex')}
              </Text>
              <Spacer vertical={20} />
            </>
          ) : (
            <Text>Wallet is not created yet</Text>
          )}
        </BodyFragment>
      }
    />
  )
})
