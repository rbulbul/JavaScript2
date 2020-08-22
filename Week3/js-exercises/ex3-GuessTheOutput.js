/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output?
Write out your reasoning in 50 words or less.

*/

let a = 10;
const x = (function() {
  a = 12;
  return function() {
    console.log(a);
  };
})();

x();
console.log(a);

/*
******************************
Here in this function we see that there are parentheses after we declare the function, which means that is IIFE
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
So it is immediately executed.
In the function, we don't see let or const assignment keyword so outside a becomes 12.

******************************
*/
