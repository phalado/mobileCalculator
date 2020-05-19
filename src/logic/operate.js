import Big from 'big-js';

function operate(numberOne, numberTwo, operation) {
  let result = '';

  if (operation === '+') {
    result = (Big(numberOne).plus(numberTwo)).toString();
  } else if (operation === '-') {
    result = (Big(numberOne) - Big(numberTwo)).toString();
  } else if (operation === 'x') {
    result = (Big(numberOne) * Big(numberTwo)).toString();
  } else if (operation === '÷') {
    if (numberTwo === 0) {
      result = 'nan';
    } else {
      result = (Big(numberOne) / Big(numberTwo)).toString();
    }
  } else if (operation === '%') {
    result = (Big(numberOne) * (Big(numberTwo) / 100)).toString();
  }

  return result;
}

export default operate;
