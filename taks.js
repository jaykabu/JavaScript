let items = [{
    name:"jay",
    age:23
}];

function ObjectPush(index,item){
    items.push(item);
}

let item = {
    name: "raj",
    age:26
};

ObjectPush(2,item);
console.log('items',items);



