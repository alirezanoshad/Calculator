// defining Basic Numbers By User
let Calculator = {

    number1: 100,
    number2: 25,
};

// defining Mathematical Applications

let plus = Calculator.number1 + Calculator.number2,
    minus = Calculator.number1 - Calculator.number2,
    division = Calculator.number1 / Calculator.number2,
    secondDivision =  Calculator.number2 / Calculator.number1,
    multiplication = Calculator.number1 * Calculator.number2;

// showing Mathematical Applications Results To The Audience  
console.log("Basic Numbers",Calculator.number1 , Calculator.number2 );
console.log("Plus",plus );
console.log("Minus",minus );
console.log("Division num1 divided by num2",division );
console.log("Division num2 divided by num1",secondDivision );
console.log("Times",multiplication );


