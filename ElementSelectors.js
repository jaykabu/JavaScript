// Element selector

// 1.single element selector

let element = document.getElementById("myfirst");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "red";
// element.style.background = "yellow"
element.innerText = "JAY"
element.innerHTML = "<b>JAY</b>"
// console.log(element.innerText);

let sel = document.querySelector("#myfirst");
// sel = document.querySelector(".child");
sel = document.querySelector("div");
sel.style.color = "blue";
// console.log(sel);

//multi element selector

let elem = document.getElementsByClassName("child");
 elem = document.getElementsByClassName("container");
// console.log(elem[0].getElementsByClassName("child"));
elem = document.getElementsByTagName('div');
console.log(elem);

Array.from(elem).forEach(function (element) {
console.log(element);
element.style.color = 'green';
});


// for (let i = 0;i<elem.length;i++){
//     const element = elem[i];
//     console.log(element);
//     element.style.color = "orange"
// }