function mormalFunc() {
    return "I'm a function";
}

function add(num1, num2) {
    return num1 + num2;
}

const arrowAdd = (num1, num2) => num1 + num2;  // arrow function 

const arrowAdd2 = (num1, num2, add) => {
    if(add) {
        return num1 + num2;
    }
    return null;
}

/* 
* defaut params
*/
function calculator(numberOne, numberTwo = 30, operator = 'add') {
    if(operator == 'add') {
        return numberOne + numberTwo;
    } else if(operator == 'minus') {
        return numberOne - numberTwo;
    }
}

console.log(calculator(10, 4, 'minus'))