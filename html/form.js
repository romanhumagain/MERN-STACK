let inputElement = document.getElementById("myInput")
console.log(inputElement.type);
console.log(inputElement.value);

inputElement.value = "new value";
console.log(inputElement.value);

inputElement.setAttribute("value", "second new value")

if (inputElement.hasAttribute("class")){
  console.log("class exists")
}
else{
  console.log("Doesn't exists")
}