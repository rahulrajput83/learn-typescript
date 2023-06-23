// Basic Types
let id: number;
id = 5; // Correct
id = "One" // Error: Type 'string' is not assignable to type 'number'.

let company: string;
company = 'Unknown'; // Correct
company = 50; // Error: Type 'number' is not assignable to type 'string'.

let isCompleted: boolean;
isCompleted = true; // Correct
isCompleted = "falseTrue" // Error: Type 'string' is not assignable to type 'boolean'.

let x: any;
x = 'Hello' // Correct
x = 10 // Correct
x = true // Correct

let ids: number[];
ids = [1, 2, 4, 5, 6] // Correct
ids = ['John', 1, 2] // Error: Type 'string' is not assignable to type 'number'.
ids = [1, 2, 5, true] // Error: Type 'boolean' is not assignable to type 'number'.

let Ids: any[];
Ids = [1, 2, 3, true, 'String'] // Correct


// Tuple
let person: [string, number, boolean];
person = ['John', 1, true] // Correct
person = [1, 'John', true] // Error: Type 'number' is not assignable to type 'string'.
person = [false, 2, 'John'] // Error: Type 'boolean' is not assignable to type 'string'.


// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'John'],
    [2, 'Brad'],
    [3, 'Jill']
] // Correct

employee = [
    [true, 'John'],
    ['Brad', 1]
] // Error: Type 'boolean' is not assignable to type 'number'.