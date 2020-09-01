//type conversion

let myVal;
myVal = String(8);
// console.log(myVal,(typeof myVal));

let booleanVal =String (false);
// console.log(booleanVal,(typeof booleanVal));

let date = String(new Date);
// console.log(date,(typeof date));

let array = String([9,8,7,6,5]);
// console.log(array,(typeof array));

arr = String(function () {
    name:"jay"
});
// console.log(arr,(typeof arr));

let i = 4;
// console.log(i.toString());

let number = parseFloat (40.098);
// console.log(number.toFixed(2),(typeof number));

//Type coercion

let myStr = Number("50");
let myNub = 5;
console.log(myStr+myNub);