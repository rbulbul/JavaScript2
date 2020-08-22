/**

 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:


 */

// WRITE YOUR FUNCTION HERE

let letters = ['a', 'b', 'b', 'c', 'd', 'a', 'e', 'f', 'f', 'c', 'b'];

const removeDuplicates = letter =>
  letter.filter((currElement, index) => letter.indexOf(currElement) === index);

/*
function removeDuplicates(array) {
  const retArray = [];
  for (let a = 0; a < array.length; a++) {
    for (let b = 0; b < array.length; b++) {
      if (array[a] === array[b] && a !== b) {
        array.splice(b, 1);
      }
    }
    retArray.push(array[a]);
  }
  return retArray;
} */

letters = removeDuplicates(letters);
console.log(letters);

if (letters === ['a', 'b', 'c', 'd', 'e', 'f']) {
  console.log('Hooray!');
  // this condition doesn't work
}
