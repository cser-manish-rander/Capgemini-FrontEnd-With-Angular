"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
const multiply = (a, b) => {
    return a * b;
};
function greet(name) {
    console.log("Hello " + name);
}
function greetUser(name, age) {
    console.log(name, age);
}
function greetWithDefault(name, age = 18) {
    console.log(name, age);
}
function getUser(user) {
    return user.name;
}
let addFn;
addFn = (x, y) => x + y;

function sum(...nums) {
    return nums.reduce((acc, val) => acc + val, 0);
}
function combine(a, b) {
    return a + b;
}

function identity(value) {
    return value;
}

console.log(add(2, 3));
console.log(multiply(2, 3));
greet("Manish");
greetUser("Manish");
greetWithDefault("Manish");
console.log(getUser({ name: "Manish", age: 22 }));
console.log(addFn(5, 5));
console.log(sum(1, 2, 3, 4));
console.log(combine(10, 20));
console.log(combine("Hello ", "Manish"));
console.log(identity("TypeScript"));
console.log(identity(123));
