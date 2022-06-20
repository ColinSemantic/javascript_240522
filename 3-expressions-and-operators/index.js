// ********** Expressions **********


// Primary Expressions

/*
1           // A Number
"Hello"     // A String
/pattern/   // A regular expressions literal
true 	      // Evalutes to the boolean true value
false 	    // Evaluates to the boolean false value
null 	      // Evaluates to the null value
this 	      // Evaluates to the "current" object
i			      // Evaluates to the value of the variable i.
sum			    // Evaluates to the value of the variable sum.
undefined	  // undefined is a global variable, not a keyword like null.
*/

// ********** Operator Overview********** 



//Operand Conversion

var operand1 = 6
var operand2 = 7
var invalidOperand = "8"

console.log("#### Operand Conversion ####\n ");
console.log(invalidOperand + operand1); //The overall value is now a string.
console.log(" ");

// Operand Associativity

y = 5 - 2 - 1;      //Final value "2"
x = ((5 - 2) - 1);  //Final value "2"

console.log("#### Operand Associativity ####\n ");
console.log(y);
console.log(x);
console.log(" ");

// Order of Evaluation


z = 2 + 3 * 5;    //Final value "17" 

console.log("#### Order of Evaluation ####\n ");
console.log(z);
console.log(" ");

// ********** Arithmetic Operators********** 



var num1 = 4;
var num2 = 6;
var num3 = 4;
num3--;  // Decrement
var num4 = 4;
num4++;  // Increment

console.log("#### Arithmetic Operators ####\n ");
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(num3);
console.log(num4);
console.log(" ");


// ********** Assignment Operators********** 


let v = 2;
const w = 3;
var number = prompt("introduce un número");       // Here the number introduced is a string.
var number = parseInt(number);                    // Here the string is converted to int.


console.log("#### Assignment Operators ####\n ");


//x value
console.log(v);

// X value with operators
console.log(v+=w);
console.log(v-=w);
console.log(v*=w);
console.log(v/=w);
console.log(v%=w);
console.log(v**=w);
console.log(number);
console.log(" ");



// ********** Comparison Operators********** 


var num5 = 3;
var num6 = 4;
var num7 = { u:1 };

var resultado = num5 > num6;
var resultado1 = num5 < num6;
var resultado2 = num5 >= num6;
var resultado3 = num5 <= num6;
var resultado4 = num5 == num6;
var resultado5 = num5 != num6;
var resultado6 = num5 === num6;
var resultado7 = num5 !== num6;


console.log("#### Comparison Operators ####\n ");
console.log(resultado);
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);
console.log(resultado7);
console.log("u" in num7);
console.log(" ");



// ********** Logic Operators********** 

var num8 = 3;
var num9 = 4;

var afirmacion1 = num8 < num9;
var afirmacion2 = num8 != num9;

var afirmacion3 = num8 < num9;
var afirmacion4 = num8 > num9;

console.log("#### Logic Operators ####\n ");
console.log(afirmacion1 && afirmacion2) //True
console.log(afirmacion3 || afirmacion4) //True
console.log(!afirmacion1) //False
console.log(" ");



// ********** Other Operators********** 


let age = 18;
let message;

age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');

console.log(message);

if (age > 16)
  console.log("You can drive.");
else
  console.log("You can't drive.");

console.log(typeof age);     //Diplay the type
console.log(void age);      //Displays "undefine"
