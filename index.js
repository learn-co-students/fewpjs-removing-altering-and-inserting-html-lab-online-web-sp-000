// Write your code here!
document.getElementById('main').remove();

let newH = document.createElement('h1');
newH.setAttribute('id', 'victory');
let newHContent = document.createTextNode('YOUR-NAME is the champion');
newH.appendChild(newHContent);
const currentScript = document.body.querySelector('script');
document.body.insertBefore(newH, currentScript);

let newHeader = document.getElementById('victory')


