/**
 * Get the unique elements of two arrays.
 */
export default (a: number[], b: number[]): number[] => [...new Set([...a, ...b])]
