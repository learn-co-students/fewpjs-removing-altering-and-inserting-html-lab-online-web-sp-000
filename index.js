// Write your code here!
const main = document.querySelector('main#main');
main.remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = "YOUR-NAME is the champion"
