// Write your code here!
const testVar = "hi"

/* Enter the code to remove the node element here */
// no longer has DOM node 'main#main'
document.querySelector("main#main").remove();

/* Create your new element here and assign it to newHeader */
// has a 'newHeader' variable that points to node 'h1#victory'
const newHeader = document.createElement("h1");
newHeader.id = "victory"
// has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";