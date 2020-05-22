// Write your code here!

// First test
let main = document.querySelector('main');
main.remove();

// Other tests
let h1 = document.createElement('h1');
h1.id = "victory";
h1.innerHTML = "JOEL is the champion!";

document.body.appendChild(h1);

let newHeader = document.querySelector('h1#victory');
