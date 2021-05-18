// Write your code here!
let mainElem = document.body.querySelector('main#main');
mainElem.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
document.body.appendChild(newHeader);
newHeader.innerHTML = "YOUR-NAME is the champion";
