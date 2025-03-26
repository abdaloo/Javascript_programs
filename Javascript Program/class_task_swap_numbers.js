let first = prompt("Enter your age: ", "");
// String
console.log(`Your age is: ${first} and type is: ${typeof(first)} `);

// Number
let second = Number(first);
console.log(`Your age is: ${second} and type is: ${typeof(second)}`);

let third = second * 2;
// Muliplication of age
console.log(`Multiplication of value with 2 is: ${third}`);

//Datatype Comparison
console.log(`Result of Comparison is: ${typeof(first) == typeof(third)}`);

//Swapping the number
console.log(`Before Swapping :  ${first} , ${third}`);

let temprory = 0;

temprory = third;
third = first;
first = temprory;

console.log(`After Swapping : ${first}, ${third}`);


