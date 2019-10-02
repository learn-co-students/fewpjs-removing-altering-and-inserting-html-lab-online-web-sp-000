// remove main element from index.html programmatically
document.querySelector('main#main').remove();

// create an h1 tag && assign it to a variable
let newHeader = document.createElement("h1");

// create a text node && assing it to a variable
let content = document.createTextNode("YOUR-NAME is the champion");

// assign id=#victory to newHeader
newHeader.id = "victory";

// add the text node to the h1 tag
newHeader.appendChild(content);
