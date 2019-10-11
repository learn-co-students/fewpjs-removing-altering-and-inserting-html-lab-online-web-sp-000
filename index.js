
let m = document.getElementById("main");
m.remove();
var newHeader = document.createElement("h1");
newHeader.id = "victory";
var newContent = document.createTextNode(" is the champion");

  newHeader.appendChild(newContent);

document.body.appendChild(newHeader);
