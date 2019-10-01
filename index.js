// Write your code here!

document.getElementById('main').remove();


let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.innerHTML = 'Tony is the champion';