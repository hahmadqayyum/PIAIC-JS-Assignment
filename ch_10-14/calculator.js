const operator = prompt("Enter operator ( either +, -, * or / ): ");

const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

let result;
console.log(operator);

if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "*") {
  result = number1 * number2;
} else {
  result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);
alert(`${number1} ${operator} ${number2} = ${result}`);
