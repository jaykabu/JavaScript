document.getElementById("heading").addEventListener("click", function (e) {
// console.log('you have clicked the heading');
let variable;
variable = e.target;
variable = e.target.className;
    // variable = Array.from(e.target.classList);
    // variable = e.target.id;
    variable = e.clientX;
    // variable = e.offsetY;

    // console.log(variable);
// location.href = '//www.google.com';
})


let btn = document.getElementById("btn")

// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// btn.addEventListener('mousedown',func3);


function func1(e) {
// console.log("thank",e);
e.preventDefault();
}

function func2(e) {
// console.log("thank a lot",e)
    e.preventDefault();
}

function func3(e) {
// console.log("mouse down",e);
    e.preventDefault();
}



// document.querySelector('.no').addEventListener("mouseenter",function () {
// console.log('you entered no');
// e.preventDefault();
// })
// document.querySelector('.no').addEventListener("mouseleave",function () {
//     console.log('you exit no');
//     e.preventDefault();
// })

let move = document.querySelector('.container')

move.addEventListener('mousemove',func4);

function func4 (e) {
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor = `rgb (${e.offsetX},${e.offsetY},154)`;
    console.log("you triggered mouse move event");
}