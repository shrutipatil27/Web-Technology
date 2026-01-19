// Difference between var, let, and const

// var can be re-declared and updated
var a = 10;
var a = 20;

// let can be updated but not re-declared
let b = 30;
b = 40;

// const cannot be updated or re-declared
const c = 50;

// Types of Data

// Primitive Data Types
let name = "Shruti";      // String
let age = 21;             // Number
let isStudent = true;     // Boolean
let x = null;             // Null
let y;                    // Undefined

// Non-Primitive Data Types
let student = {
  name: "Shruti",
  age: 21
};

let marks = [80, 90, 85];

// Checking type using typeof
console.log(typeof name);      
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof x);          // object (JavaScript bug)
console.log(typeof y);
console.log(typeof student);
console.log(typeof marks);

// Difference between null and undefined
// null means value is intentionally empty
// undefined means value is not assigned
