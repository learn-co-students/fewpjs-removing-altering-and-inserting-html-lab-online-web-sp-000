// Write your code here!
let main = document.querySelector("main#main");
main.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Shaquille is the champion!";

let body = document.querySelector("body");
body.appendChild(newHeader);
