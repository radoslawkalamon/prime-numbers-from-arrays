/**
 * Check if element is array of integers.
 */
export default (el: unknown): el is number[] => Array.isArray(el) && el.every(Number.isInteger);
