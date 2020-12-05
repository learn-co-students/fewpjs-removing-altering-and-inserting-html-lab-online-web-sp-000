// Write your code here!

main.remove(); //remove the id with the name of 'main'

let newHeader = document.createElement("h1"); //first create a valid CSS selector 

newHeader.id = "victory" //then assign a id name to it

newHeader.innerHTML = 'Arslan is the champion' //then add the innerHTML text to it

document.appendChild(newHeader) //finally, this part adds it to the document itself
