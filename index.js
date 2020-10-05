// Write your code here!
let element = document.getElementById('main');
element.remove();

let newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = "Rohan is the champion"
document.body.appendChild(newHeader)