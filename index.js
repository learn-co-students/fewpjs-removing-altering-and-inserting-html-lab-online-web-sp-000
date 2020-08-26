// Write your code here!


main.remove()
// should be document.querySelector("main#main").remove();

const newHeader = document.createElement('h1');
// first create a new element within the document; we are creating an h1 and calling it 'newHeader'
newHeader.id = "victory";
// we are assigning the new h1 an id of 'victory'
newHeader.innerHTML = "Emily is the champion";
// we are adding text to the h1
newHeader.className = "victory";
// we are giving the h1 a class name of 'victory'

// So, newly created h1 element in the document is assigned as a variable called 'newHeader'
// It is given an id; text is added to the h1; the h1 element is given a class name