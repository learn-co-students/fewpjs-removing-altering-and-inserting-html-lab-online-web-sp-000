document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
let balance = 100.00;
let buttonElement = document.getElementById('pause');
let plusButtonElement = document.getElementById('plus');
let minusButtonElement = document.getElementById('minus');
let cashOutButtonElement = document.getElementById('heart');

let paragraph = document.createElement('div');
document.body.appendChild(paragraph);
paragraph.innerText = 'Results';
paragraph.style.color = "purple";
paragraph.style.background = "orange";
paragraph.style.width = "auto";
paragraph.style.fontFamily = "Georgia";
paragraph.style.textAlignLast = "center";

let parent = document.createElement("div");
let p = document.createElement("p");
p.id = "tester"; // Set the id
document.body.appendChild(parent);
parent.append(p);

p.innerHTML = "Hand Number:";
  
  parent.style.background = "tan";
  document.body.style.backgroundColor = "grey";

// add eventlistener to  p to change colors on rollover;
buttonElement.addEventListener('click', function (event) {
  pGenerate();
});
cashOutButtonElement.addEventListener('click', function (event) {
  alert("You Have" + balance + " dollars !");
});
// have a second var you can change that begins as balance's value
// add if statement in cashout function.

let numb = 1;

function pGenerate() {
  let time = "times";
  for (i=1; i <= 1; i++) {
    var newP = document.createElement("p");
    var pText = document.createTextNode(numb, "times");
    newP.appendChild(pText);
    
    var contentSection = document.getElementById("content");
    document.body.insertBefore(newP, contentSection);
    numb +=1
  }
}
