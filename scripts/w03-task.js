/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers()
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value  = add(addNumber1,addNumber2);
}document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(number1, number2)
{
    return number1 - number2;
}

function subtractNumbers()
{
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value  = subtract(subtract1,subtract2);
}document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () =>
{
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () =>
{
    let factor1 = Number(document.querySelector('#dividend').value);
    let factor2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(factor1, factor2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click',calculateTotal);
function calculateTotal()
{
    const subtotalInput = document.getElementById('subtotal');
    const subtotal = parseFloat(subtotalInput.value) || 0; 
    const isaMember = document.getElementById('member').checked;
    const discount = isaMember ? 0.2 : 0;
    const total = subtotal * (1 - discount);
    const totalSpan = document.getElementById('total');
    totalSpan.textContent = `$ ${total.toFixed(2)}`;
} 
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
let theArray = document.getElementById('array');
theArray.textContent = numbersArray.join(', ');

/* Output Odds Only Array */
let oddNumsList = numbersArray.filter(number => number % 2 !== 0);
let oddNumElement = document.getElementById('odds');
oddNumElement.textContent = oddNumsList.join(', ')

/* Output Evens Only Array */
let evenNumList = numbersArray.filter(number => number % 2 === 0);
let evenNumElement = document.getElementById('evens');
evenNumElement.textContent = evenNumList.join(', ');

/* Output Sum of Org. Array */
let numSum = numbersArray.reduce((sum, number) => sum + number, 0);
let arraySumElement = document.getElementById('sumOfArray');
arraySumElement.textContent = numSum.toString(); 

/* Output Multiplied by 2 Array */
let multiple = numbersArray.map(number => number * 2)
let themultiplyElement = document.getElementById('multiplied');
themultiplyElement.textContent = multiple.join(', ')

/* Output Sum of Multiplied by 2 Array */
let doubleTheNums = numbersArray.map(number => number * 2);
let sumedMultiples = doubleTheNums.reduce((sum, number) => sum + number, 0);
let sumedMultiplesElement = document.getElementById('sumOfMultiplied');
sumedMultiplesElement.textContent = sumedMultiples.toString(); 