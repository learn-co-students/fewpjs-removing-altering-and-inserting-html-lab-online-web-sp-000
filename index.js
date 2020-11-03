let element = document.querySelector('#main');
element.remove();

let newHeader = document.createElement('h1');

newHeader.setAttribute("id", "victory");

newHeader.innerHTML = ' I is the champion';

// document.body.appendChild('ul');

// let ul = document.createElement('ul')

// for (let i = 0; i < 3; i++) {
//     let li = document.createElement('li')
//     li.innerHTML = (i + 1).toString()
//     ul.appendChild(li)
// }

// element.appendChild(ul)