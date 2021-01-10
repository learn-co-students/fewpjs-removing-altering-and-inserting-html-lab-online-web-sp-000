// Write your code here!
let element = document.getElementById('main')
element.remove();

let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id = 'victory'
newHeader.innerHTML = "Brian is the champion";

