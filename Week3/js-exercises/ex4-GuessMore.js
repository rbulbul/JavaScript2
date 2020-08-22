/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output?
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/*
******************************
------- FIRST FUNCTION -------
f1(x) function start to execution, x as an argument, and first value of x is 9
While execution of the f1() function, we append it 1. And return val is equal to 10
If you log the function to console, the result will be 10.
However actual value of x doesn't change. To change it, use pass by reference like f2() function does.
When it comes to pass by value as we see here, it means, if you change it inside function, outside actually wouldn't get reflected.
When you assign a value to a variable it actually holds the address of where this is stored
So output will be 9

------- SECOND FUNCTION -------
Within the function, we mutate the value of x using 'val.x'
'x' is used passing by reference
If we do that, also x is reflected within the function and we assign new value to x.
So if log x to console, result will be 10 instead
******************************
*/
