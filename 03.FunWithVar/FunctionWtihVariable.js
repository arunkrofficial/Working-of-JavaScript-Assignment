// Declare a function that takes two numbers as arguments and returns their sum
function addNumbers(num1, num2) {
  // Declare a variable using the var keyword
  var sum;

  // Log the value of the variable to the console before it is assigned a value
  console.log(sum); // Output: undefined

  // Assign the sum of the two numbers to the variable
  sum = num1 + num2;

  // Return the sum
  return sum;
}

// Call the function with two numbers as arguments and log the result to the console
console.log(addNumbers(5, 7)); // Output: 12
