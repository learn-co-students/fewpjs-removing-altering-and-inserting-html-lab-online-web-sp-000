// Write your code here!
let main = document.getElementById('main')
main.remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "John is the champion";