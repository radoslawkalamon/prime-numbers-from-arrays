/**
 * @param {Array} _prevValue
 * @param {Array} _curValue
 * @returns {Array}
 */
export default (_prevValue, _curValue) => {
  const filteredCurValue = _curValue.filter(_element => !_prevValue.includes(_element));
  return [..._prevValue, ...filteredCurValue];
};
