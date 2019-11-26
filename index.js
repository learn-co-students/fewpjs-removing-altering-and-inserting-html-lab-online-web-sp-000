// removes main inside body
let main = document.getElementById("main")
main.remove()


// has a 'newHeader' variable that points to node 'h1#victory'
// has a 'newHeader' variable that points to node 'h1#victory'
// has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

let newHeader = document.createElement("h1")
newHeader.className = "victory"
newHeader.id = "victory"
newHeader.innerHTML = "Mark is the champion"
document.body.appendChild(newHeader)

//
