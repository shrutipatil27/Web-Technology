// ================================
// COMPARISON OPERATORS IN JAVASCRIPT
// ================================

// 1. Equal to (==)
// Checks only value, not data type
console.log(10 == "10");  
// true → because values are same

// 2. Strict Equal to (===)
// Checks value AND data type
console.log(10 === "10"); 
// false → number !== string

// 3. Not Equal to (!=)
// Checks value only
console.log(5 != "5");    
// false → values are same

// 4. Strict Not Equal to (!==)
// Checks value AND data type
console.log(5 !== "5");   
// true → data type is different

// 5. Greater Than (>)
console.log(10 > 5);      
// true → 10 is greater than 5

// 6. Less Than (<)
console.log(10 < 5);      
// false → 10 is not less than 5

// 7. Greater Than or Equal To (>=)
console.log(10 >= 10);    
// true → values are equal

// 8. Less Than or Equal To (<=)
console.log(5 <= 10);     
// true → 5 is less than 10

// ================================
// SPECIAL COMPARISONS
// ================================

// null comparisons
console.log(null == undefined);  
// true → special case in JavaScript

console.log(null === undefined); 
// false → different data types

// undefined comparisons
console.log(undefined == 0);     
// false

console.log(undefined === 0);    
// false

// Boolean comparisons
console.log(true == 1);          
// true → true is converted to 1

console.log(false == 0);         
// true → false is converted to 0

console.log(true === 1);         
// false → different data types

// String comparisons
console.log("apple" > "banana"); 
// false → alphabetical order

console.log("10" > "2");         
// false → string comparison

// NaN comparisons
console.log(NaN == NaN);         
// false → NaN is never equal to anything

console.log(Number.isNaN(NaN));  
// true → correct way to check NaN
