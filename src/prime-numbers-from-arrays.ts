import isArrayWithNumbers from '@/functions/filters/isArrayWithNumbers'
import isPrimeNumber from '@/functions/filters/isPrimeNumber'
import getUniqueNumbers from '@/functions/reducers/getUniqueNumbers'
import sortASC from '@/functions/sorts/ascending'

/**
 * Get all prime numbers from arrays, sorted ascending
 */
export default function primeNumbersFromArrays (...args: unknown[]): number[] {
  return args
    .filter(isArrayWithNumbers)
    .reduce(getUniqueNumbers, [])
    .filter(isPrimeNumber)
    .sort(sortASC)
}
