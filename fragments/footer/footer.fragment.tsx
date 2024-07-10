'use client'
import { memo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/ui/button'

export const FooterFragment = memo(function HomeFragment() {
  const { push } = useRouter()

  const handleWalletClick = useCallback(() => push('/'), [push])
  const handleTransactionClick = useCallback(() => push('/transaction'), [push])

  return (
    <div className="flex items-center justify-around w-full">
      <Button variant="secondary" onClick={handleWalletClick}>
        Wallet
      </Button>
      <Button variant="secondary" onClick={handleTransactionClick}>
        Transaction
      </Button>
    </div>
  )
})
