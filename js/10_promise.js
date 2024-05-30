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

