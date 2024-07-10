'use client'

import { createContext } from 'react'
import { IWalletContext } from './wallet.interfaces'

export const WalletContext = createContext<IWalletContext | undefined>(
  undefined,
)
