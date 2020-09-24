document.querySelector("main#main").remove();

// const newHeader = document.querySelector("h1#victory");

const newHeader = document.createElement("h1")
newHeader.className = "victory";
newHeader.id = "victory";
newHeader.innerHTML = "Grape is the champion";