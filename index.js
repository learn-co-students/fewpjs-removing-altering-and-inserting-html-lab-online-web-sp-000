// Write your code here!
document.getElementById('main').remove();

let newHeader = document.createElement('h1');

newHeader.setAttribute("id", "victory");

let text  = document.createTextNode("Doak is the champion");

newHeader.appendChild(text);