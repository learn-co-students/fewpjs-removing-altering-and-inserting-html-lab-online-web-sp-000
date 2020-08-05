// Write your code here!
document.getElementById('main').remove()
document.body.appendChild(document.createElement('h1'))
document.querySelector('h1').id = 'victory'
document
  .querySelector('h1')
  .appendChild(document.createTextNode('YOUR-NAME is the champion'))
var newHeader = document.getElementById('victory')
