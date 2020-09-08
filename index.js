// Write your code here!
document.querySelector('main').remove()
let el = document.createElement("h1")
el.id = "victory"
document.body.appendChild(el)
let newHeader = document.querySelector('h1')
newHeader.innerHTML = 'Ting is the champion'
//document.body.appendChild(newHeader)