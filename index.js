// Write your code here!
let main = document.querySelector('main')
main.parentNode.removeChild(main);

const newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion"
