const fs = require('fs');

//Convert file text into an array of numbers
function parseNumbers(text) {
  const lines = text.split(/\r?\n/); // splits file into lines
  const numbers = []; // empty array to store values

  for (let i = 0; i < lines.length; i++) { // loop to get to each line
    const value = lines[i].trim(); // removes extra spaces

    if (value.length > 0) { // ignores blank lines and converts text to numbers with parseFloat
      numbers.push(parseFloat(value));
    }
  }

  return numbers; // returns array of numbers
}

//Calculate the sum of all numbers in an array.
function sumNumbers(arr) {
  let sum = 0; 

  for (let i = 0; i < arr.length; i++) { // adds each number to running total
    sum += arr[i];
  }

  return sum; // returns final sum
}

//Find the highest number in an array.
function findMax(arr) {
  let max = arr[0]; // assumes first number is largest

  for (let i = 1; i < arr.length; i++) { // loops through and updates if a bigger number appears
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max; // returns largest number
}

//Find the lowest number in an array.
function findMin(arr) { // similar to the max method, but in reverse
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

//Calculate the average of an array of numbers.
function calculateAverage(arr) {
  if (arr.length === 0) return 0; // prevents division by 0
  return sumNumbers(arr) / arr.length;
}

// Exporting functions for use in tests or other files
module.exports = {
  parseNumbers,
  sumNumbers,
  findMax,
  findMin,
  calculateAverage
};

// verification
if (require.main === module) {
  const filePath = 'data/sample-numbers.txt';
  const text = fs.readFileSync(filePath, 'utf8');

  const numbers = parseNumbers(text);

  console.log(`\nAnalyzing: ${filePath}`);
  console.log('Numbers:', numbers);
  console.log('Sum:', sumNumbers(numbers));
  console.log('Highest:', findMax(numbers));
  console.log('Lowest:', findMin(numbers));
  console.log('Average:', calculateAverage(numbers));
}
