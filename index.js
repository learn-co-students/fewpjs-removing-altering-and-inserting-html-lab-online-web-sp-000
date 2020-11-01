// Write your code here!
// let element = document.createElement('div')

// document.body.appendChild(element)

// let ul = document.createElement('ul')

// for (let i = 0; i < 3; i++) {
//     let li = document.createElement('li')
//     li.innerHTML = (i + 1).toString() + " giggidy."
//     ul.appendChild(li)
// }

// element.appendChild(ul)

let header = document.querySelector('main#main')

header.remove()

let newHeader = document.createElement('h1')

newHeader.innerHTML = "Your-Name is the champion"

newHeader.id = "victory"