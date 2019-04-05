/**
 * Get the unique elements of two arrays.
 *
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */
export default (a, b) => [...new Set([...a, ...b])];
