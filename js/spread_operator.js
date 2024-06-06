// Before spread operator

const arr = [2,4,6];
const newArr = [5,6,7,arr[0], arr[1], arr[2]]

console.log("New array(before spread operator", newArr)

// using spread operator
const newArr1 = [5,6,7, ...arr]
console.log("New array(Using spread operator)", newArr1)


// concatenating arrays
let arr1 = [2,3,4]
let arr2 = [7,8,9]

console.log(...arr1, ...arr2)

// copying array
let copied_Arr = [...arr1]
console.log("Copied array", copied_Arr)

