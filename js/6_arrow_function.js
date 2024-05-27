const Mul = (a, b)=>{
  console.log("I am using arrow function to calculate the multiplication")
  return (a*b);
}

console.log(Mul(3,4));


const Div = (a,b)=>{
  return(a/b);
}

console.log(Div(6,2))


// using IIFE to invoke immediately

result = (function(a, b){
  return a*b;
})(2,2);

console.log(result)