'use client'

import { memo, useCallback } from 'react'
import { HeaderFragment } from '@/fragments/header'
import { useRouter } from 'next/navigation'
import { Text } from '@/ui/text'
import { ScreenLayout } from '@/fragments/screen-layout'
import { Input } from '@/ui/input'
import { Spacer } from '@/ui/spacer'
import { BodyFragment } from '@/fragments/body'
import { Button } from '@/ui/button'
import { useWallet } from '@/core/services/wallet'
import { useTransactionForm } from '@/fragments/transaction/services'
import { useBalancePolling } from '@/core/services/wallet/hooks/use-balance-polling.hook'

export const TransactionFragment = memo(function TransactionFragment() {
  const { back } = useRouter()
  const { balance } = useWallet()
  const {
    handleAmountChange,
    handleAddressChange,
    amount,
    toAddress,
    transactionStatus,
    handleSubmit,
  } = useTransactionForm()

  const handleBack = useCallback(() => {
    back()
  }, [back])

  useBalancePolling()

  return (
    <ScreenLayout
      header={
        <HeaderFragment
          onClick={handleBack}
          value={balance}
          buttonContent={<Text variant="body">Back</Text>}
        />
      }
      body={
        <BodyFragment>
          <form onSubmit={handleSubmit}>
            <Input
              type="number"
              placeholder="Введите кол-во sol"
              value={amount}
              onChange={handleAmountChange}
            />
            <Spacer vertical={20} />
            <Input
              placeholder="Введите адрес кошелька"
              value={toAddress}
              onChange={handleAddressChange}
            />
            <Spacer vertical={20} />
            <Button type="submit" fullWidth>
              Confirm
            </Button>
          </form>
          {transactionStatus && (
            <>
              <Spacer vertical={20} />
              <Text>{transactionStatus}</Text>
            </>
          )}
        </BodyFragment>
      }
    />
  )
})
