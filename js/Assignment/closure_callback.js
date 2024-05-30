// 1. Write a JavaScript function add that takes two numbers as arguments and returns their
// sum. Provide an example of calling this function with two numbers.

const Sum = (a, b)=>{
  let sum = a+b;
  return sum;
}

let result = Sum(4,5);
console.log(result)


// 2. Write a JavaScript function getFirstElement that takes an array as an argument and
// returns the first element of the array. Provide an example with an array of your choice.

let arr = [2,4,6,8]
const getFirstElement = (arr)=>{
    return arr[0];
}

let first_element = getFirstElement(arr)
console.log(first_element)

// 3. Define a JavaScript object person with properties name, age, and city. Write a function
// getPersonInfo that takes this object and returns a string with the person&#39;s details in the
// format &quot;Name: [name], Age: [age], City: [city]&quot;.

const person = {
  name:"Roman Humagain",
  age: 21,
  city:"Bhaktapur"
}

const getPersonInfo = (person_info)=>{
  return `Name: ${person_info.name}, Age: ${person_info.age}, City: ${person_info.city}`
}

let detail = getPersonInfo(person)
console.log(detail)


// 4. Write a JavaScript function toUpperCase that takes a string as an argument and
// returns the string in all uppercase letters. Provide an example with a sample string.

str = "Roman"
const toUpperCase = (str)=>{
  return str.toUpperCase()
}

console.log(toUpperCase(str))


// 5. Write a JavaScript function multiply that takes two numbers as arguments and returns
// their product. Provide an example of calling this function with two numbers.

const multiply = (num1, num2)=>{
  return (num1 * num2)
}

console.log(multiply(2,8))

// 6. Write a JavaScript function getLastElement that takes an array as an argument and
// returns the last element of the array. Provide an example with an array of your choice.

let new_arr = [1,3,5,7]
const getLastElement = (arr)=>{
  return arr[arr.length - 1]
}

console.log(getLastElement(new_arr))


// 8. Write a JavaScript function reverseString that takes a string as an argument and
// returns the string reversed. Provide an example with a sample string.

new_str = "roman";
const reverseString = (str)=>{
  return str.split('').reverse().join('')
}

console.log(reverseString(new_str))


// 17. Write a JavaScript function doubleArray that takes an array of numbers as an
// argument and returns a new array with each number doubled. Provide an example with
// an array of numbers.

arr1 = [2,4,6,8]
const doubled_arr = arr1.map((element)=>{
  return element*2
})

console.log(doubled_arr)


// 22. Define a JavaScript object recipe with properties name, ingredients (an array), and
// servings. Write a function getIngredientList that takes this object and returns the
// ingredients array.

const recipe = {
  name: "Pancakes",
  ingredients: ["flour", "eggs", "milk", "sugar", "butter"],
  servings: 4
};

function getIngredientList(recipe) {
  return recipe.ingredients;
}

const ingredients = getIngredientList(recipe);
console.log(ingredients); // Output: ["flour", "eggs", "milk", "sugar", "butter"]


// 23. Write a JavaScript function endsWith that takes a string and a character as arguments
// and returns true if the string ends with the given character, otherwise false. Provide an
// example with a sample string and character.
function endsWith(string, char) {
  return string[string.length - 1] === char;
}

const sampleString = "Hello";
const sampleChar = "o";
console.log(endsWith(sampleString, sampleChar)); 




// 24. Write a JavaScript function divide that takes two numbers as arguments and returns
// their quotient. Provide an example of calling this function with two numbers.
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

const num1 = 10;
const num2 = 2;
console.log(divide(num1, num2)); 




// 25. Write a JavaScript function removeFirstElement that takes an array as an argument
// and returns a new array with the first element removed. Provide an example with an
// array.
function removeFirstElement(array) {
  return array.slice(1);
}

const sampleArray = [1, 2, 3, 4, 5];
const newArray = removeFirstElement(sampleArray);
console.log(newArray); 
