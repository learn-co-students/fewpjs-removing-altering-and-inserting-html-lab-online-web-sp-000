// Write your code here!
let element = document.createElement('div')

document.body.appendChild(element)

let ul = document.createElement('ul')
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
 
element.appendChild(ul)

element.style.backgroundColor = '#27647B';

element.style.textAlign = 'center';
ul.style.textAlign = 'left'

element.className = "dog"
element.className = "pet-listing dog"

ul.removeChild(ul.querySelector('li:nth-child(2)'))

ul.remove()

document.body.removeChild(document.querySelector('main'))

let h1 = document.createElement('h1')
document.body.appendChild(h1)
h1.id ="victory"

let newHeader = document.querySelector('h1#victory')

newHeader = 

document.querySelector("h1#victory")

newHeader.innerHTML = "Daniel is the champion"