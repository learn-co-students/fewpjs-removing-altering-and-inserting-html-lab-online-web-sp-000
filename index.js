// Write your code here!
document.querySelector('main#main').remove()

let element = document.createElement('h1')

element.id = 'victory'

document.body.appendChild(element)

const newHeader = document.querySelector('h1#victory')

newHeader.innerHTML = "YOUR-NAME is the champion"