/**

 ** Exercise 5: My favorite hobbies **

 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 Note: It took 3 minutes. I was expecting to see error but no, I didn't. :)
 */

function createHTMLList(hobbies) {
  // your code goes in here
  const ul = document.createElement('ul');
  document.body.appendChild(ul);
  hobbies.forEach(hobby => {
    const li = document.createElement('li');
    li.innerText = hobby;
    ul.appendChild(li);
  });
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

createHTMLList(myHobbies);
