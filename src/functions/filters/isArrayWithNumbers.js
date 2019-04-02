/**
 * @param {Number} element
 * @returns {Boolean}
 */
export default (element) => {
  return Array.isArray(element) && element.length !== 0 && element.every(Number.isInteger);
};
