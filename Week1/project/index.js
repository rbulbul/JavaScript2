// your code goes in here
/* PROJECT-RANDOM QUOTE GENERATOR=>
1=> Include at least 1 JavaScript, CSS and HTML file
2=> The design should look similar to the one in the picture above
3=> Each time the button is clicked it should show a random quote
4=> Create a function that fires after the button click
5=> Collect 6 of your favorite quotes (quote and author) and store them in the right data structure. */

'use strict';

// collect 6 quotes with authors:
const quoteAuthors = [
  'Victor HUGO',
  'Richard Feynman',
  'Paulo Coelho, Aleph',
  'Eleanor Roosevelt',
  'Vincent Willem van Gogh',
  'Steve Jobs',
];

const myFavoriteQuotes = [
  'Even the darkest night will end and the sun will rise.',
  "If you cannot explain something in simple terms, you don't understand it.",
  'To become really good at anything,you have to practice and repeat, practice and repeat, until the technique becomes intuitive',
  'The future belongs to those who believe in the beauty of their dreams.',
  'If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced',
  'Everyone in this country should learn how to program because it teaches you how to think',
];

// Find the element we want to event on:
const newQuote = document.getElementById('new-quote');
const text = document.getElementById('text');
const author = document.getElementById('author');
function pickRandomQuote() {
  const randomNumber = Math.floor(Math.random() * myFavoriteQuotes.length);

  text.innerHTML = myFavoriteQuotes[randomNumber];
  author.innerHTML = '- ' + quoteAuthors[randomNumber];
}

newQuote.addEventListener('click', pickRandomQuote);
pickRandomQuote();
