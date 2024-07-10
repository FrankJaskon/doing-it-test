'use client'

import React, { useState } from 'react'
import { WalletContext } from './wallet.context'
import { IWalletContext, IWalletProvider } from './wallet.interfaces'

export const WalletProvider: React.FC<IWalletProvider> = ({ children }) => {
  const [privateKey, setPrivateKeyState] = useState<Uint8Array | null>(null)
  const [publicKey, setPublicKeyState] = useState<string | null>(null)
  const [balance, setBalanceState] = useState<number | null>(null)

  const setPrivateKey = (key: Uint8Array) => {
    setPrivateKeyState(key)
  }

  const setPublicKey = (key: string) => {
    setPublicKeyState(key)
  }

  const setBalance = (balance: number) => {
    setBalanceState(balance)
  }

  const contextValue: IWalletContext = {
    privateKey,
    publicKey,
    balance,
    setPrivateKey,
    setPublicKey,
    setBalance,
  }

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  )
}
