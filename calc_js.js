let memory = 0;

function clearMemory() {
    memory = 0;
}

function recallMemory() {
    document.calculator.display.value = memory;
}

function addToMemory() {
    let currentValue = document.calculator.display.value;
    try {
        memory += eval(currentValue);
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}

function subtractFromMemory() {
    let currentValue = document.calculator.display.value;
    try {
        memory -= eval(currentValue);
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}

function setMemory() {
    let currentValue = document.calculator.display.value;
    try {
        memory = eval(currentValue);
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}

function appendCharacter(char) {
    let expression = document.calculator.display.value;
    try {
        let result = eval(expression);
        if (result == 0){
            document.calculator.display.value = char;
        }
        else{
            document.calculator.display.value += char;
        }
    } catch (error) {
        document.calculator.display.value += char;
    }
}

function clearDisplay() {
    document.calculator.display.value = '0';
}

function deleteLastCharacter() {
    let currentValue = document.calculator.display.value;
    const specialValues = ['Error', 'Math.PI', 'Math.E', 'Math.log(', 'Math.log10(', 'NaN', 'Infinity', 'Math.exp('];
    let currentValueString = currentValue.toString();
    if (specialValues.includes(currentValueString)) {
        currentValue = "0";
    } else {
        currentValue = currentValue.slice(0, -1);
    }
    document.calculator.display.value = currentValue;
}


function square() {
    let expression = document.calculator.display.value;
    try {
        let result = eval(expression);
        document.calculator.display.value = result*result;
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}

function reciprocal() {
    let expression = document.calculator.display.value;
    try {
        let result = eval(expression);
        document.calculator.display.value = 1/result;
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}

function absolute() {
    let expression = document.calculator.display.value;
    try {
        let result = eval(expression);
        document.calculator.display.value = Math.abs(result);
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}

function squareRoot() {
    let expression = document.calculator.display.value;
    try {
        let result = eval(expression);
        document.calculator.display.value = Math.sqrt(result);
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}

function factorial() {
    let expression = document.calculator.display.value;
    try {
        let num = parseInt(expression);
        
        if (isNaN(num) || num < 0) {
            document.calculator.display.value = 'Error';
        } else {
            let result = calculateFactorial(num);
            document.calculator.display.value = result;
        }
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}

function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}

function powerOfTen() {
    let expression = document.calculator.display.value;
    try {
        let result = eval(expression);
        document.calculator.display.value = 10**result;
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}

function changeSign() {
    let expression = document.calculator.display.value;
    try {
        let result = eval(expression);
        document.calculator.display.value = result*(-1);
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}

function calculateResult() {
    let expression = document.calculator.display.value;
    let result;
    try {
        result = eval(expression);
        document.calculator.display.value = result;
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}
    