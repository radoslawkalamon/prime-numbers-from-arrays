/**
 * @param {Number} _element
 * @returns {Boolean}
 */
export default (_element) => {
  const element = Math.abs(_element);
  for (let i = 2, s = Math.sqrt(element); i <= s; i += i) {
    if (element % i === 0) {
      return false;
    }
  }
  return element !== 0 && element !== 1;
};
