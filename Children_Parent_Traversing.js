let cont = document.querySelector(".no");
 cont = document.querySelector(".container");

// console.log(cont.childNodes);
// console.log(cont.children);

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[8].nodeType;
// console.log(nodeName);
// console.log(nodeType);

let container = document.querySelector('.container');
console.log(container.children[1].children);

// console.log(container.childNodes);
// console.log(container.firstElementChild);

console.log(container.lastChild);
console.log(container.lastElementChild);

console.log(container.children);
console.log(container.childElementCount); //count of child element

console.log(container.firstElementChild);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);



/*
Node Type
1.Element
2.attribute
3.Text node
8.comment
9.document
10.docType
 */