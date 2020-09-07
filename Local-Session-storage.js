// localStorage.setItem('name','jay');
// localStorage.setItem('name2','rohan');

// localStorage.clear();

// localStorage.removeItem('name');

// let name = localStorage.getItem('name2');
// console.log(name);




let impArray = ["mouse","monitor","keybord"]
localStorage.setItem("hardware",JSON.stringify(impArray));

let a = JSON.parse(localStorage.getItem('hardware'));

console.log(a);



sessionStorage.setItem("sname","raj");
sessionStorage.setItem("sname1","malkesh")
let impArr = ["mouse","monitor","keybord"]


sessionStorage.setItem("hardware",JSON.stringify(impArr))