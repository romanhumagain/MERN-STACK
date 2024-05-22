// 1) Password Strength Checker: Write code using if/else statements to check the
// strength of a password based on its length. Print messages like &quot;Strong password,&quot;
// &quot;Medium password,&quot; or &quot;Weak password&quot; depending on the length criteria (e.g., strong:
// &gt; 12 characters, medium: 8-12 characters, weak: less than 8 characters).

let password = "romannnnn";
if(password.length>=12){
  console.log("Your password is strong !");
}
else if(password.length>=8 && password.length<12){
  console.log("Your password is medium.")
}
else{
  console.log("Your password is weak !")
}



// 2) Vowel or Consonant: Write a program using if/else to determine if a character entered
// by the user is a vowel (a, e, i, o, u) or a consonant. Consider uppercase and lowercase
// letters.

let char = "a";
if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
  console.log(`${char} is a vowel.`);
}
else{
  console.log(`${char} is consonant.`);
}



// 4) Calculate Price with Tax: Write code using if/else to calculate the final price of a
// product considering a sales tax rate (e.g., 8%). Take the product price and tax rate as
// inputs and print the final price with tax.
let product_price = 400;
let tax_rate = 10;

let final_price = product_price + (product_price * 0.1)
console.log(`Final price of product with ${tax_rate}% tax rate is ${final_price}`)




// 5) Simple Calculator: Develop a basic calculator using if/else statements. Allow the user
// to enter two numbers and an operator (+, -, *, /). Based on the operator, perform the
// calculation and print the result.
let num1 = 10;
let num2 = 5;
let operator = "-"

if(operator === "*"){
  console.log("The product of two number is:", num1*num2)
}
else if(operator === "/"){
  console.log("The division of two number is:", num1/num2)
}
else if(operator === "+"){
  console.log("The sum of two number is:", (num1+num2))
}
else if(operator === "-"){
  console.log("The subtraction of two number is:", num1-num2)
}
else{
  console.log("Invalid Operator")
};


// 7) Weekend or Weekday Checker: Create a program using if/else to determine if a
// given date (e.g., stored in a variable) falls on a weekend (Saturday or Sunday).
let day = "sunday";
if(day === "sunday"){
  console.log("Weekday");
}
else if(day === "saturday"){
  console.log("Weekend");
}



// 8) Positive, Zero, or Negative: Write code using if/else statements to check if a number
// is positive, zero, or negative. Print the corresponding message.

num1 = 0;

switch(true){
  case (num1 > 0):
  console.log(`${num1} is a positive number.`);
  break;
  
  case (num1 < 0):
  console.log(`${num1} is a negative number.`);
  break;

  default:
    console.log("The number is zero.")

}


// 9) Multiple of 3 or 5: Create a program using if/else to determine if a number is divisible
// by 3, 5, or both. Print a message indicating divisibility or non-divisibility.
let number = 15;
if (number%3 ===0 && number%5===0){
  console.log(`${number} is the multiple of 3 and 5.`);
}
else if (number%3 ===0 ){
  console.log(`${number} is the multiple of 3.`);
}
else if (number%5 ===0 ){
  console.log(`${number} is the multiple of 5.`);
}



// 10. Even or Odd Sum: Write code using if/else to check if the sum of two user-entered
// numbers is even or odd. Print the result.

let numb1 = 10;
let numb2 = 1;
let sum = numb1 + numb2;

if(sum %2 === 0){
  console.log(`The sum of two number is ${sum} and it is even number.`)
}
else{
  console.log(`The sum of two number is ${sum} and it is odd number.`)
}

