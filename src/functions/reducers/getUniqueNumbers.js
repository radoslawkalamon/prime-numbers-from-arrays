/**
 * @param {[...Number]} _prevValue
 * @param {[...Number]} _curValue
 * @returns {Array}
 */
export default (_prevValue, _curValue) => [...new Set([..._prevValue, ..._curValue])];
