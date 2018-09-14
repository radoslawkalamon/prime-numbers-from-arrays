/* eslint-disable no-console */
/* globals describe, it, expect, jest, beforeEach, afterEach */

import isArrayWithNumber from '../../../../src/functions/filters/isArrayWithNumbers';

describe('Not Arrays passed', () => {
  beforeEach(() => {
    jest.spyOn(global.console, 'warn');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return false on Object passed and console.warn should be called', () => {
    const element = {};
    expect(isArrayWithNumber(element)).toBeFalsy();
    expect(console.warn.mock.calls.length).toBe(1);
  });

  it('should return false on Boolean passed and console.warn should be called', () => {
    const element = true;
    expect(isArrayWithNumber(element)).toBeFalsy();
    expect(console.warn.mock.calls.length).toBe(1);
  });

  it('should return false on String passed and console.warn should be called', () => {
    const element = 'String';
    expect(isArrayWithNumber(element)).toBeFalsy();
    expect(console.warn.mock.calls.length).toBe(1);
  });

  it('should return false on Null passed and console.warn should be called', () => {
    const element = null;
    expect(isArrayWithNumber(element)).toBeFalsy();
    expect(console.warn.mock.calls.length).toBe(1);
  });

  it('should return false on Undefined passed and console.warn should be called', () => {
    const element = undefined;
    expect(isArrayWithNumber(element)).toBeFalsy();
    expect(console.warn.mock.calls.length).toBe(1);
  });
});

describe('Arrays passed', () => {
  beforeEach(() => {
    jest.spyOn(global.console, 'warn');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return true on [1] passed and console.warn should not be called', () => {
    const element = [1];
    expect(isArrayWithNumber(element)).toBeTruthy();
    expect(console.warn.mock.calls.length).toBe(0);
  });

  it('should return true on [1, 2, 3] and console.warn should not be called', () => {
    const element = [1, 2, 3];
    expect(isArrayWithNumber(element)).toBeTruthy();
    expect(console.warn.mock.calls.length).toBe(0);
  });

  it('should return false on empty Array passed and console.warn should be called', () => {
    const element = [];
    expect(isArrayWithNumber(element)).toBeFalsy();
    expect(console.warn.mock.calls.length).toBe(1);
  });

  it('should return false on [1, { key: "value" }, 3] and console.warn should be called', () => {
    const element = [1, { key: 'value' }, 3];
    expect(isArrayWithNumber(element)).toBeFalsy();
    expect(console.warn.mock.calls.length).toBe(1);
  });

  it('should return false on [1, 2, true] and console.warn should be called', () => {
    const element = [1, 2, true];
    expect(isArrayWithNumber(element)).toBeFalsy();
    expect(console.warn.mock.calls.length).toBe(1);
  });

  it("should return false on ['String', 2, 3] and console.warn should be called", () => {
    const element = ['String', 2, 3];
    expect(isArrayWithNumber(element)).toBeFalsy();
    expect(console.warn.mock.calls.length).toBe(1);
  });

  it('should return false on [1, [2, 2], 3] and console.warn should be called', () => {
    const element = [1, [2, 2], 3];
    expect(isArrayWithNumber(element)).toBeFalsy();
    expect(console.warn.mock.calls.length).toBe(1);
  });

  it('should return false on [1, 2, null] and console.warn should be called', () => {
    const element = [1, 2, null];
    expect(isArrayWithNumber(element)).toBeFalsy();
    expect(console.warn.mock.calls.length).toBe(1);
  });

  it('should return false on [1, 2, null] and console.warn should be called', () => {
    const element = [undefined, 2, 3];
    expect(isArrayWithNumber(element)).toBeFalsy();
    expect(console.warn.mock.calls.length).toBe(1);
  });
});
