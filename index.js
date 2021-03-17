// Write your code here!
let main = document.querySelector("main")
main.remove()

let newHeader = document.createElement("h1")
newHeader.id = "victory"

let text = document.createTextNode("Nat is the champion");

newHeader.appendChild(text)