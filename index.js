// Write your code here!
document.querySelector('main').remove();

let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "is the champion";
document.querySelector('body').appendChild(newHeader);
