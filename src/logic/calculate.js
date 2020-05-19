import operate from './operate';

function calculate(calculator, buttonName) {
  let { total, next, operation } = calculator;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const symbols = ['%', '÷', 'x', '-', '+'];

  if (numbers.includes(buttonName)) {
    if (total) {
      total += buttonName;
    } else {
      total = buttonName;
    }
  } else if (buttonName === '.') {
    if (total.indexOf(buttonName) === -1) {
      total += buttonName;
    }
  } else if (buttonName === '+/-') {
    total = (parseFloat(total) * (-1)).toString();

    if (next) next = (parseFloat(next) * -1).toString();
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '%' && !next) {
    total = (parseFloat(total) / 100).toString();
  } else if (symbols.includes(buttonName) && !operation) {
    next = total;
    total = null;
    operation = buttonName;
  } else if (symbols.includes(buttonName) && operation && (!next || !total)) {
    operation = buttonName;
  } else if (symbols.includes(buttonName) && operation) {
    next = operate(parseFloat(next), parseFloat(total), operation);
    total = null;
    operation = buttonName;
  } else if (total && next && operation) {
    total = operate(parseFloat(next), parseFloat(total), operation);
    next = null;
    operation = null;
  }

  return { total, next, operation };
}

export default calculate;
