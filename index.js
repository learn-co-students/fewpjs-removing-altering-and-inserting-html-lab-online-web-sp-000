// Write your code here!
main.remove();

// document.body.appendChild(h1#victory);
let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = "Tatiana is the champion"
