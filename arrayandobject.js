let marks = [50,85,65,35,49,55];
const fruit = ['orange','apple','banana','kiwi'];
const mixed = ['this',59,[68,73]];
const arr = new Array('str',83,[7,10]);

// console.log(arr);
// console.log(marks);
// console.log(fruit);
// console.log(mixed);

// console.log(fruit.length);
// console.log(Array.isArray('arr'));

mixed[1] = 'jay';
let mixelement =  mixed[1];
// console.log('element:',mixelement);
// console.log(mixed);

let value = marks.indexOf(55);
// console.log(value);

// mutating and modifying array

// marks.push(36363);
// marks.unshift(5965);
// marks.pop();
// marks.shift();
// marks.splice(2,3);
// marks.reverse();
// let marks2 = [1,23,45,66]
// marks = marks.concat(marks2)
// console.log(marks);

//object
let myobj = {
    name:'jay',
    age:23,
    hobby:'cricket',
    marks:[55,65,58,65,88],
    IsActive:true
};

console.log(myobj);
console.log(myobj.name);
console.log(myobj.IsActive);



