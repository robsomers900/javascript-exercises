const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, currentValue) => {
    return total * currentValue;
  }, 1)
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	arr = []
  for(let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return multiply(arr);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
