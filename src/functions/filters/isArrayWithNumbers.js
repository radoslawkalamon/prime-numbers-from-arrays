/**
 * Check if element is array of integers.
 *
 * @param {Array} element
 * @returns {Boolean}
 */
export default (element) => {
  return Array.isArray(element) && element.every(Number.isInteger);
};
