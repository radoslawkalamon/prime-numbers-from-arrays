/* globals describe, it, expect, test_unit */

describe('Valid Arrays as arguments', () => {
  it('should return [1] when [1,1,1,1,1] and [1,1,1] has been passed', () => {
    expect(
      test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays([1, 1, 1, 1, 1], [1, 1, 1]),
    ).to.be.eql([1]);
  });

  it('should return [1,2,3] when [1,2,1,2,3,1] and [1,2,2,2,3,3] has been passed', () => {
    expect(
      test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays(
        [1, 2, 1, 2, 3, 1],
        [1, 2, 2, 2, 3, 3],
      ),
    ).to.be.eql([1, 2, 3]);
  });

  it('should return [1,3] when [1,3,4,5] and [1,3,8] has been passed', () => {
    expect(
      test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays([1, 3, 4, 5], [1, 3, 8]),
    ).to.be.eql([1, 3]);
  });

  it('should return [1,7,11,17] when [7,1,19,12,11,17] and [8,2,512,12,1,17,11,33,7] has been passed', () => {
    expect(
      test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays(
        [7, 1, 19, 12, 11, 17],
        [8, 2, 512, 12, 1, 17, 11, 33, 7],
      ),
    ).to.be.eql([1, 7, 11, 17]);
  });

  it('should return [11,17] when [4,8,12,46,54,32,11,17] and [17,4,10,12,16,20,40,11] has been passed', () => {
    expect(
      test_unit.Get_ASC_Sorted_Prime_Numbers_Occuring_In_Two_Arrays(
        [4, 8, 12, 46, 54, 32, 11, 17],
        [17, 4, 10, 12, 16, 20, 40, 11],
      ),
    ).to.be.eql([11, 17]);
  });
});
