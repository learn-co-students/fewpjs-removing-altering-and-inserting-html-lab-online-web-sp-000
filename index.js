// Write your code here!
// it("no longer has DOM node 'main#main'", () => {
//   expect(document.querySelector('main'), "Make sure you remove the <main> with id 'main'").to.not.exist
// });

var ele = document.getElementById('main');
ele.remove();

// it("has a 'newHeader' variable that points to node 'h1#victory'", () => {
//   expect(newHeader.nodeName, "Make sure you create an <h1> with id 'victory'").eql('H1')
// });

let newHeader = document.createElement('h1');

// it("has a 'newHeader' variable that points to node 'h1#victory'", () => {
//   expect(newHeader.id, "Make sure you create an <h1> with id 'victory'").eql('victory')
// });

let attr = document.createAttribute('id');
attr.value = 'victory';

// it("has a 'newHeader' variable that points to node 'h1#victory' with \"YOUR-NAME is the champion\" inside", () => {
//   expect(newHeader.innerHTML, "Make sure you create an <h1> with id 'victory' with a sweet message in it").to.include("is the champion");
// });

newHeader.setAttributeNode(attr);
document.body.appendChild(newHeader);
newHeader.innerHTML = 'Amal is the champion';

