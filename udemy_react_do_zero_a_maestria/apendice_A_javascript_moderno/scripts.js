// 1 - var, let e const
var x = 10
var y = 15

if(y > 10 ){
    var x = 5
    console.log(x);
}
console.log(x);

let a = 10
let b = 15

if(b > 10){
    let a = 5
    console.log(a);
}
console.log(a);

let i = 100

for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

function logName() {
    const name = "Thiago"
    console.log(name);
}
const name = "Matheus"
logName()
console.log(name);


// 2 - arrow function
const sum = function sum(a, b) {
    return a + b
}

const arrowSumLong = (a, b) => {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
    if(name) {
        return "Olá " + name + "!"
    } else {
        return "Olá!"
    }
}

console.log(greeting("Thiago"));
console.log(greeting());

testeArrow = () => console.log("Testou!");
testeArrow();

const user = {
    name: "Theo",
    sayUserName() {
        var self = this
        setTimeout(function () { 
            console.log(this);
            console.log(this.name);
        }, 500)

    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this);
            console.log(this.name);
        }, 700)
    }
}

// user.sayUserName();
// user.sayUserNameArrow();


// 3 - filter

const arr = [1, 2, 3, 4 ,5];

console.log(arr);

const highNumber = arr.filter((number) => {
    if(number >= 3){
        return number;
    }
});

console.log(highNumber);

const users = [
    { name : 'Thiago', available : true},
    { name : 'Pedro', available : false},
    { name : 'Amanda', available : true},
    { name : 'Gustavo', available : false},
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);


// 4 - map
const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 400.99, category: 'Eletro'},
    {name: 'Calça jeans', price: 50.99, category: 'Roupas'},
];

products.map((product) => {
    if (product.category === 'Roupas'){
        product.onSale = true
    };
});

console.log(products);

