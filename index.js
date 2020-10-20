// Write your code here!
main.remove();

let header = document.createElement('h1');
header.id = 'victory';
document.body.appendChild(header);
let newHeader = document.querySelector('h1#victory');
newHeader.innerHTML = "YOUR-NAME is the champion";
