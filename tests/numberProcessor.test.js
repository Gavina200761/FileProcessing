const {
  parseNumbers,
  sumNumbers,
  findMax,
  findMin,
  calculateAverage
} = require('../src/numberProcessor');

describe('Number Processor - sumNumbers', () => {
  test('calculates the sum of all numbers', () => {
    const result = sumNumbers([5, 10, 15]);
    expect(result).toBe(30);
  });

  test('returns 0 for an empty array', () => {
    const result = sumNumbers([]);
    expect(result).toBe(0);
  });
});

describe('Number Processor - findMax', () => {
  test('finds the highest number in an array', () => {
    const result = findMax([3, 9, 2, 14, 7]);
    expect(result).toBe(14);
  });

  test('works with negative numbers', () => {
    const result = findMax([-10, -3, -20]);
    expect(result).toBe(-3);
  });
});

describe('Number Processor - findMin', () => {
  test('finds the lowest number in an array', () => {
    const result = findMin([3, 9, 2, 14, 7]);
    expect(result).toBe(2);
  });

  test('works with negative numbers', () => {
    const result = findMin([-10, -3, -20]);
    expect(result).toBe(-20);
  });
});

describe('Number Processor - calculateAverage', () => {
  test('calculates the average of numbers', () => {
    const result = calculateAverage([10, 20, 30]);
    expect(result).toBe(20);
  });

  test('returns 0 for an empty array', () => {
    const result = calculateAverage([]);
    expect(result).toBe(0);
  });
});

describe('Number Processor - parseNumbers', () => {
  test('parses text into an array of numbers', () => {
    const text = '10\n20\n30';
    const result = parseNumbers(text);
    expect(result).toEqual([10, 20, 30]);
  });

  test('ignores blank lines', () => {
    const text = '5\n\n10\n\n15';
    const result = parseNumbers(text);
    expect(result).toEqual([5, 10, 15]);
  });
});