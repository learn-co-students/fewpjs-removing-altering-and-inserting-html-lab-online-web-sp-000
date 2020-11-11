// Write your code here!

// no longer has DOM node 'main#main'
main.remove()

// has a 'newHeader' variable that points to node 'h1#victory'
let newHeader = document.createElement('h1'); // create element
newHeader.id = 'victory'; // add id to that element
newHeader.innerHTML = "Noelle is the champion"; // add text 
document.body.appendChild(newHeader) // append el to DOM node