// Write your code here!

//      1) no longer has DOM node 'main#main'
document.querySelector('main#main').remove();

//      2) has a 'newHeader' variable that points to node 'h1#victory'
const newHeader = document.createElement('h1');

// has a 'newHeader' variable that points to node 'h1#victory'
newHeader.id = 'victory';

//      4) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.innerHTML = 'Dahlia is the champion';