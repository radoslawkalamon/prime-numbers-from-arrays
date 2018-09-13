/* globals describe, it, expect */
import isPrimeNumber from '../../../../src/functions/filters/isPrimeNumber';

describe('Function itself', () => {
  it('should return FALSE if -0 passed', () => {
    const value = -0;
    expect(isPrimeNumber(value)).toEqual(false);
  });
  it('should return FALSE if 0 passed', () => {
    const value = 0;
    expect(isPrimeNumber(value)).toEqual(false);
  });
  it('should return FALSE if -1 passed', () => {
    const value = -1;
    expect(isPrimeNumber(value)).toEqual(false);
  });
  it('should return FALSE if 1 passed', () => {
    const value = 1;
    expect(isPrimeNumber(value)).toEqual(false);
  });
  it('should return TRUE if -2 passed', () => {
    const value = -2;
    expect(isPrimeNumber(value)).toEqual(true);
  });
  it('should return TRUE if 2 passed', () => {
    const value = 2;
    expect(isPrimeNumber(value)).toEqual(true);
  });
  it('should return TRUE if -3 passed', () => {
    const value = -3;
    expect(isPrimeNumber(value)).toEqual(true);
  });
  it('should return TRUE if 3 passed', () => {
    const value = 3;
    expect(isPrimeNumber(value)).toEqual(true);
  });
  it('should return FALSE if -4 passed', () => {
    const value = -4;
    expect(isPrimeNumber(value)).toEqual(false);
  });
  it('should return FALSE if 4 passed', () => {
    const value = 4;
    expect(isPrimeNumber(value)).toEqual(false);
  });
  it('should return TRUE if big prime number passed', () => {
    const value = 179426549;
    expect(isPrimeNumber(value)).toEqual(true);
  });
  it('should return FALSE if big composite number passed', () => {
    const value = 160483000;
    expect(isPrimeNumber(value)).toEqual(false);
  });
});
