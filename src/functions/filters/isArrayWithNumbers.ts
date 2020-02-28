/**
 * Check if element is array of integers.
 */
export default (element: unknown): element is number[] => Array.isArray(element) && element.every(Number.isInteger);
