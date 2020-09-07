let divElem = document.createElement("div");
let val = localStorage.getItem('text');
let text;
if (val == null){
    text = document.createTextNode('this is my element.click to edit it');
}
else
{
    document.createTextNode(val);
}

divElem.appendChild(text);

divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', "elem");
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin:34px; padding:23px;');

let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


//insert the element before element with id first
container.insertBefore(divElem, first);
console.log(divElem, container, first);

// add event listener to the divElem

divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0) {
        let html = elem.innerHTML;
        divElem.innerHTML = `<textarea class = "textarea from-control"  id="textarea" rows="3" ${html}> </textarea>`;
    }
    //listen for the blur event on textarea

    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur',function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem("text",textarea.value);

    })


})


