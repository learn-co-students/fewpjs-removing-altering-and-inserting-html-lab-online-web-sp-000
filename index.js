
let main = document.getElementById('main');
main.remove();

let newHeader = document.createElement("h1")
document.body.appendChild(newHeader)



newHeader.classList.add('victory')
newHeader.innerHTML = "iii is the champion";
newHeader.id = 'victory'
