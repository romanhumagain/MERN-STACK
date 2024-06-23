/*  
DOM provided several method to select
getElementById
getElementByClassName
querySelector
querySelectorAll
*/

let titleElement = document.getElementById('title')
let paragraphElement = document.getElementsByClassName('content')
const listElements = document.getElementsByTagName('li')
console.log(listElements)

let content = titleElement.textContent
titleElement.textContent = "Hello CHAT GPT"


// .textContent is used to get the content from that element
console.log(titleElement.textContent)
console.log(paragraphElement[0].textContent)


let paragraphElements = document.querySelectorAll('.content')

// for(let i =0; i<paragraphElements.length;i++){
//   paragraphElement[i].innerHTML = 'This is a <strong>Modified</strong> paragraph.'
// }

for(i in paragraphElements){
  paragraphElements[i].innerHTML = "HELLO CHAT GPT";

}




// paragraphElement.innerHTML = 'This is a <strong>Modified</strong> paragraph.'



