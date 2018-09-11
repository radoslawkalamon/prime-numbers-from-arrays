/**
 * @param {Number} _element
 * @returns {Boolean}
 */

// Number.isNaN return true for Arrays...
// [1, 2, 3, 4, [12, '']].some(Number.isNaN) => false
// WTF???
export default _element => isNaN(_element) || _element === '';
