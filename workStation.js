document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});
let balance = 100.00;
let bid = 5.00;
let buttonElement = document.getElementById('pause');
let plusButtonElement = document.getElementById('plus');
let minusButtonElement = document.getElementById('minus');
let cashOutButtonElement = document.getElementById('heart');
let available = document.getElementById('balance');
let bidding = document.getElementById('bidding');
bidding.innerHTML = bid;


let paragraph = document.createElement('div');
document.body.appendChild(paragraph);
paragraph.innerText = 'Results';
paragraph.style.fontSize = "36px";
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

p.innerHTML = "Hand :";
p.style.color = "red";
p.style.fontSize = "20px";

parent.style.background = "tan";
document.body.style.backgroundColor = "grey";
document.body.width = "350em";
cashOutButtonElement.style.background = "green";


// add eventlistener to  p to change colors on rollover;
buttonElement.addEventListener('click', function (event) {
balance -= 2
available.innerHTML = "$" + balance + " .00";
pGenerate();
});
cashOutButtonElement.addEventListener('click', function (event) {
alert("Congratulations. You Left With " + balance + " dollars !");
});
// have a second var you can change that begins as balance's value
// add if statement in cashout function.
plusButtonElement.addEventListener('click', function (event) {
  bid += 5
  bidding.innerHTML = bid;

  // alert("yes this is the correct button.");
  });

let numb = 1;

function pGenerate() {
let time = "times";
for (i=1; i <= 1; i++) {
  var newP = document.createElement("p");
  var pText = document.createTextNode("Deal Number " + numb );
  newP.appendChild(pText);
  
  var contentSection = document.getElementById("content");
  document.body.insertBefore(newP, contentSection);
  numb +=1
}
}