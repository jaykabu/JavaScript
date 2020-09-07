let today = new Date();
// console.log(typeof today);

let otherDate = new Date('9-7-2020 04:11:25');
// otherDate = new Date('sep 07 2020')
console.log(otherDate);

let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();

console.log(a);

otherDate.setDate(8);
otherDate.setMonth(9);
otherDate.setFullYear(2021);
console.log(otherDate);