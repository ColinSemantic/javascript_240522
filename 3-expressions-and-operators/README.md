# Expressions and Operators



- [Expressions](#Expressions)
  - [Primary Expressions](#Primary-Expressions)
  
  - [Object and Array Initializer ](#Object and Array Initializer )
  
  - [Operator Overview](#Operator-Overview)
  
    
  
- [Operator Overview](#Operator-Overview)
  - [Number of Operands](#Number of Operands)
  
  - [Operand and Result Type](#Operand-and-Result-Type)
  
  - [Lvalues](#Lvalues)
  
  - [Operator Side Effects](#Operator Side Effects)
  
  - [Operator Precedence](#Operator Precedence)
  
  - [Operator Associativity](#Operator-Associativity )
  
  - [Order of Evaluation](#Order-of-Evaluation)
  
    
  
- [Operadores Aritméticos](#Operadores Aritméticos)

  - [The + Operator](#The + Operator)

  - [Unary Arithmetic Operators](#Unary-Arithmetic-Operators)

  - [Bitwise Operators](#Bitwise Operators)

    

- [Operadores de Asignación](#Operadores de Asignación)

  

- [Operadores de Comparación](#Operadores de Comparación)

  - [Equality and Inequality](#Equality and Inequality)

  - [Identidad vs Igualdad](#Identidad vs Igualdad)

  - [The "in" Operator](#The "in" Operator)

  - [The "instanceof" Operator](#The "instanceof" Operator)

    

- [Operadores lógicos](#Operadores lógicos)

  - [Logical AND (&&)](#Logical AND (&&))

  - [Logical OR (||)](#Logical OR (||))

  - [Logical NOT (!)](#Logical NOT (!))

    

- [Evaluation Expressions](#Evaluation Expressions)

  

- [Miscellaneous Operators](#Miscellaneous Operators)

  - [Conditional Operator (?:)](#Conditional Operator (?:))
  - [The "typeof" Operator](#The "typeof" Operator)
  - [The "delete" Operator](#The "delete" Operator)
  - [The "void" Operator](#The "void" Operator)
  - [The comma operator (,)](#The comma operator (,))







## Expressions

An expression is a phrase of JavaScript that a JavaScript interpreter can evaluate to produce a value. So an expression is a combination of values, variables, and operators, which computes to a value. For example: 

- A constant embedded literally in your program is a very simple kind of expression. 
- A variable name is also a simple expression that evaluates to whatever
  value has been assigned to that variable. 

We also have complex expressions that are built from simpler expressions. The most common way to build a complex expression out of simpler expressions is with an operator. An operator combines the values of its operands (usually two of them) in some way and evaluates to a new value.



### Primary Expressions

primary expressions, are those that stand alone—they do not include any simpler expressions. Primary expressions in JavaScript are constant or literal values, certain language keywords, and variable references. Examples:



**Literals or constant values** 

```js
1.23		// A number literal
"hello"		// A string literal
/pattern/	// A regular expression literal
```



**JavaScript's reserved words**

```js
true 	// Evalutes to the boolean true value
false 	// Evaluates to the boolean false value
null 	// Evaluates to the null value
this 	// Evaluates to the "current" object
```



**Variable Reference**

```js
i			// Evaluates to the value of the variable i.
sum			// Evaluates to the value of the variable sum.
undefined	// undefined is a global variable, not a keyword like null.
```





### Object and Array Initializer 

***Object and array initializers are expressions whose value is a newly created object or array***. These initializer expressions are sometimes called “object literals” and “array literals.”  ***they are not primary expressions, because they include a number of subexpressions*** that specify property and element values.



#### Array Literal

In Javascript, ***an array literal is a list of expressions***, each of which represents an array element, enclosed in a pair of square brackets ' [ ] ' . 

An array initializer is a comma-separated list of expressions contained within square brackets. The value of an array initializer is a newly created array. 

```js
[]				// An empty array: no expressions inside brackets means no elements
[1+2, 3+4]		// A 2-element array. First element is 3, second is 7
```



The element expressions in an array initializer can themselves be array initializers, which means that these expressions can create nested arrays:

```js
var matrix = [[1,2,3], [4,5,6], [7,8,9]];
```



Undefined elements can be included in an array literal by simply omitting a value be-
tween commas. For example:

```js
var sparseArray = [1,,,,5];
```



#### Object Literals

Object initializer expressions are like array initializer expressions, but the square brackets are replaced by curly brackets, and each subexpression is prefixed with a property name and a colon:

```js
var p = { x:2.3, y:-1.2 }; 		// An object with 2 properties
var q = {};						// An empty object with no properties
q.x = 2.3; q.y = -1.2;			// Now q has the same properties as p
```



Object literals can be nested. For example:

```js
var rectangle = { upperLeft: { x: 2, y: 2 },
				  lowerRight: { x: 4, y: 5 } };
```



### Function Definition Expressions

A function definition expression defines a JavaScript function, and the value of such an expression is the newly defined function.

A function definition expression typically consists of the keyword function followed by a comma-separated list of zero or more identifiers (the parameter names) in parentheses and a block of JavaScript code (the function body) in curly braces. For example:

```js
// This function returns the square of the value passed to it.
var square = function(x) { return x * x; }
```



A function definition expression is a “function literal” in the same way that an object initializer is an “object literal.”



### Property Access Expressions

A property access expression evaluates to the value of an object property or an array element. JavaScript defines two syntaxes for property access:

```js
expression . identifier
expression [ expression ]
```



1. The first style of property access is an expression followed by a period and an identifier. The expression specifies the object, and the identifier specifies the name of the desired property. 

2. The second style of property access follows the first expression (the object or array) with another expression in square brackets. This second expression specifies the name of the desired property of the index of the desired array element.

   

```js
var o = {x:1,y:{z:3}};		// An example object
var a = [o,4,[5,6]];		// An example array that contains the object 

o.x			// => 1: property x of expression o 
o.y.z 		// => 3: property z of expression o.y 
o["x"] 		// => 1: property x of object o
a[1] 		// => 4: element at index 1 of expression a
a[2]["1"]	// => 6: element at index 1 of expression a[2]
a[0].x		// => 1: property x of expression a[0]
```



If the value is null or undefined, the expression throws a TypeError, since these are the two JavaScript values that cannot have properties.

 

### Invocation Expressions

An invocation expression is JavaScript’s syntax for calling (or executing) a function or method. It starts with a function expression that identifies the function to be called. The function expression is followed by an open parenthesis, a comma-separated list of zero or more argument expressions, and a close parenthesis. Some examples:

```js
f(0)				// f is the function expression; 0 is the argument expression.
Math.max(x,y,z) 	// Math.max is the function; x, y and z are the arguments.
a.sort()			// a.sort is the function; there are no arguments.

```



### Object Creation Expressions

An object creation expression creates a new object and invokes a function (called a constructor) to initialize the properties of that object. Object creation expressions are like invocation expressions except that they are prefixed with the keyword new:

```js
newnewObject()
Point(2,3)
```





If no arguments are passed to the constructor function in an object creation expression,
the empty pair of parentheses can be omitted:

```js
newnewObject
Date
```



When an object creation expression is evaluated, JavaScript first creates a new empty object, just like the one created by the object initializer {}. Next, it invokes the specified function with the specified arguments, passing the new object as the value of the **this** keyword.





## Operator Overview

Operators are used for JavaScript’s arithmetic expressions, comparison expressions, logical expressions, assignment expressions, and more. 

Note that most operators are represented by punctuation characters such as + and =. Some, however, are represented by keywords such as "***delete***" and "***instanceof***".

The following table summarizes the operators:



#### Operators' Table

| Operator                                        | Operation                              | A    | N    |
| ----------------------------------------------- | -------------------------------------- | ---- | ---- |
| ++                                              | Pre- or post-increment                 | R    | 1    |
| --                                              | Pre- or post-decrement                 | R    | 1    |
| -                                               | Negate number                          | R    | 1    |
| +                                               | Convert to number                      | R    | 1    |
| ~                                               | Invert bits                            | R    | 1    |
| !                                               | Invert boolean value                   | R    | 1    |
|                                                 |                                        |      |      |
| delete                                          | Remove a property                      | R    | 1    |
| typeof                                          | Determine type of operand              | R    | 1    |
| void                                            | Return undefined value                 | R    | 1    |
|                                                 |                                        |      |      |
| *, /, %                                         | Multiply, divide, remainder            | L    | 2    |
|                                                 |                                        |      |      |
| +, -                                            | Add, subtract                          | L    | 2    |
| +                                               | Concatenate strings                    | L    | 2    |
|                                                 |                                        |      |      |
| <<                                              | Shift left                             | L    | 2    |
| >>                                              | Shift right with sign extension        | L    | 2    |
| >>>                                             | Shift right with zero extension        | L    | 2    |
|                                                 |                                        |      |      |
| <, <=,>, >=                                     | Compare in numeric or Alphabetic order | L    | 2    |
| instanceof                                      | Test object class                      | L    | 2    |
| in                                              | Test whether property exists           | L    | 2    |
|                                                 |                                        |      |      |
| ==                                              | Test for equality                      | L    | 2    |
| !=                                              | Test for inequality                    | L    | 2    |
| ===                                             | Test for strict equality               | L    | 2    |
| !==                                             | Test for strict inequality             | L    | 2    |
|                                                 |                                        |      |      |
| &                                               | Compute bitwise AND                    | L    | 2    |
| ^                                               | Compute bitwise XOR                    | L    | 2    |
| \|                                              | Compute bitwise OR                     | L    | 2    |
| &&                                              | Compute logical AND                    | L    | 2    |
| \|\|                                            | Compute logical OR                     | L    | 2    |
| ?:                                              | Choose 2nd or 3rd operand              | R    | 3    |
| =                                               | Assign to a variable or property       | R    | 2    |
| *=, /=, %=, +=, -=, &=, ^=, \|=, <<=, >>=, >>>= | Operate and assign                     | R    | 2    |
| ,                                               | Discard 1st operand, return second     | R    | 2    |



### Number of Operands

Operators can be categorized based on the number of operands they expect.  Most JavaScript operators, like the * multiplication operator, are binary operators that combine two expressions into a single, more complex expression. 

JavaScript also supports a number of unary operators, which convert a single expression into a single, more complex expression. The − operator in the expression −x is a unary operator that performs the operation of negation on the operand x.

Finally, JavaScript supports one ternary operator, the conditional operator ?:, which combines three expressions into a single expression.

In the [Table](#Operators'-Table) the "N" column shows the the number of operands they expect.



### Operand and Result Type

Some operators work on values of any type, but most expect their operands to be of a specific type, and most operators return (or evaluate to) a value of a specific type.  For example:

```js
var operand1 = 6
var invalidOperand = "8"
console.log(invalidOperand + operand1);
```



The result should be "14", but because one of the values is a string we don't get that result. It will do a concatenation of the string "8" and the number "6". 



#### Conversions

As we saw previously, a result can be converted. If we mix a string with a number with "+" operator it will return a string. Another example would be the multiplication operator, This operator expects numeric operands,  but the expression "3" * "5" is legal because JavaScript can convert the operands to numbers. 



### Lvalues

lvalue is a historical term that means “*an expression that can legally appear on the left side of an assignment expression.*”

JavaScript, variables, properties of objects, and elements of arrays are lvalues. 



### Operator Side Effects

Evaluating a simple expression like 2 * 3 never affects the state of your program, and any future computation your program performs will be unaffected by that evaluation.

Some expressions, however, have side effects, and their evaluation may affect the result of future evaluations. Some examples of these side effects are: Assigment operators, Increment and decrement and delete.

"**Note**: *function invocation and object creation expressions will have side effects if any of the operators used in the function or constructor body have side effects*".



### Operator Precedence

The operators listed in the [Table](#Operators'-Table) are arranged in order from high precedence to low precedence, with horizontal lines separating groups of operators at the same precedence level. Operator precedence controls the order in which operations are performed. Operators with higher precedence (nearer the top of the table) are performed before those with lower precedence (nearer to the bottom).



### Operator Associativity 

The associativity of an operator specifies the order in which operations of the same precedence are performed.

In the [Table](#Operators'-Table), the column labeled A specifies the associativity of the operator.  A value of L specifies left-to-right associativity, and a value of R specifies right-to-left associativity. 

Left-to-right associativity means that operations are performed from left to right. For example, the subtraction operator has left-to-right associativity, so:

```js
w = x - y - z;
```

Is the same as:

```js
w = ((x - y) - z);
```



### Order of Evaluation

Operator precedence and associativity specify the order in which operations are performed in a complex expression, but they do not specify the order in which the subexpressions are evaluated.

***JavaScript always evaluates expressions in strictly left-to-right order.*** In the expression w=x+y*z, for example, the subexpression w is evaluated first, followed by x, y, and z. Then the values of y and z are multiplied, added to the value of x, and assigned to the variable or property specified by expression w. 





## Operadores Aritméticos

Los operadores aritmeticos toman valores numéricos como sus operando y retornan un valor numérico único.



#### Lista de operadores

  - Addition (+)

  - Substraction (-)

  - Multiplication (*)

  - Division(/)

  - Reminder (%)

  - Exponentation (**)

  - Increment (++)

  - Decrement (--)

    

```javascript
var num1 = 4;
var num2 = 6;

var num3 = 4;
num3--;
var num4 = 4;
num4++;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(num3);
console.log(num4);
```



### The + Operator

This operator can add numeric operands or concatenate strings:

```js
1 + 2						// => 3
"hello" + " " + "there"		// => "hello there"
"1" + "2"					// => "12"
```



The conversions rules for + give priority to string concatenation: if either of the operands is a string or an object that converts to a string, the other operand is converted to a string and concatenation is performed.

Finally, it is important to note that when the + operator is used with strings and numbers, it may not be associative. That is, the result may depend on the order in which operations are performed. For example:

```js
1 + 2 + " blind mice"; 		// => "3 blind mice"
1 + (2 + " blind mice");	// => "12 blind mice"
```



### Unary Arithmetic Operators

A unary operation is an operation with only one operand. This operand comes either before or after the operator.

 In JavaScript, the unary operators all have high precedence and are all right-associative.

 Note that the punctuation characters + and - are used as both unary and binary operators.



| Operand         | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| Unary plus (+)  | Tries to convert the operand into a number                   |
| Unary minus (-) | Tries to convert the operand into a number and negates after |
| Increment (++)  | Adds one to its operand                                      |
| Decrement (--)  | Decrements by one from its operand                           |



### Bitwise Operators

JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.

After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

The bitwise operators perform low-level manipulation of the bits in the binary representation of numbers. Although they do not perform traditional arithmetic operations, they are categorized as arithmetic operators here because they operate on numeric operands and return a numeric value.





## Operadores de Asignación

JavaScript uses the = operator to assign a value to a variable or property. For example:

```js
i = 0		// Set the variable i to 0.
o.x = 1		// Set the property x of object o to 1
```



The = operator expects its left-side operand to be an lvalue: a variable or object property (or array element). It expects its right-side operand to be an arbitrary value of any type.

The value of an assignment expression is the value of the right-side operand. 

Entonces los operadores de asignación, asignan un valor al operando de la izquierda basado en el valor del operando en la derecha.



| Nombre                          | Abreviación | Significado |
| ------------------------------- | ----------- | ----------- |
| Asignación                      | x = y       | x = x = y   |
| Adicción                        | x += y      | x = x + y   |
| Sustracción                     | x -= y      | x = x - y   |
| Multiplicación                  | x *= y      | x = x * y   |
| División                        | x /= y      | x = x / y   |
| Residuo                         | x %= y      | x = x % y   |
| Exponenciacion                  | x **= y     | x = x ^ y   |
| Desplazamiento izq              | x <<= y     |             |
| desplazamiento der              | x >>= y     |             |
| sin signo de desplazamiento der | x >>>= y    |             |
| and                             | x &- y      |             |
| xor                             | x ^⁼ y      |             |
| or                              | x \|= y     |             |



```js
let x = 2;
const y = 3;

//x value
console.log(x);

// X value with operators
console.log(x+=y);
console.log(x-=y);
console.log(x*=y);
console.log(x/=y);
console.log(x%=y);
console.log(x**=y);
```

En este caso el valor de x irá cambiando dependiendo del resultado, es decir, en el primero 2 + 3 = 5 y en el segundo console log sería, 5 - 3 = 2 y así sucesivamente.



### parseInt();

Cuando se un prompt para introducir un número, este será leido como string, por lo que se tiene que convertir a un dato numérico, para esto se utiliza el parseInt().

```javascript
let num = prompt("introduce un número");
let num = parseInt(num);
```

Cuando se quiere agregar el resultado a un string, habrá que meter la variable de los números entre paréntesis en caso de que se quiera operar con estos.

```javascript
var dinero = prompt("cuanto dinero tienes?");
var dinero = parseInt(dinero);

if(dinero >= 0.6 && dinero <= 1{
	alert("comprate un helado de agua");
	alert("y te sobrarán" + (dinero - 0.6)); //concatenar int a un string
}
```

En este caso se quiere operar el número introducido por el usuario, si no se pone entre parentesis concatenará el string con la variable dinero y se le restará 0.6 que saldá un valor NaN porque no se le puede restar a un string 0.6.





## Operadores de Comparación

los operadores de comparación comparan expresiones y devuelven un valor Boolean que representa la relación de sus valores.

| Operadores        | Signos                  |
| ----------------- | ----------------------- |
| Igualdad          | a == b  //true or false |
| Inigualdad        | a != b  //true or false |
| Identidad         | a === b //true or false |
| Non-identidad     | a !==b  //true or false |
| Mayor que         | a > b  //true or false  |
| Menor que         | a < b  //true or false  |
| Mayor o igual que | a >= b //true or false  |
| Menor o igual que | a <= b //true or false  |



### Equality and Inequality

The == and === operators check whether two values are the same, using two different
definitions of sameness. Both operators accept operands of any type, and both return
true if their operands are the same and false if they are different.

The === operator is known as the strict equality operator (or sometimes the identity operator), and it checks whether its two operands are “identical” using a strict definition of sameness.

The == operator is known as the equality operator; it checks whether its two operands are “equal” using a more relaxed definition of sameness that allows type conversions.

The != and !== operators test for the exact opposite of the == and === operators.

**Note**: *"JavaScript supports =, ==, and === operators. Be sure you understand the differences between these assignment, equality, and strict equality operators"*.



### Identidad vs Igualdad

Identidad es la comparación de dos datos, a diferencia de igualdad, identidad deben ser identicos en el dato que contiene y el tipo de datos. En igualdad se puede tener un string con el dato 23 y un número con el dato 23 y serán iguales, esto en identidad no será así.

```javascript
var num1 = 3;
var num2 = 4;

var resultado = num1 > num2;
var resultado1 = num1 < num2;
var resultado2 = num1 >= num2;
var resultado3 = num1 <= num2;
var resultado4 = num1 == num2;
var resultado5 = num1 != num2;
var resultado6 = num1 === num2;
var resultado7 = num1 !== num2;

document.write(resultado + "<br>");
document.write(resultado1 + "<br>");
document.write(resultado2 + "<br>");
document.write(resultado3 + "<br>");
document.write(resultado4 + "<br>");
document.write(resultado5 + "<br>");
document.write(resultado6 + "<br>");
document.write(resultado7 + "<br>");
```



### The "in" Operator

The **`in` operator** returns `true` if the specified property is in the specified object or its prototype chain. 

The in operator expects a **left-side operand** that is or **can be converted to a string**. It expects a **right-side operand that is an object**.

The "in" operator evaluates to true if the left-side value is the name of a property of the right-side object.

 For example:

```js
var point = { x:1, y:1 };	// Define an object
"x" in point				// => true: object has property named "x"
"z" in point				// => false: object has no "z" property.
```



### The "instanceof" Operator

The **instanceof** operator expects a left-side operand that is an object and a right-side
operand that identifies a class of objects.

The operator evaluates to true if the left-side object is an instance of the right-side class and evaluates to false otherwise.

 in JavaScript, classes of objects are defined by the constructor function that initializes them. Thus, the right-side operand of "instanceof" should be a function. Here are examples:

```js
var d = new Date();		// Create a new object with the Date() constructor
d instanceof Date;		// Evaluates to true; d was created with Date()
d instanceof Object;	// Evaluates to true; all objects are instances of Object
d instanceof Number;	// Evaluates to false; d is not a Number object
```





## Operadores lógicos

Nos devuelven un resultado a partir de que se cumpla o no una condición, su resultado es booleano (True or False), y sus operandos son valores lógicos o asimilables a ellos.

| Operador | Signos   |
| -------- | -------- |
| and      | a && b   |
| or       | a \|\| b |
| not      | a ! b    |



### Logical AND (&&)

Si cualquiera de los dos valores es falso, devolverá falso. AND nos dice; Si x condición y z condición se cumplen, entonces es verdadero (ambas tienen que cumplirse).

```javascript
var num1 = 3;
var num2 = 4;

var afirmacion1 = num1 < num2;
var afirmacion2 = num1 != num2;

document.write(afirmacion1 && afirmacion2) //True
```



### Logical OR (||)

Si cualquiera de las dos es verdadera, devolverá verdadero. OR no dice; Si "x" condición o "y" condición se cumplen, entonces es verdadero (solo una de ellas se tiene que cumplir).

```javascript
var num1 = 3;
var num2 = 4;

var afirmacion1 = num1 < num2;
var afirmacion2 = num1 > num2;

document.write(afirmacion1 || afirmacion2) //True
```



### Logical NOT (!)

Regresa lo contrario de lo que le devuelves. Es decir, si "x" es verdadero entonces regresará falso.

```javascript
var num1 = 3;
var num2 = 4;

var afirmacion1 = num1 < num2;
var afirmacion2 = num1 > num2;

document.write(!afirmacion1) //False
```





## Evaluation Expressions

JavaScript has the ability to interpret strings of JavaScript source code, evaluating them to produce a value. JavaScript does this with the global function eval():

```js
eval("3+2")		// => 5
```



Dynamic evaluation of strings of source code is a powerful language feature that is almost never necessary in practice. If you find yourself using eval(), you should think carefully about whether you really need to use it.



#### Warning 

**Do NOT use eval()**

Executing JavaScript from a string is an BIG security risk. With eval(), malicious code can run inside your application without permission.

With eval(), third-party code can see the scope of your application, which can lead to possible attacks.





## Miscellaneous Operators





### Conditional Operator (?:)

The conditional operator is the only ternary operator (three operands) in JavaScript and is sometimes actually called the ternary operator.

This operator is sometimes written ?:, although it does not appear quite that way in code

Because this operator has three operands, the first goes before the ?, the second goes between the ? and the :, and the third goes after the :. It is used like this:

```js
x > 0 ? x : -x  // The absolute value of x
```



#### How it works?

 The first operand is evaluated and interpreted as a boolean. If the value of the first operand is truthy, then the second operand is evaluated, and its value is returned. Otherwise, if the first operand is falsy, then the third operand is evaluated and its value is returned.

*"Algo parecido al condicional if - else"*

```js
// condition ? expressionIfTrue : expressionIfFalse;
```

If the condition is `true`, the first expression (`expresionIfTrue`) executes. If it is false, the second expression (`expressionIfFalse`) executes.



Ejemplo:

```js
let age = 18;
let message;

// With Conditional Operator
age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');

console.log(message);

// With if conditional
if (age > 16)
  console.log("You can drive.");
else
  console.log("You can't drive.");

```



Note: The operands of the conditional operator may be of any type. 



### The "typeof" Operator

typeof is a unary operator that is placed before its single operand, which can be of any type. Its value is a string that specifies the type of the operand. 



|               x               |                           typeof x                           |
| :---------------------------: | :----------------------------------------------------------: |
|           undefined           |                         "undefined"                          |
|             null              |                           "object"                           |
|         true or false         |                          "boolean"                           |
|       any number or NaN       |                           "number"                           |
|          any string           |                           "string"                           |
|         any function          |                          "function"                          |
| any nonfunction native object |                           "object"                           |
|        any host object        | An implementation-defined string, but not “undefined”, “boolean”, “number”, or “string”. |





### The "delete" Operator

"delete" is a unary operator that attempts to delete the object property or array element specified as its operand. Example:

```js
var o = { x: 1, y: 2}; 			// Start with an object
delete o.x; 					// Delete one of its properties
"x" in o 						// => false: the property does not exist anymore
```



### The "void" Operator

void is a unary operator that appears before its single operand, which may be of any type. This operator is unusual and infrequently used: it evaluates its operand, then discards the value and returns undefined.





### The comma operator (,)

The comma operator is a binary operator whose operands may be of any type. It evaluates its left operand, evaluates its right operand, and then returns the value of the right operand. 







[Back to top](#Expressions-and-Operators)