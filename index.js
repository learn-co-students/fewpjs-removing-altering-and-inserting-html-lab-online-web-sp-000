// Write your code here!
document.getElementById('main').remove()

const newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.innerHTML = "Nate is the champion"
newHeader.id = "victory"