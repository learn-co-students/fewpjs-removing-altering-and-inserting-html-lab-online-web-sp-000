let element = document.querySelector("main")
element.remove()

let newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = "LEON is the champion"

document.body.appendChild(newHeader)