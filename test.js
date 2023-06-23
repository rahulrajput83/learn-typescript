"use strict";
// Basic Types
let id;
id = 5; // Correct
// id = "One" // Error: Type 'string' is not assignable to type 'number'.
let company;
company = 'Unknown'; // Correct
// company = 50; // Error: Type 'number' is not assignable to type 'string'.
let isCompleted;
isCompleted = true; // Correct
// isCompleted = "falseTrue" // Error: Type 'string' is not assignable to type 'boolean'.
let x;
x = 'Hello'; // Correct
x = 10; // Correct
x = true; // Correct
let ids;
ids = [1, 2, 4, 5, 6]; // Correct
// ids = ['John', 1, 2] // Error: Type 'string' is not assignable to type 'number'.
// ids = [1, 2, 5, true] // Error: Type 'boolean' is not assignable to type 'number'.
let Ids;
Ids = [1, 2, 3, true, 'String']; // Correct
// Tuple
let person;
person = ['John', 1, true]; // Correct
// person = [1, 'John', true] // Error: Type 'number' is not assignable to type 'string'.
// person = [false, 2, 'John'] // Error: Type 'boolean' is not assignable to type 'string'.
// Tuple Array
let employee;
employee = [
    [1, 'John'],
    [2, 'Brad'],
    [3, 'Jill']
]; // Correct
/* employee = [
    [true, 'John'],
    ['Brad', 1]
] */ // Error: Type 'boolean' is not assignable to type 'number'.
// Union
let pid;
pid = 22; // Correct
pid = 'John'; // Correct
// pid = true // Error: Type 'boolean' is not assignable to type 'string | number'.
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // 0
console.log(Direction1.Down); // 1
console.log(Direction1.Right); // 3
// Objects
let user;
user = {
    id: 1,
    name: 'John'
}; // Correct
/* user = {
    id: '1',
    name: 'John'
} */ // Error: Type 'string' is not assignable to type 'number'.
// Type Assertion
let cid = 1;
let customerId = cid;
// or let customerId = cid as number
customerId = 5; // Correct
// customerId = true Error: Type 'boolean' is not assignable to type 'number'.
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3)); // 4
// console.log(addNum('Add', 4)) Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// Void
function log(message) {
    console.log(message);
}
log('Success'); // Correct
// log(true) Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
