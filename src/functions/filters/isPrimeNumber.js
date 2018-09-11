/**
 * @param {Number} _element
 * @returns {Boolean}
 */
export default (_element) => {
  for (let i = 2, s = Math.sqrt(_element); i <= s; i += i) {
    if (_element % i === 0) {
      return false;
    }
  }
  return _element !== 1;
};
