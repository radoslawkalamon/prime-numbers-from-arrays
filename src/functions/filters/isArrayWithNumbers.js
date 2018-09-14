/* eslint-disable no-console */

import TEXT from '../../strings';
import isNaN from './isNaN';

/**
 * @param {Number} _element
 * @returns {Boolean}
 */
export default (_element) => {
  const isElementArray = Array.isArray(_element);
  if (isElementArray === false) {
    console.warn(TEXT.elementNotAnArray, _element);
    return false;
  }

  const isElementOnlyWithNumbers = !_element.some(isNaN) && _element.length !== 0;
  if (isElementOnlyWithNumbers === false) {
    console.warn(TEXT.elementNotOnlyNumbers, _element);
    return false;
  }

  return true;
  // return _element.length !== 0 && Array.isArray(_element) && !_element.some(isNaN);
};
