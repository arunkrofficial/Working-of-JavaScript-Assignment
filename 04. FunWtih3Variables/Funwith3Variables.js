// Declare three variables inside a block scope
{
    // Declare the variables after logging their values
    let a = "hi";
    var b = "there";
    const c = "!";
    
    // Log their values to the console after declaration
    console.log(a); // Output: "hi"
    console.log(b); // Output: "there"
    console.log(c); // Output: "?"
  
  }
  
  // Outside the block scope, the variables are not defined
  console.log(a); // Output: ReferenceError: a is not defined
  console.log(b); // Output: ReferenceError: b is not defined
  console.log(c); // Output: ReferenceError: c is not defined
  