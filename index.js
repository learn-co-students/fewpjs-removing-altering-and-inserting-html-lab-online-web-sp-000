// Write your code here!
let elementMain = document.querySelector("main#main");
elementMain.remove();


let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Arv is the champion";