document.querySelector('main#main').remove()

let header = document.createElement("h1");

header.id = 'victory';

header.innerHTML = "RAY is the champion"

document.body.appendChild(header);

let newHeader = document.querySelector("h1#victory")
