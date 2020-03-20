// Write your code here!
let body = document.querySelector("body")
body.removeChild(body.querySelector("main"))
let newHeader = document.createElement('h1')
body.appendChild(newHeader)
newHeader.setAttribute("id", "victory")
document.querySelector('h1#victory').innerHTML = "YOUR NAME is the champion"