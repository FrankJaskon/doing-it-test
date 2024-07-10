import { useEffect } from 'react'
import { useWallet } from './use-wallet.hook'
import { useWalletState } from '@/core/services/wallet'

const POLLING_INTERVAL = 2000

export const useBalancePolling = () => {
  const { publicKey } = useWalletState()
  const { getBalance } = useWallet()

  useEffect(() => {
    if (!publicKey) return

    const intervalId = setInterval(() => {
      getBalance(publicKey)
    }, POLLING_INTERVAL)

    return () => clearInterval(intervalId)
  }, [publicKey, getBalance])
}
