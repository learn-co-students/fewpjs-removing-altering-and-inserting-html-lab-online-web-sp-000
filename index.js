// Write your code here!
let main = document.querySelector('#main');
document.body.removeChild(main);

let victory = document.createElement('h1');
victory.id = 'victory';
victory.innerHTML = 'YOUR-NAME is the champion';
document.body.appendChild(victory);

let newHeader = document.querySelector('h1#victory');