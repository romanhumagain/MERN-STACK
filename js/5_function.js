// function: Block of code that performs a specific task

// parameter hold the data that comes from the argument

/* 
function myFunction(parameters){
  performs some task

  return result;
}
*/

// Function Invocation: calling the function to execute the code inside the function


function greed(fname, lname){
  console.log(`Hello ${fname} ${lname}`)
};

greed("Roman", "Humagain");


// return statement returns the value and also stop the code to execute below the return statement 
function greeting(fname, lname){
  return `Hello ${fname} ${lname}`;
}

const value = greeting("Roman", "Humagai")
console.log(value)


function calsulateSum(num1, num2){
  sum = num1 + num2;
  return sum;
}

const result  = calsulateSum(8, 9)
console.log(result)

// function expression or anynomous function
// here the variable name is also the function name

const name = function(name){
  console.log(name)
}

name("Rooomannnn")

// using function expression or anynomous function to find the subtraction of two number

const subtraction = function(a, b){
  let sub = a - b;
  return sub;
}

console.log(subtraction(12,8))



// constructor function

function Person(name, age){
  this.name = name;
  this.age = age;

}

let person = new Person("Roman", 20)
console.log(person.name)