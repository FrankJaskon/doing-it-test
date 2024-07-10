'use client'

import { useCallback } from 'react'
import {
  Keypair,
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js'
import { useWalletState } from '@/core/services/wallet'

export const useWallet = () => {
  const {
    privateKey,
    setPrivateKey,
    publicKey,
    setPublicKey,
    balance,
    setBalance,
  } = useWalletState()

  const createWallet = useCallback(() => {
    const keypair = Keypair.generate()
    setPrivateKey(keypair.secretKey)
    setPublicKey(keypair.publicKey.toString())
    getBalance(keypair.publicKey.toString())
  }, [setPrivateKey, setPublicKey])

  const getBalance = useCallback(
    async (publicKey: string) => {
      const connection = new Connection('https://api.devnet.solana.com')
      const balance = await connection.getBalance(new PublicKey(publicKey))
      setBalance(balance / LAMPORTS_PER_SOL)
    },
    [setBalance],
  )

  return { privateKey, publicKey, balance, createWallet, getBalance }
}
