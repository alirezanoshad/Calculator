// defining Basic Numbers By User.
let Calculator = {
//we added number to our code in order to comvert our value to number.
    numberA: Number(prompt("first number")),
    numberB: Number(prompt("sec number")),
};

// defining Mathematical Applications.

let plus = Calculator.numberA + Calculator.numberB,
    minus = Calculator.numberA - Calculator.numberB,
    secondMinus = Calculator.numberB - Calculator.numberA,
    division = Calculator.numberA / Calculator.numberB,
    secondDivision =  Calculator.numberB / Calculator.numberA,
    multiplication = Calculator.numberA * Calculator.numberB;

// showing Mathematical Applications Results To The Audience. 
console.log("Basic Numbers(A & B)",Calculator.numberA , Calculator.numberB );
console.log("Plus",plus );
console.log("Minus(numA - numB)",minus );
console.log("Minus(numB - numA)",secondMinus );
console.log("Division numA divided by numB",division );
console.log("Division numB divided by numA",secondDivision );
console.log("Times",multiplication );


