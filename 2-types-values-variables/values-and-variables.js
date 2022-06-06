// ********** NUMBERS ********** 


console.log("### Base 10 Integers ###");

let num1 = 0
let num2 = 25

console.log(num1);
console.log(num2);
console.log("");


console.log("### Base 16 Integers ###");

let num3 = 0xa // = 10
let num4 = 0xf // = 15

console.log(num3);
console.log(num4);
console.log("");


console.log("### Floating-point Literals ###");

let num5 = 1.6
let num6 = 2.5
let num7 = 45.2

console.log(num5);
console.log(num6);
console.log(num7);
console.log("");


console.log("### Floating-point Literals with letter 'e' ###");

let num8 = 6.02e23
console.log(num8);
console.log("");


console.log("### Infinity and NaN ###");

console.log(7 / 0);
console.log(-7 / 0);
console.log("Hello World" * 2);
console.log("");


console.log("### Pattern Matching ###");

const string = "This is a string";
const regex = /is/g;
const isExisting = regex.test(string);
console.log(isExisting);
console.log("");



// ********** Strings **********  

console.log("### String Literals ###");

let str1 = "This is a string"
let str2 = 'This is another string'

console.log(str1);
console.log(str2);
console.log("");

console.log("### String with quotes ###");

let str3 = "This is a 'string'"
let str4 = 'This is another "string"'

console.log(str3);
console.log(str4);
console.log("");


console.log("### String with quotes ###");

let str5 = "This is a line \nbreak"
console.log(str5);
console.log("");

console.log("### Concatenate Strings ###");

let str6 = "Hello, " + "World";
console.log(str6);
console.log("");

console.log("### Boolean Values ###");

let bool = true
console.log(bool);
console.log("");


// **********  Null, Undefined and NaN ********** 

console.log("### Undefined ###");

let und;
console.log(und);
console.log("");

console.log("### Null ###");

let Null = null;
console.log(Null);
console.log("");

console.log("### NaN ###");

let str7 = "Number";
let nan = str7 * 5;

console.log(nan);
console.log("");


// **********  Conversion ********** 

let conv1 = String(123); //Explícito
let conv2 = 123 + '' //Implícito

console.log("### Conversion ###");
console.log(conv1);
console.log(conv2);
console.log("");


// **********  Variables ********** 

var container =  "value";

//Global Variable
var globalVar = "This is a global variable";

function local (){
  //Local Variable
  var localVar = "This is a local variable";
  console.log(localVar);
};


//Uncomment to see how "var" value can be changed.
/*
if (num1 == 0){
  var globalVar = "This global is now changed";
}
*/


const constVar= "This is a constant variable";
// Uncomment to see how const variables can be redefine.
//const constVar= "I can't be changed";

console.log("### Variables Example ###");
console.log(container);
console.log(globalVar);
local();

if (num2 > 2){
  let letVar = "This is a let variable";
  console.log(letVar);
};

// uncomment to see how let variables can't not be used in another scope.
//console.log(letVar);

console.log(constVar);
console.log("");

//Declarar múltiples variables
let numero, numero2, numero3;
numero = 2;
numero2 = 9;
numero3 = 13;

let numero4 = 2;
let numero5 = 9;
let numero6 = 13;