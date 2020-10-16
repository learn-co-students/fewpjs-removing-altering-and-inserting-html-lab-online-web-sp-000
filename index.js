document.querySelector('main#main').remove()

const newHeader = document.createElement('H1')
newHeader.id = 'victory'

document.body.appendChild(newHeader)

newHeader.innerHTML = "me is the champion!";