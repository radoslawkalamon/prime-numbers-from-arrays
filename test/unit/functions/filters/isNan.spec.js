/* globals describe, it, expect */

import isNaNFunction from '../../../../src/functions/filters/isNaN';

describe('Function itself', () => {
  it('should return TRUE if Object passed', () => {
    const value = {};
    expect(isNaNFunction(value)).toEqual(true);
  });
  it('should return TRUE if Boolean passed', () => {
    const value = true;
    expect(isNaNFunction(value)).toEqual(true);
  });
  it('should return TRUE if Null passed', () => {
    const value = null;
    expect(isNaNFunction(value)).toEqual(true);
  });
  it('should return TRUE if Undefined passed', () => {
    const value = undefined;
    expect(isNaNFunction(value)).toEqual(true);
  });
  it('should return TRUE if String passed', () => {
    const value = '';
    expect(isNaNFunction(value)).toEqual(true);
  });
  it('should return FALSE if Number passed', () => {
    const value = 1077;
    expect(isNaNFunction(value)).toEqual(false);
  });
});

describe('With some()', () => {
  it('should return FALSE if Array with numbers and empty Object passed', () => {
    const element = [1, 2, 3, 4, {}];
    const isElementOnlyWithNumbers = !element.some(isNaNFunction);
    expect(isElementOnlyWithNumbers).toEqual(false);
  });

  it('should return FALSE if Array with numbers and Boolean passed', () => {
    const element = [1, 2, 3, 4, true];
    const isElementOnlyWithNumbers = !element.some(isNaNFunction);
    expect(isElementOnlyWithNumbers).toEqual(false);
  });

  it('should return FALSE if Array with numbers and Null passed', () => {
    const element = [1, 2, 3, 4, null];
    const isElementOnlyWithNumbers = !element.some(isNaNFunction);
    expect(isElementOnlyWithNumbers).toEqual(false);
  });

  it('should return FALSE if Array with numbers and Undefined passed', () => {
    const element = [1, 2, 3, 4, undefined];
    const isElementOnlyWithNumbers = !element.some(isNaNFunction);
    expect(isElementOnlyWithNumbers).toEqual(false);
  });

  it('should return FALSE if Array with numbers and empty string passed', () => {
    const element = [1, 2, 3, 4, ''];
    const isElementOnlyWithNumbers = !element.some(isNaNFunction);
    expect(isElementOnlyWithNumbers).toEqual(false);
  });

  it('should return TRUE if Array with numbers passed [+ INT]', () => {
    const element = [1, 2, 3, 4, 123];
    const isElementOnlyWithNumbers = !element.some(isNaNFunction);
    expect(isElementOnlyWithNumbers).toEqual(true);
  });

  it('should return TRUE if Array with numbers passed [-+ INT/FLOAT]', () => {
    const element = [1994.96, 3804.69, -4026, 1711.77, 3075, 2899.51, -2366, -4108.75, 1486, -3658];
    const isElementOnlyWithNumbers = !element.some(isNaNFunction);
    expect(isElementOnlyWithNumbers).toEqual(true);
  });
});
