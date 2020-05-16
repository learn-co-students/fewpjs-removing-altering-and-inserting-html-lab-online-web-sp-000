// Write your code here!

let elementMain = document.querySelector("main#main");
elementMain.remove();

var newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Garrett is the champion";
