const twoSum = require("../twoSum/twoSum")

const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('should return [0, 1] for nums=[2, 7, 11, 15] and target=9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('should return [1, 2] for nums=[3, 2, 4] and target=6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('should return [0, 2] for nums=[3, 2, 3] and target=6', () => {
    expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
  });

  it('should return [1, 3] for nums=[10, 20, 30, 40] and target=60', () => {
    expect(twoSum([10, 20, 30, 40], 60)).toEqual([1, 3]);
  });

  it('should return null for nums=[1, 1, 2] and target=10', () => {
    expect(twoSum([1, 1, 2], 10)).toEqual(null);
  });
});
