// Write your code here!
main = document.querySelector("main#main");
main.remove()

let newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "Jonathan is the champion"
document.body.appendChild(newHeader)