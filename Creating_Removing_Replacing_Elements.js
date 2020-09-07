let element = document.createElement("li");
// let text = document.createTextNode("dream");
// element.appendChild(text);


//add a class name to the il
element.className = "child"
element.id ="createli";
element.setAttribute('title','mytitle');
element.innerText = 'dream';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
console.log(element);


let elem2 = document.createElement('h3');
elem2.className = "child";
elem2.id = "elem2";
elem2.setAttribute('title','Title');
let tnode = document.createTextNode("this is created for elem2");

elem2.appendChild(tnode);
element.replaceWith(elem2);

console.log(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
console.log(myul);

myul.removeChild(document.getElementById('hui'));
let pr = elem2.getAttribute('class');
elem2.removeAttribute('class');
console.log(elem2,pr);