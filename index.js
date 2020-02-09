let main = document.getElementById("main")
main.remove()

let newHeader = document.createElement("h1")
newHeader.className = "victory"
newHeader.id = "victory"
newHeader.innerHTML = "Christian is the champion"
document.body.appendChild(newHeader)
