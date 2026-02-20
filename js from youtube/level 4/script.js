// Operator: Operator ek special symbol hota hai
// jo values (operands) par kaam karta hai aur result deta hai.

/* ===============================
   1. Arithmetic Operators
   Ye mathematical calculations ke liye use hote hain
================================ */

let a = 10;
let b = 20;

console.log(a + b); // Addition: do numbers ko jodta hai
console.log(a - b); // Subtraction: ek number ko dusre se ghataata hai
console.log(a * b); // Multiplication: guna karta hai
console.log(a / b); // Division: bhaag karta hai
console.log(a % b); // Modulus: remainder deta hai
console.log(a ** b); // Exponentiation: power nikalta hai

/* ===============================
   2. Assignment Operators
   Value assign ya update karne ke liye
================================ */

let c = 10;

c += 5;   // c = c + 5
console.log(c);

c -= 3;   // c = c - 3
console.log(c);

c *= 2;   // c = c * 2
console.log(c);

c /= 2;   // c = c / 2
console.log(c);

c %= 3;   // c = c % 3
console.log(c);

c **= 2;  // c = c ** 2
console.log(c);

/* ===============================
   3. Comparison Operators
   Do values ko compare karte hain
   Result hamesha true ya false hota hai
================================ */

console.log(a == b);   // Value same hai ya nahi (type ignore)
console.log(a != b);   // Value different hai ya nahi
console.log(a > b);    // Greater than
console.log(a < b);    // Less than
console.log(a >= b);   // Greater than or equal
console.log(a <= b);   // Less than or equal

let am = "23";
let um = 34;

console.log(am === um); 
// Strict comparison: pehle type check karta hai, phir value

/* ===============================
   4. Logical Operators
   Conditions ke saath kaam karte hain
================================ */

let x = true;
let y = false;

console.log(x && y); // AND: dono true honge tabhi true
console.log(x || y); // OR: koi ek true ho to true
console.log(!x);     // NOT: true ko false bana deta hai
console.log(!y);

/* ===============================
   5. Bitwise Operators
   Binary (0 aur 1) level par kaam karte hain
================================ */

let m = 5; // Binary: 0101
let n = 3; // Binary: 0011

console.log(m & n);   // AND
console.log(m | n);   // OR
console.log(m ^ n);   // XOR
console.log(~m);      // NOT
console.log(m << 1);  // Left shift
console.log(m >> 1);  // Right shift
console.log(m >>> 1); // Unsigned right shift

/* ===============================
   6. Ternary Operator
   Short form of if-else
================================ */

let age = 18;

let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);

/* ===============================
   7. typeof Operator
   Variable ka data type batata hai
================================ */

let arr = [1, 2, 3];
let obj = { name: "John", age: 30 };

function s() {
  console.log("Hello");
}

console.log(typeof a);        // number
console.log(typeof c);        // number
console.log(typeof x);        // boolean
console.log(typeof canVote);  // string
console.log(typeof arr);      // object
console.log(typeof obj);      // object
console.log(typeof s);        // function

/* ===============================
   8. instanceof Operator
   Check karta hai object kis class ka hai
================================ */

console.log(arr instanceof Array);     // true
console.log(obj instanceof Object);    // true
console.log(s instanceof Function);    // true

/* ===============================
   9. in Operator
   Object ke andar property exist karti hai ya nahi
================================ */

console.log("name" in obj);    // true
console.log("age" in obj);     // true
console.log("gender" in obj);  // false

/* ===============================
   10. delete Operator
   Object ki property delete karta hai
================================ */

console.log(obj);
delete obj.age;
console.log(obj);

/* ===============================
   11. void Operator
   Expression ka result ignore karta hai
   Hamesha undefined return karta hai
================================ */

function fun() {
  console.log("Hello");
}

console.log(void fun());

/* ===============================
   Type Conversion (Conversion)
   Ek data type ko dusre me badalna
================================ */

let num = "10";

console.log(num);
console.log(typeof num);

num = Number(num); // String → Number
console.log(num);
console.log(typeof num);

let str = "10i";

let le = Number(str); 
// Invalid string ko number banane par NaN milta hai

console.log(le);          // NaN
console.log(typeof le);   // number (NaN ka type number hota hai)

console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(""));         // 0
console.log(Number("10"));       // 10
console.log(Number("10a"));      // NaN



// computer science challenge

// let a = 0.1;
// let b = 0.2;

// let c = a+b;

// console.log(c);

// 1: null is loosely equal to undefined only

// console.log(null==undefined);
// console.log(null===undefined);
// console.log(null==0);
// console.log(null=="");
// console.log(null==false);
// console.log(null==true);

// >,<,>=,<= (null --> number, undefined --> NaN)

// console.log(null>=0);
// console.log(null<=0);
// console.log(null>0);
// console.log(null<0);
// console.log(null>=undefined);
// console.log(undefined>=0);

// console.log("Rohit">"Rahit");

// console.log(10<true);

// Ek koi bhi type hai, usko agar muje compare karna hai dusre kisi type se
// Dono number mein convert honge

// console.log(null>="");


// console.log(NaN == NaN);

// loop kaise kaam karte hai

// for loop

// post increment
// post decrenment : i--

// for(let i = 0; i<10;i++){
//     console.log(i);
// }

// while loop

// let i = 0;

// while(i<10){
//     console.log(i);
//     i++;
// }


// do while

// let i= 0;

// do{
//     console.log(i);
//     i++;
// }while(i<10);


// if else condition

// let age = 25;

// if(age>=18){
//     console.log("Eligible for vote");
// }
// else{
//     console.log("Not eligible for vote");
// }


// kid young and old


// let age = 78;

// if(age<18){
//     console.log("Kid");
// }
// else if(age>=60){
//     console.log("Old");
// }
// else{
//     console.log("young");
// }



// Logical Operator

// logical And&& , || 

// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&false);
// console.log(false&&true);

// console.log(true||true);
// console.log(true||false);
// console.log(false||false);
// console.log(false||true);

// let a = "Rohit";
// let b = "";
// let c = a&&b;
// console.log(c);

// let a = 0;
// let b = 20;

// console.log(a&&b);
// &&: If first value is false, it will return the first value itself
// If first value is true, it will return second


// || logical or

 a = 0;
 b = 20;

console.log(a||b);
// &&: If first value is true, it will return the first value itself
// If first value is false, it will return second

// !=
// console.log(5!=5);


// AND: & , | or

console.log(2&5);