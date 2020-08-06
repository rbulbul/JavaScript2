/**

 ** Exercise 2: About me **
 1. See HTML +
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif". +
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information. +
 4. Iterate through each li and change the class to "list-item". +
 5. See HTML +
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page. +
 */

// 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".

'use strict';

document.body.style.fontFamily = 'Arial, sans-serif';

//  3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
document.getElementById('nickname').textContent = 'Kringloop';
document.querySelector('#fav-food').textContent = 'Hamburger';
document.querySelectorAll('span')[2].innerHTML = 'Adana';

// 4. Iterate through each li and change the class to "list-item".
const liElement = document.querySelectorAll('li');
for (let item = 0; item < liElement.length; item++) {
  liElement[item].className = 'list-item';
}

// 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
const imgOfMy = document.createElement('img');
imgOfMy.src = './images/rbulbul.jpg';
imgOfMy.style.maxWidth = '350px';
document.body.appendChild(imgOfMy);
