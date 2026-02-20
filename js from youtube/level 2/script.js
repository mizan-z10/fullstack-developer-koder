/* ===============================
   Day 2 – JavaScript Basics
================================ */

/*
Variable:
Variable ek container hota hai jisme data store hota hai,
taaki baad me use ya change kiya ja sake.
*/

// Example
console.log("Hello, Coder Day 2!");

let name = "Coder Army";
console.log("Welcome to " + name);

let age = 5;
console.log("I am " + age + " years old.");

age = age + 1;
console.log("Next year, I will be " + age + " years old.");

/* ===============================
   Ways to Declare Variables
================================ */

/*
1️⃣ let
- Block scoped hota hai
- Value change ho sakti hai
- Same scope me dobara declare nahi kar sakte
*/

let city = "Delhi";
city = "Mumbai";
// let city = "Pune"; ❌ error

/*
2️⃣ const
- Block scoped hota hai
- Value change nahi hoti
- Declare karte time value dena compulsory
*/

const account = 1234;
// account = 99; ❌ error

/*
3️⃣ var (OLD way – avoid karo)
- Function scoped hota hai
- Redeclare ho sakta hai
- Bugs ka main reason
*/

var x = 10;
var x = 20; // allowed (bad practice)

/* ===============================
   Data Types in JavaScript
================================ */

/*
JavaScript me 2 types ke data hote hain:
1️⃣ Primitive
2️⃣ Non-Primitive
*/

/* ========= Primitive Data Types ========= */

/*
1. Number:
Integer ya decimal number
*/

let num1 = 10;
let num2 = 2.36;
console.log(typeof num1, typeof num2);

/*
2. String:
Text data ("" ya '')
*/

let msg = "Strike is coming";
let userName = 'Anjali';
console.log(typeof msg);

/*
3. Boolean:
True ya False
*/

let isLoggedIn = true;
let isAdmin = false;
console.log(typeof isLoggedIn);

/*
4. Undefined:
Variable declare hai, value assign nahi hui
*/

let user;
console.log(user);           // undefined
console.log(typeof user);    // undefined

/*
5. Null:
Jaan-boojh kar empty value
*/

let weather = null;
console.log(weather);
console.log(typeof weather); // object (JS bug, yaad rakho)

/*
6. BigInt:
Bahut bade numbers ke liye
*/

let bigNum = 23216378261783213461n;
console.log(typeof bigNum);

/*
7. Symbol:
Unique value generate karta hai
*/

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false

/* ========= Non-Primitive Data Types ========= */

/*
Non-primitive mutable hote hain
(Original value change ho sakti hai)
*/

/*
1. Array:
Multiple values ek variable me
*/

let arr = [10, 20, 11, "Rohit", true];
console.log(typeof arr); // object
console.log(arr);

/*
2. Object:
Key-value pair me data store karta hai
*/

let person = {
  name: "Rohit",
  account: 12312,
  age: 18,
  category: "gen"
};

console.log(typeof person);
console.log(person);

/*
3. Function:
Reusable block of code
*/

function greet() {
  console.log("Hello");
}

console.log(typeof greet);

/* ===============================
   Primitive vs Non-Primitive
================================ */

/*
Primitive = Immutable
Original value change nahi hoti
*/

let a = 10;
let b = a;

b = 20;
console.log(a, b); // 10 20

/*
Non-Primitive = Mutable
Original reference change hota hai
*/

let arr2 = [10, 20, 30];
arr2.push(90);
arr2[0] = 70;
console.log(arr2);

let obj1 = {
  name: "Mohan",
  age: 20
};

let obj2 = obj1;
obj2.name = "Rohan";

console.log(obj1); // name bhi change ho gaya
