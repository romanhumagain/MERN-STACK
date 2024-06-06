const numbers = [2,4,6,8,10];

// using find
// it returns the first element after satisfying the condition
const foundNumber = numbers.find((num) => num>7);
console.log(foundNumber)  


// Using filter
// It returns the element that satisfiy the condition
const filteredNumber = numbers.filter(num=>num>5)
console.log(filteredNumber)

// using map
const squaredNumber = numbers.map(num => num ** 2);
console.log(squaredNumber)













