/* Enter the code to remove the main node element under this comment */

document.querySelector('#main').remove()

/* Create your new element here and assign it to newHeader */

const header = document.createElement('h1')
header.id = 'victory'
header.innerText = 'Nathan is the champion!'
document.body.appendChild(header)
const newHeader = document.querySelector('#victory')
