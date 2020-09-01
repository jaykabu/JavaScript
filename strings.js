const name = "Jay";
const greeting = "Good morning";

// console.log(name  +' '+  greeting);

let html;
html = "<h1> This Is Heading </h1>"+
       "<p> This Is My Paragraph </p>";

html = html.concat("this" , " str2");
console.log(html);

console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html[15]);
// console.log(html.indexOf('This'));
// console.log(html.lastIndexOf('this'));
// console.log(html.charAt(15));
// console.log(html.endsWith('str2'));
// console.log(html.includes('this'));
// console.log(html.substring(4,20));
// console.log(html.slice(0,4));
// console.log(html.split(' '));

// console.log(html.replace('This','it'));

let fruit1 = 'orange';
let fruit2 = 'apple';
let myHtml = `hello ${name} 
               <h1> This Is Heading </h1>
                <p> <b>you like ${fruit1} and 
                   ${fruit2}</b>`;
document.body.innerHTML = myHtml;



let bike = 'yamaha';
let bike2 = 'dukati';

let htm = `hello ${name} 
            <h1>this is heading</h1>
            <p><b> you like ${bike} and ${bike2}</b></p>`;
// document.body.innerHTML = htm;




