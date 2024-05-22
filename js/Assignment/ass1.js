//1. Create two variables, one for your name and another for your age. Print a sentence combining those variables.
let fullName = "Roman Humagain";
let age = 21;
console.log("My name is " + fullName + " and I am " + age + " years old.");


//2. Assign the value 10 to a variable. Then multiply that variable by itself and store the result in another variable. Print the final value.
let num1 = 10;
let ans = num1 * num1;
console.log(ans); 


//3. Write code to check if the character stored in a variable is uppercase or lowercase. Print "uppercase" or "lowercase" accordingly.
let char = 'x'; 
if (char >= 'A' && char <= 'Z') {
    console.log("uppercase");
} else if (char >= 'a' && char <= 'z') {
    console.log("lowercase");
} else {
    console.log("Invalid Character");
}

//4. Declare two variables with numeric values. Add them together and print the sum. Then, subtract the smaller number from the larger number and store the difference in a new variable. Print the difference.
let numb1 = 12;
let numb2 = 18;
let sum = numb1 + numb2;
console.log("Sum: " + sum); 

let difference = numb2 - numb1;
console.log("Difference: " + difference); 


// Imagine you have a variable storing a product price. Write code to apply a 10% discount and print the discounted price.
let prod_price = 100; 
let discount_amnt = prod_price * 0.10;
let discountedPrice = prod_price - discount_amnt;
console.log("Discounted Price:" + discountedPrice); 

