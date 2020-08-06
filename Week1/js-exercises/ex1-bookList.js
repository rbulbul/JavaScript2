/*

 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
  */

'use strict';

function createBookList(books) {
  // your code goes in here, return the ul element
  const ul = document.createElement('ul');
  ul.style.cssText =
    'list-style: none;display: flex;flex-wrap: wrap; justify-content:center; padding: 20px; width:calc(100 % - 41px)';
  books.forEach(book => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = book.title + ' by ' + book.author;
    p.style.cssText = 'font-size:1.6rem; font-weight:bold';
    li.appendChild(p);

    const img = document.createElement('img');
    li.appendChild(img);

    if (book.title === 'The Design of Everyday Things') {
      img.src =
        'https://img.yumpu.com/39630655/1/500x640/the-design-of-everyday-things-revised-and-expanded-edition.jpg';
      img.alt = 'book cover';
    } else if (book.title === 'The Most Human Human') {
      img.src =
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg';
      img.alt = 'book cover';
    } else if (book.title === 'The Pragmatic Programmer') {
      img.src = 'https://media.s-bol.com/34489jXEA8x/550x718.jpg';
      img.alt = 'book cover';
    }
    img.style.maxWidth = '225px';
    li.style.cssText =
      'width: calc(25% - 51px);margin: 50px; text-align:center; padding: 10px;min-width: 350px;hight:400px';
    if (book.alreadyRead === true) {
      li.style.background = 'green';
    } else if (book.alreadyRead === false) {
      li.style.background = 'red';
    }

    ul.appendChild(li);
  });
  return ul;
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';

// createBookList(books);
const ulElement = createBookList(books);
document.querySelector('#bookList').appendChild(ulElement);
