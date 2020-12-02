// Write your code here!
let element = document.querySelector("main");
element.remove();

let newHeader = document.createElement("h1");
let victory = document.createElement("victory");
newHeader.setAttribute("id", "victory");
victory.innerHTML = "Neil is the champion";

newHeader.appendChild(victory);
document.body.appendChild(h1);
