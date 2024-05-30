// 1. Write a function that takes two parameters and returns their sum.
let resultSum = function sum(a, b) {
  return a + b;
}
console.log("Sum:", resultSum(2,4)); 


// 2. Create a function that calculates the average of an array of numbers.
const arr = [1,2,3,4];

let average = 0
let sum = 0
for(let i =0;i<arr.length;i++){
  sum += arr[i];
}
average = sum / arr.length
console.log(average)


// 3. Write a function that checks if a given number is even or odd.
let number = 7;
let resultEvenOrOdd = function isEvenOrOdd(num) {
  if (num % 2 === 0) {
      return "even";
  } else {
      return "odd";
  }
}
console.log(number, "is", resultEvenOrOdd()); 


let newStr = "Roman";
function reverseString(str){
  return str.split('').reverse().join('');
}

console.log("The reverse String of " + newStr + " is " + reverseString(newStr))

// 5. Write a function that finds the maximum value in an array of numbers.
let numbers = [1, 2, 3, 4, 5];
let maxNumber = function findMax(arr) {
  if (arr.length === 0) {
      return undefined; 
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
  }
  return max;
}
console.log("The max number is ", maxNumber(numbers))

// 6. Create a function that converts Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

let celsius = 37;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C in Fahrenheit is: " + fahrenheit); 



// 8. Create a function that checks if a string is a palindrome.
function isPalindrome(str) {
  let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  let reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

let testStr1 = "A man, a plan, a canal, Panama";
let testStr2 = "hello";
console.log('"' + testStr1 + '" is a palindrome: ' + isPalindrome(testStr1)); 
console.log('"' + testStr2 + '" is a palindrome: ' + isPalindrome(testStr2)); 


// 9. Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

let sentence = "hello world! this is a test sentence.";
let capitalizedSentence = capitalizeFirstLetter(sentence);
console.log("Original Sentence:", sentence);
console.log("Capitalized Sentence:", capitalizedSentence); 


// 10. Create a function that returns the factorial of a given number.
function factorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}

let number1 = 5;
let result = factorial(number1);
console.log("Factorial of", number1, "is:", result);


//  Write a function that counts the number of occurrences of a specific element in an array.

function countOccurrences(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
          count++;
      }
  }
  return count;
}

let arr1 = [1, 2, 3, 4, 2, 2, 3, 1, 1];
let element = 2;
let occurrences = countOccurrences(arr1, element);
console.log(`The element ${element} occurs ${occurrences} times in the array.`); 


//  Write a function that merges two arrays and returns the sorted result.
function mergeAndSortArrays(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  mergedArray.sort(function(a, b) {
      return a - b; 
  });
  return mergedArray;
}

let arr11 = [1, 3, 5, 7];
let arr22 = [2, 4, 6, 8];
let mergedSortedArray = mergeAndSortArrays(arr11, arr22);
console.log("Merged and sorted array:", mergedSortedArray); 

