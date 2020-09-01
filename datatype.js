// primitive datatype
// string

let name = "jay";

console.log('My Name is '+ name);
console.log('data type is '+ (typeof name));

//number
let numbers = 50;
console.log('data type is '+ (typeof numbers));

//boolean
 let Driver = true;
console.log('data type is '+ (typeof Driver));

//null
let nullvar = null;
console.log('data type is '+ (typeof nullvar));

//undefine
let a;
console.log('data type is '+ (typeof a));

//reference data type

// array
let array = [1,2,3,4, true , "jay"];
console.log('data type is '+ (typeof array));

//object literals
let marks = {
    math:44,
    science:45,
    account:50
};
console.log(marks);
console.log('data type is '+ (typeof marks));

//function
function abc() {

};
console.log(typeof abc);


//date
let date = new Date();
console.log(typeof date);

