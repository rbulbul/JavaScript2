/**

 ** Exercise 4: Collective age **

 Have you ever wondered how old the HackYourFuture team members are ? Or better yet : what the collective age is ? Let 's find out!

1. Write a program that calculates the combined age of every member
2. Make use of the map function to get the ages
3. It should contain a function that takes a callback
4. The callback adds all the ages together and returns the number
5. The main function should log the string "The collective age of the HYF team is: [number]" to the console,
and afterwards return the number.
6. Avoid using for loop or forEach.
Note: In order to finish this exercise, I spend 7 hours. Thank You :))
 */

function collectiveAge(people) {
  return people.age;
}

function collectiveMembers(people) {
  const age = people.map(collectiveAge);
  return age.reduce((accumulator, currentValue) => accumulator + currentValue);
}

const hackYourFutureMembers = [
  {
    name: 'Wouter',
    age: 33,
  },
  {
    name: 'Federico',
    age: 32,
  },
  {
    name: 'Noer',
    age: 27,
  },
  {
    name: 'Tjebbe',
    age: 22,
  },
];

console.log(`The collective age of the HYF team is: ${collectiveMembers(hackYourFutureMembers)}`);
