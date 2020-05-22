// Write your code here!

let main = document.getElementById('main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');

let myJob = document.getElementById('victory');
newHeader.textContent = 'Lorena is the champion';

myJob.appendChild(newHeader);