const arr = [1,2,3,4,5]


// const first = arr[0]
// let rest = arr.slice(3) //collecting the rest of the element


// console.log("First element", first)
// console.log("Rest of the element", rest) //[ 2, 3 ]

const[a,b, ...rest] = arr;
console.log(a)
console.log(b)
console.log(rest)
