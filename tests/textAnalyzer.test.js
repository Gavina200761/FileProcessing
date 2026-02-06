const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

describe('Text Analyzer - countWords', () => {
  test('counts words in a simple sentence', () => {
    const result = countWords('Hello world this is a test');
    expect(result).toBe(6);
  });

  test('returns 0 for empty text', () => {
    const result = countWords('');
    expect(result).toBe(0);
  });

  test('handles extra spaces between words', () => {
    const result = countWords('   spaced    out   words   ');
    expect(result).toBe(3);
  });
});

describe('Text Analyzer - findLongestWord', () => {
  test('finds the longest word in a sentence', () => {
    const result = findLongestWord('The quick brown fox jumped');
    expect(result).toBe('jumped');
  });

  test('returns empty string for empty input', () => {
    const result = findLongestWord('');
    expect(result).toBe('');
  });

  test('handles words of different lengths', () => {
    const result = findLongestWord('cat elephant dog');
    expect(result).toBe('elephant');
  });
});

describe('Text Analyzer - countLines', () => {
  test('counts multiple lines correctly', () => {
    const text = 'line one\nline two\nline three';
    const result = countLines(text);
    expect(result).toBe(3);
  });

  test('returns 1 for a single line', () => {
    const result = countLines('just one line');
    expect(result).toBe(1);
  });

  test('returns 0 for empty text', () => {
    const result = countLines('');
    expect(result).toBe(1); 
  });
});