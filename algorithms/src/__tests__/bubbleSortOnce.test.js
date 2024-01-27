const{ bubbleSortOnce } = require("../bubbleSortOnce/bubbleSortOnce");

describe('bubbleSortOnce', () => {
  it('sorts the list correctly for one iteration', () => {
    const input = [5, 3, 8, 6, 7, 2];
    const expectedOutput = [3, 5, 6, 7, 2, 8];
    bubbleSortOnce(input);
    expect(input).toEqual(expectedOutput);
  });

  it('leaves the list unchanged if it is already sorted', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    bubbleSortOnce(input);
    expect(input).toEqual(expectedOutput);
  });

  it('handles negative numbers correctly', () => {
    const input = [-5, 3, -8, 6, 7, 2];
    const expectedOutput = [-5, -8, 3, 6, 2, 7];
    bubbleSortOnce(input);
    expect(input).toEqual(expectedOutput);
  });

  it('handles duplicate numbers correctly', () => {
    const input = [5, 3, 8, 6, 7, 2, 8, 5];
    const expectedOutput = [3, 5, 6, 7, 2, 8, 5, 8];
    bubbleSortOnce(input);
    expect(input).toEqual(expectedOutput);
  });
});
