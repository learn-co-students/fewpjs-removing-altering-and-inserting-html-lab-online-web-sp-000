// Write your code here!
let element = document.getElementById('main')

element.remove();

let newHeader = document.createElement('h1');
newHeader.id = "victory"
newHeader.innerHTML= "X is the champion";

// newHeader.innerHTML = "<h1 id = 'vitory'>X is the champion</h1>"