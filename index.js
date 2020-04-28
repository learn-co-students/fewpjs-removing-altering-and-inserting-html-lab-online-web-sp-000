// Write your code here!

document.querySelector('main').remove()

let newH = document.createElement('h1');
newH.setAttribute('id', 'victory');
let name = "Kristy";
newH.textContent = "${name} is the champion";
document.body.appendChild(newH);
let newHeader = document.querySelector('h1#victory');




