// Write your code here!
document.querySelector('main#main').remove()

//create up the new element h1, give it a CSS id of "victory", and give it innerHTML of what the tests wanted.
let newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "Jeremiah is the champion"

//Actually add the newHeader to the DOM
document.body.appendChild(newHeader)
