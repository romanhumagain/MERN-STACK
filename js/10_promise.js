// Promise provide a way to handle asynchronous operations by representing the eventual completion of an asynchrounous operations and its resulting value

let promise = new Promise((resolve, reject)=>{
  let success = false

  if(success){
    resolve("Promise resolved !")
  }
  else{
    reject("ERROR OCCURS")
  }
})

promise.then((message)=>{
  console.log(message)
}).catch((error)=>{
  console.log(error)
})

let promise1 = new Promise((resolve, reject)=>{
  let num1 = 8;
  let num2 = 7;

  let sub = num1 - num2;
  if(sub<5){
    resolve("Value is less then 5, promise resolved")
  }
  else{
    reject("Value is greated then 5, promise rejected")
  }
})

promise1.then((message)=>{
  console.log(message)
}).catch((error)=>{
  console.log(error)
})

