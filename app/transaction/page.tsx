import { TransactionFragment } from '@/fragments/transaction'
import { ProtectedRoute } from '@/fragments/protected-route'

export default function Transaction() {
  return (
    <ProtectedRoute>
      <TransactionFragment />
    </ProtectedRoute>
  )
}
