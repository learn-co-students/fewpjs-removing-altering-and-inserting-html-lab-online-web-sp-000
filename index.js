// Write your code here!
let element = document.querySelector("main#main")
element.remove()

let newHeader = document.createElement('h1')
newHeader.id = "victory"

let text = document.createTextNode("Rehman is the champion")
newHeader.appendChild(text)

document.body.appendChild(newHeader)
