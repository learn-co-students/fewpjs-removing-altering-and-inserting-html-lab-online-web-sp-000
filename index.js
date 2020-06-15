// Write your code here!
document.querySelector("main#main").remove()

let element = document.createElement('h1')
element.id = "victory"
document.body.appendChild(element)
element.innerHTML = "Nathan is the champion"

let newHeader = document.querySelector("h1")
