// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

// CREATE FUNCTION WITH 3 PARAMS
const consume = function (a, b, cb) {

  // RETURN INVOCATION OF CB PASSING A, B AS ARGS
  return cb(a, b);

}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

// CREATE A FUNCTION NAMED ADD THAT RETURNS THE SUM OF TWO NUMS

const add = (a, b) => { return a + b };

// CREATE A FUNCT NAMED MULTIPLY THAT RETURNS THE PRODUCT OF 2 NUMS

const multiply = (a, b) => { return a * b};

// CREATE A FUNCTION NAMED GREETING THAT ACCEPTS A FIRST AND LAST NAME AND RETURNS "HELLO FIRSTNAME LASTNAME, NICE TO MEET YOU"

const greeting = (firstName, LastName) => {

  return `Hello ${firstName} ${LastName}, nice to meet you!`;

}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 

/**DUE TO CLOSURE AND NESTING THE NESTED FUNCTIONS ARE CHILDREN OF THE PARENT FUNCTIONS. DUE TO INHERITANCE THE CHILD FUNCTIONS INHERIT THE PARENT VARIABLES THANKS TO NESTING AMD INHERITANCE */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
