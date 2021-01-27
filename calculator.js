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
    output = document.getElementById('output1'),
    output2 = document.getElementById('output2'),
    input = document.querySelector('input'),
];


let a;
let b;
let action = [];

// функція приймає значення кнопки або ключ клавіші
function actionOnClick(val) {

    function cleanOutput() {
        output.textContent = ''
    }

    function cleanOutput2() {
        output2.textContent = ''
    }

    // якщо натиснуто знак дорівнює або Enter
    if (val === '=') {
        b = +output.textContent;
        output2.textContent += output.textContent;
        cleanOutput();
        output.textContent += ` ${val} `;
        let result;
        switch (action) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }
        output.textContent += result;
        a = result;
        action = [];

        // якщо натиснуто символ 'С' або Del
    } else if (val === 'C') {
        cleanOutput();
        cleanOutput2();

        // якщо натиснуто символ 'СЕ' або Backspace
    } else if (val === 'CE') {
        if (output.textContent !== '') {
            let nu = output.textContent
            output.textContent = ''
            let numb = [...nu]
            numb.pop()
            numb.forEach(function (item) {
                output.textContent += item
            })
        } else if (output2.textContent !== '') {
            let nu = output2.textContent
            output2.textContent = ''
            let numb = [...nu]
            numb.pop()
            numb.forEach(function (item) {
                output2.textContent += item
            })
        }
        // якщо значення val (те яке очікуємо) рівне +,-,*,/.
    } else if (val === '+' || val === '-'
        || val === '*' || val === '/') {
        action = val;
        output.textContent += ` ${val} `;
        output2.textContent += output.textContent;
        cleanOutput();

        // якщо action визначено
    } else if (action === '+' || action === '-'
        || action === '*' || action === '/') {
        output.textContent += val;

        // якщо жодна з умова не виконана, записуємо значення val в поле
    } else {
        output.textContent += val;
        a = +output.textContent;
    }
}

// onButton = [
//     onNumber1 = () => {
//         actionOnClick('1');
//     },
//     onNumber2 = () => {
//         actionOnClick('2');
//     },
//     onNumber3 = () => {
//         actionOnClick('3');
//     },
//     onNumber4 = () => {
//         actionOnClick('4');
//     },
//     onNumber5 = () => {
//         actionOnClick('5');
//     },
//     onNumber6 = () => {
//         actionOnClick('6');
//     },
//     onNumber7 = () => {
//         actionOnClick('7');
//     },
//     onNumber8 = () => {
//         actionOnClick('8');
//     },
//     onNumber9 = () => {
//         actionOnClick('9');
//     },
//     onNumber0 = () => {
//         actionOnClick('0');
//     },
//     onPoint = () => {
//         actionOnClick('.')
//     },
//     onDivide = () => {
//         actionOnClick('/')
//     },
//     onMultiply = () => {
//         actionOnClick('*')
//     },
//     onMinus = () => {
//         actionOnClick('-')
//     },
//     onPlus = () => {
//         actionOnClick('+')
//     },
//     onSum = () => {
//         actionOnClick('=')
//     },
//     onCE = () => {
//         actionOnClick('CE')
//     },
//     onC = () => {
//         actionOnClick('C')
//     },
//     onPercent = () => {
//         actionOnClick('%')
//     },
//     onChange = () => {
//         actionOnClick('-/+')
//     },
// ]

function onClickValueButton(eventObject) {
    let currentElement = eventObject.currentTarget;
    let valueCurrentElement = currentElement.innerHTML;
    actionOnClick(valueCurrentElement)
}

buttons[0].addEventListener('click', onClickValueButton);
button2.addEventListener('click', onNumber2);
button3.addEventListener('click', onNumber3);
button4.addEventListener('click', onNumber4);
button5.addEventListener('click', onNumber5);
button6.addEventListener('click', onNumber6);
button7.addEventListener('click', onNumber7);
button8.addEventListener('click', onNumber8);
button9.addEventListener('click', onNumber9);
button0.addEventListener('click', onNumber0);
buttonPoint.addEventListener('click', onPoint);
buttonDivide.addEventListener('click', onDivide);
buttonMultiply.addEventListener('click', onMultiply);
buttonMinus.addEventListener('click', onMinus);
buttonPlus.addEventListener('click', onPlus);
buttonSum.addEventListener('click', onSum);
buttonCE.addEventListener('click', onCE);
buttonC.addEventListener('click', onC);
buttonPercent.addEventListener('click', onPercent);
buttonChange.addEventListener('click', onChange);