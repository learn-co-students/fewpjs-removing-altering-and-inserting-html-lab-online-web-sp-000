const main = document.querySelector("main#main");
document.body.removeChild(main);

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "fancybandit is the champion";
document.body.appendChild(newHeader);