import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useTransaction, useWallet } from '@/core/services/wallet'
import { amountValidator } from '@/fragments/transaction/services/validators'

export const useTransactionForm = () => {
  const { balance } = useWallet()
  const { sendTransaction, transactionStatus } = useTransaction()
  const [amount, setAmount] = useState('')
  const [toAddress, setToAddress] = useState('')

  const handleAmountChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const isValid = amountValidator(Number(e.target.value), balance)
      isValid && setAmount(e.target.value)
    },
    [balance],
  )

  const handleAddressChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setToAddress(e.target.value),
    [],
  )

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      sendTransaction(toAddress, parseFloat(amount))
    },
    [sendTransaction, toAddress, amount],
  )

  return {
    amount,
    toAddress,
    transactionStatus,
    handleAmountChange,
    handleAddressChange,
    handleSubmit,
  }
}
