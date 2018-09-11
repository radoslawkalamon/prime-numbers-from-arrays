/* globals describe, it, expect */

import primeNumbers from '../src/prime-numbers-from-arrays';

describe('Simple test', () => {
  it('should be done', () => {
    expect(primeNumbers([1, 3, 2], [1, 2, 3, 4], [1, 2, 3, 4, [12, 3]], 123, [1, 2, 3, ''])).toBe(true);
  });
});
