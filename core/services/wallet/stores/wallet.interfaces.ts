import { ReactNode } from 'react'

export interface IWalletContext {
  privateKey: Uint8Array | null
  publicKey: string | null
  balance: number | null
  setPrivateKey: (key: Uint8Array) => void
  setPublicKey: (key: string) => void
  setBalance: (balance: number) => void
}

export interface IWalletProvider {
  children: ReactNode
}
