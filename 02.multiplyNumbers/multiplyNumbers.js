// Function expression to define the multiplyNumbers function
const multiplyNumbers = function(x, y) {
  return x * y;
}

// Call the function before it is declared to demonstrate hoisting
const result = multiplyNumbers(3, 5);

// Output the result to the console
console.log(result);
