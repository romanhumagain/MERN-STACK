// a function passed as an argument to another function and invoked within that function is callback function
// It is commonly used for asynchronous operations or event handling

function greet(name, callback){
  console.log("Hello", name)
  callback()
}

greet("Roman", ()=>{
  console.log("And this is a call back function !")
})

function add(a, b, printResult){
  printResult()
  return a+b;
}

let result = add(4,5, printResult);
console.log(result)

function printResult(){
  console.log("The result is printed below !")
}

function add(a, b, callback){
  console.log("Sum is ", a+b)
  callback(4,1)
}

function sub(a, b){
  console.log("Sub is", a-b)
}

add(2,2, sub)