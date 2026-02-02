const fs = require('fs');

function countWords(text) { //Counts the number of words in a string.
  if (!text || text.trim() === '') { // checks if text is only whitespace after trim.
    return 0; // returns because this means no word count.
  }

  const words = text.trim().split(/\s+/); // removes leading and trailing spaces.
  return words.length; // returns number of elements in words array == total num count.
}

function findLongestWord(text) { // find the longest word in a text.
  if (!text || text.trim() === '') { // again checks for missing or whitespace.
    return ''; // returns this since there is no usable words.
  }

  const words = text.trim().split(/\s+/); // trims text and splits into array of words.
  let longest = words[0]; // initializes current largest word.

  for (let i = 1; i < words.length; i++) { // loop, if current word is longer, then updates longest.
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest; // returns longest after cycling through all words.
}

function countLines(text) { // Count how many lines there are in the text.
  if (!text) { // checks if text is empty or whitespace and returns 0 if so.
    return 0;
  }

  const lines = text.split(/\r?\n/); // splits text into array of lines, them matches unix line endings and windows line endings.
  return lines.length; // returns number of lines in array.
}

//Exporting functions to be used in other files.

module.exports = {
  countWords,
  findLongestWord,
  countLines
};



if (require.main === module) {
  const files = [
    'data/quotes.txt',
    'data/sample-text.txt'
  ];

  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');

    console.log(`\nAnalyzing: ${file}`);
    console.log('Total Words:', countWords(text));
    console.log('Longest Word:', findLongestWord(text));
    console.log('Total Lines:', countLines(text));
  }
}

