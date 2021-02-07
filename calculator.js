buttons = [
    button1 = document.getElementById('number1'),
    button2 = document.getElementById('number2'),
    button3 = document.getElementById('number3'),
    button4 = document.getElementById('number4'),
    button5 = document.getElementById('number5'),
    button6 = document.getElementById('number6'),
    button7 = document.getElementById('number7'),
    button8 = document.getElementById('number8'),
    button9 = document.getElementById('number9'),
    button0 = document.getElementById('number0'),
    buttonPoint = document.getElementById('point'),
    buttonDivide = document.getElementById('btnDivide'),
    buttonMultiply = document.getElementById('btnMultiply'),
    buttonMinus = document.getElementById('btnMinus'),
    buttonPlus = document.getElementById('btnPlus'),
    buttonSum = document.getElementById('btnSum'),
    buttonCE = document.getElementById('CE'),
    buttonC = document.getElementById('C'),
    buttonPercent = document.getElementById('percent'),
    buttonChange = document.getElementById('btnChange'),
    output = document.getElementById('output'),
    output1 = document.getElementById('output1'),
    output2 = document.getElementById('output2'),
];

let a;
let b;
let action;
let arrayAction = [];
let result;

// функція приймає значення кнопки або ключ клавіші
function actionOnClick(val) {

    function cleanOutput() {
        output.textContent = ''
    }

    function cleanOutput1() {
        output1.textContent = ''
    }

    function cleanOutput2() {
        output2.textContent = ''
    }


    function lengthActionThree() {
        a = arrayAction[0];
        action = arrayAction[1];
        b = arrayAction[2];
    }

    function lengthActionFive() {
        checkSymbolForAction()
        lengthActionThree()
        startOperation()
        a = result;
        action = arrayAction[3];
        b = arrayAction[4];
    }

    function checkSymbolForAction() {
        if (arrayAction.includes('-' || '+' && '*' || '/') === true) {
            let cutOutElements = arrayAction.splice(2, 3);
            let temporaryVal = arrayAction.splice(1, 1)
            let lastVal = arrayAction.splice(0, 1)
            let newArray = cutOutElements.concat(temporaryVal);
            arrayAction = newArray.concat(lastVal);
        }

    }

    function deleteOneSymbol(out) {
        let nu = out.textContent
        out.textContent = ''
        let numb = [...nu]
        numb.pop()
        numb.forEach(function (item) {
            out.textContent += item
        })
    }

    function endOperation() {
        output.textContent += ` = `;
        output.textContent += result;
        a = result;
        output1.textContent += output.textContent;
        output2.textContent += output1.textContent;
        output2.textContent += '; ';
        cleanOutput();
        cleanOutput1();
        arrayAction = [];
        action = undefined;
    }

    if (val === '=' || val === 'Enter') {
        function startOperation() {
            switch (action) {
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                default:
                    result = '';
                    break;
            }
        }

        if (output1.textContent !== '') {
            let number = +output.textContent;
            arrayAction.push(number);
        } else if (result === '') {
            output.textContent = '';
        }

        if (arrayAction.length === 3) {
            lengthActionThree()
            startOperation()
            endOperation()
        } else if (arrayAction.length === 5) {
            lengthActionFive()
            startOperation()
            endOperation()
        }
        if (result === '') {
            output.textContent += ``;
        }

        // якщо натиснуто символ 'С' або Del
    } else if (val === 'C' || val === 'Delete') {
        cleanOutput();
        cleanOutput1();
        cleanOutput2();
        arrayAction = [];

        // якщо натиснуто символ 'СЕ' або Backspace
    } else if (val === 'CE' || val === 'Backspace') {
        if (output.textContent !== '') {
            deleteOneSymbol(output)
            a = output.textContent;
        } else if (output1.textContent !== '') {
            deleteOneSymbol(output1)
            arrayAction.pop()
        }
        // якщо значення val (те яке очікуємо) рівне +,-,*,/.
    } else if (val === '+' || val === '-'
        || val === '*' || val === '/') {
        let number = +output.textContent;
        arrayAction.push(number);
        arrayAction.push(val);
        output.textContent += `${val}`;
        output1.textContent += output.textContent;
        cleanOutput();

        // якщо action визначено
    } else if (action === '+' || action === '-'
        || action === '*' || action === '/') {
        output.textContent += val;

        // якщо жодна з умова не виконана, записуємо значення val в поле
    } else if (val === 'on') {
        output.textContent += ''

        // якщо жодна з умова не виконана, записуємо значення val в поле
    } else {
        output.textContent += val;

    }
}

function onClickValueButton(eventObject) {
    let currentElement = eventObject.currentTarget;
    let valueCurrentElement = currentElement.innerHTML;
    actionOnClick(valueCurrentElement)
}


function keyupValueButton(event) {
    let valueCurrentElement = event.key;
    actionOnClick(valueCurrentElement)
}

function onClickButtonAddEventListener(i) {
    buttons[i].addEventListener('click', onClickValueButton);
    buttons[i].addEventListener('keydown', keyupValueButton);
}

for (let i = 0; i < buttons.length; i++) {
    onClickButtonAddEventListener(i)
}