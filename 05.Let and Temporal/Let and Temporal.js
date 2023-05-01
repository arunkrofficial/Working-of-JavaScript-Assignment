{
  // declaring a variable using let inside a block scope
  let myVariable;

  // trying to log the value of the variable before it is assigned a value
  console.log(myVariable); // Output: Uncaught ReferenceError: myVariable is not defined

  // assigning a value to the variable
  myVariable = "Hello, World!";

  // logging the value of the variable after it is assigned a value
  console.log(myVariable); // Output: "Hello, World!"
}
