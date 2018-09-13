/* globals describe, it, expect */
import ascending from '../../../../src/functions/sorts/ascending';

describe('Function itself', () => {
  it('should substract', () => {
    expect(ascending(65, 34)).toEqual(31);
  });
});

describe('with sort()', () => {
  it('should sorts Array ascending [INT]', () => {
    const myArray = [2577, 4284, 2823, 2364, 2271];
    expect(myArray.sort(ascending)).toEqual([2271, 2364, 2577, 2823, 4284]);
  });

  it('should sorts Array ascending [FLOAT]', () => {
    const myArray = [2997.41, 1762.04, 2946.94, 4442.86, 1735.23];
    expect(myArray.sort(ascending)).toEqual([1735.23, 1762.04, 2946.94, 2997.41, 4442.86]);
  });

  it('should sorts Array ascending [+INT/FLOAT]', () => {
    const myArray = [976.15, 167, 588.52, 2377, 1462];
    expect(myArray.sort(ascending)).toEqual([167, 588.52, 976.15, 1462, 2377]);
  });

  it('should sorts Array ascending [-INT/FLOAT]', () => {
    const myArray = [-1876.58, -1592.61, 1804.81, -2093.75, -1172.39];
    expect(myArray.sort(ascending)).toEqual([-2093.75, -1876.58, -1592.61, -1172.39, 1804.81]);
  });
});
