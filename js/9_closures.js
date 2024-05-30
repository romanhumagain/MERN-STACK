// A closure is a feature in javascript where an inner function has access to the outer (enclosing ) functions variables

function outerFunction() {
  let outerVar = "This is a outside variable"

  function innnerFunction() {
    console.log(outerVar)
  }

  return innnerFunction;
}

const myClosure = outerFunction()
myClosure()  // This is a outside variable


// In this example, innerFunction is a closure that captures and remembers the variable outerVar from its outer function outerFunction