// Write your code here!
let main = document.querySelector('#main');
main.remove(); 

let newHeader = document.createElement('h1')
newHeader.id = 'victory';
document.body.appendChild(newHeader);

let message = document.createElement('p');
message.innerHTML = "Kirsten is the champion.";
newHeader.appendChild(message);