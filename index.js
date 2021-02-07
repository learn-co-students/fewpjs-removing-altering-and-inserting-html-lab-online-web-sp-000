let main = document.querySelector('#main');

main.remove();

let newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.innerHTML = 'Catherine is the champion';

document.appendChild(newHeader);