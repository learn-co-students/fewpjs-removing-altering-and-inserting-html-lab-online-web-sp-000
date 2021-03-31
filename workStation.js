document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let plusButtonElement = document.getElementById('plus');
let minusButtonElement = document.getElementById('minus');
});
var bid = 0;


let paragraph = document.createElement('div');
document.body.appendChild(paragraph);
paragraph.innerText = 'Testing Dom Manipulations';
paragraph.style.color = "purple";
paragraph.style.background = "orange";
paragraph.style.fontFamily = "Georgia";
paragraph.style.textAlignLast = "center";

//  @setting up the bid value

let parent = document.createElement("div");
let p = document.createElement("p");
document.body.appendChild(parent);
parent.append(p);
  p.innerHTML = "JavaScript DOM";
  parent.style.background = "transparent";
  document.body.style.backgroundColor = "grey";

// plusButtonElement.addEventListener('click', function (event) {
//     document.body.appendChild(parent);
//     bid+=50
//     parent.innerHTML = "bid"
// });
//   minusButtonElement.addEventListener('click', function (event) {
//     niche.innerText = "15";
// });

