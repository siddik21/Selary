const devs=[
    {
        id: 101,
        name: 'Abu Bakkar Siddik',
        age: 26,
        location: 'Dinajpur',
        catagory: 'MERN Stack',
        sellary: 1200
    },
    {
        id: 102,
        name: 'Delwer Hossain',
        age: 30,
        location: 'Thakurgaon',
        catagory: 'Laravel',
        sellary: 2200
    },
    {
        id: 103,
        name: 'Jillur Rahman',
        age: 32,
        location: 'Pirganj',
        catagory: 'Django',
        sellary: 1000
    },
    {
        id: 104,
        name: 'Khalekujjaman Akash',
        age: 60,
        location: 'Rajbari',
        catagory: 'Golan',
        sellary: 2000
    },
    {
        id: 105,
        name: 'Pijus Kormokar',
        age: 62,
        location: 'Noyakhali',
        catagory: 'WordPress',
        sellary: 1000
    },
    {
        id: 106,
        name: 'Robiul Islam',
        age: 20,
        location: 'Kathaldangi',
        catagory: 'Java Devs',
        sellary: 1500
    },
    {
        id: 107,
        name: 'Ridam Pal',
        age: 30,
        location: 'Adabor',
        catagory: 'MERN Stack',
        sellary: 1200
    },
    {
        id: 108,
        name: 'Emon Khan',
        age: 28,
        location: 'Kustia',
        catagory: 'Laravel',
        sellary: 1000
    },
    {
        id: 109,
        name: 'Akram Hossain',
        age: 40,
        location: 'Borishal',
        catagory: 'WordPress',
        sellary: 1300
    },
    {
        id: 110,
        name: 'Pollob',
        age: 20,
        location: 'Bogura',
        catagory: 'MERN Stack',
        sellary: 2000

    }
]
let selary= 0;
devs.map(data=>
    {if(data.catagory == 'MERN Stack'){
    console.log(`
    ID: ${data.id}
    Name: ${data.name}
    Age: ${data.age}
    Location: ${data.location}
    Catagory: ${data.catagory}
    Sellary: ${data.sellary}
    `);
    selary= selary + data.sellary;
    }
});
console.log(`Total Cost For MERN Stack= ${selary}$`);
console.log(`*************************************`);

let selry= 0;
devs.map(data=>{
    if(data.catagory == 'Laravel'){
    console.log(`
    ID: ${data.id}
    Name: ${data.name}
    Age: ${data.age}
    Location: ${data.location}
    Catagory: ${data.catagory}
    Sellary: ${data.sellary}
    `);
    selry= selry + data.sellary;
    }
});
console.log(`Total Cost For Laravel= ${selry}$`);
console.log(`*************************************`);

let selaryy= 0;
devs.map(data=>{
    if(data.catagory == 'WordPress'){
    console.log(`
    ID: ${data.id}
    Name: ${data.name}
    Age: ${data.age}
    Location: ${data.location}
    Catagory: ${data.catagory}
    Sellary: ${data.sellary}
    `);
    selaryy= selaryy + data.sellary;
    }
});
console.log(`Total Cost For WordPress= ${selaryy}$`);
console.log(`*************************************`);

let selarry= 0;
devs.map(data=> {
    if(data.catagory == 'Django' || data.catagory == 'Golan' || data.catagory == 'Java Devs' ){
    console.log(`
    ID: ${data.id}
    Name: ${data.name}
    Age: ${data.age}
    Location: ${data.location}
    Catagory: ${data.catagory}
    Sellary: ${data.sellary}
    `);
    selarry= selarry + data.sellary;
    }
});
console.log(`Total Cost For (Django+ Golan +Java) Devs = ${selarry}$`);
console.log(`***********************************************************`);

let ssalary= 0;
devs.map(data=>
        {ssalary= ssalary + data.sellary;}
    
);

console.log(`Total Cost For All Devs Are = ${ssalary}$`); 


