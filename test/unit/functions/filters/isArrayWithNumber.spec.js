/* globals describe, it, expect, jest, beforeEach, afterEach */

import isArrayWithNumber from '../../../../src/functions/filters/isArrayWithNumbers';

describe('Not Arrays passed', () => {
  it('should return false on Object passed', () => {
    const element = {};
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it('should return false on Boolean passed', () => {
    const element = true;
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it('should return false on String passed', () => {
    const element = 'String';
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it('should return false on Null passed', () => {
    const element = null;
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it('should return false on Undefined passed', () => {
    const element = undefined;
    expect(isArrayWithNumber(element)).toBeFalsy();
  });
});

describe('Arrays passed', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return true on [1] passed', () => {
    const element = [1];
    expect(isArrayWithNumber(element)).toBeTruthy();
  });

  it('should return true on [1, 2, 3]', () => {
    const element = [1, 2, 3];
    expect(isArrayWithNumber(element)).toBeTruthy();
  });

  it('should return false on empty Array passed', () => {
    const element = [];
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it('should return false on [1, { key: "value" }, 3]', () => {
    const element = [1, { key: 'value' }, 3];
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it('should return false on [1, 2, true]', () => {
    const element = [1, 2, true];
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it("should return false on ['String', 2, 3]", () => {
    const element = ['String', 2, 3];
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

  it('should return false on [undefined, 2, 3]', () => {
    const element = [undefined, 2, 3];
    expect(isArrayWithNumber(element)).toBeFalsy();
  });

  it('should return false on [1, 2, Infinity]', () => {
    const element = [1, 2, Infinity];
    expect(isArrayWithNumber(element)).toBeFalsy();
  });
});
