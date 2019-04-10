/* globals describe, it, expect, jest, beforeEach, afterEach */

import isArrayWithNumber from '../../../../src/functions/filters/isArrayWithNumbers';

describe('Not Arrays passed', () => {
  it('should return false on Object passed', () => {
    expect(isArrayWithNumber({})).toBeFalsy();
  });

  it('should return false on Boolean passed', () => {
    expect(isArrayWithNumber(true)).toBeFalsy();
  });

  it('should return false on String passed', () => {
    expect(isArrayWithNumber('String')).toBeFalsy();
  });

  it('should return false on Null passed', () => {
    expect(isArrayWithNumber(null)).toBeFalsy();
  });

  it('should return false on Undefined passed', () => {
    expect(isArrayWithNumber(undefined)).toBeFalsy();
  });
});

describe('Arrays passed', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return true on empty Array passed', () => {
    expect(isArrayWithNumber([])).toBeTruthy();
  });

  it('should return true on [1] passed', () => {
    const element = [1];
    expect(isArrayWithNumber(element)).toBeTruthy();
  });

  it('should return true on [1, 2, 3]', () => {
    const element = [1, 2, 3];
    expect(isArrayWithNumber(element)).toBeTruthy();
  });

  it('should return false on [1, { key: "value" }, 3]', () => {
    const element = [1, { key: 'value' }, 3];
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it('should return false on [1, 2, true]', () => {
    const element = [1, 2, true];
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it("should return false on [1, 2, 'String']", () => {
    const element = [1, 2, 'String'];
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it('should return false on [1, [2, 2], 3]', () => {
    const element = [1, [2, 2], 3];
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it('should return false on [1, 2, null]', () => {
    const element = [1, 2, null];
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it('should return false on [1, 2, undefined]', () => {
    const element = [1, 2, undefined];
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it('should return false on [1, 2, Infinity]', () => {
    const element = [1, 2, Infinity];
    expect(isArrayWithNumber(element)).toBeFalsy();
  });
});
