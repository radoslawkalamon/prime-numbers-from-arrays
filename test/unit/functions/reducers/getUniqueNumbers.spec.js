/* globals describe, it, expect */

import getUniqueNumbers from '../../../../src/functions/reducers/getUniqueNumbers';

describe('Function itself', () => {
  it('should return [1,2,3,4] from [1,2] & [3,4]', () => {
    const arrayOne = [1, 2];
    const arrayTwo = [3, 4];
    const expectValue = [1, 2, 3, 4];

    expect(getUniqueNumbers(arrayOne, arrayTwo)).toEqual(expectValue);
  });

  it('should return [1235, 3961, -3429, 4072, 801, 4458] from [1235, 3961, -3429, 4072] & [-3429, 4072, 801, 4458]', () => {
    const arrayOne = [1235, 3961, -3429, 4072];
    const arrayTwo = [-3429, 4072, 801, 4458];
    const expectValue = [1235, 3961, -3429, 4072, 801, 4458];

    expect(getUniqueNumbers(arrayOne, arrayTwo)).toEqual(expectValue);
  });

  it('should return [4458.22, -4738.54, 1321.66, 4072.10, 801.12] from [4458.22, -4738.54, 1321.66] & [4072.10, 801.12, 4458.22, -4738.54]', () => {
    const arrayOne = [4458.22, -4738.54, 1321.66];
    const arrayTwo = [4072.1, 801.12, 4458.22, -4738.54];
    const expectValue = [4458.22, -4738.54, 1321.66, 4072.1, 801.12];

    expect(getUniqueNumbers(arrayOne, arrayTwo)).toEqual(expectValue);
  });

  it('should return [1] from [1, 1, 1, 1] & [1,1,1,1,1,1]', () => {
    const arrayOne = [1, 1, 1, 1];
    const arrayTwo = [1, 1, 1, 1, 1, 1];
    const expectValue = [1];

    expect(getUniqueNumbers(arrayOne, arrayTwo)).toEqual(expectValue);
  });
});
