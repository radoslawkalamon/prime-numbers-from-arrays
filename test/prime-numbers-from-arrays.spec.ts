import getPrimeNumbersFromArrays from '../src/prime-numbers-from-arrays';

describe('Integration tests', () => {
  describe('Arguments number', () => {
    it('should return [] when no arguments passed', () => {
      const returnValue: unknown[] = [];
      expect(getPrimeNumbersFromArrays()).toEqual(returnValue);
    });

    it('should return [3] when 1 Array has been passed [3]', () => {
      const array1: number[] = [3];
      const returnValue: number[] = [3];
      expect(getPrimeNumbersFromArrays(array1)).toEqual(returnValue);
    });

    it('should return [3, 5, 7] when 10 Array has been passed', () => {
      const myArray: number[][] = [...Array(10).keys()].map((_element, _index) => [3 * _index, 5 * _index, 7 * _index, 9 * _index]);

      const returnValue: number[] = [3, 5, 7];
      expect(getPrimeNumbersFromArrays(...myArray)).toEqual(returnValue);
    });

    it('should return [2, 11, 13, 17] when 256 Array has been passed', () => {
      const myArray: number[][] = [...Array(256).keys()].map((_element, _index) => [
        2 * _index,
        17 * _index,
        11 * _index,
        13 * _index,
      ]);

      const returnValue: number[] = [2, 11, 13, 17];
      expect(getPrimeNumbersFromArrays(...myArray)).toEqual(returnValue);
    });
  });

  describe('Old test suite', () => {
    it('should return [] when [1, 1, 1, 1, 1] and [1, 1, 1] has been passed', () => {
      const array1: number[] = [1, 1, 1, 1, 1];
      const array2: number[] = [1, 1, 1];
      const returnValue: number[] = [];
      expect(getPrimeNumbersFromArrays(array1, array2)).toEqual(returnValue);
    });

    it('should return [2, 3] when [1, 2, 1, 2, 3, 1] and [1, 2, 2, 2, 3, 3] has been passed', () => {
      const array1: number[] = [1, 2, 1, 2, 3, 1];
      const array2: number[] = [1, 2, 2, 2, 3, 3];
      const returnValue: number[] = [2, 3];
      expect(getPrimeNumbersFromArrays(array1, array2)).toEqual(returnValue);
    });

    it('should return [3, 5] when [1, 3, 4, 5] and [1, 3, 8] has been passed', () => {
      const array1: number[] = [1, 3, 4, 5];
      const array2: number[] = [1, 3, 8];
      const returnValue: number[] = [3, 5];
      expect(getPrimeNumbersFromArrays(array1, array2)).toEqual(returnValue);
    });

    it('should return [7, 11, 17] when [7, 1, 19, 12, 11, 17] and [8, 2, 512, 12, 1, 17, 11, 33, 7] has been passed', () => {
      const array1: number[] = [7, 1, 19, 12, 11, 17];
      const array2: number[] = [8, 2, 512, 12, 1, 17, 11, 33, 7];
      const returnValue: number[] = [2, 7, 11, 17, 19];
      expect(getPrimeNumbersFromArrays(array1, array2)).toEqual(returnValue);
    });

    it('should return [11, 17] when [4, 8, 12, 46, 54, 32, 11, 17] and [17, 4, 10, 12, 16, 20, 40, 11] has been passed', () => {
      const array1: number[] = [4, 8, 12, 46, 54, 32, 11, 17];
      const array2: number[] = [17, 4, 10, 12, 16, 20, 40, 11];
      const returnValue: number[] = [11, 17];
      expect(getPrimeNumbersFromArrays(array1, array2)).toEqual(returnValue);
    });
  });
});
