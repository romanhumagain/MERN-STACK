// 1. Promises
// Create a function fetchData that simulates fetching data from an API. The function should
// return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
// should represent a user with properties id, name, and age.

const fetchData = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const user = [
        {
          id:69,
          name:"Roman Humagain",
          age:21
        }
      ]
      resolve(user)
    }, 2000)
  })
}

fetchData().then((message)=>{
  console.log(message)
})


// 2. Closures
// Create a function createCounter that returns an object with two methods: increment and
// getCount. The increment method should increase the internal count by 1, and the getCount
// method should return the current count. Use a closure to maintain the internal count variable.

const createCounter = () => {
  let count = 0; // This variable is enclosed within the createCounter function

  return {
    increment() {
      count += 1;
    },
    getCount() {
      return count;
    },
  };
};

const counter = createCounter(); 
counter.increment(); 
const count_value = counter.getCount();
console.log(count_value)

// 3. Callbacks
// Create a function processData that accepts an array of numbers and a callback function. The
// function should process each number in the array using the callback function and return a
// new array of processed numbers.

let arr, processedArr;
const processData = (arr, callback)=>{

  processedArr = arr.map(callback)

}

const square = (num)=>{
  return num * num
}
arr = [1,2,3,4]

processData(arr, square)
console.log(processedArr)


// 4. Async/Await
// Rewrite the fetchData function from Question 1 using async and await.

const fetchDataAsync = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const user = [
        {
          id:69,
          name:"Roman Humagain",
          age:21
        }
      ]
      resolve(user)
    },5000)
  })
}

const getData = async()=>{
  const data = await fetchDataAsync()
  console.log(data)

}
getData()

// 5. Array Manipulation: Map

// Given an array of numbers, create a function that doubles each number using map.

const doubleNumbers = (numbers) => {
  return numbers.map(num => num * 2)
}

const numss = [1, 2, 3, 4, 5]
const doubled = doubleNumbers(numss)
console.log(doubled)


// 6. Array Manipulation: Filter

// Given an array of numbers, create a function that filters out numbers less than 10 using filter.


const filterNumbers = (numbers) => {
  return numbers.filter(num => num >= 10)
}

const nums1 = [4, 10, 15, 7, 20]
const filtered = filterNumbers(nums1)
console.log(filtered)


// 7. Array Manipulation: Find

// Given an array of numbers, create a function that finds the first number greater than 15 using find.


const findNumber = (numbers) => {
  return numbers.find(num => num > 15)
}

const nums11 = [4, 10, 15, 7, 20]
const found = findNumber(nums11)
console.log(found) 

// 8. Array Manipulation: Reduce

// Given an array of numbers, create a function that sums all numbers using reduce.


const sumNumbers = (numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0)
}

const nums = [1, 2, 3, 4, 5]
const sum = sumNumbers(nums)
console.log(sum) /


// 9. Object Manipulation

// Given an array of user objects, write a function to transform this array into an object where the keys are user IDs and the values are the corresponding user objects.

// const transformUsers = (users) => {
//   return users.reduce((obj, user) => {
//     obj[user.id] = user
//     return obj
//   }, {})
// }

// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 35 }
// ]

// const usersObject = transformUsers(users)
// console.log(usersObject)
