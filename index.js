document.querySelector('main#main').remove();
let newHeader = document.createElement("H1");
newHeader.id = "victory";

let newHeaderText = document.createTextNode("YOUR-NAME is the champion");
newHeader.appendChild(newHeaderText);
