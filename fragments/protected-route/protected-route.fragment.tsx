'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useWalletState } from '@/core/services/wallet'
import { IProtectedRouteProps } from './protected-route.interfaces'

export const ProtectedRoute = ({
  children,
  path = '/',
}: IProtectedRouteProps) => {
  const { publicKey } = useWalletState()
  const router = useRouter()

  useEffect(() => {
    if (!publicKey) {
      router.push(path)
    }
  }, [path, publicKey, router])

  return <>{publicKey ? children : null}</>
}
