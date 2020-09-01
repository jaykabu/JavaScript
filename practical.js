

let items = [{
    name: 'karan',
    age: 30
}];

function ObjectPush(index,item){
    items.push(item)
}

let item = {
    name: 'raj',
    age: 28
}

ObjectPush(2, item);

console.log('items',items);

array.prototype.insert = function ( index, item ) {
    this.splice( index, 5, item );
};

// function ObjectRemove(index,item) {
//     index.push(items);
// }
//
// ObjectRemove(5,index);
// console.log('index',items);

