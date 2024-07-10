import { useContext } from 'react'
import { WalletContext } from './wallet.context'

export const useWalletState = () => {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error('useWalletState must be used within a WalletProvider')
  }
  return context
}
