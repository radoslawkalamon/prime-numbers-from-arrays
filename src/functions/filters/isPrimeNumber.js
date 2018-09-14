/**
 * @param {Number} _element
 * @returns {Boolean}
 */
export default (_element) => {
  const element = Math.abs(_element);
  for (let i = 2; i < element; i += 1) {
    if (element % i === 0) {
      return false;
    }
  }
  return element > 1;
};
