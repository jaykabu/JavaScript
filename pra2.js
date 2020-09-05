let data = [{
    name:"a",
    age:22

},
    {
     name:"z",
     age:100

    },
    {
        name:"c",
        age:29

    },
    {
        name:"d",
        age:45

    },
    {
        name:"f",
        age:46

    },
    {
        name:"rr",
        age:54

    },
    {
        name:"f",
        age:24

    },
    ];
console.log(data);

data.push({
    name:"kk",
    age:66
});


let getdata = data.map((item,index)=>`${index}-${item.age}`);
console.log(getdata[2]);


data.splice(7,8);
console.log(data);





let data1 = [4,55,5,6,6455,6889,66,65465,655,6565,4566,665,66,66,4654]


let data2 = data1.sort((a,b)=>a-b);
console.log(data2)





let arr = [{
    name:"jay",
    age:23,
    hobby:"cricket"
   },
    {
    name:"parth",
    age:22,
    hobby:"cricket"
   },
    {
        name:"dhruv",
        age:20,
        hobby:"football"
    },
    {
        name:"raj",
        age:26,
        hobby:"reading"
    }
];

console.log(arr);

arr.push({
    name: "malkesh",
    age:28,
    hobby:"footboll"
})
console.log(arr)

let app = arr.map((item,index)=>`${index}-${item.hobby}`);
console.log(app);

arr.splice(4,5)
console.log(arr)



