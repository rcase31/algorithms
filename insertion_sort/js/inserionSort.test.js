const insertionSort = require('./insertionSort');

describe('insertionSort', () => {
  test('sorts an array of numbers in ascending order', () => {
    const unsortedArray = [4, 2, 1, 3, 5];
    const sortedArray = [1, 2, 3, 4, 5];
    expect(insertionSort(unsortedArray)).toEqual(sortedArray);
  });

  test('returns an empty array if given an empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });

  test('sorts an array of strings in ascending order', () => {
    const unsortedArray = ['apple', 'dog', 'cat', 'banana'];
    const sortedArray = ['apple', 'banana', 'cat', 'dog'];
    expect(insertionSort(unsortedArray)).toEqual(sortedArray);
  });
});
