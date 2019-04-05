/* globals describe, it, expect */
import isPrimeNumber from '../../../../src/functions/filters/isPrimeNumber';

describe('Function itself', () => {
  it('should return false if -4 passed', () => {
    expect(isPrimeNumber(-4)).toEqual(false);
  });
  it('should return false if -3 passed', () => {
    expect(isPrimeNumber(-3)).toEqual(false);
  });
  it('should return false if -2 passed', () => {
    expect(isPrimeNumber(-2)).toEqual(false);
  });
  it('should return false if -1 passed', () => {
    expect(isPrimeNumber(-1)).toEqual(false);
  });

  it('should return false if -0 passed', () => {
    expect(isPrimeNumber(-0)).toEqual(false);
  });
  it('should return false if 0 passed', () => {
    expect(isPrimeNumber(0)).toEqual(false);
  });

  it('should return false if 1 passed', () => {
    expect(isPrimeNumber(1)).toEqual(false);
  });
  it('should return true if 2 passed', () => {
    expect(isPrimeNumber(2)).toEqual(true);
  });
  it('should return true if 3 passed', () => {
    expect(isPrimeNumber(3)).toEqual(true);
  });
  it('should return false if 4 passed', () => {
    expect(isPrimeNumber(4)).toEqual(false);
  });
  it('should return true if big prime number passed', () => {
    expect(isPrimeNumber(179426549)).toEqual(true);
  });
  it('should return false if big composite number passed', () => {
    expect(isPrimeNumber(160483000)).toEqual(false);
  });
});
