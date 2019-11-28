let firstOperand;
let secondOperand;
let operator = undefined;
function displayNumber(number) {
    let display = document.getElementById("display");
    if (operator === undefined) {
        display.value += number;
        firstOperand = display.value;
    } else {
        if (secondOperand === undefined) {
            display.value = number;
        } else {
            display.value += number;
        }
        secondOperand = display.value;
    }
}

function clickOperator(selectedOperator) {
    operator = selectedOperator;
}

function equal() {
    let display = document.getElementById("display");
    firstOperand = parseInt(firstOperand);
    secondOperand = parseInt(secondOperand);
    switch (operator) {
        case '+':
            display.value = firstOperand + secondOperand;
            break;
        case '-':
            display.value = firstOperand - secondOperand;
            break;
        case '*':
            display.value = firstOperand * secondOperand;
            break;
        case '/':
            display.value = firstOperand / secondOperand;
            break;
    }
    firstOperand = display.value;
    secondOperand = undefined;
}
