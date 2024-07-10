'use client'

import { useCallback, useState } from 'react'
import {
  Keypair,
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js'
import { useWalletState } from '@/core/services/wallet'

export const useTransaction = () => {
  const { privateKey } = useWalletState()
  const [transactionStatus, setTransactionStatus] = useState<string | null>(
    null,
  )

  const sendTransaction = useCallback(
    async (toAddress: string, amount: number) => {
      if (!privateKey) {
        setTransactionStatus('Wallet is not created yet')
        return
      }
      setTransactionStatus('Processing...')
      const fromWallet = Keypair.fromSecretKey(privateKey)
      const connection = new Connection('https://api.devnet.solana.com')
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: fromWallet.publicKey,
          toPubkey: new PublicKey(toAddress),
          lamports: amount * LAMPORTS_PER_SOL,
        }),
      )

      try {
        const signature = await sendAndConfirmTransaction(
          connection,
          transaction,
          [fromWallet],
        )
        setTransactionStatus(`Transaction successful! Signature: ${signature}`)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setTransactionStatus(`Transaction failed! Error: ${error.message}`)
        }
      }
    },
    [privateKey],
  )

  return { sendTransaction, transactionStatus }
}
