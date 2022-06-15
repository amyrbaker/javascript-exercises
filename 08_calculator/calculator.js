const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
	return arr.reduce((a, c) => a + c, 0)
};

const multiply = function(arr) {
  return arr.reduce((a, c) => a * c, 1)
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(n) {
	let fact = 1
  for (let i = n; i >= 1; i--) {
    fact *= i
  }
  return fact
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
