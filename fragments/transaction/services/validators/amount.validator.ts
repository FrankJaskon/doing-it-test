export const amountValidator = (value: number, max: number | null) => {
  if (value < 0 || isNaN(value)) return false
  return !(max !== null && value > max)
}
