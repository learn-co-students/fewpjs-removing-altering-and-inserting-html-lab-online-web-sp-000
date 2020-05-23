let element = document.querySelector("main");
element.remove();

let header = document.createElement('header');
document.body.appendChild(header);

let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = 'Sarah is the champion';
header.appendChild(newHeader);
