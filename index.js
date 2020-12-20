document.getElementById("main").remove();
 
let newHeader = document.getElementsByTagName("body")[0].appendChild(document.createElement("h1"));
newHeader.id = "victory";

newHeader.innerHTML = "is the champion"
console.log(newHeader);