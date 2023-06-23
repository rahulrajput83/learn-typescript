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